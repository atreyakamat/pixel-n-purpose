import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Pixel & Purpose',
  description: 'Learn about our boutique creative agency specializing in social strategy for luxury brands with presence.',
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-canvas">
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-8">
            About Pixel & Purpose
          </h1>
          
          <div className="prose prose-lg max-w-none text-ink">
            <section className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>
                  Pixel & Purpose was born from a simple belief: luxury brands deserve creative partners 
                  who understand the delicate balance between exclusivity and accessibility, tradition and innovation.
                </p>
                <p>
                  As a boutique social and advertising partner, we specialize in crafting quiet ideas that 
                  create measurable impact. We don't believe in noise for the sake of noise—instead, we focus 
                  on purposeful creativity that resonates with discerning audiences.
                </p>
                <p>
                  Our approach is intentionally selective. We work with brands that value quality over quantity, 
                  strategy over trends, and authentic connection over viral moments. This philosophy allows us 
                  to deliver exceptional results while maintaining the intimate, personalized service that 
                  defines our practice.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Our Philosophy
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-panel p-6 rounded-lg border border-line">
                  <h3 className="font-display text-lg font-semibold text-ink mb-3">
                    Quiet Ideas
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    We believe the most powerful ideas don't need to shout. Our creative solutions are 
                    thoughtfully crafted to speak directly to your audience's values and aspirations.
                  </p>
                </div>
                
                <div className="bg-panel p-6 rounded-lg border border-line">
                  <h3 className="font-display text-lg font-semibold text-ink mb-3">
                    Measurable Impact
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    Every strategy is designed with clear objectives and measurable outcomes. 
                    Beautiful work that doesn't drive results isn't beautiful at all.
                  </p>
                </div>
                
                <div className="bg-panel p-6 rounded-lg border border-line">
                  <h3 className="font-display text-lg font-semibold text-ink mb-3">
                    Luxury Focus
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    We understand the unique challenges of luxury brand communication—maintaining 
                    exclusivity while building meaningful connections with your audience.
                  </p>
                </div>
                
                <div className="bg-panel p-6 rounded-lg border border-line">
                  <h3 className="font-display text-lg font-semibold text-ink mb-3">
                    Partnership Approach
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    We don't just execute campaigns—we become an extension of your team, 
                    deeply understanding your brand's DNA and long-term vision.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                What We Do
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">
                    Social Media Strategy
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    Comprehensive social strategies that align with your brand's positioning and business objectives. 
                    From content planning to community management, we ensure every touchpoint reinforces your brand's luxury status.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">
                    Creative Content Development
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    Visual storytelling that captures the essence of luxury—photography, video, graphics, 
                    and copy that speaks to sophisticated audiences without compromising authenticity.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">
                    Paid Advertising
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    Precision-targeted campaigns that reach high-value audiences across digital platforms. 
                    We focus on quality impressions and meaningful engagement over vanity metrics.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">
                    Brand Consultation
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    Strategic guidance on digital brand positioning, audience development, and competitive landscape analysis. 
                    We help refine your digital presence to match your offline luxury experience.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Our Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-ink rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-2">Discovery</h3>
                    <p className="text-secondary leading-relaxed">
                      We begin with deep brand immersion—understanding your heritage, values, 
                      target audience, and competitive landscape.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-ink rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-2">Strategy</h3>
                    <p className="text-secondary leading-relaxed">
                      Development of comprehensive digital strategy aligned with your business objectives 
                      and brand positioning in the luxury market.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-ink rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-2">Creation</h3>
                    <p className="text-secondary leading-relaxed">
                      Execution of creative concepts with meticulous attention to detail, 
                      ensuring every piece reflects your brand's luxury standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-ink rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-2">Optimization</h3>
                    <p className="text-secondary leading-relaxed">
                      Continuous refinement based on performance data and market feedback, 
                      ensuring sustained growth and engagement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Why Choose Pixel & Purpose
              </h2>
              <div className="bg-panel p-8 rounded-lg border border-line">
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    <strong className="text-ink">Boutique Focus:</strong> As a small, dedicated team, 
                    we provide the personalized attention and strategic depth that large agencies can't match.
                  </p>
                  <p>
                    <strong className="text-ink">Luxury Expertise:</strong> We understand the nuances of 
                    luxury brand communication and the importance of maintaining exclusivity in digital spaces.
                  </p>
                  <p>
                    <strong className="text-ink">Quality Over Quantity:</strong> We work with a select 
                    number of clients to ensure exceptional service and results for each partnership.
                  </p>
                  <p>
                    <strong className="text-ink">Proven Results:</strong> Our strategies consistently 
                    drive meaningful engagement, qualified leads, and measurable business growth.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Ready to Elevate Your Brand?
              </h2>
              <div className="bg-ink text-canvas p-8 rounded-lg">
                <p className="text-lg leading-relaxed mb-6">
                  We're selective about our partnerships because exceptional work requires exceptional collaboration. 
                  If you're a luxury brand ready to invest in purposeful digital strategy, we'd love to explore 
                  how we can help you achieve your goals.
                </p>
                <a 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-accent text-ink px-6 py-3 rounded hover:bg-accent/90 transition-colors duration-200 font-medium"
                >
                  Start a Conversation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-line">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-ink hover:text-secondary transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
