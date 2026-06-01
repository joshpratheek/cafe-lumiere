
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      <Footer />
    </>
  );
}