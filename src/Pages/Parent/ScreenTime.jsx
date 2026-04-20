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
   <UserActivityMetrics/>
   <KidSafetyDashboard/>
    <NavParent  />
        </>
  );
};

export default DiscoveryZone;