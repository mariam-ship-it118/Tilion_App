import React from 'react';
import './ScreenTime.css';
import NavParent from '../../Components/NavParent';
import TopParent from '../../Components/TopParent';
import {Link} from 'react-router-dom';
import UserActivityMetrics from '../../Components/Graph';
import KidSafetyDashboard from '../../Components/ScreenSettings';
const DiscoveryZone = () => {
  

  return (
    <>
    <TopParent/>
    <div className="screen-time-wrap">
      <Link to="/parentcontrol" className="screen-time-back-btn" aria-label="Go back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <UserActivityMetrics/>
      <KidSafetyDashboard/>
    </div>
    <NavParent  />
        </>
  );
};

export default DiscoveryZone;