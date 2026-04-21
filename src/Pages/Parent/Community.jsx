import React, { useState, useEffect } from 'react';
import NavParent from '../../Components/NavParent';
import './Communication.css';
import Like from '../../Assets/like.svg';
import Comment from '../../Assets/comment.svg';
import Repost from '../../Assets/repost.svg';
import Menu from '../../Assets/menu.svg';
import TopParent from '../../Components/TopParent';
import User from '../../Assets/parentprofile.svg';
import User2 from '../../Assets/friendparent.svg';

const KidsSocialFeed = () => {
  const [feedActive, setFeedActive] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => setFeedActive(true), 100);
    return () => clearTimeout(loadTimer);
  }, []);

  return ( <>
  <TopParent/>
    <div className="vibe-wrapper">
      <div className={`vibe-scroll-area ${feedActive ? 'vibe-fade-in' : ''}`}>
        
        <article className="vibe-post-block">
          <div className="vibe-post-layout">
            <div className="vibe-pfp-space">
              <img src={User2} alt="" className="vibe-pfp-img" />
            </div>
            <div className="vibe-post-main">
              <div className="vibe-user-row">
                <div className="vibe-name-stack">
                  <span className="vibe-display-name">Hoda Soheil</span>
                  <span className="vibe-handle">@hoda220</span>
                </div>
                <span className="vibe-timestamp">12h ago</span>
              </div>
              <p className="vibe-body-text">
                I have been having this issue, my child doesnt understand french from class and me and his father were both in eng schools, if anyone knows a good french teacher please let me know.
              </p>
              <div className="vibe-interaction-bar">
                <img src={Like} alt="" className="vibe-action-icon" />
                <img src={Repost} alt="" className="vibe-action-icon" />
                <img src={Comment} alt="" className="vibe-action-icon" />
                <img src={Menu} alt="" className="vibe-more-icon" />
              </div>
            </div>
          </div>
        </article>

        <article className="vibe-post-block">
          <div className="vibe-post-layout">
            <div className="vibe-pfp-space">
              <img src={User} alt="" className="vibe-pfp-img" />
            </div>
            <div className="vibe-post-main">
              <div className="vibe-user-row">
                <div className="vibe-name-stack">
                  <span className="vibe-display-name">Hoda Soheil</span>
                  <span className="vibe-handle">@hoda220</span>
                </div>
                <span className="vibe-timestamp">12h ago</span>
              </div>
              <p className="vibe-body-text">
                I have been having this issue, my child doesnt understand french from class and me and his father were both in eng schools, if anyone knows a good french teacher please let me know.
              </p>
              <div className="vibe-interaction-bar">
                <img src={Like} alt="" className="vibe-action-icon" />
                <img src={Repost} alt="" className="vibe-action-icon" />
                <img src={Comment} alt="" className="vibe-action-icon" />
                <img src={Menu} alt="" className="vibe-more-icon" />
              </div>
            </div>
          </div>
        </article>

        <article className="vibe-post-block">
          <div className="vibe-post-layout">
            <div className="vibe-pfp-space">
              <img src={User2} alt="" className="vibe-pfp-img" />
            </div>
            <div className="vibe-post-main">
              <div className="vibe-user-row">
                <div className="vibe-name-stack">
                  <span className="vibe-display-name">Hoda Soheil</span>
                  <span className="vibe-handle">@hoda220</span>
                </div>
                <span className="vibe-timestamp">12h ago</span>
              </div>
              <p className="vibe-body-text">
                I have been having this issue, my child doesnt understand french from class and me and his father were both in eng schools, if anyone knows a good french teacher please let me know.
              </p>
              <div className="vibe-interaction-bar">
                <img src={Like} alt="" className="vibe-action-icon" />
                <img src={Repost} alt="" className="vibe-action-icon" />
                <img src={Comment} alt="" className="vibe-action-icon" />
                <img src={Menu} alt="" className="vibe-more-icon" />
              </div>
            </div>
          </div>
        </article>

      </div>

      <section className="vibe-seo-data">
        <h2>Kid-Safe Social Learning Hub</h2>
        <p>A protected community for kids aged 7 to 13 to share educational tips, find language tutors, and connect with fellow students in a safe social media environment.</p>
      </section>
    </div> 
    <br /><br /><br />
    <NavParent/>
  </>
  );
};

export default KidsSocialFeed;