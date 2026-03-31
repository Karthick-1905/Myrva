from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from typing import Any

import requests


@dataclass(slots=True)
class WeatherSnapshot:
	observed_at: datetime
	temperature_c: float | None
	rainfall_mm: float | None
	wind_speed_kph: float | None
	avg_temperature_c_24h: float | None
	total_rainfall_mm_24h: float
	max_wind_speed_kph_24h: float
	hazard_score_24h: float
	raw_payload: dict[str, Any]


def _avg(values: list[float | None]) -> float | None:
	cleaned = [v for v in values if v is not None]
	if not cleaned:
		return None
	return sum(cleaned) / len(cleaned)


def _clamp(value: float, lower: float = 0.0, upper: float = 1.0) -> float:
	return max(lower, min(upper, value))


def _hazard_score(total_rainfall: float, max_wind: float) -> float:
	rain_component = _clamp(total_rainfall / 60.0)
	wind_component = _clamp(max_wind / 45.0)
	return round(0.7 * rain_component + 0.3 * wind_component, 4)


def fetch_weather_snapshot(latitude: float, longitude: float, timeout_seconds: int = 20) -> WeatherSnapshot:
	response = requests.get(
		"https://api.open-meteo.com/v1/forecast",
		params={
			"latitude": latitude,
			"longitude": longitude,
			"hourly": "temperature_2m,precipitation,wind_speed_10m",
			"current": "temperature_2m,precipitation,wind_speed_10m",
			"past_days": 1,
			"forecast_days": 1,
			"timezone": "UTC",
		},
		timeout=timeout_seconds,
	)
	response.raise_for_status()
	payload = response.json()

	current = payload.get("current", {})
	hourly = payload.get("hourly", {})

	precipitation_values = [float(v) if v is not None else None for v in hourly.get("precipitation", [])]
	temperature_values = [float(v) if v is not None else None for v in hourly.get("temperature_2m", [])]
	wind_values = [float(v) if v is not None else None for v in hourly.get("wind_speed_10m", [])]

	total_rainfall = round(sum(v for v in precipitation_values if v is not None), 3)
	max_wind = round(max((v for v in wind_values if v is not None), default=0.0), 3)
	avg_temp = _avg(temperature_values)
	hazard = _hazard_score(total_rainfall, max_wind)

	observed_at_text = current.get("time")
	if observed_at_text:
		observed_at = datetime.fromisoformat(observed_at_text).replace(tzinfo=timezone.utc)
	else:
		observed_at = datetime.now(timezone.utc)

	return WeatherSnapshot(
		observed_at=observed_at,
		temperature_c=float(current["temperature_2m"]) if current.get("temperature_2m") is not None else None,
		rainfall_mm=float(current["precipitation"]) if current.get("precipitation") is not None else None,
		wind_speed_kph=float(current["wind_speed_10m"]) if current.get("wind_speed_10m") is not None else None,
		avg_temperature_c_24h=round(avg_temp, 3) if avg_temp is not None else None,
		total_rainfall_mm_24h=total_rainfall,
		max_wind_speed_kph_24h=max_wind,
		hazard_score_24h=hazard,
		raw_payload=payload,
	)
