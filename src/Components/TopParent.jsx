import React from 'react';
import './TopParent.css';
import Logo from '../Assets/logo_2.svg';

const TopParent = () => {
  return (
    <header className="kredit-top-bar">
      {/* SEO hidden H1 for accessibility and indexing */}
      <h1 className="pixel-privacy-label">
        StarBound - The Safest Social Space for Creative Kids & Tweens
      </h1>

      <div className="glitter-container">
        {/* Placeholder for the logo/icon in your image */}
        
         
          
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