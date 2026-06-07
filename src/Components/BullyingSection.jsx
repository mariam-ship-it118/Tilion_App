import React, { useState } from 'react';
import './BullyingSection.css';

const alerts = [
  {
    id: 1,
    type: 'Harassment',
    level: 'high',
    isNew: true,
    confidence: '94% confidence',
    meta: 'WhatsApp • 2 hours ago',
    from: '@school_bully',
    message: "You're so stupid, nobody likes you...",
  },
  {
    id: 2,
    type: 'Social Exclusion',
    level: 'medium',
    isNew: false,
    confidence: '45% confidence',
    meta: 'Instagram • 5 hours ago',
    from: '@group_admin',
    message: "Don't invite Ahmed to the party, he's weird",
    actions: true,
  },
  {
    id: 3,
    type: 'Possible Conflict',
    level: 'medium',
    isNew: true,
    confidence: '52% confidence',
    meta: 'Discord • Yesterday',
    from: '@gamer_kid',
    message: 'Why do you always mess up the game for us?',
  },
];

const BullyingSection = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="bullying-page">
      <header className="bullying-header">
        <div className="bullying-header-icon" aria-hidden="true">!</div>
        <div>
          <h1>Bullying Alerts</h1>
          <p>2 new alerts detected</p>
        </div>
      </header>

      <section className="bullying-ai-card">
        <div className="bullying-ai-top">
          <div className="bullying-ai-title">
            <span className="bullying-bell" aria-hidden="true">🔔</span>
            <span>AI Detection Active</span>
          </div>
          <button
            type="button"
            className={`bullying-toggle${isActive ? ' on' : ''}`}
            onClick={() => setIsActive((prev) => !prev)}
          >
            {isActive ? 'ACTIVE' : 'OFF'}
          </button>
        </div>
        <p className="bullying-ai-text">
          Monitoring AbdAllah&apos;s messages across all platforms for potential cyberbullying content
        </p>
      </section>

      {isActive ? (
        <div className="bullying-active-content">
          <div className="bullying-alerts-list">
            {alerts.map((alert, index) => (
              <article
                key={alert.id}
                className="bullying-alert-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="bullying-alert-top">
                  <div className="bullying-alert-title-row">
                    <span className={`bullying-alert-icon ${alert.level}`} aria-hidden="true">!</span>
                    <h2>{alert.type}</h2>
                    {alert.isNew && <span className="bullying-new-badge">NEW</span>}
                  </div>
                  <span className="bullying-confidence">{alert.confidence}</span>
                </div>

                <p className="bullying-meta">{alert.meta}</p>
                <p className="bullying-from">From: {alert.from}</p>
                <div className="bullying-snippet">{alert.message}</div>

                {alert.actions && (
                  <div className="bullying-card-actions">
                    <button type="button" className="bullying-btn view">View Full</button>
                    <button type="button" className="bullying-btn block">Block</button>
                  </div>
                )}
              </article>
            ))}
          </div>

          <button type="button" className="bullying-main-btn primary">
            View All Messages
          </button>
          <button type="button" className="bullying-main-btn secondary">
            Configure AI Settings
          </button>
        </div>
      ) : (
        <p className="bullying-off-message">
          turn on the active button to check your child&apos;s safety
        </p>
      )}
    </div>
  );
};

export default BullyingSection;
