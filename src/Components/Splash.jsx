import React from 'react';
import './Splash.css';
import Logo from '../Assets/logo.svg';
import { Link } from 'react-router-dom';
const SplashScreen = () => {
  return (
    <div className="app-container">
      {/* Animated abstract wavy background */}
      <div className="wavy-background"></div>

      <main className="content-wrapper">
        <section className="logo-section">
          <div className="logo-graphic">
            <img src={Logo} alt="TILION app" />
              {/* Yellow Star */}
              <path 
                className="animated-star"
                d="M10,65 Q40,65 40,35 Q40,65 70,65 Q40,65 40,95 Q40,65 10,65 Z" 
                fill="#ece928" 
              />
          
          </div>
          
          {/* <h1 className="brand-title">TILION</h1> */}
        </section>

        <section className="bottom-section">
          <div className="subtitle-group">
            <p>Guarded with love</p>
            <p>Shinning like the moon</p>
          </div>
          
          <div className="action-buttons">
            <button className="auth-btn">Login</button>
            <Link to="/signup">
            <button className="auth-btn">SignUp</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SplashScreen;