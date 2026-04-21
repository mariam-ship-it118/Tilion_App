import React, { useState } from 'react';
import './PostsKids.css';

const KidsSocialPost = ({ profilePic, username, nickname, postDate, postTime, caption, postImage, initialLikes, isLikedByMe }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(isLikedByMe);
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = (e) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300; 
    if (now - lastTap < DOUBLE_TAP_DELAY) {
      handleLike();
    }
    setLastTap(now);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="friend-post">
      <div className="post-header">
        <div className="profile-info">
          <img src={profilePic} alt={username} className="author-avatar" />
          <div className="name-and-tag">
            <span className="author-name">{username}</span>
            <span className="buddy-tag">{nickname} ✨</span>
          </div>
        </div>
        <div className="post-metadata">
          <span className="post-timestamp">{postDate}, {postTime} ago</span>
        </div>
      </div>
      <div className="post-content">
        <p className="post-caption">{caption} 😊</p>
        <div className="image-wrapper" onClick={handleDoubleTap}>
          <img src={postImage} alt="Post image" className="post-photo" />
          <div className={`heart-animation ${isLiked ? 'liked' : ''}`}>
             <i className="far fa-heart big-heart"></i>
          </div>
        </div>
      </div>
      <div className="post-footer">
        <div className="interaction-icons">
          <button onClick={handleLike} className="like-button">
            <i className={isLiked ? "fas fa-heart heart-liked" : "far fa-heart heart-default"}></i>
          </button>
          <button className="options-button">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
        <span className="like-count">{likes} fun points</span>
      </div>
    </div>
  );
};

export default KidsSocialPost;