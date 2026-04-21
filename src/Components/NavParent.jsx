import React from 'react';
import './NavParent.css';
import Community from '../Assets/communication.svg';
import Chat from '../Assets/chat.svg';
import Account from '../Assets/account.svg';
import Home from '../Assets/home.svg';
import Activity from '../Assets/activity.svg';
import { Link } from 'react-router-dom';



const NavParent = () => {
  return (
    <nav className="tangerine-base">
      <div className="orbit-wrapper">
   <Link to="/community">
        <div className="portal-link">
          <img src={Community} alt="Community Hub" className="glyph-asset" />
          <span className="label-text">Community</span>
        </div>
   </Link>     

<Link to="/activityparent">
        <div className="portal-link">
          <img src={Activity} alt="Fun Activities" className="glyph-asset" />
          <span className="label-text">Activities</span>
        </div>
</Link>

<Link to="/homeparent">
        <div className="portal-link main-anchor">
          <img src={Home} alt="Home Dashboard" className="glyph-asset" />
          <span className="label-text">Home</span>
        </div>
</Link>
<Link to="/chatparent">
        <div className="portal-link">
          <img src={Chat} alt="Secure Chats" className="glyph-asset" />
          <span className="label-text">Chats</span>
        </div>
</Link>
<Link to="/profileparent">
        <div className="portal-link">
          <img src={Account} alt="My Profile" className="glyph-asset" />
          <span className="label-text">Me</span>
        </div>
</Link>

      </div>
    </nav>
  );
};

export default NavParent;