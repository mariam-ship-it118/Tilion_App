import React, { useEffect } from 'react';
import './Accounts.css';
import { Link } from 'react-router-dom';

import Logo from '../Assets/logo.svg';
import ChildProfile from '../Assets/profile.svg';
import ParentProfile from '../Assets/parentprofile.svg';

const TilionWelcome = () => {

  useEffect(() => {
    document.body.classList.add("tilion-body");

    return () => {
      document.body.classList.remove("tilion-body");
    };
  }, []);

  return (
    <div className="view-viewport-root">

      <header className="app-navigation-container">
        <button className="nav-back-trigger" aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="3">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </header>

      <main className="content-hub-main">
        <div className="branding-asset-wrapper">

          <div className="brand-symbol-motion">
            <div className="abstract-glow-shape"></div>
          </div>

          <img src={Logo} alt="logo" />
          <h2 className="greeting-header-text">Welcome to Tilion</h2>

        </div>

        <section className="profile-selection-grid">
<Link to="/activityselection">
          <div className="user-entity-card">
            <div className="avatar-frame-border">
              <img src={ChildProfile} alt="Ahmed Profile" className="profile-visual-element" />
            </div>
            <p className="profile-label-text">Ahmed</p>
          </div>
</Link>

          <Link to="/homeparent">
          <div className="user-entity-card">
            <div className="avatar-frame-border">
              <img src={ParentProfile} alt="Alaa Profile" className="profile-visual-element" />
            </div>
            <p className="profile-label-text">Alaa Musa</p>
          </div>
</Link>

          <div className="user-entity-card action-trigger-node">
            <button className="creation-action-btn" aria-label="Add new profile">
              <span className="icon-plus-symbol">+</span>
            </button>
            <p className="profile-label-text">Add</p>
          </div>

        </section>
      </main>

    </div>
  );
};

export default TilionWelcome;