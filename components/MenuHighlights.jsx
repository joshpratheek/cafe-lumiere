import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function MenuHighlights() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.mh-reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('mh-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const items = [
    {
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80',
      badge: '#1 Rated',
      category: 'Espresso · House Blend',
      name: 'Lumière Signature Espresso',
      desc: 'A double ristretto built on our house blend. Notes of dark chocolate, dried cherry, and a cedar-wood finish.',
      price: '280',
      tags: ['4.9 / 5.0', '2,400+ reviews'],
    },
    {
      img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=80',
      badge: '#2 Ordered',
      category: 'Brunch · Vegetarian',
      name: 'Sourdough Ricotta Toast',
      desc: 'House-baked sourdough, whipped ricotta, roasted seasonal stone fruit, wildflower honey, crushed pistachios.',
      price: '380',
      tags: ['4.8 / 5.0', 'Vegetarian'],
    },
    {
      img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80',
      badge: '#3 Ordered',
      category: 'Cold Brew · Nitrogen',
      name: 'Nitro Cold Brew',
      desc: '18-hour steep, nitrogen-charged on tap. Cascading, creamy head. No ice, no milk, no compromise.',
      price: '360',
      tags: ['4.8 / 5.0', 'Vegan'],
    },
  ];

  return (
    <section className="menu-highlights" ref={ref}>
      <div className="mh-header mh-reveal">
        <div>
          <p className="mh-eyebrow">Our Menu</p>
          <h2 className="mh-heading">Crafted with<br /><em>intention.</em></h2>
        </div>
        <div className="mh-header-right">
          <p>Every item tested, tasted, and refined until it earns its place. Nothing filler. Nothing frozen. Everything made here.</p>
          <Link href="/menu" className="btn-ghost mh-link">See Full Menu →</Link>
        </div>
      </div>

      <div className="mh-grid">
        {items.map((item, i) => (
          <div className="mh-card mh-reveal" key={i}>
            <div className="mh-card-img-wrap">
              <span className="mh-badge">{item.badge}</span>
              <img src={item.img} alt={item.name} className="mh-card-img" />
            </div>
            <div className="mh-card-body">
              <span className="mh-card-category">{item.category}</span>
              <h3 className="mh-card-name">{item.name}</h3>
              <p className="mh-card-desc">{item.desc}</p>
              <div className="mh-card-footer">
                <span className="mh-price"><sup>₹</sup>{item.price}</span>
                <div className="mh-tags">
                  {item.tags.map((t, j) => <span className="mh-tag" key={j}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mh-cta-row mh-reveal">
        <Link href="/menu" className="btn-fill">Explore Full Menu</Link>
      </div>
    </section>
  );
}