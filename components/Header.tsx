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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
    };
    let raf = 0;
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(onScroll);
    };
    window.addEventListener('scroll', handler, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', handler);
  }, []);

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
      {/* ── Fixed navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
            ? 'py-3 bg-canvas/40 backdrop-blur-2xl border-b border-white/5'
            : 'py-6 bg-transparent'
          }`}
        role="banner"
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Pixel 'N' Purpose — Home" className="flex items-center">
            <img
              src="/PNP-white.png"
              alt="Pixel 'N' Purpose"
              className="h-9 w-auto object-contain"
              width={110}
              height={36}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-line caps text-ink-dim hover:text-ink text-[11px] tracking-[0.2em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span
              className={`block h-px w-6 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
            />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay ── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[9999] transition-all duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Blurred glass background */}
        <div className="absolute inset-0 bg-canvas/90 backdrop-blur-3xl" />

        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 z-10 w-10 h-10 flex items-center justify-center text-ink-dim hover:text-ink transition-colors"
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
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display font-bold text-ink hover:text-ink-dim transition-colors duration-300 block py-3"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: '1', letterSpacing: '-0.03em' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-12 pt-8 border-t border-white/10 w-full max-w-xs">
              <Link
                href="mailto:hello@pixelnpurpose.com"
                className="caps text-ink-ghost hover:text-ink-dim transition-colors text-xs tracking-widest"
              >
                hello@pixelnpurpose.com
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
