import React from 'react';
import './Requests.css';
import {Link} from 'react-router-dom';
import Profile1 from '../../Assets/profile1.svg';
import Profile2 from '../../Assets/profile2.svg';
import Profile3 from '../../Assets/profile3.svg';
import NavParent from '../../Components/NavParent';
import TopParent from '../../Components/TopParent';

const Requests = () => {
  return (
    <>
    
    <TopParent/>
    <main className="discovery-hub-wrap">
      {}
      <h1 style={{ display: 'none' }}>
        KidConnect - Safe Social Networking for Kids 7-13. Discover new friends and hobbies.
      </h1>

      <section className="pending-invites-zone">
        <h2 className="hub-section-title">Requests</h2>
        
        <Link to="/chatparent/:userId" >
        <div className="buddy-invite-card">
          <div className="user-identity-flex">
            <div className="avatar-circle-frame">
               <img src={Profile1} alt="Profile" />
            </div>
            <div className="name-stack">
              <span className="primary-alias">Manar Ahmed</span>
              <span className="secondary-alias">Ahmed Ali</span>
            </div>
          </div>
          
          <div className="interest-pill-row">
            <span className="hobby-pill">Robotics</span>
            <span className="hobby-pill">10y</span>
            <span className="hobby-pill">Doodling</span>
          </div>

          <div className="control-btn-group">
            <button className="action-trigger-solid">Accept</button>
            <button className="action-trigger-outline">Decline</button>
          </div>
        </div>

        </Link>

      </section>

      <section className="new-peers-discovery">
        <h2 className="hub-section-title">Suggestions</h2>
        
        {}
        <div className="suggest-profile-box">
          <div className="user-identity-flex">
            <div className="avatar-circle-frame">
               <img src={Profile1} alt="Profile" />
            </div>
            <div className="name-stack">
              <span className="primary-alias">Manar Ahmed</span>
              <span className="secondary-alias">Ahmed Ali</span>
            </div>
          </div>
          <div className="interest-pill-row">
            <span className="hobby-pill">Robotics</span>
            <span className="hobby-pill">10y</span>
            <span className="hobby-pill">Doodling</span>
          </div>
          <div className="control-btn-group">
            <button className="action-trigger-solid">Request</button>
            <button className="action-trigger-outline">Remove</button>
          </div>
        </div>

        {}
        <div className="suggest-profile-box">
          <div className="user-identity-flex">
            <div className="avatar-circle-frame">
               <img src={Profile2} alt="Profile" />
            </div>
            <div className="name-stack">
              <span className="primary-alias">Manar Ahmed</span>
              <span className="secondary-alias">Ahmed Ali</span>
            </div>
          </div>
          <div className="interest-pill-row">
            <span className="hobby-pill">Robotics</span>
            <span className="hobby-pill">10y</span>
            <span className="hobby-pill">Doodling</span>
          </div>
          <div className="control-btn-group">
            <button className="action-trigger-solid">Request</button>
            <button className="action-trigger-outline">Remove</button>
          </div>
        </div>

        {}
        <div className="suggest-profile-box">
          <div className="user-identity-flex">
            <div className="avatar-circle-frame">
               <img src={Profile3} alt="Profile" />
            </div>
            <div className="name-stack">
              <span className="primary-alias">Manar Ahmed</span>
              <span className="secondary-alias">Ahmed Ali</span>
            </div>
          </div>
          <div className="interest-pill-row">
            <span className="hobby-pill">Robotics</span>
            <span className="hobby-pill">10y</span>
            <span className="hobby-pill">Doodling</span>
          </div>
          <div className="control-btn-group">
            <button className="action-trigger-solid">Request</button>
            <button className="action-trigger-outline">Remove</button>
          </div>
        </div>

        {}
        <div className="suggest-profile-box">
          <div className="user-identity-flex">
            <div className="avatar-circle-frame">
               <img src={Profile2} alt="Profile" />
            </div>
            <div className="name-stack">
              <span className="primary-alias">Manar Ahmed</span>
              <span className="secondary-alias">Ahmed Ali</span>
            </div>
          </div>
          <div className="interest-pill-row">
            <span className="hobby-pill">Robotics</span>
            <span className="hobby-pill">10y</span>
            <span className="hobby-pill">Doodling</span>
          </div>
          <div className="control-btn-group">
            <button className="action-trigger-solid">Request</button>
            <button className="action-trigger-outline">Remove</button>
          </div>
        </div>

      </section>
    </main>
    <NavParent/>
    </>
  );
};

export default Requests;