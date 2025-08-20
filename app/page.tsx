'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { setupReveal } from '@/lib/reveal';

export default function Home() {
  useEffect(() => {
    setupReveal();
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-canvas">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
