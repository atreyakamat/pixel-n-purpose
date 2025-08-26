'use client';

import { ShineBorder } from '@/components/magicui/shine-border';

interface ServiceData {
  title: string;
  description: string;
  image: string;
}

export default function Services() {
  const services: ServiceData[] = [
    {
      title: "Social Strategy",
      description: "Crafting bespoke social media strategies that elevate your brand's presence with precision and purpose.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Content Creation", 
      description: "Producing visually stunning content that resonates with your brand identity across all platforms.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Campaign Management",
      description: "Executing optimized social campaigns that maximize reach, engagement, and measurable conversions.", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Brand Analytics",
      description: "Delivering comprehensive insights and data-driven recommendations to amplify your brand's performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions that drive engagement and convert audiences into loyal customers.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&crop=faces"
    }
  ];

  const renderServiceCard = (service: ServiceData, index: number) => {
    return (
      <div 
        key={index}
        className="relative p-6 rounded-xl bg-canvas border border-line hover:border-champagne/30 transition-all duration-500 h-full group"
      >
        <ShineBorder
          className="absolute inset-0"
          borderWidth={2}
          duration={12 + index * 2} // Varying animation speeds for visual interest
          shineColor={["#C7A977", "#0B0B0B", "#C7A977"]}
        />
        <div className="flex flex-col h-full relative z-10">
          <div 
            className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg mb-6 transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${service.image}")` }}
            role="img"
            aria-label={`${service.title} service illustration`}
          />
          <div className="flex flex-col gap-4 flex-grow">
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-xl font-bold leading-tight text-ink group-hover:text-champagne transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-ink/70 text-sm leading-relaxed group-hover:text-ink/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-panel">
      <div className="container">
        <div data-reveal className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] text-ink">
            Our Services
          </h2>
          <p className="text-ink/70 mt-4 max-w-2xl mx-auto">
            Elevating luxury brands through strategic social media excellence and premium digital experiences.
          </p>
        </div>
        
        {/* Responsive Grid Layout - 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => renderServiceCard(service, index))}
        </div>
      </div>
    </section>
  );
}
