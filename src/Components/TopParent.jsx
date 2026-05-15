import React from 'react';
import './TopParent.css';
import Logo from '../Assets/logo_2.svg';
import LangIcon from '../Assets/lang.svg';
import { useLanguage } from '../LanguageContext';

const TopParent = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="kredit-top-bar">
      
      <h1 className="pixel-privacy-label">
        StarBound - The Safest Social Space for Creative Kids & Tweens
      </h1>

      <div className="glitter-container">
        
        <div 
          onClick={toggleLanguage} 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
           
            color: '#1A1F36', 
            fontWeight: '700',
            fontSize: '16px',
            fontFamily: 'Montserrat, sans-serif',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            marginRight: '22px'
          }}
        >
          <img src={LangIcon} alt="Toggle Language" style={{ width: '24px', height: '24px' }} />
        </div>

        <img src={Logo} alt="" className='logo' />

        {/* Interaction area */}
        <div className="echo-alert-zone">
          <button className="chime-trigger" aria-label="Notifications">
            <svg 
              className="bell-vibe" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopParent;