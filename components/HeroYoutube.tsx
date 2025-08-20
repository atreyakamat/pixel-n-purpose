// Alternative Hero component with YouTube background
// Note: This approach has limitations compared to native video

'use client';

import { useState } from 'react';

export default function HeroYoutube() {
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/gQldOO6KiU8?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&playlist=gQldOO6KiU8"
          title="Background video"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60 z-1"></div>

      {/* Content */}
      <div className="relative z-10 container text-center text-canvas">
        <div data-reveal className="max-w-4xl mx-auto">
          <p className="text-caption caps text-canvas/90 mb-6 tracking-caps">
            SOCIAL AGENCY
          </p>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-canvas">
            Brand your <em className="italic">story</em>
          </h1>
          
          <p className="text-base md:text-lg text-canvas/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Boutique social and ad partner for luxury houses
          </p>
          
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center min-w-[84px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-12 px-6 bg-canvas text-ink text-sm font-bold leading-normal tracking-[0.015em] hover:bg-canvas/90 transition-all duration-200"
          >
            Contact Us
          </button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToGallery}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-canvas/60 hover:text-canvas/80 transition-colors duration-200"
          aria-label="Scroll to next section"
        >
          <p className="text-caption caps tracking-caps">
            Scroll
          </p>
          <div className="w-4 h-4 animate-bounce">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14L12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
