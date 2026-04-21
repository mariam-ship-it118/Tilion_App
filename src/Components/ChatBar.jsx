import React, { useState } from 'react';
import './ChatBar.css';
import Recc from '../Assets/recc.svg';
const ChatBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { label: 'Images', icon: '🖼️' },
    { label: 'Stickers', icon: '✨' },
    { label: 'Files', icon: '📁' },
    { label: 'Docs', icon: '📄' },
    { label: 'Music', icon: '🎵' }
  ];

  return (
    <div className="chat-bar-container">
      {}
      {showMenu && (
        <div className="attachment-menu">
          {menuItems.map((item, index) => (
            <button key={item.label} className="menu-item" style={{ animationDelay: `${index * 0.05}s` }}>
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </button>
          ))}
        </div>
      )}

      <div className="input-wrapper">
        <div className="text-field-container">
          <input 
            type="text" 
            placeholder="type here..." 
            className="chat-input"
          />
        </div>
        
        <button className="action-btn mic-btn" aria-label="Voice message">
          <span className="icon">
            <img src={Recc} alt="" />
          </span>
        </button>

        <button 
          className={`action-btn plus-btn ${showMenu ? 'active' : ''}`} 
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Add attachment"
        >
          <span className="icon">＋</span>
        </button>
      </div>
    </div>
  );
};

export default ChatBar;