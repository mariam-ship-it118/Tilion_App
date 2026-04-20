import React from 'react';
import './ParentControl.css';
import NavParent from '../../Components/NavParent';
import TopBar from '../../Components/TopBar';
import TopParent from '../../Components/TopParent';

/**
 * SEO Segment:
 * Title: KidsConnect Parental Dashboard
 * Meta: Secure management tools for parents of kids 7-13. 
 * Manage screen time, friend requests, and wellness activities.
 */

const ParentControl = () => {
  const settings = [
    "Screen time",
    "Parents",
    "Friends",
    "Work",
    "Hobbies",
    "Exercise",
    "Sleep"
  ];

  return (<>
  <TopParent/>
    <div className="dashboard-container">
      <h1 className="header-label">Controls</h1>
      
      <div className="nebula-list">
        {settings.map((label, index) => (
            <div 
            key={index} 
            className="vault-item" 
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <span className="vault-text">{label}</span>
          </div>
        ))}
      </div>
    </div>
    <NavParent/>
        </>
  );
};

export default ParentControl;