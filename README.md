# AI-First CRM HCP Module

This project is an AI-first Customer Relationship Management (CRM) module designed for Healthcare Professionals (HCPs) in the life sciences sector. It features a modern React frontend and a Python FastAPI backend powered by **LangGraph** and the **Groq LLM**.

## 🚀 Features

- **Dual-Input Logging**: Log interactions using a comprehensive structured form or naturally through a conversational AI Assistant.
- **LangGraph Agent**: An intelligent agent that routes user requests, extracts entities (HCP names, topics, dates), and executes specialized tools.
- **AI-Powered Tools**:
  1. `log_interaction`: Automatically captures and saves interaction data.
  2. `edit_interaction`: Modifies existing logs via natural language.
  3. `search_hcp`: Retrieves HCP details from the database.
  4. `get_past_interactions`: Fetches interaction history for context.
  5. `schedule_follow_up`: Schedules future tasks and follow-ups.
- **Premium UI**: Built with Google Inter font for a professional look and feel.

## 🛠 Tech Stack

- **Frontend**: React (Vite), Redux Toolkit, CSS3.
- **Backend**: Python (FastAPI), SQLAlchemy.
- **AI Engine**: LangGraph, LangChain, Groq API (`llama-3.1-70b-versatile`).
- **Database**: SQLite (Default) / MySQL / PostgreSQL.

---

## 💻 Installation & Setup

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/Scripts/activate  # Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🤖 Role of the LangGraph Agent

The LangGraph agent acts as the reasoning engine for the system. It follows a cyclic graph pattern:
1. **Chatbot Node**: Evaluates user input using the Groq LLM.
2. **Conditional Routing**: Determines if a tool call is required based on the user's intent.
3. **Tools Node**: Executes the required tool (e.g., Logging, Searching, Scheduling) and returns the result to the agent to finalize the response.

---

## 🎥 Submission Highlights
- **Framework**: Mandatory use of LangGraph and Groq LLM.
- **Design**: Premium aesthetics using Google Inter font.
- **Tools**: Implementation of 5 custom tools for sales representatives.
