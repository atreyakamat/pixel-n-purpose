'use client';

import { useEffect, lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { setupReveal } from '@/lib/reveal';

// Lazy load non-critical components
const Gallery = lazy(() => import('@/components/Gallery'));
const Services = lazy(() => import('@/components/Services'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading component
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-8 h-8 border-2 border-champagne border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  useEffect(() => {
    setupReveal();
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-canvas">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<ComponentLoader />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <Services />
        </Suspense>
      </main>
      <Suspense fallback={<ComponentLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
