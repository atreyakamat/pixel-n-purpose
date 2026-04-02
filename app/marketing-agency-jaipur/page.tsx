import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { localBusinessJaipurSchema } from '@/lib/structured-data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing Agency in Jaipur | Pixel \'N\' Purpose - Brand Strategy & Digital Marketing',
  description: 'Top creative marketing and branding agency in Jaipur. Specializing in brand storytelling, social-first campaigns, and digital marketing for luxury brands, startups, and heritage businesses.',
  alternates: {
    canonical: 'https://pixelnpurpose.com/marketing-agency-jaipur',
  },
  openGraph: {
    title: 'Marketing Agency in Jaipur | Pixel \'N\' Purpose',
    description: 'Creative marketing and branding agency serving businesses in Jaipur and Rajasthan.',
    url: 'https://pixelnpurpose.com/marketing-agency-jaipur',
  },
};

export default function MarketingAgencyJaipur() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-canvas text-ink">
      <StructuredData data={localBusinessJaipurSchema} />
      <Header isHomePage={false} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-canvas py-20 md:py-32 border-b border-ink-rule">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
                Your Strategic Marketing Partner in Jaipur
              </h1>
              <p className="text-xl md:text-2xl text-ink-dim mb-8 leading-relaxed">
                Pixel & Purpose brings brand storytelling, social-first campaigns, and digital marketing expertise to heritage and modern businesses across Jaipur.
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
                Marketing Services for Jaipur Businesses
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Brand Storytelling',
                    description: 'Capture the heritage and modern essence of your Jaipur-based brand through compelling narratives.'
                  },
                  {
                    title: 'Social Media Management',
                    description: 'Strategic social media campaigns that engage audiences and build brand loyalty for your business.'
                  },
                  {
                    title: 'Performance Marketing',
                    description: 'Data-driven digital marketing strategies including SEO and PPC tailored for the Jaipur market.'
                  },
                  {
                    title: 'Creative Design',
                    description: 'Premium visual identity and design assets that make your brand stand out in Rajasthan.'
                  },
                  {
                    title: 'E-commerce Solutions',
                    description: 'Optimized digital experiences for Jaipur\'s thriving retail and artisan businesses.'
                  },
                  {
                    title: 'Marketing Advisory',
                    description: 'Strategic consulting to help heritage brands transition and thrive in the digital age.'
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

        {/* Why Choose Us in Jaipur */}
        <section className="py-16 md:py-24 section-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-8 text-center">
                Why Jaipur Businesses Partner with Us
              </h2>
              <div className="space-y-6">
                <div className="glass p-8 border border-ink-rule">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Heritage & Modernity</h3>
                  <p className="text-ink-dim leading-relaxed">
                    We understand the balance between Jaipur's rich heritage and the needs of a modern digital audience. Our strategies respect tradition while driving innovation.
                  </p>
                </div>
                <div className="glass p-8 border border-ink-rule">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Creative Excellence</h3>
                  <p className="text-ink-dim leading-relaxed">
                    Our team brings a premium aesthetic and strategic thinking to every project, ensuring your brand stands out in Jaipur's vibrant business community.
                  </p>
                </div>
                <div className="glass p-8 border border-ink-rule">
                  <h3 className="font-display text-xl font-bold text-ink mb-3">Growth Focused</h3>
                  <p className="text-ink-dim leading-relaxed">
                    We're not just about looks. We're about results. We help Jaipur businesses expand their reach and grow their impact through effective digital marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 section-canvas border-t border-ink-rule">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
                Ready to Grow Your Brand in Jaipur?
              </h2>
              <p className="text-xl text-ink-dim mb-12 leading-relaxed">
                Let's discuss how we can help your business thrive with strategic marketing and creative campaigns.
              </p>
              
              <Link 
                href="/contact" 
                className="btn-solid"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
