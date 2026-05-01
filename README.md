# AI-First CRM HCP Module

This project is an AI-first Customer Relationship Management (CRM) module designed for Healthcare Professionals (HCPs). It features a modern React frontend and a Python FastAPI backend powered by LangGraph and the Groq LLM. The system allows field representatives to log interactions via a structured form or a conversational AI interface.

## 🚀 Features

- **Dual-Input Logging**: Log interactions using a comprehensive form or naturally through the AI Chat Assistant.
- **LangGraph Agent**: An intelligent agent capable of routing user requests, extracting entities, and executing tools.
- **AI Tools**:
  1. `log_interaction`: Captures interaction data automatically from the chat.
  2. `edit_interaction`: Modifies previously logged interaction data.
  3. `search_hcp`: Searches the database for specific HCPs.
  4. `get_past_interactions`: Retrieves interaction history for context.
  5. `schedule_follow_up`: Schedules future tasks or meetings.
- **Modern UI**: Designed with Google Inter font, matching the premium aesthetics required for life science representatives.

## 🛠 Tech Stack

**Frontend:**
- React (Vite)
- Redux Toolkit (State Management)
- Vanilla CSS (Google Inter Font)

**Backend:**
- Python 3.9+
- FastAPI
- SQLAlchemy (MySQL / PostgreSQL)
- LangGraph
- LangChain & Groq (`gemma2-9b-it`)

---

## 💻 How to Run Locally

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On Mac/Linux
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure Environment Variables:
   Rename `.env.example` to `.env` and add your keys:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   DATABASE_URL=mysql+pymysql://user:password@localhost/hcp_crm_db
   # Note: For quick testing without MySQL, change DATABASE_URL to:
   # DATABASE_URL=sqlite:///./sql_app.db
   ```
5. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
   The backend API will run on `http://localhost:8000`.

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   *Note: Ensure you install `@reduxjs/toolkit` and `react-redux` if not automatically resolved:*
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The React app will typically run on `http://localhost:5173`.

---

## 🤖 Role of the LangGraph Agent

The LangGraph agent acts as the core reasoning engine for the conversational interface. When a representative types a message (e.g., "I just met Dr. Smith, we discussed the new oncology drug..."):
1. The LangGraph state graph receives the message.
2. The Groq LLM evaluates if a specific tool is needed.
3. It intelligently routes to the `log_interaction` tool, extracting the `hcp_name`, `topics_discussed`, and other entities directly from the natural language input.
4. The agent can seamlessly transition between searching the database (`search_hcp`), logging data (`log_interaction`), and scheduling tasks (`schedule_follow_up`) within a single conversation thread.
