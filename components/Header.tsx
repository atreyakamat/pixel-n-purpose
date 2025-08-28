'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for dynamic styling based on hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const currentScroll = window.scrollY + 100; // Add offset for smoother transition
        setIsScrolled(currentScroll > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-canvas/95 backdrop-blur-lg border-b border-line shadow-sm pt-1 pb-0' 
        : 'bg-transparent pt-0.5 pb-0'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo Only - No Text */}
        <div className="flex items-start">
          <div className="w-25 h-25 -mt-4">
            <img 
              src={isScrolled 
                ? "/PNP-black.png" 
                : "/PNP-white.png"
              }
              alt="Pixel & Purpose Logo" 
              className="w-full h-full object-contain transition-all duration-500"
            />
          </div>
        </div>

        {/* Hamburger Menu Button - Now visible on all screen sizes */}
        <button
          className="p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className={`block h-0.5 w-6 transition-all duration-200 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
            } ${
              isMobileMenuOpen ? 'bg-white' : (isScrolled ? 'bg-ink' : 'bg-white')
            }`} />
            <span className={`block h-0.5 w-6 transition-all duration-200 mt-1 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            } ${
              isMobileMenuOpen ? 'bg-white' : (isScrolled ? 'bg-ink' : 'bg-white')
            }`} />
            <span className={`block h-0.5 w-6 transition-all duration-200 mt-1 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            } ${
              isMobileMenuOpen ? 'bg-white' : (isScrolled ? 'bg-ink' : 'bg-white')
            }`} />
          </div>
        </button>
      </div>

      {/* Full Screen Menu Overlay - Works for all screen sizes */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Black background overlay */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Close button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 z-50 p-2 text-white hover:text-champagne transition-colors duration-300"
          aria-label="Close menu"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
        
        {/* Menu content */}
        <div className="relative h-full flex items-center justify-center">
          <nav className="text-center space-y-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne transition-colors duration-300 py-4"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne transition-colors duration-300 py-4"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne transition-colors duration-300 py-4"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne transition-colors duration-300 py-4"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
