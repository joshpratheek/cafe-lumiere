import { useEffect, useRef } from 'react';

const locations = [
  {
    num: '01',
    name: 'The Original',
    area: 'Banjara Hills · Flagship',
    address: '12, Road No. 2, Banjara Hills, Hyderabad — 500034',
    phone: '+91 98765 43210',
    email: 'banjara@cafelumiere.in',
    hours: { weekday: '8:00 AM – 11:00 PM', weekend: '7:30 AM – 11:30 PM' },
    desc: 'The roastery is in the back, the bar is at the front, and the smell of freshly ground single-origin coffee hits you before you reach the door. This is where it all began.',
    features: ['Full Roastery', 'Bar Seating', 'Private Events', 'Outdoor Patio'],
    mapUrl: 'https://maps.google.com/?q=Banjara+Hills+Hyderabad',
  },
  {
    num: '02',
    name: 'The Loft',
    area: 'Jubilee Hills · Dining',
    address: '45, Road No. 36, Jubilee Hills, Hyderabad — 500033',
    phone: '+91 98765 43211',
    email: 'jubilee@cafelumiere.in',
    hours: { weekday: '8:00 AM – 11:00 PM', weekend: '8:00 AM – 11:30 PM' },
    desc: 'A full kitchen, an intimate loft space for private events, and our most extensive brunch menu. Designed for guests who linger.',
    features: ['Full Kitchen', 'Loft Space', 'Brunch Menu', 'Private Dining'],
    mapUrl: 'https://maps.google.com/?q=Jubilee+Hills+Hyderabad',
  },
  {
    num: '03',
    name: 'The Kiosk',
    area: 'Hitech City · Express',
    address: 'Ground Floor, Cyber Towers, Hitech City, Hyderabad — 500081',
    phone: '+91 98765 43212',
    email: 'hitechcity@cafelumiere.in',
    hours: { weekday: '6:30 AM – 8:00 PM', weekend: '7:00 AM – 6:00 PM' },
    desc: "Purpose-built for the morning rush. Same quality, same beans, same training — just faster. For the days when the city doesn't slow down.",
    features: ['Express Counter', 'Takeaway', 'Pre-order', 'Bean Retail'],
    mapUrl: 'https://maps.google.com/?q=Hitech+City+Hyderabad',
  },
];

export default function Locations() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.loc-reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('loc-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="locations-page" ref={ref}>

      <div className="loc-header loc-reveal">
        <div className="loc-header-left">
          <p className="loc-eyebrow">Our Locations</p>
          <h1 className="loc-heading">
            Three spaces,<br />one <em>spirit.</em>
          </h1>
        </div>
        <div className="loc-header-right">
          <p>Every Café Lumière location is designed with the same obsession — great coffee, warm spaces, and people who care. Find us across Hyderabad.</p>
        </div>
      </div>

      {locations.map((loc, i) => (
        <div className={`loc-card-full loc-reveal ${i % 2 === 1 ? 'loc-card-reverse' : ''}`} key={i}>

          <div className="loc-map" style={{
  backgroundImage: `url("/images/cafe-${i + 1}.png")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}>
  <div className="loc-map-overlay" />
  <div className="loc-map-inner">
    <div className="loc-map-pin">
      <span className="loc-map-pin-dot" />
      <span className="loc-map-pin-label">{loc.name}</span>
    </div>
    <p className="loc-map-address">{loc.address}</p>
    <a href={loc.mapUrl} target="_blank" className="loc-map-btn">
      Open in Google Maps →
    </a>
  </div>
  <div className="loc-map-num">{loc.num}</div>
</div>

          <div className="loc-info">
            <span className="loc-num">{loc.num}</span>
            <h2 className="loc-name">{loc.name}</h2>
            <span className="loc-area">{loc.area}</span>
            <p className="loc-desc">{loc.desc}</p>

            <div className="loc-features">
              {loc.features.map((f, j) => (
                <span className="loc-feature" key={j}>{f}</span>
              ))}
            </div>

            <div className="loc-hours-block">
              <p className="loc-hours-title">Hours</p>
              <div className="loc-hours-row">
                <span>Monday – Friday</span>
                <span>{loc.hours.weekday}</span>
              </div>
              <div className="loc-hours-row">
                <span>Saturday – Sunday</span>
                <span>{loc.hours.weekend}</span>
              </div>
            </div>

            <div className="loc-contact">
              <a href={`tel:${loc.phone}`} className="loc-contact-item">
                <span className="loc-contact-icon">📞</span>
                <span>{loc.phone}</span>
              </a>
              <a href={`mailto:${loc.email}`} className="loc-contact-item">
                <span className="loc-contact-icon">✉</span>
                <span>{loc.email}</span>
              </a>
            </div>

            <a href={loc.mapUrl} target="_blank" className="btn-fill loc-directions-btn">
              Get Directions
            </a>
          </div>

        </div>
      ))}

    </section>
  );
}