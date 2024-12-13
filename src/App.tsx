import React from 'react';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import AllServices from './components/AllServices';
import AboutProfessional from './components/AboutProfessional';
import Diferenciais from './components/Diferenciais';
import Testimonials from './components/Testimonials';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedServices />
      <AllServices />
      <AboutProfessional />
      <Diferenciais />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;