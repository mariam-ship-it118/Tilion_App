import React, { useState } from 'react';
import './ChatBar.css';

const MicIcon = () => (
  <svg className="action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z"
      fill="white"
    />
    <path
      d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v3"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SendIcon = () => (
  <svg className="action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M22 2 11 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2 15 22 11 13 2 9 22 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatBar = () => {
  const [message, setMessage] = useState('');
  const hasText = message.trim().length > 0;

  const handleSend = () => {
    if (!hasText) return;
    setMessage('');
  };

  return (
    <div className="chat-bar-container">
      <div className="input-wrapper">
        <div className="text-field-container">
          <input
            type="text"
            placeholder="type here..."
            className="chat-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
        </div>
        <button
          type="button"
          className={`action-btn ${hasText ? 'send-btn' : 'mic-btn'}`}
          aria-label={hasText ? 'Send message' : 'Voice message'}
          onClick={hasText ? handleSend : undefined}
        >
          {hasText ? <SendIcon /> : <MicIcon />}
        </button>
      </div>
    </div>
  );
};

export default ChatBar;
