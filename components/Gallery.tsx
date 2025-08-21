'use client';

export default function Gallery() {
  // Original gallery items with proper aspect ratios using real assets
  const galleryItems = [
    // Column 1 - Start with luxury jewelry image
    {
      id: 1,
      type: 'image',
      src: "/grid_images/jewellery-1723638_640.jpg",
      alt: "Luxury jewelry photography for premium brands",
      size: 'medium'
    },
    // Video 1 - First video asset
    {
      id: 2,
      type: 'video',
      src: "/grid_images/11289-229221023_small.webm",
      poster: "/grid_images/architecture-2256489_1280.jpg",
      alt: "Luxury brand video content creation",
      size: 'tall'
    },
    {
      id: 3,
      type: 'image',
      src: "/grid_images/car-1544342_640.jpg",
      alt: "Premium automotive brand photography",
      size: 'small'
    },

    // Column 2 - Start with architecture
    {
      id: 4,
      type: 'image',
      src: "/grid_images/architecture-5585737_1280.jpg",
      alt: "Architectural luxury brand visuals",
      size: 'tall'
    },
    // Video 2 - Second video asset
    {
      id: 5,
      type: 'video',
      src: "/grid_images/214888_tiny.webm",
      poster: "/grid_images/building-6011756_1280.jpg",
      alt: "Dynamic brand storytelling video",
      size: 'medium'
    },
    {
      id: 6,
      type: 'image',
      src: "/grid_images/outdoor-dining-1846137_1280.jpg",
      alt: "Luxury hospitality brand content",
      size: 'medium'
    },

    // Column 3 - Start with opal/luxury
    {
      id: 7,
      type: 'image',
      src: "/grid_images/opal-4765457_1280.jpg",
      alt: "Luxury gemstone brand photography",
      size: 'small'
    },
    // Video 3 - Third video asset
    {
      id: 8,
      type: 'video',
      src: "/grid_images/3152-166336023_small.webm",
      poster: "/grid_images/arra-luxury-8274729_1280.jpg",
      alt: "Premium brand showcase video",
      size: 'tall'
    },
    {
      id: 9,
      type: 'image',
      src: "/grid_images/restaurant-4011989_1280.jpg",
      alt: "Fine dining brand visual identity",
      size: 'medium'
    },

    // Column 4 - Start with Fiji luxury
    {
      id: 10,
      type: 'image',
      src: "/grid_images/fiji-7186952_1280.jpg",
      alt: "Luxury travel and lifestyle brands",
      size: 'medium'
    },
    // Video 4 - Fourth video asset
    {
      id: 11,
      type: 'video',
      src: "/grid_images/34855-403777679_tiny.webm",
      poster: "/grid_images/table-5356682_1280.jpg",
      alt: "Luxury lifestyle content creation",
      size: 'small'
    },
    {
      id: 12,
      type: 'image',
      src: "/grid_images/architecture-2256489_1280.jpg",
      alt: "Architectural brand photography",
      size: 'tall'
    },

    // Additional images for richer layout
    {
      id: 13,
      type: 'image',
      src: "/grid_images/building-6011756_1280.jpg",
      alt: "Contemporary architecture branding",
      size: 'small'
    },
    {
      id: 14,
      type: 'image',
      src: "/grid_images/arra-luxury-8274729_1280.jpg",
      alt: "Premium lifestyle brand imagery",
      size: 'medium'
    },
    {
      id: 15,
      type: 'image',
      src: "/grid_images/table-5356682_1280.jpg",
      alt: "Luxury dining experience branding",
      size: 'small'
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <div data-reveal className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] text-ink">
            What We Create
          </h2>
        </div>

        {/* Creative Masonry/Bento Grid - Original aspect ratios */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]" data-reveal>
          {galleryItems.map((item, index) => {
            // Original sizing system
            const getSizeClass = (size: string) => {
              switch (size) {
                case 'small': return 'row-span-1';
                case 'medium': return 'row-span-2';
                case 'tall': return 'row-span-3';
                default: return 'row-span-2';
              }
            };

            return (
              <div
                key={item.id}
                className={`group cursor-pointer ${getSizeClass(item.size)}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden rounded-lg bg-panel border border-line hover:border-ink/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-full w-full">
                  {item.type === 'image' ? (
                    // Image Item - Clean with no icons
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url("${item.src}")`
                      }}
                      role="img"
                      aria-label={item.alt}
                    >
                      {/* Simple hover overlay - no icons */}
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300"></div>
                    </div>
                  ) : (
                    // Video Item - Always autoplay, no controls
                    <div className="w-full h-full relative">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={item.poster}
                        onError={(e) => {
                          // Fallback to poster image if video fails to load
                          const target = e.target as HTMLVideoElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      >
                        <source src={item.src} type="video/mp4" />
                        <source src={item.src} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Fallback image */}
                      <div
                        className="hidden w-full h-full bg-center bg-no-repeat bg-cover"
                        style={{
                          backgroundImage: `url("${item.poster}")`
                        }}
                      ></div>
                      
                      {/* Simple hover overlay - no play icons */}
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional: Add a subtle description */}
        <div data-reveal className="text-center mt-12">
          <p className="text-secondary max-w-2xl mx-auto">
            From brand storytelling to campaign execution — witness the creative journey that transforms ideas into compelling social narratives.
          </p>
        </div>
      </div>
    </section>
  );
}
