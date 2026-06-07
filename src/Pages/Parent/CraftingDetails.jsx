import React from 'react';
import { Link } from 'react-router-dom';
import TopParent from '../../Components/TopParent';
import NavParent from '../../Components/NavParent';
import './CraftingDetails.css';
import craftImg1 from '../../Assets/swan.svg';
import craftImg2 from '../../Assets/boat.svg';

const weekBars = [
  { day: 'Mon', height: 55 },
  { day: 'Tue', height: 72 },
  { day: 'Wed', height: 48 },
  { day: 'Thu', height: 85 },
  { day: 'Fri', height: 62 },
  { day: 'Sat', height: 90 },
  { day: 'Sun', height: 40 },
];

const gallery = [
  { title: 'Paper Swan', meta: 'Yesterday', img: craftImg1 },
  { title: 'Paper Boat', meta: 'In Progress - 75%', img: craftImg2 },
];

const sessions = [
  { date: 'May 28 - Afternoon Session', mins: '45 mins' },
  { date: 'May 27 - Morning Session', mins: '38 mins' },
  { date: 'May 26 - Evening Session', mins: '52 mins' },
  { date: 'May 25 - Afternoon Session', mins: '41 mins' },
];

const CraftingDetails = () => {
  return (
    <>
      <TopParent />
      <NavParent/>
      <br /><br /><br />
      <div className="craft-details-wrap">
        <main className="craft-details-page">
          <header className="craft-details-header">
            <Link to="/activityparent" className="craft-details-back" aria-label="Go back">
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
            <h1 className="craft-details-title">Crafting Activity</h1>
          </header>

          <section className="craft-card craft-fade" style={{ animationDelay: '0.05s' }}>
            <p className="craft-card-label">Total Time This Week</p>
            <p className="craft-card-stat">12h 45m</p>

            <div className="craft-chart">
              {weekBars.map((bar) => (
                <div key={bar.day} className="craft-chart-col">
                  <div className="craft-chart-bar" style={{ height: `${bar.height}%` }} />
                  <span>{bar.day}</span>
                </div>
              ))}
            </div>

            <div className="craft-focus-badge">
              <span aria-hidden="true">✦</span>
              <strong>Focus:</strong> Fine Motor Skills &amp; Creativity
            </div>
          </section>

          <h2 className="craft-section-title craft-fade" style={{ animationDelay: '0.1s' }}>
            What AdbAllah Made
          </h2>

          <div className="craft-gallery craft-fade" style={{ animationDelay: '0.15s' }}>
            {gallery.map((item) => (
              <article key={item.title} className="craft-gallery-card">
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </article>
            ))}
          </div>

          <section className="craft-starters craft-fade" style={{ animationDelay: '0.2s' }}>
            <div className="craft-starters-head">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2>Conversation Starters</h2>
            </div>
            <p>
              <strong>Ask them:</strong> &quot;How did you fold the wings on your paper swan today?&quot;
            </p>
            <p>
              <strong>Suggest:</strong> &quot;Let&apos;s try the 3D cardboard project together this weekend!&quot;
            </p>
          </section>

          <h2 className="craft-section-title craft-fade" style={{ animationDelay: '0.25s' }}>
            Recent Sessions
          </h2>

          <div className="craft-sessions">
            {sessions.map((session, index) => (
              <div
                key={session.date}
                className="craft-session-row craft-fade"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <span className="craft-session-dot" aria-hidden="true" />
                <span className="craft-session-date">{session.date}</span>
                <span className="craft-session-mins">{session.mins}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
      <NavParent />
    </>
  );
};

export default CraftingDetails;
