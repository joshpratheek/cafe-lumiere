import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function LocationsTeaser() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.lt-reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('lt-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const locations = [
    {
      num: '01',
      name: 'The Original',
      area: 'Banjara Hills · Flagship',
      desc: 'The roastery is in the back, the bar is at the front, and the smell of freshly ground single-origin coffee hits you before you reach the door.',
      hours: '8:00 AM – 11:00 PM',
    },
    {
      num: '02',
      name: 'The Loft',
      area: 'Jubilee Hills · Dining',
      desc: 'A full kitchen, an intimate loft space for private events, and our most extensive brunch menu. Designed for guests who linger.',
      hours: '8:00 AM – 11:00 PM',
    },
    {
      num: '03',
      name: 'The Kiosk',
      area: 'Hitech City · Express',
      desc: 'Purpose-built for the morning rush. Same quality, same beans, same training — just faster. For the days when the city doesn\'t slow down.',
      hours: '6:30 AM – 8:00 PM',
    },
  ];

  return (
    <section className="locations-teaser" ref={ref}>

      {/* ghost backdrop */}
      <div className="lt-ghost">LOCATIONS</div>

      <div className="lt-header lt-reveal">
        <div>
          <p className="lt-eyebrow">Our Locations</p>
          <h2 className="lt-heading">Three spaces,<br />one <em>spirit.</em></h2>
        </div>
        <div className="lt-meta">
          <strong>3</strong>
          <span>Branches across<br />the city</span>
        </div>
      </div>

      <div className="lt-grid">
        {locations.map((loc, i) => (
          <div className="lt-card lt-reveal" key={i}>
            <span className="lt-num">{loc.num}</span>
            <h3 className="lt-name">{loc.name}</h3>
            <span className="lt-area">{loc.area}</span>
            <p className="lt-desc">{loc.desc}</p>
            <div className="lt-hours">
              Mon – Sun <span>{loc.hours}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="lt-cta-row lt-reveal">
        <Link href="/locations" className="btn-ghost">
          View All Locations →
        </Link>
      </div>

    </section>
  );
}