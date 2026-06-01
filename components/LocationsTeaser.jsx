import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

const locations = [
  { num:'01', name:'The Original', area:'Banjara Hills · Flagship', desc:'The roastery is in the back, the bar is at the front, and the smell of freshly ground single-origin coffee hits you before you reach the door.', hours:'8:00 AM – 11:00 PM' },
  { num:'02', name:'The Loft',     area:'Jubilee Hills · Dining',   desc:'A full kitchen, an intimate loft space for private events, and our most extensive brunch menu. Designed for guests who linger.',              hours:'8:00 AM – 11:00 PM' },
  { num:'03', name:'The Kiosk',    area:'Hitech City · Express',    desc:"Purpose-built for the morning rush. Same quality, same beans, same training — just faster.",                                                    hours:'6:30 AM – 8:00 PM'  },
];

export default function LocationsTeaser() {
  return (
    <section className="locations-teaser">
      <div className="lt-ghost">LOCATIONS</div>

      <FadeUp>
        <div className="lt-header">
          <div>
            <p className="lt-eyebrow">Our Locations</p>
            <h2 className="lt-heading">Three spaces,<br />one <em>spirit.</em></h2>
          </div>
          <div className="lt-meta">
            <strong>3</strong>
            <span>Branches across<br />the city</span>
          </div>
        </div>
      </FadeUp>

      <div className="lt-grid">
        {locations.map((loc, i) => (
          <motion.div
            className="lt-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, backgroundColor: 'rgba(255,253,248,0.055)' }}
          >
            <span className="lt-num">{loc.num}</span>
            <h3 className="lt-name">{loc.name}</h3>
            <span className="lt-area">{loc.area}</span>
            <p className="lt-desc">{loc.desc}</p>
            <div className="lt-hours">
              Mon – Sun <span>{loc.hours}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <FadeUp delay={0.2}>
        <div className="lt-cta-row">
          <Link href="/locations" className="btn-ghost">
            View All Locations →
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}