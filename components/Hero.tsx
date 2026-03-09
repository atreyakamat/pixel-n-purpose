'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import GradientBlinds from './GradientBlinds';

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
      className="relative min-h-screen overflow-hidden bg-canvas flex items-center justify-center text-center"
      role="banner"
    >
      {/* ── Layer 1: Background ── */}
      <div ref={bgRef} data-layer="background" className="absolute inset-0 will-change-transform">
        {/* Gradient Blinds - EXACT CONFIGURATION PROVIDED BY USER */}
        <div className="absolute inset-0 z-0">
          <GradientBlinds
            gradientColors={["#293824","#787878"]}
            angle={45}
            noise={0.5}
            blindCount={33}
            blindMinWidth={30}
            mouseDampening={0.15}
            mirrorGradient={false}
            spotlightRadius={0.55}
            spotlightSoftness={1}
            spotlightOpacity={1}
            distortAmount={24}
            shineDirection="left"
          />
        </div>

        {/* Noise overlay for texture */}
        <div className="noise-overlay z-10" />
        
        {/* Bottom gradient vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas/90 z-20" />
      </div>

      {/* ── Layer 2: Content ── */}
      <div className="relative z-30 container flex flex-col items-center">
        {/* Visibility Mask — Subtle radial shadow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,transparent_70%)] blur-3xl opacity-70 z-[-1]" />
        
        <div className="max-w-4xl pt-20 pb-32 md:pt-24 md:pb-40 -mt-12 md:-mt-16 relative">
          {/* Subtle Glass Card for Text Legibility */}
          <div className="absolute inset-0 -inset-x-10 -inset-y-6 bg-white/[0.01] backdrop-blur-[1px] rounded-[4rem] z-[-1] hidden md:block" />

          {/* Label */}
          <div
            data-layer="label"
            className="caps text-ink-ghost mb-10 opacity-0 animate-[fadeUp_0.7s_ease-out_0.2s_forwards] font-accent tracking-[0.3em] text-[11px]"
          >
            Global Creative Studio · Est. 2025
          </div>

          {/* Headline */}
          <h1
            data-layer="headline"
            className="font-display font-bold text-ink leading-[1] mb-10 opacity-0 animate-[fadeUp_0.9s_ease-out_0.4s_forwards]"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', letterSpacing: '-0.04em' }}
          >
            Design
            <br />
            <em className="not-italic text-ink-dim font-medium italic">That Means</em>
            <br />
            Something.
          </h1>

          {/* Sub-headline */}
          <p
            data-layer="body"
            className="text-ink-dim text-lg md:text-xl leading-relaxed max-w-2xl mb-14 opacity-0 animate-[fadeUp_0.9s_ease-out_0.6s_forwards] mx-auto"
          >
            Websites, Portfolios, Packaging & Photography — built with clarity, structure, and intent.
          </p>

          {/* CTAs */}
          <div
            data-layer="cta"
            className="flex flex-wrap items-center justify-center gap-6 opacity-0 animate-[fadeUp_0.9s_ease-out_0.8s_forwards]"
          >
            <Link href="/contact" className="btn-solid px-12 py-4 rounded-full text-sm font-medium shadow-2xl shadow-black/20">
              Start a Project
            </Link>
            <Link href="/services" className="btn-ghost group flex items-center gap-2 text-sm font-medium">
              Our Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="flex flex-col items-center gap-4 mt-24 opacity-0 animate-[fadeUp_0.9s_ease-out_1.2s_forwards]"
          >
            <span className="caps text-ink-ghost text-[10px] tracking-[0.4em] mb-2">Explore</span>
            <div className="flex flex-col gap-1 items-center">
              <div className="w-px h-12 bg-gradient-to-b from-ink-ghost/40 to-transparent" />
              <div className="w-px h-4 bg-ink-ghost animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Entry Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
