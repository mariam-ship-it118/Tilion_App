import React, { useState } from 'react';
import TopParent from '../../Components/TopParent';
import NavParent from '../../Components/NavParent';
import './NotificationPage.css';

const initialNotifications = [
  {
    id: 1,
    tone: 'red',
    title: 'High-Risk Message Detected',
    text: 'Our AI detected potentially harmful language in AbdAllah\'s Instagram messages.',
    meta: '10 min ago • Bullying',
    unread: true,
  },
  {
    id: 2,
    tone: 'green',
    title: 'Screen Time Limit Reached',
    text: 'AbdAllah has reached the daily limit of 2 hours on TikTok.',
    meta: '1 hour ago • Screen Time',
    unread: true,
  },
  {
    id: 3,
    tone: 'purple',
    title: 'New Friend Request',
    text: '@coolkid_2024 wants to connect with AbdAllah on Instagram.',
    meta: '3 hours ago • Social',
    unread: true,
  },
  {
    id: 4,
    tone: 'green',
    title: 'Weekly Report Ready',
    text: 'Your child\'s screen time summary for this week is available.',
    meta: 'Yesterday • Screen Time',
    unread: false,
  },
  {
    id: 5,
    tone: 'purple',
    title: 'Profile Updated',
    text: 'AbdAllah updated their profile bio.',
    meta: '2 days ago • Social',
    unread: false,
  },
  {
    id: 6,
    tone: 'red',
    title: 'Suspicious Link Blocked',
    text: 'A harmful link was blocked in AbdAllah\'s chat.',
    meta: '3 days ago • Safety',
    unread: false,
  },
  {
    id: 7,
    tone: 'green',
    title: 'Break Reminder Sent',
    text: 'A screen break reminder was sent to AbdAllah.',
    meta: '4 days ago • Screen Time',
    unread: false,
  },
  {
    id: 8,
    tone: 'purple',
    title: 'New Activity Shared',
    text: 'AbdAllah shared a new post in the community feed.',
    meta: '5 days ago • Social',
    unread: false,
  },
];

const NotificationIcon = ({ tone }) => {
  if (tone === 'red') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 4 7v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7l-8-4Z" stroke="white" strokeWidth="2" />
      </svg>
    );
  }
  if (tone === 'green') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" />
        <path d="M12 8v4l3 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 11a4 4 0 1 0-8 0" stroke="white" strokeWidth="2" />
      <path d="M12 13v3M9 20h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 8v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8" stroke="white" strokeWidth="2" />
    </svg>
  );
};

const NotificationPage = () => {
  const [tab, setTab] = useState('unread');
  const [items, setItems] = useState(initialNotifications);

  const unreadCount = items.filter((item) => item.unread).length;
  const visible = tab === 'unread' ? items.filter((item) => item.unread) : items;

  const markAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  return (
    <>
      <TopParent />
      <div className="notify-page">
        <header className="notify-header">
          <div className="notify-header-left">
            <div className="notify-header-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h1>Notifications</h1>
              <p>{unreadCount} unread notifications</p>
            </div>
          </div>
          <button type="button" className="notify-mark-read" onClick={markAllRead}>
            Mark all read
          </button>
        </header>

        <div className="notify-tabs">
          <button
            type="button"
            className={`notify-tab${tab === 'all' ? ' active' : ''}`}
            onClick={() => setTab('all')}
          >
            All ({items.length})
          </button>
          <button
            type="button"
            className={`notify-tab${tab === 'unread' ? ' active' : ''}`}
            onClick={() => setTab('unread')}
          >
            Unread ({unreadCount})
          </button>
        </div>

        <div className="notify-list">
          {visible.map((item, index) => (
            <article
              key={item.id}
              className="notify-card"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              {item.unread && <span className="notify-dot" aria-hidden="true" />}
              <div className={`notify-card-icon ${item.tone}`}>
                <NotificationIcon tone={item.tone} />
              </div>
              <div className="notify-card-body">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <span className="notify-meta">{item.meta}</span>
              </div>
            </article>
          ))}
        </div>

        <button type="button" className="notify-settings-btn">
          Notification Settings
        </button>
      </div>
      <NavParent />
    </>
  );
};

export default NotificationPage;
