'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for smooth header transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Smooth transition starts after 50px scroll
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', throttledHandleScroll);
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out border-none ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-lg shadow-lg pt-1 pb-0' 
        : 'bg-transparent pt-0.5 pb-0'
    }`} 
    style={{
      border: 'none',
      boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
      borderBottom: 'none'
    }}
    role="banner">
      <div className="w-full flex items-center justify-between px-4 sm:px-6"
        style={{ border: 'none', boxShadow: 'none' }}>
        {/* Logo with proper accessibility */}
        <div className="flex items-start">
          <a href="/" className="w-[150px] h-[150px] -mt-2 focus:outline-none rounded-lg" aria-label="Pixel & Purpose - Home">
            <img 
              src="/PNP-white.png"
              alt="Pixel & Purpose Logo" 
              className="w-full h-full object-contain transition-all duration-300 ease-out"
              width="150"
              height="150"
              style={{
                filter: isScrolled ? 'invert(1) brightness(100%)' : 'none'
              }}
            />
          </a>
        </div>

        {/* Hamburger Menu Button with better accessibility */}
        <button
          className="p-2 focus:outline-none rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navigation-menu"
          style={{ border: 'none', boxShadow: 'none' }}
        >
          <div className="w-10 h-10 flex flex-col justify-center items-center relative">
            <span className={`block h-1 w-10 transition-all duration-300 ease-out transform ${
              isMobileMenuOpen 
                ? 'rotate-45 translate-y-0 bg-white' 
                : `translate-y-[-6px] bg-white`
            }`} />
            <span className={`block h-1 w-10 transition-all duration-300 ease-out transform ${
              isMobileMenuOpen 
                ? 'opacity-0 scale-0' 
                : `opacity-100 scale-100 bg-white`
            }`} />
            <span className={`block h-1 w-10 transition-all duration-300 ease-out transform ${
              isMobileMenuOpen 
                ? '-rotate-45 translate-y-0 bg-white' 
                : `translate-y-[6px] bg-white`
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
          className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[10000] p-2 text-white hover:text-white focus:outline-none rounded-lg"
          aria-label="Close navigation menu"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-white focus:text-white focus:outline-none rounded-lg transition-colors duration-300 py-2 sm:py-4"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-white focus:text-white focus:outline-none rounded-lg transition-colors duration-300 py-2 sm:py-4"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-white focus:text-white focus:outline-none rounded-lg transition-colors duration-300 py-2 sm:py-4"
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
