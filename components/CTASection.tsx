'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function CTASection() {
    return (
        <section
            id="cta"
            data-layer="section"
            className="section-canvas py-24 md:py-40"
        >
            <div className="container">
                <ScrollReveal speed="slow" threshold={0.15}>
                    <div
                        data-layer="glass"
                        className="glass-md rounded-3xl px-8 md:px-16 py-16 md:py-24 max-w-3xl mx-auto text-center relative overflow-hidden"
                    >
                        {/* Noise */}
                        <div className="noise-overlay" />

                        <div className="relative z-10">
                            <span className="caps text-ink-ghost block mb-6">Ready?</span>

                            <h2
                                data-layer="headline"
                                className="font-display font-bold text-ink leading-[1.05] mb-6"
                                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.025em' }}
                            >
                                Ready to build
                                <br />
                                <em className="not-italic text-ink-dim">something real?</em>
                            </h2>

                            <p
                                data-layer="body"
                                className="text-ink-dim text-base md:text-lg leading-relaxed mb-12 max-w-md mx-auto"
                            >
                                We take on a limited number of projects each quarter to ensure every client gets our full attention.
                            </p>

                            <div data-layer="cta" className="flex flex-wrap items-center justify-center gap-4">
                                <Link href="/contact" className="btn-solid">
                                    Start a Project
                                </Link>
                                <Link href="/services" className="btn-ghost">
                                    Our Services
                                </Link>
                            </div>

                            {/* Decorative rule */}
                            <div className="mt-12 flex items-center justify-center gap-4">
                                <div className="h-px w-8 bg-ink-rule" />
                                <span className="caps text-ink-ghost">hello@pixelnpurpose.com</span>
                                <div className="h-px w-8 bg-ink-rule" />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
