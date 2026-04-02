import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { localBusinessGoaSchema } from '@/lib/structured-data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing Agency in Goa | Pixel \'N\' Purpose - Creative Branding & Digital Marketing',
  description: 'Leading creative marketing and branding agency in Goa. Specializing in social-first campaigns, brand storytelling, and digital marketing for startups, luxury brands, and local businesses.',
  alternates: {
    canonical: 'https://pixelnpurpose.com/marketing-agency-goa',
  },
  openGraph: {
    title: 'Marketing Agency in Goa | Pixel \'N\' Purpose',
    description: 'Creative marketing and branding agency serving businesses in Goa and beyond.',
    url: 'https://pixelnpurpose.com/marketing-agency-goa',
  },
};

export default function MarketingAgencyGoa() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-canvas text-ink">
      <StructuredData data={localBusinessGoaSchema} />
      <Header isHomePage={false} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-canvas py-20 md:py-32 border-b border-ink-rule">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
                Your Creative Marketing Partner in Goa
              </h1>
              <p className="text-xl md:text-2xl text-ink-dim mb-8 leading-relaxed">
                Pixel & Purpose brings strategic branding, social-first campaigns, and digital marketing expertise to businesses across Goa and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="btn-solid"
                >
                  Get Started
                </Link>
                <a 
                  href="mailto:hello@pixelnpurpose.com" 
                  className="btn-ghost"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 section-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
                Marketing Services for Goa Businesses
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Brand Identity & Design',
                    description: 'Create memorable brand identities that resonate with your target audience in Goa\'s competitive market.'
                  },
                  {
                    title: 'Social Media Marketing',
                    description: 'Social-first campaigns that engage local audiences and drive measurable results for your business.'
                  },
                  {
                    title: 'Digital Marketing',
                    description: 'Comprehensive digital strategies including SEO, PPC, and content marketing tailored for Goa businesses.'
                  },
                  {
                    title: 'Content Creation',
                    description: 'High-quality visual content and storytelling that captures the essence of your brand.'
                  },
                  {
                    title: 'Website Development',
                    description: 'Modern, responsive websites optimized for conversion and user experience.'
                  },
                  {
                    title: 'Marketing Consulting',
                    description: 'Strategic guidance and training to help your team execute effective marketing campaigns.'
                  },
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="p-8 rounded-2xl glass-subtle border border-ink-rule hover:border-ink-ghost transition-all duration-300"
                  >
                    <h3 className="font-display text-xl font-bold text-ink mb-3">{service.title}</h3>
                    <p className="text-ink-dim leading-relaxed text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us in Goa */}
        <section className="py-16 md:py-24 section-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-8 text-center">
                Why Goa Businesses Choose Pixel & Purpose
              </h2>
              <div className="space-y-6">
                <div className="glass p-8 border border-ink-rule">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Local Market Expertise</h3>
                  <p className="text-ink-dim leading-relaxed">
                    We understand Goa's unique business landscape — from hospitality and tourism to retail and F&B. Our strategies are tailored to connect with both local residents and the tourist demographic.
                  </p>
                </div>
                <div className="glass p-8 border border-ink-rule">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Proven Results</h3>
                  <p className="text-ink-dim leading-relaxed">
                    We've helped Goa businesses increase footfall, boost online engagement, and build strong brand presence through targeted social campaigns and creative storytelling.
                  </p>
                </div>
                <div className="glass p-8 border border-ink-rule">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Remote-First, Locally Connected</h3>
                  <p className="text-ink-dim leading-relaxed">
                    Operating remotely allows us to work efficiently while maintaining strong connections with the Goa business community. We combine global best practices with local insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 md:py-24 section-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
                Industries We Serve in Goa
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Hospitality & Resorts',
                  'Restaurants & Cafés',
                  'Retail & Fashion',
                  'Real Estate',
                  'Wellness & Spa',
                  'Tourism & Travel',
                  'Event Management',
                  'Professional Services'
                ].map((industry, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-5 rounded-xl glass-subtle border border-ink-rule"
                  >
                    <svg className="w-5 h-5 text-ink-ghost flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink-dim font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 section-canvas border-t border-ink-rule">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
                Ready to Elevate Your Brand in Goa?
              </h2>
              <p className="text-xl text-ink-dim mb-12 leading-relaxed">
                Let's discuss how we can help your business grow with strategic marketing and creative campaigns.
              </p>
              
              <Link 
                href="/contact" 
                className="btn-solid"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}