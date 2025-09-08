'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', brand: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black backdrop-blur-lg pt-1 pb-0">
        <div className="w-full flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-start">
            <a href="/" className="w-[150px] h-[150px] -mt-2 focus:outline-none rounded-lg" aria-label="Pixel & Purpose - Home">
              <img 
                src="/PNP-white.png" 
                alt="Pixel & Purpose Logo" 
                className="w-full h-full object-contain transition-all duration-500"
                width="150"
                height="150"
              />
            </a>
          </div>
          <nav className="flex items-center gap-6">
            {/* Hamburger Menu Button */}
            <button
              className="p-2 focus:outline-none rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="navigation-menu"
            >
              <div className="w-10 h-10 flex flex-col justify-center items-center relative">
                <span className={`block h-1 w-10 transition-all duration-300 transform ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-0 bg-white' 
                    : 'translate-y-[-6px] bg-white'
                }`} />
                <span className={`block h-1 w-10 transition-all duration-300 transform ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-0' 
                    : 'opacity-100 scale-100 bg-white'
                }`} />
                <span className={`block h-1 w-10 transition-all duration-300 transform ${
                  isMobileMenuOpen 
                    ? '-rotate-45 translate-y-0 bg-white' 
                    : 'translate-y-[6px] bg-white'
                }`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[9999] transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        id="navigation-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
      >
        {/* Black background overlay */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
        
        {/* Close button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[10000] p-2 text-white hover:text-white focus:outline-none rounded-lg"
          aria-label="Close navigation menu"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
        
        {/* Menu content */}
        <div className="relative h-full flex items-center justify-center p-4 overflow-y-auto">
          <nav aria-label="Main navigation" role="navigation" className="w-full max-w-md">
            <h2 id="menu-title" className="sr-only">Main Navigation</h2>
            <ul className="text-center space-y-4 sm:space-y-8" role="list">
              <li>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-white focus:text-white focus:outline-none rounded-lg transition-colors duration-300 py-2 sm:py-4"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white hover:text-white focus:text-white focus:outline-none rounded-lg transition-colors duration-300 py-2 sm:py-4"
                >
                  Services
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="container pt-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Create Together
            </h1>
            <p className="text-white text-lg leading-relaxed">
              Ready to elevate your brand's story? Get in touch and let's discuss your vision.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-3 text-sm uppercase tracking-wider">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-3 text-sm uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="brand" className="block text-white mb-3 text-sm uppercase tracking-wider">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-200"
                placeholder="Brand or company"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-3 text-sm uppercase tracking-wider">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-200 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Privacy Note */}
            <div className="bg-black rounded-lg p-4 border border-white">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm leading-relaxed">
                    <strong>Privacy Promise:</strong> We'll never share your information. Your data is secure and used only to respond to your inquiry. Read our <a href="/privacy-policy" className="text-white hover:text-white underline">Privacy Policy</a> for details.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto flex items-center justify-center min-w-[200px] h-12 px-6 bg-white text-black rounded-lg font-bold text-sm tracking-wider hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-green-400 font-medium text-sm">Message sent successfully!</p>
                      <p className="text-white text-sm mt-1">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-400 font-medium text-sm">Something went wrong</p>
                      <p className="text-white text-sm mt-1">Please try again or email us directly at hello@pixelnpurpose.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-white mb-2">Or reach us directly:</p>
            <a 
              href="mailto:hello@pixelnpurpose.com"
              className="text-white hover:text-white transition-colors duration-200 font-medium"
            >
              hello@pixelnpurpose.com
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white">
            <a 
              href="/"
              className="inline-flex items-center text-white hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex items-center gap-6">
              <a href="/" className="text-white hover:text-white transition-colors">Home</a>
              <a href="/about" className="text-white hover:text-white transition-colors">About</a>
              <a href="/contact" className="text-white hover:text-white transition-colors">Contact</a>
            </nav>
            <p className="text-white text-sm">
              © 2025 Pixel & Purpose. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
