import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Pixel & Purpose',
  description: 'Get in touch with our boutique creative agency for luxury brand strategy and social media solutions.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Contact
          </h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ready to elevate your brand? Let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a 
                  href="mailto:hello@pixelnpurpose.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@pixelnpurpose.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Business Inquiries</h3>
                <a 
                  href="mailto:business@pixelnpurpose.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  business@pixelnpurpose.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Response Time</h3>
                <p className="text-gray-300">
                  We typically respond within 24 hours during business days.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday, 9:00 AM - 6:00 PM PST
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h2 className="text-xl font-semibold mb-4">What to Include</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Brief description of your brand</li>
                <li>• Project goals and timeline</li>
                <li>• Estimated budget range</li>
                <li>• Any specific requirements</li>
              </ul>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-400">
                We work with a select number of clients to ensure exceptional service. 
                All inquiries are treated with strict confidentiality.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
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
