import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Ecosystem } from '../components/Ecosystem';
import { Objectives } from '../components/Objectives';
import { Values } from '../components/Values';
import { Operations } from '../components/Operations';
import { Products } from '../components/Products';
import { Technology } from '../components/Technology';
import { Impact } from '../components/Impact';
import { Careers } from '../components/Careers';
import { Contact } from '../components/Contact';

export function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-[#050505]">
      {/* Landing Page Exclusive Background Layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        {/* Network Mesh Background Image (from https://share.google/6z0anL4qjdlgP0C6b) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed opacity-40"
          style={{
            backgroundImage: `url('/landing-bg.jpg'), url('https://img.magnific.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center top',
            backgroundSize: 'cover'
          }}
        />

        {/* Cyber Neon Glow Mesh: Invert white background into deep space with electric cyan/blue nodes */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed opacity-45 invert hue-rotate-180 mix-blend-screen"
          style={{
            backgroundImage: `url('/landing-bg.jpg'), url('https://img.magnific.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center top',
            backgroundSize: 'cover'
          }}
        />

        {/* Ambient Dark Gradient Wash to preserve high-contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/75 via-[#060b1a]/65 to-[#050505]/80 pointer-events-none" />
      </div>

      {/* Landing Page Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Ecosystem />
        <Objectives />
        <Values />
        <Operations />
        <Products />
        <Technology />
        <Impact />
        <Careers />
        <Contact />
      </main>
    </div>
  );
}
