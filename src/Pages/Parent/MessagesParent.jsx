import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopParent from '../../Components/TopParent';
import NavParent from '../../Components/NavParent';
import './MessagesParent.css';

const chats = [
  { id: 1, name: 'Fatima Hassan', msg: 'That sounds great! Let', initial: 'F', tone: 'light-blue', to: '/chatparent/1' },
  { id: 2, name: 'Nadia Ibrahim', msg: 'My daughter loved the', initial: 'N', tone: 'dark-blue' },
  { id: 3, name: 'Layla Mahmoud', msg: 'Thank you for the book', initial: 'L', tone: 'lavender' },
  { id: 4, name: 'Hana Khalil', msg: 'Would your son like to', initial: 'H', tone: 'lime' },
  { id: 5, name: 'Samira Yousef', msg: 'I found a great after-', initial: 'S', tone: 'lavender' },
  { id: 6, name: 'Amira Saeed', msg: 'Coffee next Tuesday', initial: 'A', tone: 'light-blue' },
  { id: 7, name: 'Zahra Mansour', msg: 'The kids had so much', initial: 'Z', tone: 'dark-blue' },
  { id: 8, name: 'Mona Rashid', msg: "Let's coordinate for the", initial: 'M', tone: 'lavender' },
];

const MessagesParent = () => {
  const [tab, setTab] = useState('chats');
  const [query, setQuery] = useState('');

  const filtered = chats.filter((chat) =>
    chat.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const ChatRow = ({ chat, index }) => {
    const row = (
      <div className="parent-msg-row" style={{ animationDelay: `${index * 0.05}s` }}>
        <div className={`parent-msg-avatar ${chat.tone}`}>{chat.initial}</div>
        <div className="parent-msg-text">
          <span className="parent-msg-name">{chat.name}</span>
          <span className="parent-msg-preview">{chat.msg}</span>
          <span className="parent-msg-status">Active now</span>
        </div>
        <span className="parent-msg-dot" aria-hidden="true" />
      </div>
    );

    if (chat.to) {
      return (
        <Link to={chat.to} className="parent-msg-link">
          {row}
        </Link>
      );
    }

    return row;
  };

  return (
    <>
      <TopParent />
      <main className="parent-messages-page">
        <header className="parent-messages-header">
          <h1>Messages</h1>
          <p>22 new messages</p>
        </header>

        <button type="button" className="parent-new-group-btn">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M16 11a4 4 0 1 0-8 0M3 20v-1a4 4 0 0 1 4-4h4M19 8v6M16 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          New Group
        </button>

        <input
          type="search"
          className="parent-messages-search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="parent-messages-tabs">
          <button
            type="button"
            className={`parent-msg-tab${tab === 'chats' ? ' active' : ''}`}
            onClick={() => setTab('chats')}
          >
            Chats
          </button>
          <button
            type="button"
            className={`parent-msg-tab${tab === 'groups' ? ' active' : ''}`}
            onClick={() => setTab('groups')}
          >
            Groups
          </button>
        </div>

        <div className="parent-messages-list">
          {tab === 'chats' ? (
            filtered.map((chat, index) => <ChatRow key={chat.id} chat={chat} index={index} />)
          ) : (
            <p className="parent-messages-empty">No groups yet</p>
          )}
        </div>
      </main>
      <NavParent />
    </>
  );
};

export default MessagesParent;
