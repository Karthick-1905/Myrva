from __future__ import annotations

import argparse
import json

from dotenv import load_dotenv
from sqlalchemy.exc import OperationalError

from infrastructure.external.weather_api import fetch_weather_snapshot
from infrastructure.postgres.model import bootstrap_postgres, get_engine, open_session
from services.quote_service import (
    build_quote_from_hazard,
    generate_quote_recommendation,
    save_weather_observation,
    upsert_zone_weather_aggregate,
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Risk assessment ingestion and quote recommendation")
    parser.add_argument("--zone-name", required=True, help="Zone name used for aggregation")
    parser.add_argument("--city", required=True, help="City label for weather observation")
    parser.add_argument("--lat", required=True, type=float, help="Zone latitude")
    parser.add_argument("--lon", required=True, type=float, help="Zone longitude")
    parser.add_argument("--tier-name", default="standard", help="Tier label for quote output")
    parser.add_argument("--base-weekly-premium", default=120.0, type=float, help="Base premium before risk multiplier")
    parser.add_argument("--worker-id", default=None, help="Optional worker UUID")
    parser.add_argument("--zone-id", default=None, help="Optional zone UUID from core tables")
    parser.add_argument("--no-db", action="store_true", help="Skip DB writes and return computed quote only")
    return parser.parse_args()


def main() -> None:
    load_dotenv()
    args = parse_args()

    weather = fetch_weather_snapshot(latitude=args.lat, longitude=args.lon)

    if args.no_db:
        preview = build_quote_from_hazard(
            hazard_score=weather.hazard_score_24h,
            base_weekly_premium=args.base_weekly_premium,
            total_rainfall_mm_24h=weather.total_rainfall_mm_24h,
            max_wind_speed_kph_24h=weather.max_wind_speed_kph_24h,
        )
        result = {
            "zone_name": args.zone_name,
            "tier_name": args.tier_name,
            **preview,
            "db_mode": "disabled",
        }
        print(json.dumps(result, indent=2))
        return

    try:
        engine = get_engine()
        bootstrap_postgres(engine)
    except OperationalError as error:
        raise RuntimeError(
            "Database connection failed. Re-check DATABASE_URL reachability or use --no-db for compute-only mode."
        ) from error

    with open_session(engine) as session:
        save_weather_observation(
            session,
            zone_name=args.zone_name,
            city=args.city,
            latitude=args.lat,
            longitude=args.lon,
            source="open-meteo",
            weather=weather,
            zone_id=args.zone_id,
        )
        upsert_zone_weather_aggregate(session, zone_name=args.zone_name, weather=weather)
        quote = generate_quote_recommendation(
            session,
            zone_name=args.zone_name,
            tier_name=args.tier_name,
            base_weekly_premium=args.base_weekly_premium,
            worker_id=args.worker_id,
        )
        session.commit()

    result = {
        "zone_name": quote.zone_name,
        "tier_name": quote.tier_name,
        "risk_band": quote.risk_band,
        "risk_score": quote.risk_score,
        "recommended_weekly_premium": quote.recommended_weekly_premium,
        "pricing_reason": quote.pricing_reason,
        "db_mode": "enabled",
    }
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()