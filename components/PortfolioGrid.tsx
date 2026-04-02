'use client';

import ScrollReveal from './ScrollReveal';
import OptimizedImage from './OptimizedImage';
import { useState, useRef } from 'react';
import Link from 'next/link';

const PROJECTS = [
    { 
        number: '001', 
        category: 'Website Design', 
        label: 'Digital Presence & Platforms',
        image: '/images/website-design.png',
        link: '/pdf/website-design.pdf'
    },
    { 
        number: '002', 
        category: 'Portfolio Design', 
        label: 'Creative Showcase Systems',
        image: '/images/portfolio-design.jpg',
        link: '/pdf/portfolio-design.pdf'
    },
    { 
        number: '003', 
        category: 'Packaging', 
        label: 'Artisan Brand Experiences',
        image: '/grid_images/apparel-1850804.jpg',
        link: '/pdf/package-design.pdf'
    },
    { 
        number: '004', 
        category: 'Photography', 
        label: 'Visual Brand Narratives',
        image: '/grid_images/jewellery-1723638_640.jpg',
        link: '/services#photography'
    },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 10, y: y * -10 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <ScrollReveal
            delay={([0, 100, 200][index]) as 0 | 100 | 200}
            threshold={0.05}
        >
            <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                data-layer="project-frame"
                className="group relative block aspect-[4/5] bg-charcoal rounded-2xl overflow-hidden border border-white/5 cursor-pointer transition-transform duration-200 ease-out"
                style={{
                    transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                }}
            >
                {/* Project Image */}
                <OptimizedImage 
                    src={project.image} 
                    alt={project.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                        transform: `translate(${tilt.x * 0.5}px, ${tilt.y * -0.5}px) scale(1.1)`,
                    }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Noise fill overlay */}
                <div className="absolute inset-0 noise-overlay opacity-[0.06] pointer-events-none" />

                {/* Project number — always visible */}
                <div className="absolute top-6 left-6 chapter-number z-10 opacity-80">
                    {project.number}
                </div>

                {/* Category tag */}
                <div className="absolute top-6 right-6 z-10">
                    <span className="glass px-3 py-1 rounded-full caps text-white/40 text-[9px] tracking-widest border border-white/5">
                        {project.category}
                    </span>
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="caps text-white/40 text-[10px] tracking-[0.2em] mb-3">{project.category}</p>
                        <h3
                            className="font-display font-bold text-white leading-tight"
                            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
                        >
                            {project.label}
                        </h3>
                        
                        <div className="mt-6 flex items-center gap-2 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <span className="caps text-[9px] tracking-widest">View Project</span>
                            <div className="w-8 h-px bg-white/20" />
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Glass shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            </a>
        </ScrollReveal>
    );
}

export default function PortfolioGrid() {
    return (
        <section
            id="portfolio"
            data-layer="section"
            className="section-surface py-24 md:py-36"
        >
            <div className="container">
                {/* Header */}
                <ScrollReveal>
                    <div className="flex items-end justify-between mb-20">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-px bg-white/10" />
                                <span className="caps text-white/30 text-[10px] tracking-[0.3em]">Selected Work</span>
                            </div>
                            <h2
                                className="font-display font-bold text-white"
                                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
                            >
                                A few things
                                <br />
                                <em className="not-italic text-white/40 font-medium italic">we've built.</em>
                            </h2>
                        </div>
                        <Link
                            href="/services"
                            className="hidden md:inline-flex link-line caps text-white/40 text-[10px] tracking-widest"
                        >
                            View all work →
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.number} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
