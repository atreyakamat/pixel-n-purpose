'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Philosophy from '@/components/Philosophy';
import PortfolioGrid from '@/components/PortfolioGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-canvas">
      <Header isHomePage={true} />
      <main>
        {/* Frame 1: Full-screen layered hero */}
        <Hero />
        {/* Frame 2: Service panels — staggered glass reveals */}
        <ServicesSection />
        {/* Frame 3: Philosophy typographic statement */}
        <Philosophy />
        {/* Frame 4: Portfolio preview grid */}
        <PortfolioGrid />
        {/* Frame 5: Call to action */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
