import React from 'react';
import LogInteractionForm from './components/LogInteractionForm';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="app-container">
      <h1 className="header">Log HCP Interaction</h1>
      <div className="main-content">
        <LogInteractionForm />
        <AIAssistant />
      </div>
    </div>
  );
}

export default App;
