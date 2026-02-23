import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { localBusinessJaipurSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Marketing Agency in Jaipur | Pixel \'N\' Purpose - Creative Branding & Digital Marketing',
  description: 'Premier creative marketing and branding agency in Jaipur. Specializing in social-first campaigns, brand storytelling, and digital marketing for startups, heritage brands, and local businesses.',
  alternates: {
    canonical: 'https://pixelnpurpose.com/marketing-agency-jaipur',
  },
  openGraph: {
    title: 'Marketing Agency in Jaipur | Pixel \'N\' Purpose',
    description: 'Creative marketing and branding agency serving businesses in Jaipur and beyond.',
    url: 'https://pixelnpurpose.com/marketing-agency-jaipur',
  },
};

export default function MarketingAgencyJaipur() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white">
      <StructuredData data={localBusinessJaipurSchema} />
      <Header isHomePage={false} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-canvas to-panel py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
                Your Creative Marketing Partner in Jaipur
              </h1>
              <p className="text-xl md:text-2xl text-ink/80 mb-8 leading-relaxed">
                Pixel 'N' Purpose brings strategic branding, social-first campaigns, and digital marketing expertise to businesses across Jaipur's vibrant market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-ink text-canvas font-bold rounded-lg hover:bg-ink/90 transition-all duration-200"
                >
                  Get Started
                </a>
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-ink font-bold rounded-lg border-2 border-ink hover:bg-ink hover:text-white transition-all duration-200"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
                Marketing Services for Jaipur Businesses
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Brand Identity & Design',
                    description: 'Create memorable brand identities that honor Jaipur\'s heritage while embracing modern aesthetics.'
                  },
                  {
                    title: 'Social Media Marketing',
                    description: 'Social-first campaigns that engage local audiences and showcase your brand\'s unique story.'
                  },
                  {
                    title: 'Digital Marketing',
                    description: 'Comprehensive digital strategies including SEO, PPC, and content marketing for Jaipur businesses.'
                  },
                  {
                    title: 'E-commerce Solutions',
                    description: 'Build and grow your online presence with optimized e-commerce strategies and platforms.'
                  },
                  {
                    title: 'Content Creation',
                    description: 'High-quality visual content that captures Jaipur\'s vibrant culture and your brand essence.'
                  },
                  {
                    title: 'Marketing Consulting',
                    description: 'Strategic guidance to help traditional businesses transition to modern marketing approaches.'
                  },
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl bg-panel border border-line hover:border-ink/30 transition-all duration-300"
                  >
                    <h3 className="font-display text-xl font-bold text-ink mb-3">{service.title}</h3>
                    <p className="text-ink/70 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us in Jaipur */}
        <section className="py-16 md:py-24 bg-canvas">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-8 text-center">
                Why Jaipur Businesses Choose Pixel 'N' Purpose
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-line">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Heritage Meets Innovation</h3>
                  <p className="text-ink/70 leading-relaxed">
                    We understand Jaipur's unique blend of tradition and modernity. Our strategies honor cultural heritage while leveraging cutting-edge digital marketing techniques.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-line">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Proven Growth Results</h3>
                  <p className="text-ink/70 leading-relaxed">
                    We've helped Jaipur businesses scale their online presence, increase customer acquisition by 200%, and build strong brand recognition through strategic campaigns.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-line">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Local Insights, Global Standards</h3>
                  <p className="text-ink/70 leading-relaxed">
                    Our team combines deep understanding of Jaipur's market dynamics with international marketing best practices to deliver exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
                Industries We Serve in Jaipur
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Jewelry & Gems',
                  'Textiles & Fashion',
                  'Handicrafts & Art',
                  'Hospitality & Hotels',
                  'Real Estate',
                  'Retail & E-commerce',
                  'Healthcare & Wellness',
                  'Education & Training'
                ].map((industry, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-panel border border-line"
                  >
                    <svg className="w-6 h-6 text-ink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium text-ink">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-ink text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Brand in Jaipur?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let's discuss how we can help your business thrive with strategic marketing and creative excellence.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-display text-lg font-bold mb-3">Email Us</h3>
                    <a 
                      href="mailto:hello@pixelnpurpose.com" 
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      hello@pixelnpurpose.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-3">Call Us</h3>
                    <a 
                      href="tel:+91XXXXXXXXXX" 
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      +91-XXXXXXXXXX
                    </a>
                  </div>
                </div>
              </div>

              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-ink font-bold rounded-lg hover:bg-white/90 transition-all duration-200"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}