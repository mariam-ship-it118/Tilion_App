import React, { useState, useEffect } from 'react';
import './CallScreen.css';
import { Link } from 'react-router-dom';

import ProfilePic from "../../Assets/friend.svg";
import Mute from "../../Assets/mute.svg";
import Video from "../../Assets/vidswitch.svg";
import Add from "../../Assets/addcontact.svg";
import Message from "../../Assets/chatswitch.svg";
import Hold from "../../Assets/hold.svg";
import Speaker from "../../Assets/speaker.svg";
import End from "../../Assets/endcall.svg";



const CallScreen = () => {
  const [status, setStatus] = useState('Calling...');
  const [seconds, setSeconds] = useState(0);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    
    const ringTimer = setTimeout(() => {
      setStatus('Ringing...');
    }, 2000);

    
    const connectTimer = setTimeout(() => {
      setStatus('');
      setIsLive(true);
    }, 5000);

    return () => {
      clearTimeout(ringTimer);
      clearTimeout(connectTimer);
    };
  }, []);

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (isLive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLive]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="berry-wrapper">
    
      <title>SafeSpace | The Fun Social App for Kids</title>
      <meta name="description" content="A safe, creative social media experience for kids aged 7-13. Connect with friends and share your world!" />

      <div className="spark-top-bar">
        <Link to="/chat/:userId">
        <button className="cloud-back-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        </Link>
      </div>

      <div className="jelly-profile-section">
        <div className="bubble-avatar-frame">
          <img 
            src={ProfilePic} 
            alt="Omar Bus Avatar" 
            className="berry-img"
          />
        </div>
        <h1 className="cloud-user-title">Omar Bus</h1>
        <p className={`spark-status-text ${!isLive ? 'pulse-anim' : ''}`}>
          {isLive ? '' : status}
        </p>
        <p className="berry-timer">{formatTime(seconds)}</p>
      </div>

      <div className="cloud-action-grid">
        <div className="jelly-action-item">
          <div className="spark-icon-box muted">
            <img src={Video} alt="" />
          </div>
          <span>video</span>
        </div>
        <div className="jelly-action-item">
          <div className="spark-icon-box">
            <img src={Add} alt="" />
          </div>
          <span>Add person</span>
        </div>
        <div className="jelly-action-item">
          <div className="spark-icon-box">
            <img src={Speaker} alt="" />
          </div>
          <span>Speaker</span>
        </div>
        <div className="jelly-action-item">
          <div className="spark-icon-box">
            <img src={Message} alt="" />
          </div>
          <span>message</span>
        </div>
        <div className="jelly-action-item">
          <div className="spark-icon-box">
            <img src={Hold} alt="" />
          </div>
          <span>Hold</span>
        </div>
        <div className="jelly-action-item">
          <div className="spark-icon-box">
            <img src={Mute} alt="" />
          </div>
          <span>Mute</span>
        </div>
      </div>

      <div className="berry-footer">
        <button className="jelly-hangup-btn">
          <img src={End} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CallScreen;