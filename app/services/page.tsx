import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Our Services — Pixel & Purpose',
    description: 'Expertise in Website Design, Portfolio Design, Packaging, and Photography for luxury brands. We craft digital experiences with clarity, structure, and intent.',
    keywords: ['website design', 'portfolio design', 'packaging design', 'photography', 'luxury branding', 'creative studio services'],
};

export default function ServicesPage() {
    return <ServicesClient />;
}
