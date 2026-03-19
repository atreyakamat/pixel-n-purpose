'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

const SERVICES = [
    {
        id: 'website',
        number: '01',
        name: 'Website Design',
        tagline: 'Digital presence that converts.',
        image: '/images/image1.jpeg',
        description:
            'We design websites that function as your most important business asset. Every pixel is intentional, every interaction purposeful. From strategy to launch, we build fast, beautiful, and conversion-optimized digital experiences.',
        includes: [
            'UX Strategy & Information Architecture',
            'High-Fidelity UI Design',
            'Responsive Development',
            'SEO Foundations',
            'Performance Optimization',
            'Accessibility Standards',
        ],
    },
    {
        id: 'portfolio',
        number: '02',
        name: 'Portfolio Design',
        tagline: 'Work that speaks before you do.',
        image: '/images/image2.png',
        description:
            "A great portfolio isn't just a gallery — it's a curated narrative. We design portfolios that make the right people stop, look, and reach out. Built for creatives, architects, photographers, and professionals who want to be taken seriously.",
        includes: [
            'Content Curation Strategy',
            'Editorial Layout Design',
            'Case Study Architecture',
            'Typography & Visual Identity',
            'Mobile-First Experience',
            'PDF & Print Versions',
        ],
    },
    {
        id: 'packaging',
        number: '03',
        name: 'Packaging Design',
        tagline: 'Shelves won at first sight.',
        image: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=1000&auto=format&fit=crop',
        description:
            'Packaging is the first moment of physical brand contact. We design packaging that earns attention without shouting — structured, honest, and memorable. From concept to print-ready files with material guidance.',
        includes: [
            'Structural Concept Development',
            'Brand Language Integration',
            'Label & Surface Design',
            'Print-Ready Artwork',
            'Material & Finish Recommendations',
            'Dieline Creation',
        ],
    },
    {
        id: 'photography',
        number: '04',
        name: 'Photography',
        tagline: 'Images that sell ideas.',
        image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1000&auto=format&fit=crop',
        description:
            'We create brand photography that transforms products and spaces into visual stories. Calm, intentional, and editorial — our imagery works across digital and print, building consistent brand perception.',
        includes: [
            'Product Photography',
            'Lifestyle & Editorial Shoots',
            'Atmospheric Brand Imagery',
            'Post-Processing & Retouching',
            'Content Calendar Integration',
            'Licensing Guidance',
        ],
    },
];

const PROCESS = [
    { step: '01', name: 'Discover', detail: 'Deep-dive into your brand, audience, and objectives. We listen before we create.' },
    { step: '02', name: 'Define', detail: 'We establish clear creative direction, scope, and success criteria for your project.' },
    { step: '03', name: 'Design', detail: 'Iterative, transparent design rounds. You see the work evolve, frame by frame.' },
    { step: '04', name: 'Deliver', detail: 'Final handoff with complete documentation, assets, and ongoing support guidance.' },
];

export default function ServicesClient() {
    return (
        <div className="relative flex flex-col min-h-screen bg-canvas">
            <Header />

            <main>
                {/* ── Hero ── */}
                <section className="section-canvas pt-40 pb-24 md:pt-48 md:pb-32">
                    <div className="container">
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-8 h-px bg-ink-ghost" />
                                <span className="caps text-ink-ghost">Our Services</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="glass-subtle rounded-3xl p-10 md:p-16 max-w-4xl">
                                <h1
                                    className="font-display font-bold text-ink leading-[1.03]"
                                    style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.025em' }}
                                >
                                    Four disciplines.
                                    <br />
                                    <em className="not-italic text-ink-dim">One standard.</em>
                                </h1>
                                <p className="text-ink-dim text-lg leading-relaxed mt-8 max-w-xl">
                                    Website Design, Portfolio Design, Packaging, and Photography — each service delivered with the same exacting level of craft and intent.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Service Chapters ── */}
                {SERVICES.map((service, idx) => (
                    <section
                        key={service.id}
                        id={service.id}
                        className={`py-24 md:py-36 ${idx % 2 === 0 ? 'section-canvas' : 'section-charcoal'}`}
                    >
                        <div className="container">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                {/* Left column */}
                                <ScrollReveal threshold={0.1} delay={idx % 2 === 0 ? 0 : 200}>
                                    <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                        <span className="chapter-number">{service.number}</span>
                                        <h2
                                            className="font-display font-bold text-ink mt-4 leading-[1.05]"
                                            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.02em' }}
                                        >
                                            {service.name}
                                        </h2>
                                        <p
                                            className="font-accent text-ink-dim mt-2 caps"
                                            style={{ letterSpacing: '0.1em' }}
                                        >
                                            {service.tagline}
                                        </p>
                                        <p className="text-ink-dim text-base leading-relaxed mt-8 max-w-md">
                                            {service.description}
                                        </p>
                                        
                                        {/* Includes grid */}
                                        <div className="mt-12">
                                            <p className="caps text-ink-ghost mb-6">What this includes</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.includes.map((item) => (
                                                    <div key={item} className="glass-subtle rounded-xl px-4 py-3 flex items-start gap-3 border border-ink-rule/10">
                                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-ink-ghost flex-shrink-0" />
                                                        <span className="text-xs text-ink-dim leading-snug">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-12">
                                            <Link href="/contact" className="btn-ghost">
                                                Get a Quote
                                            </Link>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Right column — Image */}
                                <ScrollReveal delay={idx % 2 === 0 ? 200 : 0} threshold={0.1}>
                                    <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <OptimizedImage 
                                            src={service.image} 
                                            alt={service.name}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent opacity-60" />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>
                ))}

                {/* ── Process Framework ── */}
                <section className="section-surface py-24 md:py-36">
                    <div className="container">
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-px bg-ink-ghost" />
                                <span className="caps text-ink-ghost">How We Work</span>
                            </div>
                            <h2
                                className="font-display font-bold text-ink mb-16"
                                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', letterSpacing: '-0.02em' }}
                            >
                                Our process.
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {PROCESS.map((p, i) => (
                                <ScrollReveal
                                    key={p.step}
                                    delay={([0, 200, 400, 600][i]) as 0 | 200 | 400 | 600}
                                    threshold={0.05}
                                >
                                    <div className="glass rounded-2xl p-8 h-full">
                                        <span className="chapter-number">{p.step}</span>
                                        <h3
                                            className="font-display font-bold text-ink mt-4 mb-4"
                                            style={{ fontSize: '1.5rem', letterSpacing: '-0.01em' }}
                                        >
                                            {p.name}
                                        </h3>
                                        <p className="text-sm text-ink-dim leading-relaxed">{p.detail}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Page CTA ── */}
                <section className="section-canvas py-24 md:py-32">
                    <div className="container text-center">
                        <ScrollReveal speed="slow">
                            <h2
                                className="font-display font-bold text-ink mb-8"
                                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
                            >
                                Where would you
                                <br />
                                <em className="not-italic text-ink-dim">like to begin?</em>
                            </h2>
                            <Link href="/contact" className="btn-solid">
                                Start a Conversation
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
