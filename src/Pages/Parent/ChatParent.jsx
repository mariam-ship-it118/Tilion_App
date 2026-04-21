import React from 'react';
import './ParentChat.css';
import NavParent from '../../Components/NavParent';
import Profile01 from '../../Assets/profile1.svg';
import Profile02 from '../../Assets/profile.svg';
import Ola from '../../Assets/friendparent.svg';
const ChatParent = () => {
  return (
    <>
    <div className="main-viewport-container">
      <div className="app-canvas-wrapper">
        
        <header className="app-top-nav">
          <div className="nav-left-action">
            <span className="back-chevron"></span>
          </div>
          <div className="user-identity-hub">
            <img src={Ola} alt="Profile" className="nav-avatar-img" />
            <div className="user-status-info">
              <h1 className="user-display-name">Ola Soheil</h1>
              <p className="online-indicator">Active now</p>
            </div>
          </div>
          <div className="nav-communication-tools">
            <button className="tool-btn phone-icon"></button>
            <button className="tool-btn video-icon"></button>
          </div>
        </header>

        {}
        <section className="interaction-stream">
          <div className="timestamp-marker">Today</div>
          
          <div className="message-bubble incoming-style">
            Good morning
            <span className="bubble-time">12:00am</span>
          </div>

          <div className="message-bubble outgoing-style">
            Can you send me your child's pic
            <span className="delivery-status">Seen</span>
          </div>

          <div className="message-bubble incoming-style">
            yeah sure!
          </div>

          <div className="feedback-overlay-stack">
            <div className="status-card-item success-variant">
              <img src={Profile01} alt="Ahmed" className="mini-card-avatar" />
              <div className="card-content-block">
                <span className="card-label-name">Ahmed Youssef</span>
                <button className="action-pill-btn ghost-white">Sent</button>
              </div>
            </div>

            <div className="status-card-item processing-variant">
              <div className="card-content-block">
                <span className="card-label-name">Ahmed Youssef</span>
                <p className="status-subtext">Pending...</p>
                <button className="action-pill-btn alert-red">Delete</button>
              </div>
              <img src={Profile02} alt="Ahmed" className="mini-card-avatar" />
            </div>
          </div>
        </section>

        {}
        <footer className="app-input-dock">
          <div className="input-field-bar">
            <span className="placeholder-text">type here...</span>
          </div>
          <div className="input-utility-icons">
            <button className="mic-trigger"></button>
            <button className="plus-trigger"></button>
          </div>
        </footer>

      </div>
    </div>

    </>
  );
};

export default ChatParent;