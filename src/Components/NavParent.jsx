import React from 'react';
import './NavParent.css';
import Community from '../Assets/communication.svg';
import Chat from '../Assets/chat.svg';
import Account from '../Assets/account.svg';
import Home from '../Assets/home.svg';
import Activity from '../Assets/activity.svg';

/**
 * SEO metadata for KidsConnect (Ages 7-13)
 * Title: KidsConnect - Safe Social Discovery & Activities
 * Description: The secure social platform where kids 7-13 explore hobbies, 
 * chat with verified friends, and discover local community events.
 */

const NavParent = () => {
  return (
    <nav className="tangerine-base">
      <div className="orbit-wrapper">
        
        <div className="portal-link">
          <img src={Community} alt="Community Hub" className="glyph-asset" />
          <span className="label-text">Community</span>
        </div>

        <div className="portal-link">
          <img src={Activity} alt="Fun Activities" className="glyph-asset" />
          <span className="label-text">Activities</span>
        </div>

        <div className="portal-link main-anchor">
          <img src={Home} alt="Home Dashboard" className="glyph-asset" />
          <span className="label-text">Home</span>
        </div>

        <div className="portal-link">
          <img src={Chat} alt="Secure Chats" className="glyph-asset" />
          <span className="label-text">Chats</span>
        </div>

        <div className="portal-link">
          <img src={Account} alt="My Profile" className="glyph-asset" />
          <span className="label-text">Me</span>
        </div>

      </div>
    </nav>
  );
};

export default NavParent;