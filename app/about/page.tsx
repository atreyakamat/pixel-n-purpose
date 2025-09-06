import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Pixel & Purpose',
  description: 'Learn about our boutique creative agency specializing in social strategy for luxury brands with presence.',
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
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
