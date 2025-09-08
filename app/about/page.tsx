'use client'

import { useState, useEffect } from 'react'

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black backdrop-blur-lg pt-1 pb-0">
        <div className="w-full flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-start">
            <a href="/" className="w-[150px] h-[150px] -mt-2 focus:outline-none rounded-lg" aria-label="Pixel & Purpose - Home">
              <img 
                src="/PNP-white.png" 
                alt="Pixel & Purpose Logo" 
                className="w-full h-full object-contain transition-all duration-500"
                width="150"
                height="150"
              />
            </a>
          </div>
          
          {/* Hamburger Menu Button */}
          <button
            className="p-2 focus:outline-none rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="navigation-menu"
          >
            <div className="w-10 h-10 flex flex-col justify-center items-center relative">
              <span className={`block h-1 w-10 transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? 'rotate-45 translate-y-0 bg-white' 
                  : 'translate-y-[-6px] bg-white'
              }`} />
              <span className={`block h-1 w-10 transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? 'opacity-0 scale-0' 
                  : 'opacity-100 scale-100 bg-white'
              }`} />
              <span className={`block h-1 w-10 transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? '-rotate-45 translate-y-0 bg-white' 
                  : 'translate-y-[6px] bg-white'
              }`} />
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
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
        
        {/* Close button */}
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
        
        {/* Menu content */}
        <div className="relative h-full flex items-center justify-center p-4 overflow-y-auto">
          <nav aria-label="Main navigation" role="navigation" className="w-full max-w-md">
            <h2 id="menu-title" className="sr-only">Main Navigation</h2>
            <ul className="text-center space-y-4 sm:space-y-8" role="list">
              <li>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-white focus:text-white focus:outline-none rounded-lg transition-colors duration-300 py-2 sm:py-4"
                >
                  Contact
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
            </ul>
          </nav>
        </div>
      </div>

      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <div className="space-y-12 text-lg md:text-xl leading-relaxed">
            <p>
              We were founded as an ad agency that didn't like advertising.
            </p>
            
            <p>
              A company with no guiding principle other than to make great work for inspiring clients.
            </p>
            
            <p>
              We try to be the kind of place where creatively-driven people with the widest perspectives possible can come to do the best work of their lives and find ways to use the work to say something.
            </p>
            
            <p>
              And for over 40 years we've made work that helps build brands and influence culture. From "Just Do It" to "This Is SportsCenter" to "Dilly Dilly" we've tried to use creativity to make a dent in the world across every medium and every discipline.
            </p>
            
            <p>
              Most people out there have no idea who we are, but they probably know some of the things we've made.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
