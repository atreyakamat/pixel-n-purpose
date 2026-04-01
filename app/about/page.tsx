'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

const PRINCIPLES = [
  {
    name: 'Clarity',
    number: '01',
    description:
      "We remove everything that doesn't need to be there. Clarity is not simplicity — it's precision. When a design communicates without friction, it earns trust.",
  },
  {
    name: 'Structure',
    number: '02',
    description:
      'Underneath every beautiful surface is rigorous architecture. We think in systems, not decorations. Structure gives design its durability.',
  },
  {
    name: 'Responsibility',
    number: '03',
    description:
      'Design shapes how people think and feel. We carry that seriously. Every project is an exercise in responsible visual communication.',
  },
  {
    name: 'Intent',
    number: '04',
    description:
      'Nothing we make is accidental. From the weight of a typeface to the width of a margin, every decision has a reason that serves the work.',
  },
];

const METHODOLOGY = [
  {
    label: 'Listen first.',
    detail:
      'We begin every engagement by understanding your world before offering ours. The first call is never a pitch.',
  },
  {
    label: 'Think slowly.',
    detail:
      'Great ideas need room to breathe. We dedicate real time to strategy before we open a design tool.',
  },
  {
    label: 'Make precisely.',
    detail:
      'When we build, we build with exactness. Every file we hand over is production-ready, not a sketch.',
  },
  {
    label: 'Stand behind it.',
    detail:
      "We don't disappear at launch. We document, train, and support — because work isn't done when it's shipped.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-canvas">
      <Header />

      <main>
        {/* ── Hero ── */}
        <section
          data-layer="hero"
          className="section-canvas pt-36 pb-16 md:pt-48 md:pb-24 min-h-[80vh] flex items-center"
        >
          <div className="container">
            <ScrollReveal speed="slow" threshold={0.05}>
              <div
                data-layer="glass"
                className="glass-md rounded-3xl px-10 md:px-16 lg:px-20 py-16 md:py-24 max-w-5xl relative overflow-hidden group"
              >
                {/* Relatable Background Image */}
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110">
                  <OptimizedImage 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                    alt="Minimalist design studio environment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="noise-overlay" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-8 h-px bg-ink-ghost" />
                    <span className="caps text-ink-ghost">Who We Are</span>
                  </div>
                  <h1
                    data-layer="headline"
                    className="font-display font-bold text-ink leading-[1.03]"
                    style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', letterSpacing: '-0.025em' }}
                  >
                    We believe design
                    <br />
                    <em className="not-italic text-ink-dim">is a responsibility.</em>
                  </h1>
                  <p
                    data-layer="body"
                    className="text-ink-dim text-lg leading-relaxed mt-8 max-w-lg"
                  >
                    Pixel & Purpose is a global creative studio that treats every brief as a question worth answering with care.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Narrative 1 — canvas background ── */}
        <section data-layer="narrative-1" className="section-canvas py-24 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <ScrollReveal threshold={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage 
                    src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop"
                    alt="Subtle minimalist creative environment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
                </div>
              </ScrollReveal>
              <div className="flex flex-col gap-8">
                <ScrollReveal delay={100} threshold={0.1}>
                  <div className="glass-subtle rounded-2xl p-8 md:p-10">
                    <p className="font-display font-bold text-ink leading-[1.1]" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
                      "We were founded with one belief: brands don't just need advertising — they need meaning."
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200} threshold={0.1}>
                  <div className="flex flex-col gap-6 text-ink-dim text-base leading-relaxed">
                    <p>
                      Pixel & Purpose began as a creative studio that wanted to challenge the usual playbook. No jargon, no fluff — just work that's sharp, human, and built to last.
                    </p>
                    <p>
                      We are a place where design, storytelling, and strategy converge. Where intentional people do their best work and help brands say something real.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Narrative 2 — charcoal background ── */}
        <section data-layer="narrative-2" className="section-charcoal py-24 md:py-32 relative overflow-hidden">
          {/* Translucent Background Image */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-luminosity">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
              alt="High impact architecture"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container relative z-10">
            <ScrollReveal threshold={0.1}>
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="w-8 h-px bg-ink-ghost" />
                  <span className="caps text-ink-ghost">Our Approach</span>
                  <div className="w-8 h-px bg-ink-ghost" />
                </div>
                <p
                  className="font-display font-bold text-ink leading-[1.05]"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', letterSpacing: '-0.015em' }}
                >
                  Our mission isn't to make things look good. It's to make things{' '}
                  <em className="not-italic text-ink-dim">leave a mark.</em>
                </p>
                <p className="text-ink-dim leading-relaxed mt-8 max-w-xl mx-auto">
                  We work across Websites, Portfolios, and Packaging — three disciplines that share one requirement: complete creative intention from concept to delivery.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Principles ── */}
        <section data-layer="principles" className="section-surface py-24 md:py-36">
          <div className="container">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-8 h-px bg-ink-ghost" />
                <span className="caps text-ink-ghost">Our Principles</span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRINCIPLES.map((p, i) => (
                <ScrollReveal
                  key={p.name}
                  delay={([0, 200, 0, 200][i]) as 0 | 200}
                  threshold={0.05}
                >
                  <div
                    data-layer="principle-block"
                    className="glass rounded-2xl p-10 h-full flex flex-col justify-between min-h-[280px]"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <span className="chapter-number">{p.number}</span>
                      </div>
                      <h3
                        className="font-display font-bold text-ink"
                        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', letterSpacing: '-0.015em', lineHeight: 1.1 }}
                      >
                        {p.name}.
                      </h3>
                    </div>
                    <p className="text-sm text-ink-dim leading-relaxed mt-6">
                      {p.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Methodology ── */}
        <section data-layer="methodology" className="section-charcoal py-24 md:py-36 relative overflow-hidden">
          {/* Translucent Background Image */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2000&auto=format&fit=crop"
              alt="Strategic process texture"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-ink-ghost" />
                <span className="caps text-ink-ghost">How We Work</span>
              </div>
              <h2
                className="font-display font-bold text-ink mb-16"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
              >
                The way we think.
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-3 max-w-3xl">
              {METHODOLOGY.map((m, i) => (
                <ScrollReveal
                  key={m.label}
                  delay={([0, 100, 200, 300][i]) as 0 | 100 | 200 | 300}
                  threshold={0.05}
                >
                  <div
                    data-layer="methodology-panel"
                    className="glass-subtle rounded-xl px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10"
                  >
                    <h3
                      className="font-display font-bold text-ink flex-shrink-0"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', letterSpacing: '-0.01em', minWidth: '180px' }}
                    >
                      {m.label}
                    </h3>
                    <p className="text-sm text-ink-dim leading-relaxed">{m.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing statement ── */}
        <section data-layer="closing" className="section-canvas py-40 md:py-56">
          <div className="container text-center">
            <ScrollReveal speed="slow" threshold={0.1}>
              <div data-layer="headline" className="max-w-3xl mx-auto">
                <p className="caps text-ink-ghost mb-10">In closing</p>
                <p
                  className="font-display font-bold text-ink leading-[1.04]"
                  style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.025em' }}
                >
                  We're here to create
                  <br />
                  <em className="not-italic text-ink-dim">stories people remember.</em>
                </p>
                <div className="mt-16">
                  <Link href="/contact" className="btn-ghost">
                    Work With Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
