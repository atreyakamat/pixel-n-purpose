import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Pixel & Purpose',
  description: 'Terms and conditions for using our brand design and creative services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-canvas">
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-ink">
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Last updated: September 5, 2025
            </p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Agreement to Terms
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                By accessing or using Pixel & Purpose's website and services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Our Services
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>Pixel & Purpose provides:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Brand identity design and development</li>
                  <li>Creative content creation and strategy</li>
                  <li>Digital marketing and social media content</li>
                  <li>Photography and videography services</li>
                  <li>Website design and development consultation</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Client Responsibilities
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>As our client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for feedback within agreed timeframes</li>
                  <li>Make payments according to agreed terms</li>
                  <li>Respect our team's creative process and professional judgment</li>
                  <li>Own or have rights to any content you provide</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Project Process & Timeline
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <h3 className="font-semibold text-ink text-lg">Project Phases</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Discovery:</strong> Understanding your brand and goals</li>
                  <li><strong>Concept Development:</strong> Initial creative concepts and strategy</li>
                  <li><strong>Design & Creation:</strong> Final asset development</li>
                  <li><strong>Delivery:</strong> Final files and brand guidelines</li>
                </ul>

                <h3 className="font-semibold text-ink text-lg mt-6">Timelines</h3>
                <p>Project timelines are estimates and may vary based on:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Project complexity and scope</li>
                  <li>Client feedback and approval speed</li>
                  <li>Availability of required assets or information</li>
                  <li>Revision requests beyond agreed scope</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Payment Terms
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>50% deposit required to begin work</li>
                  <li>Final payment due upon project completion</li>
                  <li>Payment terms: Net 15 days</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are in USD unless otherwise specified</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Intellectual Property
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <h3 className="font-semibold text-ink text-lg">Client Rights</h3>
                <p>Upon full payment, you receive:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Exclusive rights to use final approved designs</li>
                  <li>High-resolution files in agreed formats</li>
                  <li>Brand guidelines and usage instructions</li>
                </ul>

                <h3 className="font-semibold text-ink text-lg mt-6">Pixel & Purpose Rights</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to showcase work in our portfolio</li>
                  <li>Right to use as case studies (with client approval)</li>
                  <li>Ownership of working files and creative process</li>
                  <li>Right to modify terms for future projects</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Revisions & Changes
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>Each project includes agreed-upon revision rounds:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Logo design: Up to 3 concept revisions</li>
                  <li>Brand identity: Up to 2 revision rounds</li>
                  <li>Content creation: Up to 2 revision rounds</li>
                </ul>
                <p>Additional revisions beyond the agreed scope may incur extra charges.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Cancellation Policy
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Projects may be cancelled with 48 hours written notice</li>
                  <li>Completed work and time invested will be charged</li>
                  <li>Deposits are non-refundable after work begins</li>
                  <li>Final deliverables require full payment</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Pixel & Purpose's liability is limited to the total amount paid for services. 
                  We are not responsible for indirect damages, lost profits, or consequential losses.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Confidentiality
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>We maintain strict confidentiality regarding:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Client business information and strategies</li>
                  <li>Proprietary processes and trade secrets</li>
                  <li>Unpublished creative concepts</li>
                  <li>Personal and contact information</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Contact Information
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>For questions about these terms or to discuss a project:</p>
                <div className="bg-panel p-6 rounded-lg border border-line">
                  <p><strong>Email:</strong> hello@pixelnpurpose.com</p>
                  <p><strong>Legal Inquiries:</strong> legal@pixelnpurpose.com</p>
                  <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM PST</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Changes to Terms
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our services 
                  after changes constitutes acceptance of new terms. Major changes will be communicated 
                  via email or website notice.
                </p>
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
