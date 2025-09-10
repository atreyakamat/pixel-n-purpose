'use client';

import { useState, useEffect } from 'react';

interface HeaderProps {
  isHomePage?: boolean;
}

export default function Header({ isHomePage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for smooth header transition and hero detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Smooth transition starts after 50px scroll
      const heroHeight = window.innerHeight; // Assume hero is full viewport height
      
      setIsScrolled(window.scrollY > scrollThreshold);
      
      // Check if we're still over the hero section
      if (isHomePage) {
        setIsOverHero(window.scrollY < heroHeight - 100); // 100px buffer
      }
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
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Also prevent html scroll as backup
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
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
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out border-none ${
        isHomePage 
          ? (isScrolled 
              ? 'bg-white/95 backdrop-blur-lg shadow-lg pt-1 pb-0' 
              : 'bg-transparent pt-0.5 pb-0')
          : (isScrolled 
              ? 'bg-canvas/95 backdrop-blur-lg shadow-lg pt-1 pb-0' 
              : 'bg-transparent pt-0.5 pb-0')
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
                src={isHomePage 
                  ? (isOverHero ? "/PNP-white.png" : "/PNP-black.png")
                  : (isScrolled ? "/PNP-black.png" : "/PNP-white.png")
                }
                alt="Pixel & Purpose Logo" 
                className="w-full h-full object-contain transition-all duration-300 ease-out"
                width="150"
                height="150"
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
                  ? `rotate-45 translate-y-0 ${isHomePage ? (isOverHero ? 'bg-white' : 'bg-black') : 'bg-ink'}` 
                  : `translate-y-[-6px] ${isHomePage ? (isOverHero ? 'bg-white' : 'bg-black') : 'bg-ink'}`
              }`} />
              <span className={`block h-1 w-10 transition-all duration-300 ease-out transform ${
                isMobileMenuOpen 
                  ? 'opacity-0 scale-0' 
                  : `opacity-100 scale-100 ${isHomePage ? (isOverHero ? 'bg-white' : 'bg-black') : 'bg-ink'}`
              }`} />
              <span className={`block h-1 w-10 transition-all duration-300 ease-out transform ${
                isMobileMenuOpen 
                  ? `-rotate-45 translate-y-0 ${isHomePage ? (isOverHero ? 'bg-white' : 'bg-black') : 'bg-ink'}` 
                  : `translate-y-[6px] ${isHomePage ? (isOverHero ? 'bg-white' : 'bg-black') : 'bg-ink'}`
              }`} />
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay - OUTSIDE header for true full-page coverage */}
      <div 
        className={`fixed inset-0 z-[9999] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        id="navigation-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
        style={{ 
          backgroundColor: isMobileMenuOpen ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          backdropFilter: isMobileMenuOpen ? 'blur(10px)' : 'none'
        }}
      >
        {/* Black background overlay */}
        <div className="absolute inset-0 bg-canvas/95 backdrop-blur-sm" />
        
        {/* Close button with better accessibility */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 z-[10000] p-3 text-white hover:text-gray-300 focus:outline-none rounded-lg transition-colors duration-200"
          aria-label="Close navigation menu"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
        
        {/* Menu content with proper navigation structure */}
        <div className="relative h-full w-full flex items-center justify-center p-6 overflow-y-auto">
          <nav aria-label="Main navigation" role="navigation" className="w-full max-w-lg">
            <h2 id="menu-title" className="sr-only">Main Navigation</h2>
            <ul className="text-center space-y-6 sm:space-y-10" role="list">
              <li>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none rounded-lg transition-all duration-300 py-3 sm:py-6 transform hover:scale-105"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none rounded-lg transition-all duration-300 py-3 sm:py-6 transform hover:scale-105"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none rounded-lg transition-all duration-300 py-3 sm:py-6 transform hover:scale-105"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
