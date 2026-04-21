import React, { useState } from 'react';
import './TutorialVid.css';
import CoverImg from "../Assets/coverimg.svg"; 

const SocialFeedBundle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  
  const handleMediaPlay = () => {
    setIsPlaying(true);
  };

  return (
    <main className="content-app-wrapper" role="main">
      <article className="app-post-container">
        {}
        <header className="post-header-info">
          <h1 className="activity-title-text">Secret keychain</h1>
        </header>

        {}
        <figure className="media-frame-primary">
          <img 
            src={CoverImg} 
            alt="Handmade miniature book keychain DIY project" 
            className="ui-rounded-img"
            loading="lazy"
          />
        </figure>

        {}
        <section className="tutorial-v-wrapper" aria-label="DIY Video Tutorial">
          <h2 className="sub-heading-info">Tutorial</h2>
          <div className="player-aspect-box">
            {!isPlaying ? (
              <div className="video-thumb-overlay" onClick={handleMediaPlay}>
                <img 
                  src={CoverImg}
                  alt="Play mini book tutorial" 
                  className="ui-rounded-img blurred-media"
                />
                <button className="btn-play-trigger" aria-label="Play video">
                  <div className="play-triangle"></div>
                </button>
              </div>
            ) : (
              <iframe 
                className="active-media-stream"
                src="https://www.youtube.com/embed/your-video-id?autoplay=1" 
                title="Miniature Book Tutorial"
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </section>

        {}
        <section className="step-gallery-grid" aria-label="Step by step instructions">
          <div className="grid-media-canvas">
            <img 
              src="/path-to-instruction-grid.jpg" 
              alt="Detailed steps for making a secret keychain journal" 
              className="ui-rounded-img"
            />
            {}
            <div className="icon-badge-float">
              <svg className="svg-cam-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
              </svg>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default SocialFeedBundle;