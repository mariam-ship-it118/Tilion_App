import React from 'react';
import { Link } from 'react-router-dom';
import TopParent from '../../Components/TopParent';
import NavParent from '../../Components/NavParent';
import './MyChildProfile.css';
import profileImg from '../../Assets/thechildp.svg';
import post01 from '../../Assets/post01.svg';
import post02 from '../../Assets/post02.svg';
import post03 from '../../Assets/post03.svg';
import post04 from '../../Assets/post04.svg';
import post05 from '../../Assets/post05.svg';
import post06 from '../../Assets/post06.svg';

const postImages = [post01, post02, post03, post04, post05, post06];

const MyChildProfile = () => {
  return (
    <>
      <TopParent />
      <div className="child-profile-wrap">
        <Link to="/parentcontrol" className="child-profile-back" aria-label="Go back">
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

        <main className="child-profile-page">
          <section className="child-profile-header">
            <div className="child-profile-avatar">
              <img src={profileImg} alt="Omar Bus" />
            </div>
            <h1>Omar Bus</h1>
            <p className="child-profile-handle">fireboy🤩</p>
            <p className="child-profile-bio">Footboy lover</p>
            <div className="child-profile-curve" />
          </section>

          <section className="child-profile-stats">
            <article className="child-stat-card">
              <h2>My Friends</h2>
              <p>20</p>
            </article>
            <article className="child-stat-card">
              <h2>Parent approved</h2>
              <p>3</p>
            </article>
          </section>

          <section className="child-profile-posts">
            <h3>Posts</h3>
            <div className="child-posts-grid">
              {postImages.map((src, index) => (
                <div
                  key={index}
                  className="child-post-item"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <NavParent />
    </>
  );
};

export default MyChildProfile;
