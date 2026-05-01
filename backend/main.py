from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import database
from app.models import interaction_model
from app.controllers import interaction_controller

# Initialize DB
interaction_model.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="AI-First CRM HCP Module", description="Backend for logging interactions using LangGraph & Groq in MVC Architecture.")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Controller Routes
app.include_router(interaction_controller.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI-First CRM API (MVC Structured)"}
