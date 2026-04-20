import React from 'react';
import './ActivityCards.css';
import Painting from '../Assets/painting.svg';
import Crafting from '../Assets/crafting.svg';
import Crochet from '../Assets/crochet.svg';
import French from '../Assets/french.svg';
import Arabic from '../Assets/arabic.svg';
import Doodling from '../Assets/doodling.svg';
// icons
import Croch from '../Assets/cut.svg';
import Paint from '../Assets/paint.svg';
import Lang from '../Assets/lang.svg';
import LangAr from '../Assets/lang_ar.svg';
import Doodle from '../Assets/doodle.svg';
const activities = [
  {
    id: 1,
    title: 'Crafting',
    mainImg: Crochet,
    iconImg: Croch,
    themeClass: 'theme-crafting'
  },

  {
    id: 2,
    title: 'Painting',
    mainImg: Crafting,
    iconImg: Paint,
    themeClass: 'theme-painting'
  },
  {
    id: 3,
    title: 'Crochet',
    mainImg: Crochet,
    iconImg: Croch,
    themeClass: 'theme-crochet'
  },
  {
    id: 4,
    title: 'French',
    mainImg: French,
    iconImg: Lang,
    themeClass: 'theme-french'
  },
  {
    id: 5,
    title: 'Doodling',
    mainImg: Doodling,
    iconImg: Doodle,
    themeClass: 'theme-crafting'
  },
  {
    id: 6,
    title: 'Painting',
    mainImg: Painting,
    iconImg: Paint,
    themeClass: 'theme-painting'
  },
  {
    id: 7,
    title: 'Arabic',
    mainImg: Arabic,
    iconImg: LangAr,
    themeClass: 'theme-crochet'
  }
];

const ActivityList = () => {
  return (
    <div className="activity-container">
      <div className="activity-list">
        {activities.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <div className="activity-image-wrapper">
              <img 
                className="activity-main-img" 
                src={activity.mainImg} 
                alt={`${activity.title} background`} 
              />
              <div className="activity-icon-badge">
                <img 
                  className="activity-icon-img" 
                  src={activity.iconImg} 
                  alt={`${activity.title} icon`} 
                />
              </div>
            </div>
            <div className={`activity-footer ${activity.themeClass}`}>
              <span className="activity-title">{activity.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;