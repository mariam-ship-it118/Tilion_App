import React from 'react';
import { Link } from 'react-router-dom';
import TopParent from '../../Components/TopParent';
import NavParent from '../../Components/NavParent';
import BullyingSection from '../../Components/BullyingSection';

const CyberBullyingPage = () => {
  return (
    <>
      <TopParent />
      <div className="cyber-bullying-wrap">
        <Link to="/parentcontrol" className="bullying-back-btn" aria-label="Go back">
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
        <BullyingSection />
      </div>
      <NavParent />
    </>
  );
};

export default CyberBullyingPage;
