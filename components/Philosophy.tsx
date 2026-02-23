'use client';

import ScrollReveal from './ScrollReveal';

export default function Philosophy() {
    return (
        <section
            id="philosophy"
            data-layer="section"
            className="section-charcoal py-32 md:py-48 overflow-hidden"
        >
            <div className="container">
                {/* Wide centered statement */}
                <ScrollReveal speed="slow" threshold={0.1}>
                    <div data-layer="glass" className="glass-subtle rounded-3xl px-8 md:px-16 lg:px-24 py-20 md:py-28 max-w-5xl mx-auto text-center">
                        <div data-layer="label" className="caps text-ink-ghost mb-10">
                            Philosophy
                        </div>
                        <blockquote
                            data-layer="headline"
                            className="font-display font-bold text-ink leading-[1.05]"
                            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.025em' }}
                        >
                            "We build what lasts.
                            <br className="hidden md:block" />
                            {' '}Not what trends."
                        </blockquote>
                        <p
                            data-layer="body"
                            className="text-ink-dim text-base md:text-lg leading-relaxed mt-10 max-w-xl mx-auto"
                        >
                            Every project we touch is designed to endure — in memory, in market, and in meaning. We work slowly, deliberately, and with complete intention.
                        </p>
                        <div className="mt-12 flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-ink-rule" />
                            <span className="caps text-ink-ghost">Pixel 'N' Purpose</span>
                            <div className="h-px w-12 bg-ink-rule" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
