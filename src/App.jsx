import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesShowcase from './components/ServicesShowcase';
import About from './components/About';
import ClinicTour from './components/ClinicTour';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ServicesShowcase />
      <About />
      <ClinicTour />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;