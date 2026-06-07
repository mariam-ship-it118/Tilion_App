import React, { useState } from 'react';
import TopBar from '../../Components/TopBar';
import NavBar from '../../Components/NavBar';
import './NotificationChild.css';

const initialNotifications = [
  {
    id: 1,
    type: 'friend',
    iconTone: 'blue',
    title: 'New Friend Request',
    text: 'Sara wants to be your friend!',
    time: '5 min ago',
    unread: true,
    actions: true,
  },
  {
    id: 2,
    type: 'message',
    iconTone: 'blue',
    title: 'New Message',
    text: 'Omar: "Want to play after school?"',
    time: '15 min ago',
    unread: true,
  },
  {
    id: 3,
    type: 'event',
    iconTone: 'yellow',
    title: 'Robotics Class Today!',
    text: "Don't forget your robotics class at 4 PM",
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 4,
    type: 'message',
    iconTone: 'blue',
    title: 'New Message',
    text: 'Maya: "Hi! Let\'s meet at the park"',
    time: '3 hours ago',
    unread: false,
  },
  {
    id: 5,
    type: 'friend',
    iconTone: 'blue',
    title: 'Friend Accepted',
    text: 'Ali accepted your friend request',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 6,
    type: 'activity',
    iconTone: 'yellow',
    title: 'New Activity Available',
    text: 'Check out the new "Magic Keychain" project!',
    time: '2 days ago',
    unread: false,
  },
];

const NotifyIcon = ({ type }) => {
  if (type === 'friend') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16 11a4 4 0 1 0-8 0" stroke="currentColor" strokeWidth="2" />
        <path d="M12 13v3M9 20h6M19 8v6M16 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'message') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === 'event') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 14.8 6.2 17.8l.9-5.3L3.2 7.7l5.4-.8L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const NotificationChild = () => {
  const [items, setItems] = useState(initialNotifications);

  const unreadCount = items.filter((item) => item.unread).length;

  const handleAction = (id) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, unread: false, actions: false } : item
      )
    );
  };

  const handleIgnore = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <>
      <TopBar />
      <main className="child-notify-page">
        <header className="child-notify-header">
          <h1>Notifications</h1>
          <p>You have {unreadCount} new notifications!</p>
        </header>

        <div className="child-notify-list">
          {items.map((item, index) => (
            <article
              key={item.id}
              className={`child-notify-card${item.unread ? ' unread' : ''}`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {item.unread && <span className="child-notify-dot" aria-hidden="true" />}

              <div className="child-notify-row">
                <div className={`child-notify-icon ${item.iconTone}`}>
                  <NotifyIcon type={item.type} />
                </div>
                <div className="child-notify-body">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <span className="child-notify-time">{item.time}</span>
                </div>
              </div>

              {item.actions && (
                <div className="child-notify-actions">
                  <button type="button" onClick={() => handleAction(item.id)}>
                    Accept
                  </button>
                  <button type="button" className="ignore" onClick={() => handleIgnore(item.id)}>
                    Ignore
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </main>
      <NavBar />
    </>
  );
};

export default NotificationChild;
