import React from 'react';
import './StoriesKids.css';
import ProfilePic from '../Assets/profile.svg';
import Profile1 from '../Assets/profile1.svg';
import Profile2 from '../Assets/profile2.svg';
import Profile3 from '../Assets/profile3.svg';
import FriendPic from '../Assets/friend.svg';

const KidsStoryBar = () => {
  
  const stories = [
    { id: 1, name: 'Ahmed', img: ProfilePic },
    { id: 2, name: 'Moustafa', img: Profile1 },
    { id: 3, name: 'Ali', img: Profile2 },
    { id: 4, name: 'Mohamed', img: Profile3 },
    { id: 5, name: 'Omar', img: FriendPic },
    { id: 6, name: 'Ziad', img: Profile1 },
    { id: 7, name: 'Hassan', img: Profile2 },
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