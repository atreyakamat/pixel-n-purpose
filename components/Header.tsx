'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  isHomePage?: boolean;
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ isHomePage = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isHoveringNearTop, setIsHoveringNearTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      
      // Always visible at the top (Hero section)
      if (y < 100) {
        setVisible(true);
      } else {
        // Hide when scrolled down, unless hovering near top
        if (!isHoveringNearTop) {
          setVisible(false);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // If mouse is within the top 80px of the screen
      if (e.clientY < 80) {
        setIsHoveringNearTop(true);
        setVisible(true);
      } else if (window.scrollY >= 100) {
        setIsHoveringNearTop(false);
        if (!menuOpen) setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHoveringNearTop, menuOpen]);

  /* Prevent body scroll when menu open */
  useEffect(() => {
    if (menuOpen) {
      const y = window.scrollY;
      document.body.style.cssText = `overflow:hidden;position:fixed;top:-${y}px;width:100%;`;
    } else {
      const top = document.body.style.top;
      document.body.style.cssText = '';
      if (top) window.scrollTo(0, -parseInt(top));
    }
    return () => { document.body.style.cssText = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating Header ── */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
        role="banner"
      >
        <div 
          className={`flex items-center gap-12 px-10 py-3 rounded-full border transition-all duration-500 ${
            scrolled 
              ? 'bg-black/93 backdrop-blur-2xl border-white/10 shadow-2xl' 
              : 'bg-black/43 backdrop-blur-xl border-white/5'
          }`}
        >
          {/* Logo */}
          <Link 
            href="/" 
            aria-label="Pixel & Purpose — Home" 
            className="flex items-center transition-transform duration-500 hover:scale-105 pr-8 border-r border-white/10"
          >
            <img
              src="/PNP-white.png"
              alt="Pixel & Purpose"
              className="h-14 w-auto object-contain brightness-110 drop-shadow-md"
              width={180}
              height={56}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-line caps text-white/80 hover:text-white text-[10px] tracking-[0.2em] font-medium transition-colors"
                style={{ 
                  textShadow: '0 0 20px rgba(255,255,255,0.1)' 
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger toggle (shows inside pill) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay ── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[1000] transition-all duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Blurred glass background */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />

        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          aria-label="Close navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {/* Nav links */}
        <nav className="relative h-full flex items-center justify-center px-8" aria-label="Mobile navigation">
          <ul className="flex flex-col items-center text-center gap-4 w-full max-w-md">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} className={`opacity-0 ${menuOpen ? 'animate-[fadeUp_0.5s_ease-out_forwards]' : ''}`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display font-bold text-white hover:text-white/70 transition-colors duration-300 block py-3"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: '1', letterSpacing: '-0.03em' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={`mt-12 pt-8 border-t border-white/10 w-full max-w-xs opacity-0 ${menuOpen ? 'animate-[fadeUp_0.5s_ease-out_0.6s_forwards]' : ''}`}>
              <Link
                href="mailto:hello@pixelnpurpose.com"
                className="caps text-white/40 hover:text-white transition-colors text-xs tracking-widest"
              >
                hello@pixelnpurpose.com
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
