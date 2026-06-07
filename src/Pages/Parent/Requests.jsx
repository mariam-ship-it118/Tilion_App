import React from 'react';
import { Link } from 'react-router-dom';
import './Requests.css';
import TopParent from '../../Components/TopParent';
import NavParent from '../../Components/NavParent';
import Profile1 from '../../Assets/profile1.svg';
import Profile2 from '../../Assets/profile2.svg';
import Profile3 from '../../Assets/profile3.svg';

const requestItem = {
  id: '1',
  avatar: Profile1,
  name: 'Manar Ahmed',
  child: 'Ahmed Ali',
  tags: ['Robotics', '10y', 'Doodling'],
};

const suggestions = [
  { id: '1', avatar: Profile1, name: 'Manar Ahmed', child: 'Ahmed Ali', tags: ['Robotics', '10y', 'Doodling'] },
  { id: '2', avatar: Profile2, name: 'Manar Ahmed', child: 'Ahmed Ali', tags: ['Robotics', '10y', 'Doodling'] },
  { id: '3', avatar: Profile3, name: 'Manar Ahmed', child: 'Ahmed Ali', tags: ['Robotics', '10y', 'Doodling'] },
  { id: '4', avatar: Profile2, name: 'Manar Ahmed', child: 'Ahmed Ali', tags: ['Robotics', '10y', 'Doodling'] },
];

const PersonCard = ({ person, variant, primaryBtn, secondaryBtn, delay = 0 }) => (
  <article className={`req-card ${variant}`} style={{ animationDelay: `${delay}s` }}>
    <div className="req-user">
      <div className="req-avatar">
        <img src={person.avatar} alt={person.name} />
      </div>
      <div className="req-names">
        <span className="req-name">{person.name}</span>
        <span className="req-child">{person.child}</span>
      </div>
    </div>

    <div className="req-tags">
      {person.tags.map((tag) => (
        <span key={tag} className="req-tag">{tag}</span>
      ))}
    </div>

    <div className="req-actions">
      <button type="button" className="req-btn solid">{primaryBtn}</button>
      <button type="button" className="req-btn outline">{secondaryBtn}</button>
    </div>
  </article>
);

const Requests = () => {
  return (
    <>
      <TopParent />
      <main className="requests-page">
        <Link to="/parentcontrol" className="requests-back" aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <section className="requests-section">
          <h2 className="requests-title">Requests</h2>
          <PersonCard
            person={requestItem}
            variant="request"
            primaryBtn="Accept"
            secondaryBtn="Decline"
            delay={0.05}
          />
        </section>

        <section className="requests-section">
          <h2 className="requests-title">Suggestions</h2>
          {suggestions.map((person, index) => (
            <PersonCard
              key={person.id}
              person={person}
              variant="suggestion"
              primaryBtn="Request"
              secondaryBtn="Remove"
              delay={0.1 + index * 0.07}
            />
          ))}
        </section>
      </main>
      <NavParent />
    </>
  );
};

export default Requests;
