import React from 'react';
import './Profile.css';
import Logo from "../../Assets/logo_2.svg";
import Profile from "../../Assets/profile.svg";
import NavBar from '../../Components/NavBar';

const UserProfileView = () => {
  // Student-style simple array for badges
  const ageBadges = ['9y', '10y', '11y', '12y', '13y'];
  const activeBadge = '11y';

  return (<>
  
  
  
  
  
    <div className="app-main-layout">
      <main className="profile-scroll-area">
        
        {/* Top Branding Section */}
        <header className="brand-header-zone">
          <div className="brand-logo-graphic">
            <img src={Logo} alt="KidSocial App Logo" className="logo-img-asset" />
          </div>
        </header>

        {/* User Identity Section */}
        <section className="user-intro-card">
          <div className="avatar-frame-outer">
            <img 
              src={Profile} 
              alt="Omar Bus Profile" 
              className="user-profile-pic" 
              />
          </div>
          <h1 className="display-name-text">Ahmed Ali</h1>
          <p className="status-handle-text">Soccer_xx</p>
          <div className="curved-divider-line"></div>
        </section>

        {/* Stats Grid */}
        <section className="social-stats-row">
          <article className="stat-bubble-item">
            <h2 className="stat-label-blue">My Friends</h2>
            <p className="stat-number-val">20</p>
          </article>
          <article className="stat-bubble-item">
            <h2 className="stat-label-blue">Parent approved</h2>
            <p className="stat-number-val">3</p>
          </article>
        </section>

        {/* Info Details Section */}
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

        {/* Age Badge Footer */}
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
        </footer>

      </main>
      
    </div>
    <br /><br /><br />
    <NavBar />
                </>
  );
};

export default UserProfileView;