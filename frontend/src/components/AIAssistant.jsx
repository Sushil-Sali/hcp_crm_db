import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addChatMessage } from '../store/interactionSlice';

const AIAssistant = () => {
  const [inputText, setInputText] = useState('');
  const messages = useSelector((state) => state.interaction.chatMessages);
  const dispatch = useDispatch();

  const handleSend = async () => {
    if (!inputText.trim()) return;
    
    // Add user message
    dispatch(addChatMessage({ role: 'user', content: inputText }));
    const currentInput = inputText;
    setInputText('');
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      });
      
      if (response.ok) {
        const data = await response.json();
        dispatch(addChatMessage({ 
          role: 'assistant', 
          content: data.response 
        }));
      } else {
        dispatch(addChatMessage({ 
          role: 'assistant', 
          content: "Sorry, I couldn't connect to the backend server. Please make sure it is running." 
        }));
      }
    } catch (error) {
      dispatch(addChatMessage({ 
        role: 'assistant', 
        content: "Error connecting to the server. Is FastAPI running on port 8000?" 
      }));
    }
  };

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <div className="chat-header-title">
          <span style={{ fontSize: '18px' }}>🤖</span> AI Assistant
        </div>
        <div className="chat-header-subtitle">
          Log interaction via chat
        </div>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      
      <div className="chat-input-container">
        <input 
          type="text" 
          className="chat-input" 
          placeholder="Describe interaction..." 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="btn-primary" onClick={handleSend}>
          <span>A</span> Log
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
