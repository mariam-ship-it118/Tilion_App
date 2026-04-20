import React from 'react';
import './NavParent.css';

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
          <img src="/icons/community.svg" alt="Community Hub" className="glyph-asset" />
          <span className="label-text">Community</span>
        </div>

        <div className="portal-link">
          <img src="/icons/activities.svg" alt="Fun Activities" className="glyph-asset" />
          <span className="label-text">Activities</span>
        </div>

        <div className="portal-link main-anchor">
          <img src="/icons/home.svg" alt="Home Dashboard" className="glyph-asset" />
          <span className="label-text">Home</span>
        </div>

        <div className="portal-link">
          <img src="/icons/chats.svg" alt="Secure Chats" className="glyph-asset" />
          <span className="label-text">Chats</span>
        </div>

        <div className="portal-link">
          <img src="/icons/me.svg" alt="My Profile" className="glyph-asset" />
          <span className="label-text">Me</span>
        </div>

      </div>
    </nav>
  );
};

export default NavParent;