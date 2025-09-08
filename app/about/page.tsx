import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Pixel & Purpose',
  description: 'Learn about our boutique creative agency specializing in social strategy for luxury brands with presence.',
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black backdrop-blur-lg pt-1 pb-0">
        <div className="container flex items-center justify-between">
          <div className="flex items-start">
            <a href="/" className="w-25 h-25 -mt-4 focus:outline-none rounded-lg" aria-label="Pixel & Purpose - Home">
              <img 
                src="/PNP-white.png" 
                alt="Pixel & Purpose Logo" 
                className="w-full h-full object-contain transition-all duration-500"
                width="100"
                height="100"
              />
            </a>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/contact" className="text-white hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a href="/" className="text-white hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home Button - First */}
          <div className="mb-12">
            <a 
              href="/"
              className="inline-flex items-center text-white hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>

          {/* About Content */}
          <div className="space-y-12 text-lg md:text-xl leading-relaxed">
            <p>
              We were founded as an ad agency that didn't like advertising.
            </p>
            
            <p>
              A company with no guiding principle other than to make great work for inspiring clients.
            </p>
            
            <p>
              We try to be the kind of place where creatively-driven people with the widest perspectives possible can come to do the best work of their lives and find ways to use the work to say something.
            </p>
            
            <p>
              And for over 40 years we've made work that helps build brands and influence culture. From "Just Do It" to "This Is SportsCenter" to "Dilly Dilly" we've tried to use creativity to make a dent in the world across every medium and every discipline.
            </p>
            
            <p>
              Most people out there have no idea who we are, but they probably know some of the things we've made.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a href="/" className="text-white hover:text-white transition-colors">Home</a>
              <a href="/contact" className="text-white hover:text-white transition-colors">Contact</a>
              <a href="/privacy-policy" className="text-white hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-white hover:text-white transition-colors">Terms</a>
            </div>
            <p className="text-white text-sm">© 2025 Pixel & Purpose. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
