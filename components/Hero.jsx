import Steam from './Steam';

import { useEffect, useRef, useState } from 'react';

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function Hero() {
  const slide1   = useRef(null);
  const heroBg   = useRef(null);
  const progress = useRef(null);
  const gone     = useRef(false);

  const [counting, setCounting] = useState(false);

  // ── call hooks at top level ──
  const years     = useCounter(15, 1500, counting);
  const locations = useCounter(3,  1000, counting);

  useEffect(() => {
    const d0 = document.getElementById('d0');
    const d1 = document.getElementById('d1');

    function toSlide2() {
      if (gone.current) return;
      gone.current = true;
      if (slide1.current) slide1.current.classList.add('up');
      setTimeout(() => heroBg.current?.classList.add('show'), 650);
      setTimeout(() => {
        const marquee = document.getElementById('marqueeStrip');
        if (marquee) marquee.classList.add('visible');
      }, 1000);
      if (d0) d0.classList.remove('on');
      if (d1) d1.classList.add('on');
    }

    setTimeout(() => progress.current?.classList.add('go'), 80);
    setTimeout(toSlide2, 3000);
    setTimeout(() => setCounting(true), 1000);

    const handleKey = e => {
      if ((e.key === 'ArrowDown' || e.key === ' ') && !gone.current) toSlide2();
    };
    const handleClick = () => {
      if (!gone.current) {
        progress.current.style.transition = 'none';
        progress.current.style.width = '100%';
        setTimeout(toSlide2, 60);
      }
    };

    slide1.current?.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      slide1.current?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="slide-dots">
        <div className="slide-dot on" id="d0"></div>
        <div className="slide-dot" id="d1"></div>
      </div>

      {/* Slide 1 — Intro */}
      <div className="intro-slide" id="slide1" ref={slide1}>
        <div className="intro-bg"></div>
        <div className="intro-vignette-top"></div>
        <div className="intro-vignette-bottom"></div>
        <div className="intro-body">
          <div className="intro-tag">Artisan Café &amp; Roastery · Est. 2009</div>
          <h1 className="intro-title">
            A place that<br />feels like <em>home.</em>
          </h1>
          <div className="intro-row">
            <p className="intro-sub">
              Come for the coffee. Stay for the warmth. Return because nothing else quite compares.
            </p>
            <div className="intro-stats">
              <div>
                <span className="intro-stat-num">{years}+</span>
                <span className="intro-stat-label">Years Brewing</span>
              </div>
              <div>
                <span className="intro-stat-num">4.9★</span>
                <span className="intro-stat-label">Guest Rating</span>
              </div>
              <div>
                <span className="intro-stat-num">{locations}</span>
                <span className="intro-stat-label">Locations</span>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-progress">
          <div className="intro-progress-fill" ref={progress} id="pf"></div>
        </div>
      </div>

      {/* Slide 2 — Main Hero */}
      <div className="main-hero" id="slide2">
        <div className="main-hero-bg" ref={heroBg} id="heroBgImage"></div>
        <div className="main-hero-vignette-top"></div>
        <div className="main-hero-vignette"></div>
        <div className="main-hero-body">
          <div className="main-hero-eyebrow">
            Single Origin · Hand Poured · Made with Love
          </div>
          <h2 className="main-hero-title">
            Every pour,<br />a little <em>warmer.</em>
          </h2>
          <div className="main-hero-buttons">
            <a href="/menu"  className="btn-fill">Explore the Menu</a>
            <a href="/story" className="btn-ghost">Our Story</a>
          </div>
        </div>
        <div className="main-hero-hint">
          <div className="hint-dot"></div>Discover More
        </div>
      </div>

      {/* Slide 2 — Main Hero */}
      <div className="main-hero" id="slide2">
        <div className="main-hero-bg" ref={heroBg} id="heroBgImage"></div>
        <div className="main-hero-vignette-top"></div>
        <div className="main-hero-vignette"></div>
        <Steam />
        <div className="main-hero-body">
          <div className="main-hero-eyebrow">
            Single Origin · Hand Poured · Made with Love
          </div>
          <h2 className="main-hero-title">
            Every pour,<br />a little <em>warmer.</em>
          </h2>
          <div className="main-hero-buttons">
            <a href="/menu"  className="btn-fill">Explore the Menu</a>
            <a href="/story" className="btn-ghost">Our Story</a>
          </div>
        </div>
        <div
  className="main-hero-hint"
  onClick={() => document.getElementById('home-content')?.scrollIntoView({ behavior: 'smooth' })}
  style={{ cursor: 'pointer' }}
>
  <div className="hint-dot"></div>Scroll to Discover
</div>
      </div>
    </section>
  );
}
