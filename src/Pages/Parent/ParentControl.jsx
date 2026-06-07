import React from 'react';
import './ParentControl.css';
import NavParent from '../../Components/NavParent';
import TopParent from '../../Components/TopParent';
import { Link } from 'react-router-dom';

const ParentControl = () => {
  return (
    <>
      <TopParent />
      <div className="dashboard-container">
        <h1 className="header-label">Controls</h1>
        <div className="nebula-list">
          <Link to="/screentime" className="vault-link">
            <div className="vault-item">
              <span className="vault-text">Screen time</span>
            </div>
          </Link>

          <Link to="/requests" className="vault-link">
            <div className="vault-item" style={{ animationDelay: '0.08s' }}>
              <span className="vault-text">Parents</span>
            </div>
          </Link>

          <Link to="/parentfriends" className="vault-link">
            <div className="vault-item" style={{ animationDelay: '0.16s' }}>
              <span className="vault-text">Friends</span>
            </div>
          </Link>

          <Link to="/mychildprofile" className="vault-link">
            <div className="vault-item" style={{ animationDelay: '0.24s' }}>
              <span className="vault-text">Child&apos;s Profile</span>
            </div>
          </Link>

          <Link to="/bullying" className="vault-link">
            <div className="vault-item" style={{ animationDelay: '0.32s' }}>
              <span className="vault-text">Cyber Bullying</span>
            </div>
          </Link>
        </div>
      </div>
      <NavParent />
    </>
  );
};

export default ParentControl;
