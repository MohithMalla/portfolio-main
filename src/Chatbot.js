import React, { useState, useEffect, useRef } from 'react';
import './chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Mohith's AI Assistant. Ask me about his projects, skills, or experience!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // 1. Add User Message to UI
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // 2. Send Request to Python Backend
      const response = await fetch('https://portfolio-backend-4p28.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // 3. Add Bot Response to UI
      setMessages((prev) => [
        ...prev, 
        { text: data.response, sender: "bot" }
      ]);
      setLoading(false);

    } catch (error) {
      console.error("API Error:", error);
      // Fallback message if backend is offline
      setMessages((prev) => [
        ...prev, 
        { text: "I'm having trouble connecting to the server. Please ensure the Python backend is running on port 8000.", sender: "bot" }
      ]);
      setLoading(false);
    }
  };

  // Handle "Enter" key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              <FontAwesomeIcon icon={faRobot} />
              <span>Portfolio Agent</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="bubble">{msg.text}</div>
              </div>
            ))}
            {loading && (
              <div className="message bot">
                <div className="bubble loading-bubble">Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={handleKeyPress}
              placeholder="Ask about Mohith..."
            />
            <button onClick={sendMessage} disabled={loading}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faRobot} />
      </button>
    </div>
  );
};

export default Chatbot;