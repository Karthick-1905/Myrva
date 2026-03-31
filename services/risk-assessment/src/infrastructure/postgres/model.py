from __future__ import annotations

import os
from datetime import datetime, timezone
from typing import Any

from sqlalchemy import DateTime, Float, Integer, String, Text, create_engine, text
from sqlalchemy.dialects.postgresql import JSONB, UUID
from sqlalchemy.engine import Engine
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column


class Base(DeclarativeBase):
	pass


class WeatherObservation(Base):
	__tablename__ = "weather_observations"

	id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
	observed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
	zone_id: Mapped[str | None] = mapped_column(UUID(as_uuid=False), nullable=True)
	zone_name: Mapped[str] = mapped_column(String(128), nullable=False, index=True)
	city: Mapped[str] = mapped_column(String(128), nullable=False)
	latitude: Mapped[float] = mapped_column(Float, nullable=False)
	longitude: Mapped[float] = mapped_column(Float, nullable=False)
	temperature_c: Mapped[float | None] = mapped_column(Float, nullable=True)
	rainfall_mm: Mapped[float | None] = mapped_column(Float, nullable=True)
	wind_speed_kph: Mapped[float | None] = mapped_column(Float, nullable=True)
	aqi: Mapped[float | None] = mapped_column(Float, nullable=True)
	hazard_score: Mapped[float] = mapped_column(Float, nullable=False)
	source: Mapped[str] = mapped_column(String(64), nullable=False)
	payload: Mapped[dict[str, Any]] = mapped_column(JSONB, nullable=False)
	created_at: Mapped[datetime] = mapped_column(
		DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
	)


class ZoneWeatherAggregate(Base):
	__tablename__ = "zone_weather_aggregates"

	zone_name: Mapped[str] = mapped_column(String(128), primary_key=True)
	as_of: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
	avg_temperature_c: Mapped[float | None] = mapped_column(Float, nullable=True)
	total_rainfall_mm_24h: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
	max_wind_speed_kph_24h: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
	max_hazard_score_24h: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
	sample_count_24h: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
	updated_at: Mapped[datetime] = mapped_column(
		DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
	)


class QuoteRecommendation(Base):
	__tablename__ = "quote_recommendations"

	id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
	worker_id: Mapped[str | None] = mapped_column(UUID(as_uuid=False), nullable=True)
	zone_name: Mapped[str] = mapped_column(String(128), nullable=False, index=True)
	tier_name: Mapped[str] = mapped_column(String(64), nullable=False)
	risk_band: Mapped[str] = mapped_column(String(32), nullable=False)
	risk_score: Mapped[float] = mapped_column(Float, nullable=False)
	recommended_weekly_premium: Mapped[float] = mapped_column(Float, nullable=False)
	pricing_reason: Mapped[str] = mapped_column(Text, nullable=False)
	generated_at: Mapped[datetime] = mapped_column(
		DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
	)


def get_database_url() -> str:
	database_url = os.getenv("DATABASE_URL")
	if not database_url:
		raise ValueError("DATABASE_URL is missing in environment")
	return database_url


def get_engine(database_url: str | None = None) -> Engine:
	return create_engine(database_url or get_database_url(), future=True, pool_pre_ping=True)


def bootstrap_postgres(engine: Engine) -> None:
	Base.metadata.create_all(bind=engine)

	with engine.begin() as connection:
		try:
			connection.execute(text("CREATE EXTENSION IF NOT EXISTS timescaledb"))
		except Exception:
			pass

		connection.execute(text("CREATE INDEX IF NOT EXISTS ix_weather_observed_at ON weather_observations (observed_at DESC)"))

		try:
			connection.execute(
				text(
					"""
					SELECT create_hypertable(
						'weather_observations',
						'observed_at',
						if_not_exists => TRUE
					)
					"""
				)
			)
		except Exception:
			pass


def open_session(engine: Engine) -> Session:
	return Session(bind=engine)
