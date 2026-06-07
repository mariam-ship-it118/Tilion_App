import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import MiniLogo from '../Assets/mini_logo.svg';
import LangIcon from '../Assets/lang.svg';
import { useLanguage } from '../LanguageContext';

const TopBar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="playroom-top-header">
      
      {}
      <div className="friend-profile-wrap" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
        <div 
          className="little-buddy-avatar" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            background: '#EADB25', 
            color: '#1A1F36', 
            fontWeight: '700',
            fontSize: '16px',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          <img src={LangIcon} alt="Toggle Language" style={{ width: '24px', height: '24px' }} />
        </div>
      </div>

      {}
      <div className="cool-app-branding">
        <img 
          src={MiniLogo} 
          alt="TIIION Logo" 
          className="magical-app-logo" 
        />
      </div>

      {}
      <div className="news-alert-wrap">
        <Link to="/childnotifications" className="ding-ding-button" aria-label="Notifications">
          <svg 
            viewBox="0 0 24 24" 
            className="chime-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </Link>
      </div>

    </header>
  );
};

export default TopBar;