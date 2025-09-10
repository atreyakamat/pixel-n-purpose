import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Pixel & Purpose',
  description: 'Terms of Service for Pixel & Purpose by Pixpur Design House (OPC) Pvt. Ltd. - Understand our service terms and conditions.',
  openGraph: {
    title: 'Terms of Service | Pixel & Purpose',
    description: 'Terms of Service for Pixel & Purpose by Pixpur Design House (OPC) Pvt. Ltd.',
    type: 'website',
  },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Header spacing */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Terms of Service
          </h1>
          <div className="text-lg text-ink/70 mb-2">
            Pixel & Purpose
          </div>
          <div className="text-sm text-ink/60">
            By Pixpur Design House (OPC) Pvt. Ltd.
          </div>
        </div>

        {/* Terms of Service Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-panel border border-line rounded-xl p-8 mb-8">
            <p className="text-ink/80 mb-4">
              <strong>Effective Date:</strong> September 9, 2025
            </p>
            <p className="text-ink/80 mb-6">
              <strong>Entity Name:</strong> Pixpur Design House (OPC) Private Limited, operating as Pixel & Purpose.
            </p>
            <p className="text-ink leading-relaxed">
              By accessing our website or engaging our services, you agree to the following terms:
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">1</span>
              Scope of Agreement
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                These terms apply to all website users and clients who engage with Pixel & Purpose services.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">2</span>
              Services Provided
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed mb-4">
                We provide comprehensive creative and strategic services including:
              </p>
              <ul className="space-y-2 text-ink">
                <li><strong>Design Services:</strong> Brand identity, visual design, and creative solutions</li>
                <li><strong>Branding:</strong> Complete brand strategy and identity development</li>
                <li><strong>Content Creation:</strong> Social media content, copywriting, and visual assets</li>
                <li><strong>Digital Marketing:</strong> Social media strategy, advertising, and campaign management</li>
                <li><strong>Consulting:</strong> Strategic guidance and brand advisory services</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">3</span>
              Payments
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                All payments are required upfront, before service delivery begins. We accept various payment methods as agreed upon during project initiation.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">4</span>
              Refunds & Cancellations
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                No refunds are provided once work has been delivered and accepted. Cancellations before work begins are subject to our discretion and may incur administrative fees.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">5</span>
              Intellectual Property
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                Clients receive full rights to delivered work upon complete payment. Pixel & Purpose retains the right to showcase completed work in our portfolio and marketing materials.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">6</span>
              Client Responsibilities
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="space-y-2 text-ink">
                <li>Providing timely content, assets, and information required for project completion</li>
                <li>Offering constructive feedback within agreed timeframes</li>
                <li>Providing approvals for deliverables in a timely manner</li>
                <li>Communicating any changes or concerns promptly</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">7</span>
              Confidentiality
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                Both parties agree to maintain confidentiality of all business data, strategies, and proprietary information shared during the course of our professional relationship.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">8</span>
              Limitation of Liability
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                We are not liable for indirect or consequential damages arising from our services. Our liability is limited to the total fees paid for the specific project in question.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">9</span>
              Termination
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                We reserve the right to terminate services if clients fail to make payments or breach these terms. Termination procedures will be handled professionally with appropriate notice.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">10</span>
              Governing Law & Jurisdiction
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                These terms are governed by Indian law and international business standards. Jurisdiction for any disputes shall be determined according to applicable legal frameworks.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center">
              <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">11</span>
              Updates to Terms
            </h2>
            <div className="bg-panel border border-line rounded-xl p-6">
              <p className="text-ink leading-relaxed">
                We may update these Terms of Service at any time. Continued use of our services after updates implies acceptance of the revised terms.
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
                If you have any questions about these Terms of Service, please contact us:
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
              These Terms of Service govern our professional relationship and service delivery.
              <br />
              © 2025 Pixpur Design House (OPC) Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
