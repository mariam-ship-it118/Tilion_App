import React from 'react';
import './SignUp.css';
import Logo from '../Assets/logo_2.svg';
import { Link } from 'react-router-dom';

const SignupPageTwo = () => {
  return (
    <div className="signup-container fade-in">
      {}
      <nav className="top-nav">
        <button className="back-btn" aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#161A30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {}
      <div className="content-wrapper correct">
        <div className="logo-container float-anim">
          {}
         <img src={Logo} alt="" />
        </div>

        <h2 className="welcome-title slide-up">Welcome to Tilion</h2>
    
        {}
        <form className="signup-form slide-up-delayed">
          <div className="input-group">
            <label htmlFor="name">Child Name</label>
            <input type="text" id="name" />
          </div>
          
          <div className="input-group">
            <label htmlFor="contact">Username</label>
            <input type="text" id="contact" />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Age</label>
            <input type="password" id="password" />
          </div>
          
          <div className="form-actions">
            <a href="#forgot" className="forgot-pwd">Forgot password?</a>
          </div>
        </form>
      </div>

      {}
      <div className="footer slide-up-delayed-2">
        
        <button className="next-btn">Next</button>
       
      </div>
    </div>
  );
};

export default SignupPageTwo;