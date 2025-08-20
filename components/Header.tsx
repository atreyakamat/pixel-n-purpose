'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-canvas/95 backdrop-blur-lg border-b border-line shadow-sm py-2' 
        : 'bg-transparent py-3'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-4 h-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_330)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="font-display text-lg font-bold leading-tight tracking-[-0.015em] text-ink">
            Pixel N Purpose
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium text-ink hover:text-ink/80 transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-sm font-medium text-ink hover:text-ink/80 transition-colors duration-200"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-ink hover:text-ink/80 transition-colors duration-200"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-ink hover:text-ink/80 transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-ink text-canvas text-sm font-bold leading-normal tracking-[0.015em] hover:bg-ink/90 transition-colors duration-200"
        >
          <span>Contact Us</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className={`block h-0.5 w-6 bg-ink transition-all duration-200 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
            }`} />
            <span className={`block h-0.5 w-6 bg-ink transition-all duration-200 mt-1 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block h-0.5 w-6 bg-ink transition-all duration-200 mt-1 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-canvas/95 backdrop-blur-lg border-t border-line px-4 py-4 space-y-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left text-sm font-medium text-ink hover:text-ink/80 transition-colors duration-200 py-2"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="block w-full text-left text-sm font-medium text-ink hover:text-ink/80 transition-colors duration-200 py-2"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left text-sm font-medium text-ink hover:text-ink/80 transition-colors duration-200 py-2"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left text-sm font-medium text-ink hover:text-ink/80 transition-colors duration-200 py-2"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-4 flex items-center justify-center rounded-lg h-10 px-4 bg-ink text-canvas text-sm font-bold leading-normal tracking-[0.015em] hover:bg-ink/90 transition-colors duration-200"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
