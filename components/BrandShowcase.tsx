'use client';

interface BrandShowcaseProps {
  isHomePage?: boolean;
}

export default function BrandShowcase({ isHomePage = false }: BrandShowcaseProps) {
  const showcaseItems = [
    {
      id: 1,
      title: "Brand Identity & Design",
      tagline: "Be Bold. Look Sharp. Leave a mark.",
      description: "We craft identities that don't just look good — they speak. From logos to rebrands, we design the details that make first impressions unforgettable.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d7?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Content & Storytelling",
      tagline: "Say it right. Say it bold.",
      description: "Your brand is more than visuals — it's the words, the tone, the story. We shape messaging that connects, from websites to social to campaigns. Because a brand without a voice is just noise.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Digital Presence & Marketing",
      tagline: "Be seen. Be found. Be trusted.",
      description: "From websites to digital campaigns, we build experiences that perform. Smart design meets smart strategy — making your brand impossible to ignore.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Campaigns & Creative Collateral",
      tagline: "Ideas that move. Designs that stay.",
      description: "We turn big ideas into branded experiences — launches, campaigns, events, presentations. Wherever your audience is, your brand shows up strong and consistent.",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Consulting & Training",
      tagline: "Clarity. Confidence. Control.",
      description: "We don't just build brands. We empower teams to manage them. Workshops, strategy sessions, creative direction — so your brand stays sharp long after launch.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    
    <section id="brand-showcase" className={`${isHomePage ? 'bg-white' : 'bg-panel'}`}>
      <div className="container py-16 md:py-20">
        <header data-reveal className="text-center" suppressHydrationWarning>
          <h2 
            id="services-heading"
            className={`font-display text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] ${isHomePage ? 'text-black' : 'text-ink'}`}
          >
            <b>The Workbench</b>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isHomePage ? 'text-black' : 'text-ink'}`}>
            Building clarity-driven digital experiences through refined website design, bespoke branding, and curated social storytelling.
          </p>
        </header>
      </div>
      
      <div className="space-y-0">
        {showcaseItems.map((item) => (
          <div 
            key={item.id}
            className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {item.title}
              </h3>
              <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
                {item.tagline}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 max-w-4xl mx-auto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
