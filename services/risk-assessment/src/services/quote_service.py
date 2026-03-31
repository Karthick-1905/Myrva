from __future__ import annotations

from datetime import datetime, timezone

from sqlalchemy import select
from sqlalchemy.dialects.postgresql import insert
from sqlalchemy.orm import Session

from infrastructure.external.weather_api import WeatherSnapshot
from infrastructure.postgres.model import QuoteRecommendation, WeatherObservation, ZoneWeatherAggregate


def build_quote_from_hazard(
	*,
	hazard_score: float,
	base_weekly_premium: float,
	total_rainfall_mm_24h: float,
	max_wind_speed_kph_24h: float,
) -> dict[str, float | str]:
	if hazard_score <= 0.30:
		risk_band = "low"
		multiplier = 1.0
	elif hazard_score <= 0.60:
		risk_band = "medium"
		multiplier = 1.15
	else:
		risk_band = "high"
		multiplier = 1.35

	recommended = round(base_weekly_premium * multiplier, 2)
	reason = (
		f"24h rainfall={total_rainfall_mm_24h:.2f}mm, "
		f"max wind={max_wind_speed_kph_24h:.2f}kph, "
		f"hazard score={hazard_score:.2f}"
	)

	return {
		"risk_band": risk_band,
		"risk_score": float(hazard_score),
		"recommended_weekly_premium": recommended,
		"pricing_reason": reason,
	}


def save_weather_observation(
	session: Session,
	*,
	zone_name: str,
	city: str,
	latitude: float,
	longitude: float,
	source: str,
	weather: WeatherSnapshot,
	zone_id: str | None = None,
	aqi: float | None = None,
) -> WeatherObservation:
	observation = WeatherObservation(
		observed_at=weather.observed_at,
		zone_id=zone_id,
		zone_name=zone_name,
		city=city,
		latitude=latitude,
		longitude=longitude,
		temperature_c=weather.temperature_c,
		rainfall_mm=weather.rainfall_mm,
		wind_speed_kph=weather.wind_speed_kph,
		aqi=aqi,
		hazard_score=weather.hazard_score_24h,
		source=source,
		payload=weather.raw_payload,
	)
	session.add(observation)
	session.flush()
	return observation


def upsert_zone_weather_aggregate(session: Session, *, zone_name: str, weather: WeatherSnapshot) -> None:
	statement = insert(ZoneWeatherAggregate).values(
		zone_name=zone_name,
		as_of=weather.observed_at,
		avg_temperature_c=weather.avg_temperature_c_24h,
		total_rainfall_mm_24h=weather.total_rainfall_mm_24h,
		max_wind_speed_kph_24h=weather.max_wind_speed_kph_24h,
		max_hazard_score_24h=weather.hazard_score_24h,
		sample_count_24h=len(weather.raw_payload.get("hourly", {}).get("time", [])),
		updated_at=datetime.now(timezone.utc),
	)

	session.execute(
		statement.on_conflict_do_update(
			index_elements=[ZoneWeatherAggregate.zone_name],
			set_={
				"as_of": statement.excluded.as_of,
				"avg_temperature_c": statement.excluded.avg_temperature_c,
				"total_rainfall_mm_24h": statement.excluded.total_rainfall_mm_24h,
				"max_wind_speed_kph_24h": statement.excluded.max_wind_speed_kph_24h,
				"max_hazard_score_24h": statement.excluded.max_hazard_score_24h,
				"sample_count_24h": statement.excluded.sample_count_24h,
				"updated_at": statement.excluded.updated_at,
			},
		)
	)


def generate_quote_recommendation(
	session: Session,
	*,
	zone_name: str,
	tier_name: str,
	base_weekly_premium: float,
	worker_id: str | None = None,
) -> QuoteRecommendation:
	aggregate = session.execute(
		select(ZoneWeatherAggregate).where(ZoneWeatherAggregate.zone_name == zone_name)
	).scalar_one_or_none()
	if not aggregate:
		raise ValueError(f"No aggregate data found for zone '{zone_name}'")

	risk_score = float(aggregate.max_hazard_score_24h)
	quote_preview = build_quote_from_hazard(
		hazard_score=risk_score,
		base_weekly_premium=base_weekly_premium,
		total_rainfall_mm_24h=float(aggregate.total_rainfall_mm_24h),
		max_wind_speed_kph_24h=float(aggregate.max_wind_speed_kph_24h),
	)

	recommendation = QuoteRecommendation(
		worker_id=worker_id,
		zone_name=zone_name,
		tier_name=tier_name,
		risk_band=str(quote_preview["risk_band"]),
		risk_score=float(quote_preview["risk_score"]),
		recommended_weekly_premium=float(quote_preview["recommended_weekly_premium"]),
		pricing_reason=str(quote_preview["pricing_reason"]),
	)
	session.add(recommendation)
	session.flush()
	return recommendation
