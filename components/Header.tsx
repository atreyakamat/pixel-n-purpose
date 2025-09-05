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
    }`} role="banner">
      <div className="container flex items-center justify-between">
        {/* Logo with proper accessibility */}
        <div className="flex items-start">
          <a href="/" className="w-25 h-25 -mt-4 focus:ring-2 focus:ring-champagne focus:ring-offset-2 rounded-lg" aria-label="Pixel & Purpose - Home">
            <img 
              src={isScrolled 
                ? "/PNP-black.png" 
                : "/PNP-white.png"
              }
              alt="Pixel & Purpose Logo" 
              className="w-full h-full object-contain transition-all duration-500"
              width="100"
              height="100"
            />
          </a>
        </div>

        {/* Hamburger Menu Button with better accessibility */}
        <button
          className="p-2 focus:ring-2 focus:ring-champagne focus:ring-offset-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navigation-menu"
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

      {/* Full Screen Menu Overlay with Better Accessibility */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        id="navigation-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
      >
        {/* Black background overlay */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Close button with better accessibility */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 z-50 p-2 text-white hover:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300"
          aria-label="Close navigation menu"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
        
        {/* Menu content with proper navigation structure */}
        <div className="relative h-full flex items-center justify-center">
          <nav aria-label="Main navigation" role="navigation">
            <h2 id="menu-title" className="sr-only">Main Navigation</h2>
            <ul className="text-center space-y-8" role="list">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne focus:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300 py-4"
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="/about"
                  className="block w-full text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne focus:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300 py-4"
                >
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne focus:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300 py-4"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne focus:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300 py-4"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
