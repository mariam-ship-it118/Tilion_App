import React from 'react';
import './StoriesKids.css';
const KidsStoryBar = () => {
  
  const stories = [
    { id: 1, name: 'Ahmed', img: 'https://placehold.co/100x100/png' },
    { id: 2, name: 'Ahmed', img: 'https://placehold.co/100x100/png' },
    { id: 3, name: 'Ahmed', img: 'https://placehold.co/100x100/png' },
    { id: 4, name: 'Ahmed', img: 'https://placehold.co/100x100/png' },
    { id: 5, name: 'Ahmed', img: 'https://placehold.co/100x100/png' },
    { id: 6, name: 'Ahmed', img: 'https://placehold.co/100x100/png' },
    { id: 7, name: 'Ahmed', img: 'https://placehold.co/100x100/png' },
  ];

  return (
    <div className="play-pals-container">
      <div className="buddy-scroll-track">
        {stories.map((story) => (
          <div key={story.id} className="buddy-story-wrapper">
            <div className="magic-ring">
              <div className="avatar-bubble">
                <img 
                  src={story.img} 
                  alt={story.name} 
                  className="buddy-portrait" 
                />
              </div>
            </div>
            <span className="buddy-name">{story.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsStoryBar;