'use client';

import Image from 'next/image';
import { ShineBorder } from '@/components/magicui/shine-border';

interface ServiceData {
  title: string;
  boldDesc: string;
  description: string;
  image: string;
}

interface ServicesProps {
  isHomePage?: boolean;
}

export default function Services({ isHomePage = false }: ServicesProps) {
  const services: ServiceData[] = [
    {
      title: "Brand Identity & Design",
      boldDesc: "Be Bold. Look Sharp. Leave a mark.",
      description: "We craft identities that don’t just look good — they speak. From logos to rebrands, we design the details that make first impressions unforgettable.",
      image: "/services-pics/person-600476_1280.jpg"
    },
    {
      title: "Content & Storytelling", 
      boldDesc: "Say it right. Say it bold.",
      description: "Your brand is more than visuals — it’s the words, the tone, the story. We shape messaging that connects, from websites to social to campaigns. Because a brand without a voice is just noise.",
      image: "/services-pics/camera-6745942.jpg"
    },
    {
      title: "Digital Presence & Marketing",
      boldDesc: "Be seen. Be found. Be trusted.",
      description: "From websites to digital campaigns, we build experiences that perform. Smart design meets smart strategy — making your brand impossible to ignore.",
      image: "/services-pics/domain-5243252.jpg"
    },
    {
      title: "Campaigns & Creative Collateral",
      boldDesc: "Ideas that move. Designs that stay.",
      description: " We turn big ideas into branded experiences — launches, campaigns, events, presentations. Wherever your audience is, your brand shows up strong and consistent.",
      image: "/services-pics/swimmer-1678307 (1).jpg"
    },
    {
      title: "Consulting & Training",
      boldDesc: "Clarity. Confidence. Control.",
      description: "We don’t just build brands. We empower teams to manage them. Workshops, strategy sessions, creative direction — so your brand stays sharp long after launch.",
      image: "/services-pics/children-1822688.jpg"
    }
  ];

  const renderServiceCard = (service: ServiceData, index: number) => {
    return (
      <article 
        key={index}
        className={`relative p-6 rounded-xl border transition-all duration-500 h-full group ${
          isHomePage 
            ? 'bg-white border-gray-200 hover:border-gray-300 focus-within:border-gray-300' 
            : 'bg-canvas border-line hover:border-line focus-within:border-line'
        }`}
        role="article"
        aria-labelledby={`service-title-${index}`}
      >
        <ShineBorder
          className="absolute inset-0"
          borderWidth={2}
          duration={12 + index * 2} // Varying animation speeds for visual interest
          shineColor={["#C7A977", "#0B0B0B", "#C7A977"]}
        />
        <div className="flex flex-col h-full relative z-10">
          <div className="w-full h-48 rounded-lg mb-6 overflow-hidden relative">
            <Image 
              src={service.image}
              alt={`${service.title} service illustration`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
            />
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <div className="flex flex-col gap-3">
              <h3 
                id={`service-title-${index}`}
                className={`font-display text-xl font-bold leading-tight group-hover:text-champagne transition-colors duration-300 ${
                  isHomePage ? 'text-black' : 'text-ink'
                }`}
              >
                {service.title}
              </h3>
              <p 
                className="text-black text-sm font-bold uppercase tracking-wider"
                aria-label={`Service tagline: ${service.boldDesc}`}
              >
                {service.boldDesc}
              </p>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                isHomePage 
                  ? 'text-gray-600 group-hover:text-gray-700' 
                  : 'text-ink/70 group-hover:text-ink/80'
              }`}>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="services" className={`py-16 md:py-24 ${isHomePage ? 'bg-white' : 'bg-panel'}`} role="region" aria-labelledby="services-heading">
      <div className="container">
        <header data-reveal className="text-center mb-12">
          <h2 
            id="services-heading"
            className={`font-display text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] ${isHomePage ? 'text-black' : 'text-ink'}`}
          >
            The Workbench
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isHomePage ? 'text-black' : 'text-ink'}`}>
            Elevating luxury brands through strategic social media excellence and premium digital experiences.
          </p>
          <div className="mt-6">
            
          </div>
        </header>
        
        {/* Responsive Grid Layout - 5 cards - All equal sizes */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl" role="list" aria-label="Our services">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} role="listitem">
                {renderServiceCard(service, index)}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom row - Same grid structure and card sizes */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl" role="list" aria-label="Additional services">
            <div className="lg:col-start-1 lg:col-end-2 flex justify-center" role="listitem">
              <div className="w-full max-w-sm">
                {renderServiceCard(services[3], 3)}
              </div>
            </div>
            <div className="lg:col-start-2 lg:col-end-3 flex justify-center" role="listitem">
              <div className="w-full max-w-sm">
                {renderServiceCard(services[4], 4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
