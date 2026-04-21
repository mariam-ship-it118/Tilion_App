import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import './ActivitySelection.css';

const ActivitySelection = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const isAr = language === 'AR';

  const activitiesList = [
    { id: 1, name: isAr ? 'الرياضة' : 'Sports', icon: '⚽' },
    { id: 2, name: isAr ? 'الفنون والحرف' : 'Arts & Crafts', icon: '🎨' },
    { id: 3, name: isAr ? 'الألعاب' : 'Gaming', icon: '🎮' },
    { id: 4, name: isAr ? 'القراءة' : 'Reading', icon: '📚' },
    { id: 5, name: isAr ? 'الموسيقى' : 'Music', icon: '🎵' },
    { id: 6, name: isAr ? 'العلوم' : 'Science', icon: '🔬' },
    { id: 7, name: isAr ? 'الطبخ' : 'Cooking', icon: '🍳' },
    { id: 8, name: isAr ? 'البرمجة' : 'Coding', icon: '💻' },
    { id: 9, name: isAr ? 'الطبيعة' : 'Nature', icon: '🌿' },
    { id: 10, name: isAr ? 'التصوير' : 'Photography', icon: '📷' },
  ];

  const toggleActivity = (id) => {
    if (selectedActivities.includes(id)) {
      setSelectedActivities(selectedActivities.filter(activityId => activityId !== id));
    } else {
      setSelectedActivities([...selectedActivities, id]);
    }
  };

  return (
    <div className="act-sel-container act-sel-fade-in" dir={isAr ? 'rtl' : 'ltr'}>
      <nav className="act-sel-top-nav" style={{ display: 'flex', justifyContent: isAr ? 'flex-end' : 'flex-start' }}>
        <button className="act-sel-back-btn" aria-label="Go back" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>
            <path d="M15 18L9 12L15 6" stroke="#161A30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      <div className="act-sel-content-wrapper">
        <h2 className="act-sel-welcome-title act-sel-slide-up">
          {isAr ? 'ماذا تحب؟' : 'What do you love?'}
        </h2>
        <p className="act-sel-subtitle-text act-sel-slide-up">
          {isAr ? 'اختر أنشطتك المفضلة لتخصيص تجربتك.' : 'Select your favorite activities to personalize your experience.'}
        </p>

        <div className="act-sel-grid act-sel-slide-up-delayed">
          {activitiesList.map(activity => (
            <div 
              key={activity.id}
              className={`act-sel-card ${selectedActivities.includes(activity.id) ? 'act-sel-selected' : ''}`}
              onClick={() => toggleActivity(activity.id)}
            >
              <span className="act-sel-icon">{activity.icon}</span>
              <span className="act-sel-name">{activity.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="act-sel-footer act-sel-slide-up-delayed-2">
        <Link to="/home">
          <button className="act-sel-next-btn">
            {isAr ? 'التالي' : 'Next'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ActivitySelection;
