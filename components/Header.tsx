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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

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
              isMobileMenuOpen ? 'rotate-45 translate-y-0.5 bg-white' : ''
            } ${
              !isMobileMenuOpen ? (isScrolled ? 'bg-ink' : 'bg-white') : ''
            }`} />
            <span className={`block h-0.5 w-6 transition-all duration-200 mt-1 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            } ${
              !isMobileMenuOpen ? (isScrolled ? 'bg-ink' : 'bg-white') : ''
            }`} />
            <span className={`block h-0.5 w-6 transition-all duration-200 mt-1 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-white' : ''
            } ${
              !isMobileMenuOpen ? (isScrolled ? 'bg-ink' : 'bg-white') : ''
            }`} />
          </div>
        </button>
      </div>

      {/* Full Screen Menu Overlay with Better Accessibility */}
      <div 
        className={`fixed inset-0 z-[9999] transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        id="navigation-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
      >
        {/* Black background overlay */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
        
        {/* Close button with better accessibility */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[10000] p-2 text-white hover:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300"
          aria-label="Close navigation menu"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
        
        {/* Menu content with proper navigation structure */}
        <div className="relative h-full flex items-center justify-center p-4 overflow-y-auto">
          <nav aria-label="Main navigation" role="navigation" className="w-full max-w-md">
            <h2 id="menu-title" className="sr-only">Main Navigation</h2>
            <ul className="text-center space-y-4 sm:space-y-8" role="list">
              <li>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne focus:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300 py-2 sm:py-4"
                >
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne focus:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300 py-2 sm:py-4"
                >
                  Services
                </button>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-champagne focus:text-champagne focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-colors duration-300 py-2 sm:py-4"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
