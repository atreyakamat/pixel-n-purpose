'use client';

import { ReactNode } from 'react';

interface GlassPanelProps {
    children: ReactNode;
    className?: string;
    intensity?: 'subtle' | 'medium' | 'strong';
    radius?: 'md' | 'lg' | 'xl' | 'none';
    as?: 'div' | 'section' | 'article';
}

/**
 * GlassPanel — reusable frosted architectural glass surface.
 * Calm, matte, professional — not glossy or futuristic.
 */
export default function GlassPanel({
    children,
    className = '',
    intensity = 'medium',
    radius = 'lg',
    as: Tag = 'div',
}: GlassPanelProps) {
    const glassClass = {
        subtle: 'glass-subtle',
        medium: 'glass',
        strong: 'glass-md',
    }[intensity];

    const radiusClass = {
        none: 'rounded-none',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
    }[radius];

    return (
        <Tag className={`${glassClass} ${radiusClass} ${className}`}>
            {children}
        </Tag>
    );
}
