import { useEffect } from 'react';

export default function Marquee() {
  useEffect(() => {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;
    const keywords = [
      'Specialty Coffee · Hyderabad',
      'Single-Origin Pour Overs',
      'Artisan Café & Roastery',
      'Farm-to-Cup Direct Trade',
      'Hand-Crafted Espresso Drinks',
      'Award-Winning Baristas',
      'Seasonal Brunch Menu',
      'Private Dining & Events',
      'Freshly Roasted Beans Daily',
      'Best Café in the City'
    ];
    [...keywords, ...keywords].forEach(text => {
      const item = document.createElement('span');
      item.className = 'marquee-item';
      item.textContent = text;
      track.appendChild(item);
    });
  }, []);

  return (
    <aside className="marquee-strip" id="marqueeStrip" aria-hidden="true">
      <div className="marquee-track" id="marqueeTrack"></div>
    </aside>
  );
}