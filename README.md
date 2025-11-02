# Task Management System

A modern, full-stack task management application built with FastAPI and React, designed for DevOps pipeline integration with agentic AI capabilities.

## ✨ Features

- **Full CRUD Operations** - Create, read, update, and delete tasks
- **Task Filtering** - Filter by status and priority
- **Status Management** - Track tasks (To Do, In Progress, Done, Archived)
- **Priority Levels** - Low, Medium, High, Urgent
- **Due Dates & Tags** - Set deadlines and organize with tags
- **Modern UI** - Responsive design with Tailwind CSS
- **RESTful API** - FastAPI backend with automatic Swagger documentation
- **Docker Ready** - Fully containerized with PostgreSQL

## 🛠️ Tech Stack

**Backend:**
- FastAPI - Modern Python web framework
- SQLAlchemy - ORM for database operations
- PostgreSQL - Database
- Uvicorn - ASGI server

**Frontend:**
- React 18 - UI library
- Vite - Build tool and dev server
- Tailwind CSS - Utility-first CSS framework
- Axios - HTTP client

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+
- PostgreSQL (or use Docker)

### Option 1: Docker Compose (Recommended)

```bash
# Start all services (PostgreSQL, Backend, Frontend)
docker-compose up -d

# Access the application:
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Option 2: Local Development

**Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Set database URL (optional, defaults to postgresql://postgres:admin@localhost:5432/taskdb)
# Create database first: CREATE DATABASE taskdb;

python main.py
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 📚 API Documentation

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### API Endpoints

- `GET /api/tasks` - Get all tasks (optional: `?status=todo&priority=high`)
- `GET /api/tasks/{id}` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Update a task
- `DELETE /api/tasks/{id}` - Delete a task
- `GET /api/health` - Health check

## 🔧 Environment Variables

**Backend:**
- `DATABASE_URL` - PostgreSQL connection string (default: `postgresql://postgres:admin@localhost:5432/taskdb`)

**Frontend:**
- `VITE_API_URL` - Backend API URL (default: `http://localhost:8000`)

## 📁 Project Structure

```
├── backend/              # FastAPI backend
│   ├── main.py          # FastAPI application
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic schemas
│   ├── database.py      # Database configuration
│   ├── init_db.py       # Database initialization script
│   └── requirements.txt
├── frontend/            # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API services
│   │   └── App.jsx
│   └── package.json
└── docker-compose.yml   # Docker orchestration
```

## 🐳 Docker Commands

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## 🎯 Agentic AI Integration

This application serves as a foundation for integrating agentic AI into DevOps pipelines:

- **Code Review Agent** - Automated code analysis and improvements
- **CI/CD Orchestrator** - Intelligent build and deployment decisions
- **Build Optimizer** - AI-driven Docker build optimization
- **Deployment Agent** - Smart deployment strategies
- **Monitoring Agent** - Proactive monitoring and auto-remediation

## 📄 License

MIT License
