import React, { useState, useEffect } from 'react';
import NavParent from '../../Components/NavParent';
import './Communication.css';
import Like from '../../Assets/like.svg';
import Comment from '../../Assets/comment.svg';
import Repost from '../../Assets/repost.svg';
import Menu from '../../Assets/menu.svg';
import TopParent from '../../Components/TopParent';
import parentAvatar from '../../Assets/parentprofile.svg';
import friendParent from '../../Assets/friendparent.svg';
import profile1 from '../../Assets/profile1.svg';
import profile2 from '../../Assets/profile2.svg';
import profile3 from '../../Assets/profile3.svg';
import friendAvatar from '../../Assets/friend.svg';
import childProfile from '../../Assets/profile.svg';

const initialPosts = [
  {
    id: 1,
    avatar: friendParent,
    name: 'Hoda Soheil',
    handle: '@hoda220',
    time: '12h ago',
    text: 'My child does not understand French from class and both parents went to English schools. Does anyone know a good French tutor?',
  },
  {
    id: 2,
    avatar: parentAvatar,
    name: 'Fatima Hassan',
    handle: '@fatima_h',
    time: '10h ago',
    text: 'Looking for a weekend robotics club near Maadi. My son loved the school workshop and wants to keep going!',
  },
  {
    id: 3,
    avatar: profile1,
    name: 'Nadia Ibrahim',
    handle: '@nadia_i',
    time: '9h ago',
    text: 'Anyone else struggling with screen time before homework? We started a 30-minute craft break and it helped a lot.',
  },
  {
    id: 4,
    avatar: profile2,
    name: 'Layla Mahmoud',
    handle: '@layla_m',
    time: '7h ago',
    text: 'Thank you to the parent who recommended the book club at the community center. My daughter made two new friends there.',
  },
  {
    id: 5,
    avatar: friendAvatar,
    name: 'Hana Khalil',
    handle: '@hana_k',
    time: '5h ago',
    text: 'Would your kids like a Saturday playdate at the park? Thinking of organizing something for ages 8–11.',
  },
  {
    id: 6,
    avatar: profile3,
    name: 'Samira Yousef',
    handle: '@samira_y',
    time: '4h ago',
    text: 'I found a great after-school art program in Zamalek. Happy to share the contact if anyone is interested.',
  },
  {
    id: 7,
    avatar: childProfile,
    name: 'Amira Saeed',
    handle: '@amira_s',
    time: '2h ago',
    text: 'Coffee next Tuesday with other parents? Would love to swap tips about balancing school apps and free time.',
  },
  {
    id: 8,
    avatar: parentAvatar,
    name: 'Zahra Mansour',
    handle: '@zahra_m',
    time: '1h ago',
    text: 'The kids had so much fun at the science fair yesterday. Huge thanks to everyone who volunteered!',
  },
  {
    id: 9,
    avatar: friendParent,
    name: 'Mona Rashid',
    handle: '@mona_r',
    time: '45m ago',
    text: "Let's coordinate for the school trip next month. I can help with the permission forms if needed.",
  },
];

const KidsSocialFeed = () => {
  const [feedActive, setFeedActive] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [showPost, setShowPost] = useState(false);
  const [draft, setDraft] = useState('');

  useEffect(() => {
    const loadTimer = setTimeout(() => setFeedActive(true), 100);
    return () => clearTimeout(loadTimer);
  }, []);

  const handlePost = () => {
    if (!draft.trim()) return;

    setPosts([
      {
        id: Date.now(),
        avatar: parentAvatar,
        name: 'You',
        handle: '@parent',
        time: 'Just now',
        text: draft.trim(),
        own: true,
      },
      ...posts,
    ]);
    setDraft('');
    setShowPost(false);
  };

  const handleDelete = (id) => {
    setPosts((current) => current.filter((post) => post.id !== id));
  };

  return (
    <>
      <TopParent />
      <div className="vibe-wrapper">
        <header className="vibe-community-header">
          <h1>Community</h1>
          <button type="button" className="vibe-post-btn" onClick={() => setShowPost(true)}>
            + Post
          </button>
        </header>

        <div className={`vibe-scroll-area ${feedActive ? 'vibe-fade-in' : ''}`}>
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="vibe-post-block vibe-post-animate"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="vibe-post-layout">
                <div className="vibe-pfp-space">
                  <img src={post.avatar} alt="" className="vibe-pfp-img" />
                </div>
                <div className="vibe-post-main">
                  <div className="vibe-user-row">
                    <div className="vibe-name-stack">
                      <span className="vibe-display-name">{post.name}</span>
                      <span className="vibe-handle">{post.handle}</span>
                    </div>
                    <span className="vibe-timestamp">{post.time}</span>
                  </div>
                  <p className="vibe-body-text">{post.text}</p>
                  <div className="vibe-interaction-bar">
                    <img src={Like} alt="" className="vibe-action-icon" />
                    <img src={Repost} alt="" className="vibe-action-icon" />
                    <img src={Comment} alt="" className="vibe-action-icon" />
                    {post.own ? (
                      <button
                        type="button"
                        className="vibe-delete-btn"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </button>
                    ) : (
                      <img src={Menu} alt="" className="vibe-more-icon" />
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showPost && (
          <div className="vibe-post-modal" onClick={() => setShowPost(false)}>
            <div className="vibe-post-panel" onClick={(e) => e.stopPropagation()}>
              <h2>Create Post</h2>
              <textarea
                className="vibe-post-input"
                placeholder="Share something with the community..."
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={5}
              />
              <div className="vibe-post-actions">
                <button type="button" className="vibe-post-cancel" onClick={() => setShowPost(false)}>
                  Cancel
                </button>
                <button type="button" className="vibe-post-submit" onClick={handlePost}>
                  Post
                </button>
              </div>
            </div>
          </div>
        )}

        <section className="vibe-seo-data">
          <h2>Kid-Safe Social Learning Hub</h2>
          <p>
            A protected community for kids aged 7 to 13 to share educational tips, find language tutors,
            and connect with fellow students in a safe social media environment.
          </p>
        </section>
      </div>
      <br />
      <br />
      <br />
      <NavParent />
    </>
  );
};

export default KidsSocialFeed;
