import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function StoryTeaser() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.st-reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('st-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="story-teaser" ref={ref}>
      <div className="st-img-col st-reveal">
        <img src="/images/about-roastery.png" alt="Café Lumière roastery" />
        <div className="st-img-overlay" />
        <div className="st-year">
          <span className="st-year-num">2009</span>
          <span className="st-year-label">Est. in the old quarter</span>
        </div>
      </div>

      <div className="st-content-col st-reveal">
        <p className="st-eyebrow">Our Roots</p>
        <h2 className="st-heading">
          Brewed from<br /><em>obsession,</em><br />not convenience.
        </h2>
        <p className="st-body">
          Café Lumière was born in a narrow lane in the old quarter — a single
          espresso machine, two stools, and a founder who believed a truly great
          cup of coffee could change someone's entire morning. Fifteen years on,
          that belief hasn't changed.
        </p>
        <div className="st-founder">
          <div className="st-founder-avatar">
            <img src="/images/founder.png" alt="Arjun Mehta" />
          </div>
          <div>
            <span className="st-founder-name">Arjun Mehta</span>
            <span className="st-founder-role">Founder & Head Roaster</span>
          </div>
        </div>
        <Link href="/story" className="btn-fill st-cta">
          Read Our Story
        </Link>
      </div>
    </section>
  );
}