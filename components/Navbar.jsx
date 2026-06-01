import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        Café <em>Lumière</em>
      </Link>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/story">Story</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/locations">Locations</Link></li>
      </ul>
      <Link href="/reserve" className="nav-btn">
        Reserve a Table
      </Link>
    </nav>
  );
}