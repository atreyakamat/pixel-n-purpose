'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Contact - Pixel & Purpose',
  description: 'Get in touch with our boutique creative agency for luxury brand strategy and social media solutions.',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    <div className="min-h-screen bg-canvas text-ink">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-canvas backdrop-blur-lg border-b border-line">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-ink hover:text-ink transition-colors">
            <img 
              src="/PNP-black.png" 
              alt="Pixel & Purpose Logo" 
              className="h-8 w-auto"
            />
          </a>
          <nav className="flex items-center gap-6">
            <a href="/about" className="text-ink hover:text-ink transition-colors">About</a>
            <a href="/" className="text-ink hover:text-ink transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
          </nav>
        </div>
      </header>

      <main className="container py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Create Together
            </h1>
            <p className="text-ink text-lg leading-relaxed">
              Ready to elevate your brand's story? Get in touch and let's discuss your vision.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-ink mb-3 text-sm uppercase tracking-wider">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-ink pb-3 text-ink placeholder-ink/50 focus:outline-none focus:border-ink transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-ink mb-3 text-sm uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-ink pb-3 text-ink placeholder-ink/50 focus:outline-none focus:border-ink transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="brand" className="block text-ink mb-3 text-sm uppercase tracking-wider">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-ink pb-3 text-ink placeholder-ink/50 focus:outline-none focus:border-ink transition-colors duration-200"
                placeholder="Brand or company"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-ink mb-3 text-sm uppercase tracking-wider">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-ink pb-3 text-ink placeholder-ink/50 focus:outline-none focus:border-ink transition-colors duration-200 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Privacy Note */}
            <div className="bg-canvas rounded-lg p-4 border border-line">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ink text-sm leading-relaxed">
                    <strong>Privacy Promise:</strong> We'll never share your information. Your data is secure and used only to respond to your inquiry. Read our <a href="/privacy-policy" className="text-ink hover:text-ink underline">Privacy Policy</a> for details.
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
                      <p className="text-ink text-sm mt-1">We'll get back to you within 24 hours.</p>
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
                      <p className="text-ink text-sm mt-1">Please try again or email us directly at hello@pixelnpurpose.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-ink mb-2">Or reach us directly:</p>
            <a 
              href="mailto:hello@pixelnpurpose.com"
              className="text-ink hover:text-ink transition-colors duration-200 font-medium"
            >
              hello@pixelnpurpose.com
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-line">
            <a 
              href="/"
              className="inline-flex items-center text-ink hover:text-ink transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-line py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex items-center gap-6">
              <a href="/" className="text-ink hover:text-ink transition-colors">Home</a>
              <a href="/about" className="text-ink hover:text-ink transition-colors">About</a>
              <a href="/contact" className="text-ink hover:text-ink transition-colors">Contact</a>
            </nav>
            <p className="text-ink text-sm">
              © 2025 Pixel & Purpose. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
