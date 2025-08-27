'use client';

import { ShineBorder } from '@/components/magicui/shine-border';

interface ServiceData {
  title: string;
  boldDesc: string;
  description: string;
  image: string;
}

export default function Services() {
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
              <p className="text-black text-sm font-bold uppercase tracking-wider">
                {service.boldDesc}
              </p>
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
            The Workbench
          </h2>
          <p className="text-ink/70 mt-4 max-w-2xl mx-auto">
            Elevating luxury brands through strategic social media excellence and premium digital experiences.
          </p>
          <div className="mt-6">
            
          </div>
        </div>
        
        {/* Responsive Grid Layout - 5 cards - Centered for PC */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {services.slice(0, 3).map((service, index) => renderServiceCard(service, index))}
          </div>
        </div>
        
        {/* Bottom row - Same grid structure as top, but only 2 cards centered */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
            <div className="lg:col-start-2">
              {renderServiceCard(services[3], 3)}
            </div>
            <div className="lg:col-start-3">
              {renderServiceCard(services[4], 4)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
