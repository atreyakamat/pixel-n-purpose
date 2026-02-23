'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
    speed?: 'fast' | 'normal' | 'slow';
    threshold?: number;
}

/**
 * ScrollReveal — frame-based scroll animation wrapper.
 * Adds [data-reveal] + [data-delay] + IntersectionObserver reveal.
 * The designer can override with custom scroll interactions by targeting
 * the .is-revealed class or [data-layer] children.
 */
export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    speed = 'normal',
    threshold = 0.15,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-revealed');
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            data-reveal={speed === 'normal' ? '' : speed}
            data-delay={delay > 0 ? String(delay) : undefined}
            className={className}
        >
            {children}
        </div>
    );
}
