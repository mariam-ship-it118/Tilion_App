import React, { useState } from 'react';
import './ParentChat.css';
import { Link } from 'react-router-dom';
import Profile01 from '../../Assets/profile1.svg';
import Profile02 from '../../Assets/profile.svg';
import Ola from '../../Assets/friendparent.svg';

const ChatParent = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="parent-chat-page">
      <div className="parent-chat-canvas">
        <header className="parent-chat-header">
          <Link to="/messagesparent" className="parent-chat-back" aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 18L9 12L15 6"
                stroke="#0b1534"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <div className="parent-chat-user">
            <img src={Ola} alt="Ola Soheil" className="parent-chat-avatar" />
            <div className="parent-chat-user-text">
              <h1 className="parent-chat-name">Ola Soheil</h1>
              <p className="parent-chat-status">Active now</p>
            </div>
          </div>

          <div className="parent-chat-tools">
            <button type="button" className="parent-chat-tool-btn" aria-label="Phone call">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5.5 2h2.2c.6 0 1.1.5 1.2 1.1l.3 2.1a1.2 1.2 0 0 1-.3 1l-1.4 1.4a14 14 0 0 0 6.2 6.2l1.4-1.4a1.2 1.2 0 0 1 1-.3l2.1.3c.6.1 1.1.6 1.1 1.2v2.2c0 .7-.5 1.2-1.1 1.3C10.8 21.2 2.8 13.2 4.2 6.1c.1-.6.6-1.1 1.3-1.1Z"
                  fill="#0b1534"
                />
              </svg>
            </button>
            <button type="button" className="parent-chat-tool-btn" aria-label="Video call">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
                <rect x="1" y="2" width="14" height="14" rx="3" stroke="#0b1534" strokeWidth="1.8" />
                <path d="M16 7l6-3.5v11L16 11" stroke="#0b1534" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </header>

        <section className="parent-chat-messages">
          <div className="parent-chat-date">Today</div>

          <div className="parent-msg-row received">
            <div className="parent-msg-wrap">
              <div className="parent-bubble incoming">Good morning</div>
              <span className="parent-msg-meta">12:00am</span>
            </div>
          </div>

          <div className="parent-msg-row sent">
            <div className="parent-msg-wrap">
              <div className="parent-bubble outgoing">Can you send me your child&apos;s pic</div>
              <span className="parent-msg-meta">Seen</span>
            </div>
          </div>

          <div className="parent-msg-row received">
            <div className="parent-msg-wrap">
              <div className="parent-bubble incoming">yeah sure!</div>
            </div>
          </div>

          <div className="parent-profile-cards">
            <div className="parent-profile-card dark">
              <img src={Profile01} alt="Ahmed Youssef" className="parent-card-avatar" />
              <div className="parent-card-content">
                <span className="parent-card-name">Ahmed Youssef</span>
                <button type="button" className="parent-card-btn light-btn">
                  Send to my child
                </button>
              </div>
            </div>

            <div className="parent-profile-card light">
              <div className="parent-card-content">
                <span className="parent-card-name dark-text">Ahmed Youssef</span>
                <p className="parent-card-subtext">Profile sent!</p>
                <button type="button" className="parent-card-btn delete-btn">
                  Delete
                </button>
              </div>
              <img src={Profile02} alt="Ahmed Youssef" className="parent-card-avatar" />
            </div>
          </div>
        </section>

        <footer className="parent-chat-footer">
          <div className="parent-chat-input-bar">
            <div className="parent-chat-input-field">
              <input
                type="text"
                placeholder="type here..."
                className="parent-chat-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="button" className="parent-chat-icon-btn" aria-label="Voice message">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
            </button>
            <button type="button" className="parent-chat-icon-btn plus" aria-label="Add attachment">
              <span>+</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChatParent;
