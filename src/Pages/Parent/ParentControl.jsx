import React from 'react';
import './ParentControl.css';
import NavParent from '../../Components/NavParent';
import TopBar from '../../Components/TopBar';
import TopParent from '../../Components/TopParent';
import {Link} from 'react-router-dom';


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
      <Link to="/screentime">
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
        </Link>
    </div>
    <NavParent/>
        </>
  );
};

export default ParentControl;