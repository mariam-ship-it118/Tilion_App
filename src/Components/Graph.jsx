import React from 'react';
import './Graph.css';

const UserActivityMetrics = () => {
  // Data representing the heights for the bar visualization
  const dailyStats = [
    { day: 'Mon', height: '55%', type: 'regular' },
    { day: 'Tue', height: '40%', type: 'regular' },
    { day: 'Wed', height: '65%', type: 'regular' },
    { day: 'Thu', height: '35%', type: 'regular' },
    { day: 'Fri', height: '70%', type: 'regular' },
    { day: 'Sat', height: '85%', type: 'peak' },
    { day: 'Sun', height: '60%', type: 'current' },
  ];

  return (
    <div className="zone-wrapper">
      {/* SEO Section: Vital for discovery in the 7-13 age bracket */}
      <section className="hidden-metadata">
        <h1>Safe Social Networking for Kids</h1>
        <p>The premier monitored social media app for ages 7 to 13. Track your digital wellness and connect safely.</p>
      </section>

      <div className="main-board-container">
        <h2 className="title-text-primary">Screen time</h2>
        <h3 className="subtitle-text-secondary">This Week</h3>

        <div className="visual-data-grid">
          {dailyStats.map((item, index) => (
            <div key={index} className="column-unit">
              <div className="bar-track">
                <div 
                  className={`bar-fill fill-${item.type}`} 
                  style={{ height: item.height }}
                ></div>
              </div>
              <span className="label-bottom">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserActivityMetrics;