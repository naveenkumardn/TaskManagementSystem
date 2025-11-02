from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Database URL - can be overridden via environment variable
# PostgreSQL format: postgresql://user:password@host:port/database
# SQLite fallback: sqlite:///./tasks.db
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://postgres:admin@localhost:5432/taskdb"
)

# Create engine based on database type
if DATABASE_URL.startswith("sqlite"):
    # For SQLite, we need to add check_same_thread=False
    engine = create_engine(
        DATABASE_URL, connect_args={"check_same_thread": False}
    )
else:
    # For PostgreSQL and other databases
    engine = create_engine(DATABASE_URL, pool_pre_ping=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


