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
    <main>
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
  );
}
