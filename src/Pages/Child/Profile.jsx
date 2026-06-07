import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import Logo from "../../Assets/logo_2.svg";
import Profile from "../../Assets/thechildp.svg";
import post01 from '../../Assets/post01.svg';
import post02 from '../../Assets/post02.svg';
import post03 from '../../Assets/post03.svg';
import post04 from '../../Assets/post04.svg';
import post05 from '../../Assets/post05.svg';
import post06 from '../../Assets/post06.svg';
import NavBar from '../../Components/NavBar';

const postImages = [post01, post02, post03, post04, post05, post06];

const UserProfileView = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const ageBadges = ['9y', '10y', '11y', '12y', '13y'];
  const activeBadge = '11y';

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    navigate('/accounts');
  };

  return (<>
  
  
  
  
  
    <div className="app-main-layout">
      <main className="profile-scroll-area">
        
        {}
        <header className="brand-header-zone">
          <div className="brand-logo-graphic">
            <img src={Logo} alt="KidSocial App Logo" className="logo-img-asset" />
          </div>
        </header>

        {}
        <section className="user-intro-card">
          <div className="avatar-frame-outer">
            <img 
              src={Profile} 
              alt="Ahmed Ali Profile" 
              className="user-profile-pic" 
              />
          </div>
          <h1 className="display-name-text">Ahmed Ali</h1>
          <p className="status-handle-text">Soccer_xx</p>
          <div className="curved-divider-line"></div>
        </section>

        {}
        <section className="social-stats-row">
          <Link
            to="/friends"
            className="stat-bubble-item stat-bubble-link stat-bubble-even"
          >
            <h2 className="stat-label-blue">My Friends</h2>
            <p className="stat-number-val">20</p>
          </Link>
          <article className="stat-bubble-item stat-bubble-even">
            <h2 className="stat-label-blue">Parent approved</h2>
            <p className="stat-number-val">3</p>
          </article>
        </section>

        {}
        <section className="personal-info-block">
          <div className="info-entry-unit">
            <h3 className="field-title-bold">Name</h3>
            <p className="field-data-text">Ahmed Ali</p>
          </div>

          <div className="info-entry-unit">
            <h3 className="field-title-bold">Username</h3>
            <p className="field-data-text">Soccer_xx</p>
          </div>

          <div className="info-entry-unit">
            <h3 className="field-title-bold">Bio</h3>
            <p className="field-data-text">Football lover</p>
          </div>
        </section>

        {}
        <footer className="badges-footer-section">
          <h3 className="field-title-bold">Age badge</h3>
          <div className="badge-flex-wrap">
            {ageBadges.map((age) => (
              <span 
              key={age} 
              className={`age-pill-chip ${age === activeBadge ? 'pill-active' : ''}`}
              >
                {age}
              </span>
            ))}
          </div>

          <section className="profile-posts-section">
            <h3 className="profile-posts-title">My Posts</h3>
            <div className="profile-posts-grid">
              {postImages.map((src, index) => (
                <div
                  key={index}
                  className="profile-post-item"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </section>

          <div className="logout-section">
            <button
              type="button"
              className="logout-btn"
              onClick={() => setShowLogoutConfirm(true)}
            >
              Logout
            </button>
          </div>
        </footer>

      </main>
      
    </div>

    {showLogoutConfirm && (
      <div className="logout-modal-overlay" onClick={() => setShowLogoutConfirm(false)}>
        <div className="logout-modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>Are you sure?</h3>
          <div className="logout-modal-actions">
            <button
              type="button"
              className="logout-modal-btn cancel"
              onClick={() => setShowLogoutConfirm(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="logout-modal-btn confirm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )}

    <NavBar />
                </>
  );
};

export default UserProfileView;