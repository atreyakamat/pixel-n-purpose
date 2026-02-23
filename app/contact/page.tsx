'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

type SubmitStatus = 'idle' | 'success' | 'error';

const SERVICE_OPTIONS = [
  'Website Design',
  'Portfolio Design',
  'Packaging Design',
  'Photography',
  'Multiple Services',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS env vars missing');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      emailjs.init(publicKey);

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        service_interest: formData.service,
        message: formData.message,
        to_email: 'hello@pixelnpurpose.com',
      }, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-canvas">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* ── Hero heading ── */}
        <section className="section-canvas pt-36 pb-10 md:pt-48 md:pb-12">
          <div className="container">
            <ScrollReveal threshold={0.05}>
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-ink-ghost" />
                  <span className="caps text-ink-ghost">Get in Touch</span>
                </div>
                <h1
                  className="font-display font-bold text-ink leading-[1.03]"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', letterSpacing: '-0.025em' }}
                >
                  Let's build
                  <br />
                  <em className="not-italic text-ink-dim">something real.</em>
                </h1>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Form + reassurance ── */}
        <section className="section-canvas pb-24 md:pb-36 flex-1">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

              {/* ── Left: reassurance text ── */}
              <ScrollReveal delay={100} threshold={0.05}>
                <div className="flex flex-col gap-8 lg:sticky lg:top-28">
                  <div className="glass-subtle rounded-2xl p-8">
                    <p className="text-ink-dim text-base leading-relaxed">
                      We take on a limited number of projects each quarter to ensure every client receives our full attention. When you reach out, you're speaking directly with the studio.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-1 rounded-full bg-ink-ghost mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-ink caps mb-1">Response time</p>
                        <p className="text-sm text-ink-dim">We reply to every inquiry within 24 hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-1 rounded-full bg-ink-ghost mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-ink caps mb-1">Direct contact</p>
                        <a href="mailto:hello@pixelnpurpose.com" className="text-sm text-ink-dim link-line">
                          hello@pixelnpurpose.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-1 rounded-full bg-ink-ghost mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-ink caps mb-1">Privacy</p>
                        <p className="text-sm text-ink-dim">Your information is never shared. Ever.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* ── Right: Glass form ── */}
              <ScrollReveal delay={200} threshold={0.05}>
                <div
                  data-layer="glass"
                  className="glass-md rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="noise-overlay" />
                  <div className="relative z-10">
                    {/* Success state */}
                    {submitStatus === 'success' && (
                      <div className="text-center py-12">
                        <div className="w-12 h-12 rounded-full border border-ink-ghost flex items-center justify-center mx-auto mb-6">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink" />
                          </svg>
                        </div>
                        <h3 className="font-display font-bold text-ink text-2xl mb-3">Message received.</h3>
                        <p className="text-ink-dim text-sm">We'll be in touch within 24 hours.</p>
                      </div>
                    )}

                    {submitStatus !== 'success' && (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
                        {/* Name + Email row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                          <div className="flex flex-col gap-3">
                            <label htmlFor="name" className="caps text-ink-ghost">
                              Your name *
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Jane Smith"
                              className="bg-transparent border-0 border-b border-ink-rule pb-3 text-ink placeholder:text-ink-ghost focus:outline-none focus:border-ink-dim transition-colors duration-300 text-base"
                            />
                          </div>
                          <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="caps text-ink-ghost">
                              Email *
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="jane@studio.com"
                              className="bg-transparent border-0 border-b border-ink-rule pb-3 text-ink placeholder:text-ink-ghost focus:outline-none focus:border-ink-dim transition-colors duration-300 text-base"
                            />
                          </div>
                        </div>

                        {/* Service */}
                        <div className="flex flex-col gap-3">
                          <label htmlFor="service" className="caps text-ink-ghost">
                            Service interest
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="bg-transparent border-0 border-b border-ink-rule pb-3 text-ink focus:outline-none focus:border-ink-dim transition-colors duration-300 text-base appearance-none cursor-pointer"
                            style={{ color: formData.service ? 'var(--ink)' : 'var(--ink-ghost)' }}
                          >
                            <option value="" disabled style={{ background: '#111', color: 'var(--ink-dim)' }}>
                              Select a service…
                            </option>
                            {SERVICE_OPTIONS.map((s) => (
                              <option key={s} value={s} style={{ background: '#111', color: 'var(--ink)' }}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-3">
                          <label htmlFor="message" className="caps text-ink-ghost">
                            Tell us about your project *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe what you're working on, your timeline, and any other context that would help us respond thoughtfully."
                            className="bg-transparent border-0 border-b border-ink-rule pb-3 text-ink placeholder:text-ink-ghost focus:outline-none focus:border-ink-dim transition-colors duration-300 text-base resize-none leading-relaxed"
                          />
                        </div>

                        {/* Error */}
                        {submitStatus === 'error' && (
                          <p className="text-sm text-ink-dim border border-ink-rule rounded-xl px-5 py-4">
                            Something went wrong. Please email us directly at{' '}
                            <a href="mailto:hello@pixelnpurpose.com" className="text-ink link-line">
                              hello@pixelnpurpose.com
                            </a>
                          </p>
                        )}

                        {/* Submit */}
                        <div className="flex items-center gap-6 pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-solid disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? 'Sending…' : 'Send Message'}
                          </button>
                          <p className="text-xs text-ink-ghost leading-relaxed max-w-[180px]">
                            We respond to every message personally.
                          </p>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
