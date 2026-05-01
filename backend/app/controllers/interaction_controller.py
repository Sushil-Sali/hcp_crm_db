from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.models.interaction_model import Interaction
from app.views.interaction_view import InteractionCreate, Interaction as InteractionSchema, ChatMessage
from app.services.ai_agent import process_chat_message

router = APIRouter()

@router.post("/interactions/", response_model=InteractionSchema)
def create_interaction(interaction: InteractionCreate, db: Session = Depends(get_db)):
    db_interaction = Interaction(**interaction.dict())
    db.add(db_interaction)
    db.commit()
    db.refresh(db_interaction)
    return db_interaction

@router.get("/interactions/", response_model=list[InteractionSchema])
def read_interactions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Interaction).offset(skip).limit(limit).all()

@router.post("/chat/")
def chat_with_agent(chat_message: ChatMessage):
    """
    Endpoint to interact with the LangGraph agent.
    """
    try:
        response = process_chat_message(chat_message.message)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
