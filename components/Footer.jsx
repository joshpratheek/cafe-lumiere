import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="footer-logo">Café <em>Lumière</em></p>
          <p className="footer-tagline">Single Origin · Hand Poured · Made with Love</p>
          <p className="footer-address">Banjara Hills, Jubilee Hills & Hitech City<br />Hyderabad, Telangana</p>
        </div>

        <div className="footer-links">
          <p className="footer-col-title">Navigate</p>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/story">Our Story</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/locations">Locations</Link></li>
            <li><Link href="/reserve">Reserve</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <p className="footer-col-title">Hours</p>
          <ul className="footer-hours">
            <li><span>The Original</span><span>8AM – 11PM</span></li>
            <li><span>The Loft</span><span>8AM – 11PM</span></li>
            <li><span>The Kiosk</span><span>8AM – 11PM</span></li>
          </ul>
        </div>

        <div className="footer-links">
          <p className="footer-col-title">Contact</p>
          <ul>
            <li><a href="mailto:hello@cafelumiere.in">hello@cafelumiere.in</a></li>
            <li><a href="tel:+919876543210">+91 63097 72853</a></li>
            <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://www.zomato.com" target="_blank">Zomato</a></li>
            <li><a href="https://www.swiggy.com" target="_blank">Swiggy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Café Lumière. All rights reserved.</p>
        <p>Artisan Café &amp; Roastery · Est. 2009 · Hyderabad</p>
      </div>
    </footer>
  );
}