'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for cinematic reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll(
      '.reveal, .service-reveal, .testimonial, .image-reveal, .text-reveal, .divider-reveal'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Subtle parallax effect for service backgrounds
  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const yOffset = (scrollProgress - 0.5) * 30; // Very subtle: max 15px drift
        (el as HTMLElement).style.transform = `translateY(${yOffset}px) scale(1.05)`;
      });
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div className="bg-ivory text-charcoal font-sans antialiased">
      {/* ═══════════════════════════════════════════════════════════════════
          HEADER — Minimal, Confident
      ═══════════════════════════════════════════════════════════════════ */}
      <header className={`header-luxury fixed top-0 z-50 w-full ${
        scrolled 
          ? 'bg-ivory/95 backdrop-blur-md border-b border-charcoal/5' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="/" className="group flex items-center gap-2">
            <span className={`text-lg font-semibold tracking-tight hover-accent ${
              scrolled ? 'text-charcoal' : 'text-ivory'
            }`}>
              Pixel 'N' Purpose
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-12">
            {['Studio', 'Services', 'Clients', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link text-xs font-medium uppercase tracking-[0.2em] ${
                  scrolled ? 'text-charcoal/60' : 'text-ivory/70'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <Link 
            href="#contact"
            className={`hidden md:inline-flex text-xs font-medium uppercase tracking-[0.2em] hover-accent ${
              scrolled ? 'text-charcoal' : 'text-ivory'
            }`}
          >
            Start a Project
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px transition-all duration-500 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''} ${scrolled ? 'bg-charcoal' : 'bg-ivory'}`}></span>
              <span className={`block h-px transition-all duration-500 ${mobileMenuOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-charcoal' : 'bg-ivory'}`}></span>
              <span className={`block h-px transition-all duration-500 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${scrolled ? 'bg-charcoal' : 'bg-ivory'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden bg-ivory transition-all duration-700 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`} style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
          <nav className="flex flex-col gap-6 px-6 py-12">
            {['Studio', 'Services', 'Clients', 'Contact'].map((item, i) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-light text-charcoal hover-accent"
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {item}
              </Link>
            ))}
            <div className="pt-6 border-t border-charcoal/10">
              <Link 
                href="#contact" 
                className="text-sm font-medium uppercase tracking-[0.2em] text-brass"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO — Cinematic Page Load
          Order: Background → Overlay → Tagline → Headline → Description → CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background Image — slow fade in */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
            alt=""
            className="hero-bg h-full w-full object-cover"
            loading="eager"
          />
          {/* Overlay — settles gently */}
          <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80"></div>
        </div>

        {/* Content — progressive disclosure */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12 text-center">
          {/* Tagline */}
          <p className="hero-tagline mb-6 text-xs font-medium uppercase tracking-[0.3em] text-ivory/60">
            Brand Identity & Digital Experience Studio
          </p>
          
          {/* Headline — line by line */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-ivory">
            <span className="hero-headline-line-1 block">Brand <em className="font-normal italic">Your</em></span>
            <span className="hero-headline-line-2 block">Story</span>
          </h1>
          
          {/* Description */}
          <p className="hero-description mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ivory/70 font-light">
            We partner with founders and leaders to build brand identities that communicate clarity, 
            command trust, and stand the test of time.
          </p>
          
          {/* CTA — appears last */}
          <div className="hero-cta mt-12">
            <Link 
              href="#contact"
              className="btn-luxury group inline-flex items-center gap-3 bg-brass px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-charcoal"
            >
              Take the Lead
              <svg className="w-4 h-4 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator — extremely subtle */}
        <div className="scroll-indicator absolute bottom-12 left-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-ivory/0 via-ivory/30 to-ivory/0"></div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: PHILOSOPHY — Editorial, Centered
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="studio" className="bg-ivory py-32 lg:py-48">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <p className="reveal mb-8 text-xs font-medium uppercase tracking-[0.3em] text-charcoal/40">
            Our Philosophy
          </p>
          <h2 className="reveal font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-charcoal delay-100">
            We believe great brands are built on <em className="italic">clarity</em>, 
            not complexity.
          </h2>
          <div className="flex justify-center mt-12">
            <div className="divider-reveal h-px bg-brass"></div>
          </div>
          <p className="reveal mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-charcoal/60 font-light delay-200">
            Every brand we craft begins with understanding — not just what you do, 
            but why it matters. We strip away the noise to reveal the essence. 
            Then we give it form. Strategic. Intentional. Enduring.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: SERVICES — Cinematic Full-Width Panels
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="services">
        
        {/* Service 01: Brand Identity */}
        <div className="service-reveal relative min-h-screen flex items-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2128&auto=format&fit=crop"
              alt=""
              className="service-bg parallax-bg h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32">
            <div className="max-w-2xl">
              <p className="service-label mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brass">
                Service 01
              </p>
              <h3 className="service-headline font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-ivory">
                Brand Identity <br/>& Visual Systems
              </h3>
              <p className="service-subheadline mt-6 text-xl font-light italic text-ivory/80">
                Be Clear. Look Sharp. Mean Something.
              </p>
              <p className="service-body mt-8 max-w-xl text-base leading-relaxed text-ivory/60">
                We design brand identities that go beyond aesthetics. From logos to complete visual systems, 
                we craft cohesive brand languages that help businesses show up with clarity, consistency, 
                and confidence.
              </p>
              <div className="service-tags mt-12 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-ivory/40">
                <span>Logo Design</span>
                <span className="text-brass/60">·</span>
                <span>Visual Identity</span>
                <span className="text-brass/60">·</span>
                <span>Brand Guidelines</span>
                <span className="text-brass/60">·</span>
                <span>Typography Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service 02: Website & Digital */}
        <div className="service-reveal relative min-h-screen flex items-center bg-ivory overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt=""
              className="service-bg parallax-bg h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/40 to-transparent"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32">
            <div className="max-w-2xl">
              <p className="service-label mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brass">
                Service 02
              </p>
              <h3 className="service-headline font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-charcoal">
                Website & Digital <br/>Experience Design
              </h3>
              <p className="service-subheadline mt-6 text-xl font-light italic text-charcoal/80">
                Design That Speaks Before You Do.
              </p>
              <p className="service-body mt-8 max-w-xl text-base leading-relaxed text-charcoal/60">
                We create brand-led websites that balance form and function. Thoughtfully designed 
                digital experiences that communicate purpose, build credibility, and leave a lasting impression.
              </p>
              <div className="service-tags mt-12 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-charcoal/40">
                <span>Web Design</span>
                <span className="text-brass/60">·</span>
                <span>UX Strategy</span>
                <span className="text-brass/60">·</span>
                <span>Development</span>
                <span className="text-brass/60">·</span>
                <span>Motion Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service 03: Packaging & Print */}
        <div className="service-reveal relative min-h-screen flex items-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2187&auto=format&fit=crop"
              alt=""
              className="service-bg parallax-bg h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-charcoal via-charcoal/70 to-charcoal/40"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32">
            <div className="ml-auto max-w-2xl text-right">
              <p className="service-label mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brass">
                Service 03
              </p>
              <h3 className="service-headline font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-ivory">
                Packaging & <br/>Print Design
              </h3>
              <p className="service-subheadline mt-6 text-xl font-light italic text-ivory/80">
                Designed to Be Picked Up. Remembered.
              </p>
              <p className="service-body mt-8 ml-auto max-w-xl text-base leading-relaxed text-ivory/60">
                We design packaging and print that elevate products on the shelf and in hand. 
                From labels to full packaging systems, every detail is crafted to enhance 
                the brand experience.
              </p>
              <div className="service-tags mt-12 flex flex-wrap justify-end gap-4 text-xs uppercase tracking-[0.2em] text-ivory/40">
                <span>Packaging Systems</span>
                <span className="text-brass/60">·</span>
                <span>Label Design</span>
                <span className="text-brass/60">·</span>
                <span>Print Collateral</span>
                <span className="text-brass/60">·</span>
                <span>Material Selection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service 04: Personal Branding */}
        <div className="service-reveal relative min-h-screen flex items-center bg-warm-ivory overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop"
              alt=""
              className="service-bg parallax-bg h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-warm-ivory via-warm-ivory/50 to-transparent"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32">
            <div className="ml-auto max-w-2xl lg:pl-12">
              <p className="service-label mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brass">
                Service 04
              </p>
              <h3 className="service-headline font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-charcoal">
                Portfolio & <br/>Personal Brand
              </h3>
              <p className="service-subheadline mt-6 text-xl font-light italic text-charcoal/80">
                Your Work, Presented With Intent.
              </p>
              <p className="service-body mt-8 max-w-xl text-base leading-relaxed text-charcoal/60">
                We curate personal brands and portfolios for founders, leaders, and creatives. 
                From visual identity to portfolio structure, we help tell your story with 
                clarity and confidence.
              </p>
              <div className="service-tags mt-12 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-charcoal/40">
                <span>Personal Identity</span>
                <span className="text-brass/60">·</span>
                <span>Portfolio Design</span>
                <span className="text-brass/60">·</span>
                <span>LinkedIn Presence</span>
                <span className="text-brass/60">·</span>
                <span>Thought Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: WHY CHOOSE US — Trust Builder
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-stone py-32 lg:py-48">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="reveal mb-4 text-xs font-medium uppercase tracking-[0.3em] text-charcoal/40">
              Why Choose Us
            </p>
            <h2 className="reveal font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal delay-100">
              Built Different. By Design.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: 'Strategy Before Aesthetics',
                text: "We don't start with visuals — we start with purpose. Every design decision is rooted in strategy and intention."
              },
              {
                title: 'Clarity Over Noise',
                text: 'In a world of visual clutter, we believe in restraint. Simple, confident design that communicates instantly.'
              },
              {
                title: 'Long-Term Brand Thinking',
                text: "We don't chase trends. We build brands designed to evolve gracefully and remain relevant for years."
              },
              {
                title: 'Designed to Scale',
                text: 'From startup to established business, our brand systems are built to grow with you across every touchpoint.'
              }
            ].map((item, i) => (
              <div 
                key={item.title}
                className={`reveal border-l-2 border-brass/20 pl-8 hover:border-brass transition-colors duration-700 delay-${(i + 1) * 100}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
              >
                <h3 className="text-xl font-medium text-charcoal mb-3">{item.title}</h3>
                <p className="text-base leading-relaxed text-charcoal/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: TESTIMONIALS — Calm Authority
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="clients" className="bg-charcoal py-32 lg:py-48">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="reveal text-xs font-medium uppercase tracking-[0.3em] text-ivory/40">
              Client Words
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                quote: "Working with Pixel 'N' Purpose transformed how we present ourselves. They understood our vision before we could articulate it.",
                name: 'Sarah Chen',
                role: 'Founder, Lumina Wellness'
              },
              {
                quote: "They don't just design — they listen, strategize, and create with purpose. Our brand finally feels like us.",
                name: 'Marcus Webb',
                role: 'CEO, Artisan Collective'
              },
              {
                quote: "Quiet confidence. That's exactly what they delivered. A brand that speaks volumes without saying too much.",
                name: 'Elena Rodriguez',
                role: 'Creative Director, Studio Norte'
              }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial">
                <div className="relative">
                  <span className="quote-mark absolute -top-8 -left-4 text-8xl font-serif text-brass/20">"</span>
                  <blockquote className="relative z-10 font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-ivory/90 italic">
                    {testimonial.quote}
                  </blockquote>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-ivory/10"></div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-ivory">{testimonial.name}</p>
                    <p className="text-xs text-ivory/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: CALL TO ACTION — Quiet but Confident
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="bg-ivory py-32 lg:py-48">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <p className="reveal mb-8 text-xs font-medium uppercase tracking-[0.3em] text-charcoal/40">
            Ready to Begin?
          </p>
          <h2 className="reveal font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-charcoal delay-100">
            Let's build something <br/><em className="italic">meaningful</em> together.
          </h2>
          <p className="reveal mx-auto mt-8 max-w-xl text-lg leading-relaxed text-charcoal/60 font-light delay-200">
            Whether you're launching a new venture or refining an existing brand, 
            we're here to help you communicate with clarity and confidence.
          </p>
          <div className="reveal mt-12 delay-300">
            <Link 
              href="/contact"
              className="btn-luxury group inline-flex items-center gap-3 bg-charcoal px-10 py-5 text-xs font-medium uppercase tracking-[0.2em] text-ivory"
            >
              Start a Conversation
              <svg className="w-4 h-4 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER — Clean, Structured
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-charcoal py-20 lg:py-24 border-t border-ivory/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <h3 className="text-lg font-medium text-ivory mb-4">Pixel 'N' Purpose</h3>
              <p className="text-sm leading-relaxed text-ivory/50 max-w-sm">
                A strategic brand studio for founders and leaders who value clarity, 
                craftsmanship, and purpose-driven design.
              </p>
              <div className="mt-8 flex gap-6">
                {[
                  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                  { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href="#" 
                    className="text-ivory/40 hover-accent" 
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/40 mb-6">Navigation</h4>
              <ul className="space-y-4">
                {['Studio', 'Services', 'Clients', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase()}`} 
                      className="link-underline text-sm text-ivory/70"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/40 mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <p className="text-sm text-ivory/70">hello@pixelnpurpose.com</p>
                <p className="text-sm text-ivory/50">Based in India · Working Globally</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ivory/30">
              © 2024 Pixel 'N' Purpose. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="link-underline text-xs text-ivory/30">Privacy Policy</Link>
              <Link href="/terms" className="link-underline text-xs text-ivory/30">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
