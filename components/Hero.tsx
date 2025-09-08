'use client';

import { useState } from 'react';

export default function Hero() {
  const [videoPaused, setVideoPaused] = useState(false);

  const toggleVideo = () => {
    const video = document.querySelector('video');
    if (video) {
      if (video.paused) {
        video.play();
        setVideoPaused(false);
      } else {
        video.pause();
        setVideoPaused(true);
      }
    }
  };

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Background Video - Optimized for performance */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/PNP-white.png"
        aria-label="Background video showcasing Pixel & Purpose brand aesthetics"
        style={{ contentVisibility: 'auto' }}
        onError={(e) => {
          console.warn('Hero video failed to load:', e);
          // Fallback to poster image if video fails
        }}
      >
        {/* Optimized video sources - using actual file names */}
        <source src="/pnp-hero-video.webm" type="video/webm" />
        <source src="/pnp-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Reduced overlay for better LCP */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/20 z-1"></div>

      {/* Content with better accessibility */}
      <div className="relative z-10 container text-center text-canvas">
        <div data-reveal className="max-w-4xl mx-auto">          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 text-canvas font-bold">
            Brand <span className="font-bold uppercase text-white">YOUR</span> Story
          </h1>
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center min-w-[84px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-12 px-6 bg-canvas text-ink text-sm font-bold leading-normal tracking-[0.015em] hover:bg-canvas/90 focus:outline-none transition-all duration-200"
            aria-label="Contact us to take the lead with your brand"
          >
            Take The LEAD
          </button>
        </div>
      </div>
    </section>
  );
}
