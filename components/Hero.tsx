'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  /* Subtle parallax on the background layer (0.25× speed) */
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.25}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="hero"
      data-layer="section"
      className="relative min-h-screen overflow-hidden bg-canvas flex items-center"
      role="banner"
    >
      {/* ── Layer 1: Background (moves at 0.25× scroll) ── */}
      <div ref={bgRef} data-layer="background" className="absolute inset-0 will-change-transform">
        {/* Diagonal grid lines — architectural structure */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245,245,243,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,245,243,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Noise overlay */}
        <div className="noise-overlay" />
        {/* Bottom gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas/60" />
      </div>

      {/* ── Layer 2: Glass panel (architectural off-center) ── */}
      <div
        data-layer="glass"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] max-w-xl h-[70vh] glass opacity-60 hidden lg:block"
        style={{ borderRadius: '24px 0 0 24px', right: 0 }}
      />

      {/* ── Layer 3: Content ── */}
      <div className="relative z-10 container">
        <div className="max-w-3xl py-32 md:py-40">
          {/* Label */}
          <div
            data-layer="label"
            className="caps text-ink-ghost mb-8 opacity-0 animate-[fadeUp_0.7s_ease-out_0.2s_forwards]"
          >
            Global Creative Studio · Est. 2024
          </div>

          {/* Headline */}
          <h1
            data-layer="headline"
            className="font-display font-bold text-ink leading-[1.02] mb-8 opacity-0 animate-[fadeUp_0.9s_ease-out_0.4s_forwards]"
            style={{ fontSize: 'clamp(3.2rem, 7vw, 7.5rem)', letterSpacing: '-0.025em' }}
          >
            Design
            <br />
            <em className="not-italic text-ink-dim">That Means</em>
            <br />
            Something.
          </h1>

          {/* Sub-headline */}
          <p
            data-layer="body"
            className="text-ink-dim text-lg md:text-xl leading-relaxed max-w-md mb-12 opacity-0 animate-[fadeUp_0.9s_ease-out_0.6s_forwards]"
          >
            Websites, Portfolios, Packaging & Photography — built with clarity, structure, and intent.
          </p>

          {/* CTAs */}
          <div
            data-layer="cta"
            className="flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_0.9s_ease-out_0.8s_forwards]"
          >
            <Link href="/contact" className="btn-solid">
              Start a Project
            </Link>
            <Link href="/services" className="btn-ghost">
              Our Services
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="flex items-center gap-3 mt-20 opacity-0 animate-[fadeUp_0.9s_ease-out_1.2s_forwards]"
          >
            <div className="flex flex-col gap-1 items-center">
              <div className="w-px h-8 bg-ink-ghost" />
              <div className="w-px h-3 bg-ink-ghost animate-bounce" />
            </div>
            <span className="caps text-ink-ghost">Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* CSS keyframes for staggered entry (defined inline for page isolation) */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
