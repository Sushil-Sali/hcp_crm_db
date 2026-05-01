# AI-First CRM HCP Module - Video Presentation Details

This document contains the textual elements required for the assignment's video submission. Since the automatic video only captures the browser, you must include these points in your submission or show this file on screen.

## 1. Walkthrough of the Frontend
- The UI is built using React and styled purely with CSS modules to match the exact design provided.
- Redux Toolkit is used to manage the state of the form on the left and the chat assistant on the right.
- It provides a dual approach: Representatives can log interactions manually using the form fields, or conversationally via the AI assistant.

## 2. Demo of the 5 LangGraph Tools
The LangGraph agent is powered by Groq (`gemma2-9b-it`) and uses the following 5 tools:
1. **Search HCP:** Finds Healthcare Professional details in the database.
2. **Get Past Interactions:** Pulls historical CRM context to prepare the rep for meetings.
3. **Log Interaction:** Extracts key entities (HCP Name, Topics Discussed, Sentiment) from natural language and prepares the interaction log.
4. **Edit Interaction:** Modifies existing logged records based on new information.
5. **Schedule Follow-up:** Creates future tasks or calendar events in the CRM.

## 3. Code Structure Explanation
- **`backend/main.py`:** Initializes the FastAPI app, CORS, and REST endpoints for the frontend to communicate with.
- **`backend/agent.py`:** Contains the LangGraph implementation. It defines the `AgentState`, the array of 5 `@tool` decorators, and the conditional routing logic between the LLM and the tools.
- **`backend/database.py` & `models.py`:** Configures SQLAlchemy ORM for MySQL/PostgreSQL compatibility.
- **`frontend/src/store/`:** Contains the Redux store (`store.js`) and the slice (`interactionSlice.js`) for global state management.
- **`frontend/src/components/`:** Houses the `LogInteractionForm.jsx` and `AIAssistant.jsx` which map directly to the assignment's visual requirements.

## 4. Brief Summary of the Task
From this task, I understood the necessity of transforming traditional static CRM software into intelligent, AI-first platforms. By utilizing LangGraph, the system intelligently routes natural conversations into structured backend tools, massively reducing the administrative burden on life science field representatives while maintaining data integrity.
