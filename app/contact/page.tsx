'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { FormField } from '@/components/FormField';
import { useContactForm } from '@/hooks/useContactForm';
import Link from 'next/link';

const SERVICE_OPTIONS = [
  'Website Design',
  'Portfolio Design',
  'Packaging Design',
  'Multiple Services',
  'Other / Not sure yet',
];

const REASSURANCES = [
  {
    label: 'Response time',
    detail: 'We personally reply to every inquiry within 24 hours.',
  },
  {
    label: 'Direct contact',
    href: 'mailto:hello@pixelnpurpose.com',
    detail: 'hello@pixelnpurpose.com',
  },
  {
    label: 'Privacy',
    detail: 'Your information is never shared. Ever.',
  },
];

export default function ContactPage() {
  const { form, status, error, handleChange, handleSubmit } = useContactForm();

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

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
                  {"Let's build"}
                  <br />
                  <em className="not-italic text-ink-dim">something real.</em>
                </h1>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Form + Reassurance ── */}
        <section className="section-canvas pb-24 md:pb-36 flex-1">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

              {/* ── Left: reassurance ── */}
              <ScrollReveal delay={100} threshold={0.05}>
                <div className="flex flex-col gap-8 lg:sticky lg:top-28">
                  <div className="glass-subtle rounded-2xl p-8">
                    <p className="text-ink-dim text-base leading-relaxed">
                      We take on a limited number of projects each quarter to give every client our full attention. When you reach out, you speak directly with the studio.
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    {REASSURANCES.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-1 h-1 rounded-full bg-ink-ghost mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-ink caps mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm text-ink-dim link-line">
                              {item.detail}
                            </a>
                          ) : (
                            <p className="text-sm text-ink-dim">{item.detail}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* ── Right: glass form ── */}
              <ScrollReveal delay={200} threshold={0.05}>
                <div
                  data-layer="glass"
                  className="glass-md rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="noise-overlay" />

                  <div className="relative z-10">
                    {/* ── Success state ── */}
                    {isSuccess ? (
                      <div className="text-center py-16">
                        <div className="w-12 h-12 rounded-full border border-ink-ghost flex items-center justify-center mx-auto mb-6">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4 10l4 4 8-8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-ink"
                            />
                          </svg>
                        </div>
                        <h3
                          className="font-display font-bold text-ink mb-3"
                          style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                        >
                          Message received.
                        </h3>
                        <p className="text-ink-dim text-sm">
                          {"We'll be in touch within 24 hours."}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-4">
                          <div className="h-px w-8 bg-ink-rule" />
                          <span className="caps text-ink-ghost">hello@pixelnpurpose.com</span>
                          <div className="h-px w-8 bg-ink-rule" />
                        </div>
                      </div>
                    ) : (
                      /* ── Form ── */
                      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                          <FormField
                            id="name"
                            name="name"
                            label="Your name"
                            required
                            value={form.name}
                            placeholder="Jane Smith"
                            onChange={handleChange}
                          />
                          <FormField
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            required
                            value={form.email}
                            placeholder="jane@studio.com"
                            onChange={handleChange}
                          />
                        </div>

                        {/* Service interest */}
                        <FormField
                          as="select"
                          id="service"
                          name="service"
                          label="Service interest"
                          value={form.service}
                          onChange={handleChange}
                        >
                          <option
                            value=""
                            disabled
                            style={{ background: 'var(--surface)', color: 'var(--ink-dim)' }}
                          >
                            Select a service…
                          </option>
                          {SERVICE_OPTIONS.map((s) => (
                            <option
                              key={s}
                              value={s}
                              style={{ background: 'var(--surface)', color: 'var(--ink)' }}
                            >
                              {s}
                            </option>
                          ))}
                        </FormField>

                        {/* Message */}
                        <FormField
                          as="textarea"
                          id="message"
                          name="message"
                          label="Tell us about your project"
                          required
                          rows={5}
                          value={form.message}
                          placeholder="Describe what you are working on, your timeline, and any context that would help us respond thoughtfully."
                          onChange={handleChange}
                        />

                        {/* Validation / send error */}
                        {error && (
                          <p className="text-sm text-ink-dim border border-ink-rule rounded-xl px-5 py-4">
                            {error}{' '}
                            {(status === 'error' || status === 'misconfigured') && (
                              <a
                                href="mailto:hello@pixelnpurpose.com"
                                className="text-ink link-line"
                              >
                                hello@pixelnpurpose.com
                              </a>
                            )}
                          </p>
                        )}

                        {/* Submit */}
                        <div className="flex items-center gap-6 pt-2">
                          <button
                            id="contact-submit-btn"
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-solid disabled:opacity-40 disabled:cursor-not-allowed min-w-[160px]"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <svg
                                  className="animate-spin"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                                  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                                Sending…
                              </span>
                            ) : 'Send Message'}
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
