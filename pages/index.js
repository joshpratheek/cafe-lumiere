import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import StoryTeaser from '../components/StoryTeaser';
import MenuHighlights from '../components/MenuHighlights';
import LocationsTeaser from '../components/LocationsTeaser';
import ReserveCTA from '../components/ReserveCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <div id="home-content">
        <StoryTeaser />
      </div>
      <MenuHighlights />
      <LocationsTeaser />
      <ReserveCTA />
    </main>
  );
}