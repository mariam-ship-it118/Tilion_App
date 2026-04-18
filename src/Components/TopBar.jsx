import React from 'react';
import './TopBar.css';
import MiniLogo from '../Assets/mini_logo.svg';
import Profile from '../Assets/profile.svg';
const TopBar = () => {
  return (
    <header className="playroom-top-header">
      
      {/* Profile Section */}
      <div className="friend-profile-wrap">
        <img 
          src={Profile} 
          alt="My Profile" 
          className="little-buddy-avatar" 
        />
      </div>

      {/* Logo Section */}
      <div className="cool-app-branding">
        <img 
          src={MiniLogo} 
          alt="TIIION Logo" 
          className="magical-app-logo" 
        />
      </div>

      {/* Notifications Section */}
      <div className="news-alert-wrap">
        <button className="ding-ding-button" aria-label="Notifications">
          <svg 
            viewBox="0 0 24 24" 
            className="chime-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </div>

    </header>
  );
};

export default TopBar;