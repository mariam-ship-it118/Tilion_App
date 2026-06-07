import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Child/Friends.css';
import TopParent from '../../Components/TopParent';
import NavParent from '../../Components/NavParent';
import { mockFriends } from './friendsData';

const FriendPage = () => {
  const [query, setQuery] = useState('');
  const [friends, setFriends] = useState(mockFriends);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return friends;
    return friends.filter(
      (f) =>
        f.displayName.toLowerCase().includes(q) ||
        f.handle.toLowerCase().includes(q)
    );
  }, [friends, query]);

  const removeFriend = (id) => {
    setFriends((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <>
      <TopParent />
      <div className="friends-layout">
        <div className="friends-inner">
          <header className="friends-top">
            <Link
              to="/parentcontrol"
              className="friends-back-link"
              aria-label="Back to controls"
            >
              <svg
                className="friends-back-chevron"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Link>
            <input
              type="search"
              className="friends-search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </header>

          <ul className="friends-list">
            {filtered.map((friend) => (
              <li key={friend.id} className="friends-row">
                <div className="friends-avatar">
                  <img src={friend.avatar} alt={friend.displayName} />
                </div>
                <div className="friends-row-text">
                  <span className="friends-display-name">
                    {friend.displayName}
                  </span>
                  <span className="friends-handle">{friend.handle}</span>
                </div>
                <button
                  type="button"
                  className="friends-remove-btn"
                  onClick={() => removeFriend(friend.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <NavParent />
    </>
  );
};

export default FriendPage;
