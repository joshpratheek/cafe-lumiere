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
      <StoryTeaser />
      <MenuHighlights />
      <LocationsTeaser />
      <ReserveCTA />
    </main>
  );
}