import React, { useState, useEffect } from 'react';
import './TimeOutPopUp.css';

const TimeOutPopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {}
        <div className="cat-illustration-container">
           <div className="cat-character">
             {}
             🐱
           </div>
        </div>

        <div className="popup-card">
          <h2 className="popup-title">oh no! i am out of energy</h2>
          <p className="popup-subtitle">lets take a break and come back later!</p>
          
          <button 
            className="popup-button" 
            onClick={() => setIsVisible(false)}
          >
            ok! 😊
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeOutPopUp;