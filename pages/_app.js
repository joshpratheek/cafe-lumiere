
import '../styles/globals.css';
import Cursor from '../components/Cursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}