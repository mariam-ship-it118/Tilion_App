import React, { useState, useEffect } from 'react';
import './ActivityDashboard.css';
import NavParent from '../../Components/NavParent';
import TopParent from '../../Components/TopParent';
import Red from '../../Assets/red.svg';
import Blue from '../../Assets/blue.svg';
import Green from '../../Assets/green.svg';
import Purple from '../../Assets/purple.svg';
import Yellow from '../../Assets/yellow.svg';
import Pink from '../../Assets/pink.svg';
const KidsActivityModule = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (<>
  
  <TopParent/>
    <div className="portal-app-shell">
      <header className="portal-top-bar">
        <h1 className="portal-main-heading">Activities</h1>
        <p className="portal-sub-label">Categories</p>
      </header>

      <section className="portal-content-feed">
        <div className="portal-task-tile">
          <div className="portal-tile-inner">
            <div className="portal-avatar-ring ring-blue">
              <img src={Blue} alt="" className="portal-graphic" />
            </div>
            <div className="portal-text-spine">
              <span className="portal-name-tag">Crafting</span>
              <span className="portal-time-stamp">12h 45m</span>
            </div>
            <div className="portal-action-group">
              <span className="portal-data-percent">28%</span>
              <button className="portal-trash-hitbox" />
            </div>
          </div>
          <div className="portal-meter-bg">
            <div className="portal-meter-fill" style={{ width: isReady ? '28%' : '0%' }} />
          </div>
        </div>

        <div className="portal-task-tile">
          <div className="portal-tile-inner">
            <div className="portal-avatar-ring ring-orange">
              <img src={Red} alt="" className="portal-graphic" />
            </div>
            <div className="portal-text-spine">
              <span className="portal-name-tag">Art</span>
              <span className="portal-time-stamp">10h 30m</span>
            </div>
            <div className="portal-action-group">
              <span className="portal-data-percent">23%</span>
              <button className="portal-trash-hitbox" />
            </div>
          </div>
          <div className="portal-meter-bg">
            <div className="portal-meter-fill" style={{ width: isReady ? '23%' : '0%' }} />
          </div>
        </div>

        <div className="portal-task-tile">
          <div className="portal-tile-inner">
            <div className="portal-avatar-ring ring-green">
            <img src={Green} alt="" className="portal-graphic" />
            </div>
            <div className="portal-text-spine">
              <span className="portal-name-tag">Robotics</span>
              <span className="portal-time-stamp">8h 15m</span>
            </div>
            <div className="portal-action-group">
              <span className="portal-data-percent">18%</span>
              <button className="portal-trash-hitbox" />
            </div>
          </div>
          <div className="portal-meter-bg">
            <div className="portal-meter-fill" style={{ width: isReady ? '18%' : '0%' }} />
          </div>
        </div>

        <div className="portal-task-tile">
          <div className="portal-tile-inner">
            <div className="portal-avatar-ring ring-yellow">
            <img src={Yellow} alt="" className="portal-graphic" />
            </div>
            <div className="portal-text-spine">
              <span className="portal-name-tag">Doodles</span>
              <span className="portal-time-stamp">6h 20m</span>
            </div>
            <div className="portal-action-group">
              <span className="portal-data-percent">14%</span>
              <button className="portal-trash-hitbox" />
            </div>
          </div>
          <div className="portal-meter-bg">
            <div className="portal-meter-fill" style={{ width: isReady ? '14%' : '0%' }} />
          </div>
        </div>

        <div className="portal-task-tile">
          <div className="portal-tile-inner">
            <div className="portal-avatar-ring ring-purple">
            <img src={Purple} alt="" className="portal-graphic" />
            </div>
            <div className="portal-text-spine">
              <span className="portal-name-tag">Collage</span>
              <span className="portal-time-stamp">4h 10m</span>
            </div>
            <div className="portal-action-group">
              <span className="portal-data-percent">9%</span>
              <button className="portal-trash-hitbox" />
            </div>
          </div>
          <div className="portal-meter-bg">
            <div className="portal-meter-fill" style={{ width: isReady ? '9%' : '0%' }} />
          </div>
        </div>

        <div className="portal-task-tile">
          <div className="portal-tile-inner">
            <div className="portal-avatar-ring ring-red">
            <img src={Red} alt="" className="portal-graphic" />
            </div>
            <div className="portal-text-spine">
              <span className="portal-name-tag">Painting</span>
              <span className="portal-time-stamp">3h 40m</span>
            </div>
            <div className="portal-action-group">
              <span className="portal-data-percent">8%</span>
              <button className="portal-trash-hitbox" />
            </div>
          </div>
          <div className="portal-meter-bg">
            <div className="portal-meter-fill" style={{ width: isReady ? '8%' : '0%' }} />
          </div>
        </div>

        <div className="portal-task-tile">
          <div className="portal-tile-inner">
            <div className="portal-avatar-ring ring-red">
            <img src={Pink} alt="" className="portal-graphic" />
            </div>
            <div className="portal-text-spine">
              <span className="portal-name-tag">French</span>
              <span className="portal-time-stamp">3h 40m</span>
            </div>
            <div className="portal-action-group">
              <span className="portal-data-percent">8%</span>
              <button className="portal-trash-hitbox" />
            </div>
          </div>
          <div className="portal-meter-bg">
            <div className="portal-meter-fill" style={{ width: isReady ? '8%' : '0%' }} />
          </div>
        </div>
      </section>

      <footer className="portal-seo-hidden">
        <h3>Creative Social Experience for Kids Ages 7-13</h3>
        <p>A fun and safe digital portfolio for students to track art, robotics, and learning goals.</p>
      </footer>
    </div>  
    <br /><br /><br />
    <NavParent/>
  </>
  );
};

export default KidsActivityModule;