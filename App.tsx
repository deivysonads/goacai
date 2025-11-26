import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Audience } from './components/Audience';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past Hero (approx 600px)
      if (window.scrollY > 600) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Hero />
      <Audience />
      <Features />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <Faq />
      <Footer />

      {/* Persistent Mobile/Tablet CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg z-50 transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="container mx-auto max-w-4xl flex items-center justify-between gap-4">
          <div className="hidden md:block">
             <p className="font-bold text-acai-900">Método Go Açaí</p>
             <p className="text-sm text-gray-500">De R$97 por apenas R$19,90</p>
          </div>
          <Button onClick={scrollToOffer} fullWidth className="md:w-auto text-sm md:text-lg py-3">
            QUERO APROVEITAR AGORA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;