import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [activeItem, setActiveItem] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    'HOME',
    'ABOUT US',
    'ECOSYSTEM',
    'OBJECTIVES',
    'VALUES',
    'OPERATIONS',
    'PRODUCTS',
    'TECHNOLOGY',
    'IMPACT',
    'CAREERS',
    'CONTACT'
  ];

  // Update active item based on hash when on the homepage
  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash.replace('#', '');
      if (hash) {
        const matchingLink = navLinks.find(link => link.toLowerCase().replace(' ', '-') === hash);
        if (matchingLink) setActiveItem(matchingLink);
      } else {
        setActiveItem('HOME');
      }
    } else {
      setActiveItem('');
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    e.preventDefault();
    setActiveItem(name);
    setIsMobileMenuOpen(false);
    
    const hash = name === 'HOME' ? '' : `#${name.toLowerCase().replace(' ', '-')}`;
    
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
      return;
    }

    if (name === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = hash;
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-[#060b1a]/90 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" onClick={(e) => {
          if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveItem('HOME');
            setIsMobileMenuOpen(false);
          }
        }}>
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((name) => (
            <a
              key={name}
              href={`/#${name.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleNavClick(e, name)}
              className={`text-[11px] font-bold tracking-widest transition-colors duration-200 relative py-2 ${
                activeItem === name
                  ? 'text-[#2dd4bf] border-b-2 border-[#2dd4bf] pb-1'
                  : 'text-white/60 hover:text-white pb-1'
              }`}
            >
              {name}
            </a>
          ))}
        </nav>

        <button className="hidden xl:flex items-center justify-center bg-gradient-to-r from-[#1e3a8a] to-[#2dd4bf] px-6 py-2.5 text-white text-[12px] font-bold tracking-widest uppercase rounded-full hover:opacity-90 shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300">
          GET STARTED
        </button>

        {/* Mobile menu toggle */}
        <button 
          className="xl:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 right-0 bg-[#060b1a] border-b border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((name) => (
              <a
                key={name}
                href={`/#${name.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleNavClick(e, name)}
                className={`text-[12px] font-bold tracking-widest transition-colors duration-200 py-3 border-b border-white/5 ${
                  activeItem === name
                    ? 'text-[#2dd4bf]'
                    : 'text-white/70'
                }`}
              >
                {name}
              </a>
            ))}
            <button className="mt-4 w-full flex items-center justify-center bg-gradient-to-r from-[#1e3a8a] to-[#2dd4bf] px-6 py-4 text-white text-[12px] font-bold tracking-widest uppercase rounded-full">
              GET STARTED
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
