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
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-poster.jpg"
        aria-label="Background video showcasing luxury brand aesthetics"
        style={{ contentVisibility: 'auto' }}
        onLoadStart={() => {
          // Lazy load video after critical content
          const video = document.querySelector('video');
          if (video && 'requestIdleCallback' in window) {
            window.requestIdleCallback(() => {
              video.preload = 'metadata';
            });
          }
        }}
      >
        {/* Optimized video sources */}
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Reduced overlay for better LCP */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/20 z-1"></div>

      {/* Content with better accessibility */}
      <div className="relative z-10 container text-center text-canvas">
        <div data-reveal className="max-w-4xl mx-auto">          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 text-canvas font-bold">
            Brand <span className="font-bold uppercase text-champagne">YOUR</span> Story
          </h1>
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center min-w-[84px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-12 px-6 bg-canvas text-ink text-sm font-bold leading-normal tracking-[0.015em] hover:bg-canvas/90 focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
            aria-label="Contact us to take the lead with your brand"
          >
            Take The LEAD
          </button>
        </div>
      </div>
    </section>
  );
}
