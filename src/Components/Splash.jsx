import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';
import Logo from '../Assets/logo.svg';

const LOADER_DURATION = 3200;
const EXIT_DELAY = 700;

const SplashScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now) => {
      const elapsed = now - startTime;
      const nextProgress = Math.min(100, (elapsed / LOADER_DURATION) * 100);
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      setIsExiting(true);
      window.setTimeout(() => navigate('/accounts'), EXIT_DELAY);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [navigate]);

  return (
    <div className={`splash-screen${isExiting ? ' splash-screen--exit' : ''}`}>
      <div className="splash-bg-layer splash-bg-layer--one" aria-hidden="true" />
      <div className="splash-bg-layer splash-bg-layer--two" aria-hidden="true" />

      <main className="splash-content">
        <section className="splash-hero">
          <div className="splash-logo-orbit" aria-hidden="true" />
          <div className="splash-logo-wrap">
            <img src={Logo} alt="TILION" className="splash-logo" />
            <span className="splash-star-glow" aria-hidden="true" />
          </div>

          <div className="splash-taglines">
            <p className="splash-tagline splash-tagline--one">Guarded with love</p>
            <p className="splash-tagline splash-tagline--two">Shinning like the moon</p>
          </div>
        </section>

        <footer className="splash-loader-wrap">
          <div className="splash-loader-track">
            <div
              className="splash-loader-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SplashScreen;
