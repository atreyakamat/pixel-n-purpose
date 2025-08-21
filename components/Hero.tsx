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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        aria-label="Background video showcasing luxury brand aesthetics"
      >
        {/* Updated to use your new video file */}
        <source src="/pnp-hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/40 z-1"></div>

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

      {/* Video controls for accessibility */}
      <button
        className="absolute top-20 right-4 z-20 text-caption caps text-canvas/80 hover:text-canvas bg-ink/20 px-3 py-2 rounded backdrop-blur-sm transition-colors duration-200"
        onClick={toggleVideo}
        aria-label={videoPaused ? "Play background video" : "Pause background video"}
      >
        {videoPaused ? 'PLAY' : 'PAUSE'}
      </button>
    </section>
  );
}
