import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

export default function ReserveCTA() {
  return (
    <section className="reserve-cta">
      <div className="rcta-bg" />
      <div className="rcta-vignette" />
      <div className="rcta-content">

        <FadeUp>
          <p className="rcta-eyebrow">Reserve &amp; Dine</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="rcta-heading">
            A table is waiting.<br /><em>Is it yours?</em>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="rcta-sub">
            Book directly with us and receive priority seating plus a complimentary
            welcome coffee. Or reserve through Zomato and Swiggy Dineout.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="rcta-buttons">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/reserve" className="btn-fill">Reserve a Table</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/reserve#pay" className="btn-ghost">Pay Your Bill</Link>
            </motion.div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="rcta-platforms">
            <span className="rcta-platform-label">Also available on</span>
            <motion.a
              href="https://www.zomato.com" target="_blank"
              className="rcta-platform-btn zomato"
              whileHover={{ scale: 1.05 }}
            >
              <span>Z</span> Zomato
            </motion.a>
            <motion.a
              href="https://www.swiggy.com/dineout" target="_blank"
              className="rcta-platform-btn swiggy"
              whileHover={{ scale: 1.05 }}
            >
              <span>S</span> Swiggy Dineout
            </motion.a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}