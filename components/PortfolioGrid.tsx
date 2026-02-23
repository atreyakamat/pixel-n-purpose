'use client';

import ScrollReveal from './ScrollReveal';

const PROJECTS = [
    { number: '001', category: 'Website Design', label: 'Minimal Commerce Platform' },
    { number: '002', category: 'Photography', label: 'Lifestyle Product Series' },
    { number: '003', category: 'Packaging', label: 'Artisan Label System' },
    { number: '004', category: 'Portfolio', label: 'Creative Director Showcase' },
    { number: '005', category: 'Website Design', label: 'Architecture Studio Identity' },
    { number: '006', category: 'Packaging', label: 'Luxury Tea Collection' },
];

export default function PortfolioGrid() {
    return (
        <section
            id="portfolio"
            data-layer="section"
            className="section-surface py-24 md:py-32"
        >
            <div className="container">
                {/* Header */}
                <ScrollReveal>
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-8 h-px bg-ink-ghost" />
                                <span className="caps text-ink-ghost">Selected Work</span>
                            </div>
                            <h2
                                className="font-display font-bold text-ink"
                                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', letterSpacing: '-0.02em' }}
                            >
                                A few things
                                <br />
                                <em className="not-italic text-ink-dim">we've built.</em>
                            </h2>
                        </div>
                        <a
                            href="/services"
                            className="hidden md:inline-flex link-line caps text-ink-dim text-xs"
                        >
                            View all work →
                        </a>
                    </div>
                </ScrollReveal>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {PROJECTS.map((project, i) => (
                        <ScrollReveal
                            key={project.number}
                            delay={([0, 100, 200, 0, 100, 200][i]) as 0 | 100 | 200}
                            threshold={0.05}
                        >
                            <div
                                data-layer="project-frame"
                                className="group relative aspect-[4/5] bg-charcoal rounded-2xl overflow-hidden border border-ink-rule cursor-pointer"
                            >
                                {/* Noise fill */}
                                <div className="absolute inset-0 noise-overlay opacity-[0.06]" />

                                {/* Grid texture inside cell */}
                                <div
                                    className="absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(245,245,243,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,243,0.3) 1px, transparent 1px)`,
                                        backgroundSize: '32px 32px',
                                    }}
                                />

                                {/* Project number — always visible */}
                                <div className="absolute top-5 left-5 chapter-number">
                                    {project.number}
                                </div>

                                {/* Category tag */}
                                <div className="absolute top-5 right-5">
                                    <span className="glass px-3 py-1 rounded-full caps text-ink-ghost" style={{ fontSize: '10px' }}>
                                        {project.category}
                                    </span>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 glass-strong opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <p className="caps text-ink-ghost mb-2">{project.category}</p>
                                    <h3
                                        className="font-display font-bold text-ink leading-tight"
                                        style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                                    >
                                        {project.label}
                                    </h3>
                                    <div className="mt-4 flex items-center gap-2 text-ink-dim">
                                        <span className="caps" style={{ fontSize: '10px' }}>View project</span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
