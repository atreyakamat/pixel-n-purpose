'use client';

import ScrollReveal from './ScrollReveal';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';

const SERVICES = [
    {
        number: '01',
        name: 'Website Design',
        description: 'Websites that perform as beautifully as they look — built for speed, clarity, and conversion.',
        detail: 'Strategy · UX/UI · Development · SEO',
        href: '/services#website',
        image: '/images/website-design.png'
    },
    {
        number: '02',
        name: 'Portfolio Design',
        description: 'Portfolios that make the right people stop scrolling and start conversations.',
        detail: 'Layout · Typography · Curation · Identity',
        href: '/services#portfolio',
        image: '/images/portfolio-design.jpg'
    },
    {
        number: '03',
        name: 'Packaging Design',
        description: 'Packaging that earns shelf space and builds brand trust at first sight.',
        detail: 'Structure · Print · Materials · Storytelling',
        href: '/services#packaging',
        image: '/images/package-design.png'
    },
    {
        number: '04',
        name: 'Photography',
        description: 'High-impact imagery that captures the soul of your brand and builds aesthetic trust.',
        detail: 'Product · Lifestyle · Architectural · Styling',
        href: '/services#photography',
        image: '/images/photography-image.png'
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            data-layer="section"
            className="section-canvas py-24 md:py-32"
        >
            <div className="container">
                {/* Section label */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-20">
                        <div className="w-8 h-px bg-ink-ghost" />
                        <span className="caps text-ink-ghost">What We Do</span>
                    </div>
                </ScrollReveal>

                {/* Service panels */}
                <div className="flex flex-col gap-3">
                    {SERVICES.map((service, i) => (
                        <ScrollReveal
                            key={service.number}
                            delay={([0, 100, 200, 300][i]) as 0 | 100 | 200 | 300}
                            threshold={0.1}
                        >
                            <Link
                                href={service.href}
                                data-layer="service-panel"
                                className="group glass flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 md:p-10 rounded-2xl hover:border-ink-ghost transition-all duration-500 cursor-pointer no-underline relative overflow-hidden"
                            >
                                {/* Hover Peek Image */}
                                <div className="absolute right-24 top-1/2 -translate-y-1/2 w-32 h-20 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 hidden lg:block shadow-xl z-10 pointer-events-none">
                                    <OptimizedImage 
                                        src={service.image} 
                                        alt={service.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                {/* Left: number + name */}
                                <div className="flex items-start md:items-center gap-8 flex-1 relative z-20">
                                    <span className="chapter-number mt-1 md:mt-0 flex-shrink-0 w-8">
                                        {service.number}
                                    </span>
                                    <div>
                                        <h3
                                            className="font-display font-bold text-ink group-hover:text-ink transition-colors"
                                            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', letterSpacing: '-0.01em', lineHeight: 1.1 }}
                                        >
                                            {service.name}
                                        </h3>
                                        <p className="text-sm text-ink-ghost mt-1 font-accent caps">{service.detail}</p>
                                    </div>
                                </div>

                                {/* Right: description + arrow */}
                                <div className="flex items-center gap-8 md:max-w-sm lg:max-w-md relative z-20">
                                    <p className="text-ink-dim text-sm leading-relaxed flex-1 hidden md:block">
                                        {service.description}
                                    </p>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-ink-rule flex items-center justify-center text-ink-ghost group-hover:border-ink-ghost group-hover:text-ink transition-all duration-300">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
