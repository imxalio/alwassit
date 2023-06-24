import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Hero from './Hero';
import './app.css';
import 'animate.css';
import Features from './Features';
import WorkingDetails from './WorkingDetails';
import Fees from './Fees';
import Footer from './Footer';
import { useEffect } from 'react';

export const handleButtonClick = () => {
  if (typeof Tawk_API !== 'undefined') {
    Tawk_API.toggle();
  }
};

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section>
        <Navbar />
        <Hero />
        <Features />
        <WorkingDetails />
        <Fees />
      </section>
      <Footer />
    </>
  );
};
export default App;
