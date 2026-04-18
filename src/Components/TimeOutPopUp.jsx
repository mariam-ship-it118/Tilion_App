import React, { useState, useEffect } from 'react';
import './TimeOutPopUp.css';

const TimeOutPopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set timer for 30 minutes (30 * 60 * 1000 ms)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Cat Illustration Placeholder */}
        <div className="cat-illustration-container">
           <div className="cat-character">
             {/* You can replace this div with an <img /> tag for the cat */}
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