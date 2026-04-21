import React from 'react';
import NavParent from '../../Components/NavParent';
import './HomeParent.css';
import { Link } from 'react-router-dom';
import parentImg from '../../Assets/parentprofile.svg';

const HomeParent = () => {
    return ( <>
    <NavParent/>
    <div className="portal-surface-container">
      {}
      <header className="identity-header-stack">
        <div className="guardian-avatar-wrap">
          <img src={parentImg} alt="Profile" className="guardian-visual" />
        </div>
        <div className="greeting-label-group">
          <h1 className="primary-welcome-msg">Good morning</h1>
          <p className="sub-identity-text">Mrs. Marwa Ahmed</p>
        </div>
      </header>

      <main className="dashboard-content-flow">
        {}
        <section className="insight-hero-banner">
          <div className="banner-top-row">
            <span className="report-chip-indicator">
              <i className="clock-icon-mini"></i> Yesterday's report
            </span>
            <span className="delta-stat-highlight">12% less</span>
          </div>
          
          <div className="banner-core-body">
            <h2 className="focus-subject-title">AdbAllah’s screen time</h2>
            <div className="metric-orbit-progress">
              <svg viewBox="0 0 36 36" className="circular-path">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="75, 100" />
              </svg>
              <span className="orbit-data-value">2h</span>
            </div>
          </div>
        </section>

        {}
        <section className="insight-dual-grid">
          <article className="insight-tile-card">
            <h3 className="tile-category-label">Most talked</h3>
            <p className="tile-result-data">Omar Samy</p>
          </article>
          <article className="insight-tile-card">
            <h3 className="tile-category-label">Fav activities</h3>
            <p className="tile-result-data">Robotics</p>
          </article>
        </section>

        {}
        <nav className="action-link-stack">
            <Link to="/parentcontrol">
          <button className="nav-action-row">Controls</button>
            </Link>
          <button className="nav-action-row">Reports/ Blocks</button>
          <button className="nav-action-row">Fav contents</button>
        </nav>
      </main>
    </div>
    
    </> );
}
 
export default HomeParent; 