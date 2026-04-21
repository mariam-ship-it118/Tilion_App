import React from 'react';
import { Link } from 'react-router-dom'; 
import './ChatList.css';

const ChatList = () => {
    const chatData = [
    { id: 1, name: "Ahmed Mohamed", msg: "hi!", status: "Active now", },
    { id: 2, name: "Omar Mohamed", msg: "hi!", status: "Active now" },
    { id: 3, name: "Ali Mosaad", msg: "hi!", status: "Active now" },
    { id: 4, name: "Ahmed Maher", msg: "hi!", status: "Active now" },
    { id: 5, name: "Ali Mohamed", msg: "hi!", status: "Active now" },
    { id: 6, name: "youssef ali", msg: "hi!", status: "Active now" },
    { id: 7, name: "yussuf Mohamed", msg: "hi!", status: "Active now" },
    { id: 8, name: "Ammar Musa", msg: "hi!", status: "Active now" },
  ];

  return (
    <div className="app-container">
      <div className="message-page">
        {chatData.map((chat) => (
          
          <Link to={`/chat/${chat.id}`} key={chat.id} className="chat-link">
            <div className="chat-item">
              <div className="chat-avatar"></div>
              
              <div className="chat-info">
                <h3 className="chat-name">{chat.name}</h3>
                <p className="chat-last-message">{chat.msg}</p>
                <span className="chat-status">{chat.status}</span>
              </div>

              <div className="chat-indicator">
                <div className="blue-dot"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatList;