import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pixel & Purpose',
  description: 'Privacy Policy for Pixel & Purpose by Pixpur Design House (OPC) Pvt. Ltd. - Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Pixel & Purpose',
    description: 'Privacy Policy for Pixel & Purpose by Pixpur Design House (OPC) Pvt. Ltd.',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Header spacing */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Privacy Policy
          </h1>
          <div className="text-lg text-ink/70 mb-2">
            Pixel & Purpose
          </div>
          <div className="text-sm text-ink/60">
            By Pixpur Design House (OPC) Pvt. Ltd.
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-panel border border-line rounded-xl p-8 mb-8">
            <p className="text-ink/80 mb-4">
              <strong>Effective Date:</strong> September 9, 2025
            </p>
            <p className="text-ink/80 mb-6">
              <strong>Entity Name:</strong> Pixpur Design House (OPC) Private Limited, operating under the brand name Pixel & Purpose ("we," "our," "us").
            </p>
            <p className="text-ink leading-relaxed">
              We respect your privacy and are committed to protecting personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">1</span>
              Information We Collect
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="mt-4 space-y-2 text-ink">
                <li><strong>Personal Identifiable Information (PII):</strong> Name, email address, phone number, and contact details</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and operating system</li>
                <li><strong>Usage Data:</strong> Website interactions, pages visited, time spent, and user preferences</li>
                <li><strong>Children's Data:</strong> Information from users under 18 years of age (with appropriate safeguards)</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">2</span>
              How We Use Your Data
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed mb-4">
                We use your data for the following purposes:
              </p>
              <ul className="space-y-2 text-ink">
                <li><strong>Communication:</strong> Responding to inquiries and providing customer support</li>
                <li><strong>Service Delivery:</strong> Delivering our design and branding services</li>
                <li><strong>Billing:</strong> Processing payments and maintaining financial records</li>
                <li><strong>Marketing:</strong> Sending promotional materials and updates (with your consent)</li>
                <li><strong>Website Improvement:</strong> Analyzing usage patterns to enhance user experience</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">3</span>
              Third-Party Services
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed mb-4">
                We may use the following third-party services to enhance our operations:
              </p>
              <ul className="space-y-2 text-ink">
                <li><strong>Google Analytics:</strong> For website analytics and user behavior tracking</li>
                <li><strong>Wix Studio:</strong> For website hosting and content management</li>
                <li><strong>PayPal & Stripe:</strong> For secure payment processing</li>
                <li><strong>Mailchimp:</strong> For email marketing and newsletter services</li>
                <li><strong>Other Services:</strong> Additional tools as needed for business operations</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">4</span>
              Data Sharing & Confidentiality
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                We do not sell or rent client data to third parties. Your personal information may only be shared with trusted freelancers and contractors when necessary for service delivery, and only under strict confidentiality agreements.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">5</span>
              Data Retention
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                We retain personal data for as long as necessary for business operations, legal compliance, and operational purposes. Data retention periods may vary based on the type of information and applicable legal requirements.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">6</span>
              International Data Transfers
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                Your data may be processed and stored outside your country of residence. We implement appropriate safeguards in compliance with GDPR and DPDP (Data Protection and Digital Privacy) regulations to ensure your data remains protected during international transfers.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">7</span>
              Security Measures
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                We implement reasonable technical and organizational safeguards to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">8</span>
              Your Rights
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2 text-ink">
                <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
                <li><strong>Update:</strong> Correct or update your personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">9</span>
              Children's Privacy
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                If we inadvertently collect personal data from minors under 18 years of age, we will delete such information promptly unless retention is required for service delivery or legal compliance.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">10</span>
              Policy Updates
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website with a new effective date.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">📧</span>
              Contact Us
            </h2>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
              <p className="text-ink leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-accent font-medium">Email:</span>
                <a 
                  href="mailto:hello@pixelnpurpose.com" 
                  className="text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  hello@pixelnpurpose.com
                </a>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center pt-8 border-t border-line">
            <p className="text-ink/60 text-sm">
              This Privacy Policy is part of our commitment to transparency and data protection.
              <br />
              © 2025 Pixpur Design House (OPC) Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
