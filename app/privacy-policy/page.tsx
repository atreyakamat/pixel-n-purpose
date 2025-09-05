import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Pixel & Purpose',
  description: 'Our commitment to protecting your privacy and data security.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-canvas">
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-ink">
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Last updated: September 5, 2025
            </p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Our Commitment
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                At Pixel & Purpose, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <h3 className="font-semibold text-ink text-lg">Contact Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and email address (when you contact us)</li>
                  <li>Brand or company information (optional)</li>
                  <li>Message content and project details</li>
                </ul>

                <h3 className="font-semibold text-ink text-lg mt-6">Website Analytics</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and device information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referral sources</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Discuss potential projects and provide quotes</li>
                  <li>Improve our website and user experience</li>
                  <li>Send occasional updates about our services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Data Protection
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure data transmission using SSL encryption</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal data by authorized personnel only</li>
                  <li>Data retention policies to minimize storage time</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Cookies and Tracking
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Improve website functionality and performance</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Remember your preferences</li>
                </ul>
                <p>You can control cookie preferences through your browser settings.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>File a complaint with data protection authorities</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Third-Party Services
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>We may use third-party services for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Website analytics (Google Analytics)</li>
                  <li>Email communications</li>
                  <li>Cloud hosting and storage</li>
                </ul>
                <p>These services have their own privacy policies and terms of service.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Contact Us
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>If you have questions about this privacy policy or your data, contact us:</p>
                <div className="bg-panel p-6 rounded-lg border border-line">
                  <p><strong>Email:</strong> privacy@pixelnpurpose.com</p>
                  <p><strong>General Contact:</strong> hello@pixelnpurpose.com</p>
                  <p><strong>Response Time:</strong> We'll respond within 48 hours</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Updates to This Policy
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  We may update this privacy policy periodically. We'll notify you of significant changes 
                  via email or website notice. The "Last updated" date at the top indicates the most recent revision.
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
