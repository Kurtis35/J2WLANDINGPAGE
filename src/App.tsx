import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <PortfolioSection />
        <PricingSection />
        <AboutSection />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;