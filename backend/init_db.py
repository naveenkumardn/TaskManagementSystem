"""
Initialize the database - creates all tables
Run this script once to set up the database
"""
from database import engine, Base
from models import Task

# Create all tables
Base.metadata.create_all(bind=engine)
print("✅ Database initialized successfully!")
print("✅ Tables created: tasks")


