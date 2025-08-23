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
            Brand <span className="font-bold uppercase">YOUR</span> Story
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
      </div>
    </section>
  );
}
