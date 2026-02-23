'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { ArrowForward } from '@/components/Icons';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formState.name,
          from_email: formState.email,
          brand: formState.project,
          message: formState.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      setSubmitStatus('success');
      setFormState({ name: '', email: '', project: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background-dark text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12"
              >
                Let&apos;s <br />
                <span className="italic font-light opacity-60">Connect.</span>
              </motion.h1>

              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
                    General Inquiries
                  </h4>
                  <a
                    href="mailto:hello@pixelnpurpose.com"
                    className="text-2xl md:text-3xl font-serif hover:opacity-60 transition-opacity"
                  >
                    hello@pixelnpurpose.com
                  </a>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
                    New Business
                  </h4>
                  <a
                    href="mailto:projects@pixelnpurpose.com"
                    className="text-2xl md:text-3xl font-serif hover:opacity-60 transition-opacity"
                  >
                    projects@pixelnpurpose.com
                  </a>
                </div>

                <div className="pt-12 border-t border-white/10">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Follow Us</h4>
                  <div className="flex flex-wrap gap-8 font-light text-sm">
                    <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">Behance</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 md:p-12 rounded-sm"
            >
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <div className="text-5xl mb-6"></div>
                  <h3 className="font-serif text-3xl mb-4">Message Sent</h3>
                  <p className="text-neutral-400 font-light">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-light text-lg"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-light text-lg"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Project Type</label>
                    <select
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-light text-lg appearance-none cursor-pointer"
                      value={formState.project}
                      onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                    >
                      <option value="" className="bg-neutral-900">Select an option</option>
                      <option value="web" className="bg-neutral-900">Website Design</option>
                      <option value="branding" className="bg-neutral-900">Brand Identity</option>
                      <option value="packaging" className="bg-neutral-900">Packaging</option>
                      <option value="other" className="bg-neutral-900">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Message</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-light text-lg resize-none"
                      placeholder="Tell us about your vision..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <p className="text-red-400 text-sm font-light">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-between border border-white/20 hover:border-white p-6 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </span>
                    <ArrowForward className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
