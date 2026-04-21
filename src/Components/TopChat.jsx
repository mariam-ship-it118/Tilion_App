import React from 'react';
import './TopChat.css';
import Phone from '../Assets/phone.svg';
import Video from '../Assets/vidcall.svg';
import Prof from '../Assets/friend.svg';
import { Link } from 'react-router-dom';
const TopChat = () => {
  return (
    <nav className="chat-header">
      {}
      <Link to="/chats">
      <button className="icon-btn back-btn" aria-label="Go back">
        <span className="chevron-left"></span>
      </button>
      </Link>
<Link to="/childprofile">
      {}
      <button 
        className="profile-link-btn" 
        onClick={() => console.log("Navigate to Profile")}
        >
        <img 
          src={Prof} 
          alt="Omar Bus" 
          className="avatar" 
          />
        <div className="user-info">
          <h2 className="user-name">Omar Bus</h2>
          <span className="active-status">Active now</span>
        </div>
      </button>

          </Link>
      {}
      <div className="actions">
          <Link to="/call">
        <button 
          className="icon-btn call-btn" 
          onClick={() => console.log("Navigate to Phone Call")}
          aria-label="Phone call"
          >
          <i className="phone-icon">
            <img src={Phone} alt="" />
          </i>
        </button>

          </Link>

        <button 
          className="icon-btn video-btn" 
          onClick={() => console.log("Navigate to Video Call")}
          aria-label="Video call"
        >
          <i className="video-icon">
            <img src={Video} alt="" />
          </i>
        </button>
      </div>
    </nav>
  );
};

export default TopChat;