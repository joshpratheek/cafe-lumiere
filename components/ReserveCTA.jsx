import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function ReserveCTA() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rcta-reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('rcta-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="reserve-cta" ref={ref}>
      <div className="rcta-bg" />
      <div className="rcta-vignette" />

      <div className="rcta-content">
        <p className="rcta-eyebrow rcta-reveal">Reserve &amp; Dine</p>
        <h2 className="rcta-heading rcta-reveal">
          A table is waiting.<br />
          <em>Is it yours?</em>
        </h2>
        <p className="rcta-sub rcta-reveal">
          Book directly with us and receive priority seating plus a complimentary welcome coffee.
          Or reserve through Zomato and Swiggy Dineout.
        </p>
        <div className="rcta-buttons rcta-reveal">
          <Link href="/reserve" className="btn-fill">Reserve a Table</Link>
          <Link href="/reserve#pay" className="btn-ghost">Pay Your Bill</Link>
        </div>

        <div className="rcta-platforms rcta-reveal">
          <span className="rcta-platform-label">Also available on</span>
          <a href="https://www.zomato.com" target="_blank" className="rcta-platform-btn zomato">
            <span>Z</span> Zomato
          </a>
          <a href="https://www.swiggy.com/dineout" target="_blank" className="rcta-platform-btn swiggy">
            <span>S</span> Swiggy Dineout
          </a>
        </div>
      </div>
    </section>
  );
}