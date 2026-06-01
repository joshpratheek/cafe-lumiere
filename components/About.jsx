import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

const splitWords = (text) =>
  text.split(' ').map((word, i) => (
    <motion.span
      key={i}
      style={{ display: 'inline-block', marginRight: '0.25em' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {word}
    </motion.span>
  ));

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.a-reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('a-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={ref}>

      {/* Part A — Founder Story */}
      <div className="about-a">

        {/* Image with hover zoom */}
        <FadeUp className="about-a-img">
          <motion.img
            src="/images/about-roastery.png"
            alt="Café Lumière roastery interior"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ width:'100%', height:'100%', objectFit:'cover',
              filter:'sepia(18%) contrast(1.08) brightness(.88)', display:'block' }}
          />
          <div className="year-stamp">
            <span className="year-stamp-num">2009</span>
            <span className="year-stamp-label">Est. in the old quarter</span>
          </div>
        </FadeUp>

        <FadeUp className="about-a-content" delay={0.15}>
          <p className="about-eyebrow">Our Roots</p>
          <h2 className="about-heading">
            {splitWords('Brewed from obsession, not convenience.')}
          </h2>
          <p className="about-body">
            Café Lumière was born in a narrow lane in the old quarter — a single espresso machine,
            two stools, and a founder who believed a truly great cup of coffee could change someone's
            entire morning. Fifteen years on, that belief hasn't changed. We still source every bean
            by hand, roast in small batches twice a week, and train every barista for three months
            before they touch the machine.
          </p>
          <div className="founder-sig">
            <div className="founder-avatar">
              <img src="/images/founder.png" alt="Arjun Mehta, founder" />
            </div>
            <div>
              <span className="founder-name">Arjun Mehta</span>
              <span className="founder-role">Founder & Head Roaster · Café Lumière</span>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Part B — Roasting Process */}
      <div className="about-process">
        <FadeUp className="about-process-header">
          <p className="about-eyebrow">How We Roast</p>
          <h2 className="about-heading">
            {splitWords('From the farm, to your cup.')}
          </h2>
          <p className="about-process-sub">
            Every bean we serve has a story. Here's how it gets from the source to your table.
          </p>
        </FadeUp>
        <div className="process-steps">
          {[
            { num:'01', title:'Source', desc:'We visit farms directly — Ethiopia, Colombia, Guatemala. Every harvest we cup 40+ samples and choose fewer than 6. Only the exceptional makes it here.' },
            { num:'02', title:'Roast',  desc:'Small batches, twice a week. Our roaster has been with us since 2011. He knows every bean by name. Nothing is roasted more than 5 days before it reaches you.' },
            { num:'03', title:'Rest',   desc:'Fresh-roasted coffee needs time. We rest every batch for 48 hours minimum — this lets CO₂ off-gas and flavours settle into their full expression.' },
            { num:'04', title:'Brew',   desc:'Every barista trains for three months before they pull a shot. Grind size, water temperature, extraction time — dialled to the gram, every single time.' },
          ].map((step, i) => (
            <motion.div
              className="process-step"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: 'rgba(255,253,248,0.055)', y: -4 }}
            >
              <span className="process-num">{step.num}</span>
              <div className="process-line" />
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part C — Values */}
      <div className="about-values">
        <FadeUp className="about-values-header">
          <p className="about-eyebrow">What We Stand For</p>
          <h2 className="about-heading">
            {splitWords('Three beliefs that drive everything.')}
          </h2>
        </FadeUp>
        <div className="values-grid">
          {[
            { icon:'◈', title:'Quality over speed',   desc:'We will never rush a cup. If the grind is wrong, we reset. If the milk isn\'t right, we re-steam. Every cup deserves the same attention as the first.' },
            { icon:'◉', title:'People over profit',   desc:'We pay our farmers above fair-trade rates. We pay our baristas above industry average. Great coffee starts with treating people well.' },
            { icon:'◎', title:'Place over product',   desc:'A café isn\'t just a place to get coffee. It\'s a place to think, to meet, to breathe. We design every space with that intention.' },
          ].map((val, i) => (
            <motion.div
              className="value-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: 'rgba(255,253,248,0.055)', y: -4 }}
            >
              <span className="value-icon">{val.icon}</span>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}