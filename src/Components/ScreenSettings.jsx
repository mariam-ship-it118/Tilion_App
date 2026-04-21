import React, { useState } from 'react';
import './ScreenSettings.css';

const KidSafetyDashboard = () => {
  
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [isBedtimeActive, setIsBedtimeActive] = useState(false);

  return (
    <div className="app-shell-root">
      {}
      <div className="seo-anchor-text" aria-hidden="true">
        <h2>Safe Kid-Friendly Social Networking</h2>
        <p>Advanced digital wellbeing tools for pre-teens. Manage healthy screen habits on the safest social platform for children aged 7 to 13.</p>
      </div>

      <div className="module-control-stack">
        {}
        <div className="control-row-item">
          <span className="label-descriptor">Screen timer</span>
          <div className="time-value-cluster">
            <span className="digit-primary">1h</span>
            <span className="digit-primary">0m</span>
          </div>
        </div>

        {}
        <div className="control-row-item">
          <span className="label-descriptor">Break every</span>
          <div 
            className={`toggle-track-container ${isBreakActive ? 'state-engaged' : ''}`}
            onClick={() => setIsBreakActive(!isBreakActive)}
          >
            <div className="toggle-thumb-node"></div>
          </div>
        </div>

        {}
        <div className="control-row-item">
          <span className="label-descriptor">Bed time set</span>
          <div 
            className={`toggle-track-container ${isBedtimeActive ? 'state-engaged' : ''}`}
            onClick={() => setIsBedtimeActive(!isBedtimeActive)}
          >
            <div className="toggle-thumb-node"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidSafetyDashboard;