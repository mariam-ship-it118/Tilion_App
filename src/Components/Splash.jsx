import React from 'react';
import './Splash.css';

const SplashScreen = () => {
  return (
    <div className="app-container">
      {/* Animated abstract wavy background */}
      <div className="wavy-background"></div>

      <main className="content-wrapper">
        <section className="logo-section">
          <div className="logo-graphic">
            <svg 
              viewBox="0 0 120 120" 
              xmlns="http://www.w3.org/2000/svg" 
              className="animated-logo"
            >
              {/* Dark Base */}
              <circle cx="65" cy="55" r="45" fill="#111432" />
              
              {/* Blue Swirls */}
              <path d="M20.5 50 C 35 20, 65 30, 75 10 A 45 45 0 0 1 110 55 C 90 70, 70 50, 65 80 C 60 100, 80 90, 85 100 A 45 45 0 0 1 23 75 C 30 60, 10 55, 20.5 50 Z" fill="#2d3b8e" />
              <path d="M23 45 C 35 30, 45 40, 50 20 C 55 5, 45 -5, 65 10 A 45 45 0 0 0 21.5 40 Z" fill="#4fa1f4" />
              <path d="M75 10 C 60 30, 65 50, 45 60 C 25 70, 20 65, 20 65 A 45 45 0 0 0 65 100 C 60 80, 75 75, 90 60 C 105 45, 95 20, 75 10 Z" fill="#3549a8" />
              
              {/* Yellow Star */}
              <path 
                className="animated-star"
                d="M10,65 Q40,65 40,35 Q40,65 70,65 Q40,65 40,95 Q40,65 10,65 Z" 
                fill="#ece928" 
              />
            </svg>
          </div>
          
          <h1 className="brand-title">TILION</h1>
        </section>

        <section className="bottom-section">
          <div className="subtitle-group">
            <p>Guarded with love</p>
            <p>Shinning like the moon</p>
          </div>
          
          <div className="action-buttons">
            <button className="auth-btn">Login</button>
            <button className="auth-btn">SignUp</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SplashScreen;