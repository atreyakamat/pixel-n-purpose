'use client';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

function ServiceCard({ title, description, image, delay = 0 }: ServiceCardProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      data-reveal 
      className="group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-stretch justify-between gap-6 p-6 rounded-lg border border-line hover:border-ink/20 bg-canvas hover:bg-panel transition-all duration-300">
        <div className="flex flex-col gap-4 flex-[2_2_0px]">
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-lg md:text-xl font-bold leading-tight text-ink">
              {title}
            </h3>
            <p className="text-ink/80 text-sm md:text-base font-normal leading-relaxed">
              {description}
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center h-8 px-4 bg-panel hover:bg-ink hover:text-canvas text-ink text-sm font-medium leading-normal rounded-lg transition-all duration-200 w-fit group-hover:bg-ink group-hover:text-canvas"
          >
            <span>Learn More</span>
          </button>
        </div>
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 min-w-0"
          style={{ backgroundImage: `url("${image}")` }}
          role="img"
          aria-label={`${title} service illustration`}
        />
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Social Strategy",
      description: "Crafting bespoke social media strategies tailored to elevate your brand's presence and engage your target audience with precision and purpose.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Content Creation",
      description: "Producing visually stunning and compelling content that resonates with your brand's identity and captivates your audience across all platforms.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Campaign Management",
      description: "Executing and optimizing social media campaigns to maximize reach, engagement, and conversions for your luxury brand with measurable results.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-panel">
      <div className="container">
        <div data-reveal className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] text-ink">
            Our Services
          </h2>
        </div>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
