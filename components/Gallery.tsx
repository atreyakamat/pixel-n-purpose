'use client';

import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;

      const rect = galleryRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Only apply parallax when gallery is in viewport
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      // Calculate how much of the gallery has been scrolled through
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height + window.innerHeight)));
      
      // Apply clean parallax to gallery items
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      items.forEach((item, index) => {
        const element = item as HTMLElement;
        
        // Calculate position in 3-column grid
        const column = index % 3;
        const row = Math.floor(index / 3);
        
        // Define subtle parallax speeds (much cleaner, like Studio Nordost)
        const parallaxSpeeds = [
          // Row pattern with subtle variation
          [0.8, 1.0, 0.6], // Row 0
          [0.4, 0.9, 1.2], // Row 1  
          [1.1, 0.5, 0.7], // Row 2
          [0.9, 1.3, 0.3], // Row 3
          [0.6, 0.8, 1.0]  // Row 4
        ];
        
        // Get speed for this position
        const rowIndex = row % parallaxSpeeds.length;
        const speed = parallaxSpeeds[rowIndex][column];
        
        // Calculate clean vertical parallax (no rotation, no tilt)
        const maxMovement = 60; // More subtle movement
        const movement = scrollProgress * maxMovement * speed;
        
        // Apply only clean vertical transform
        element.style.transform = `translateY(${movement}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Landscape bento/masonry gallery items
  const galleryItems = [
    // Row 1 - Mix of wide and small landscape items
    {
      id: 1,
      type: 'image',
      src: "/grid_images/jewellery-1723638_640.jpg",
      alt: "Luxury jewelry photography for premium brands",
      size: 'small' // Small landscape
    },
    {
      id: 2,
      type: 'video',
      src: "/grid_images/11289-229221023_small.webm",
      poster: "/grid_images/architecture-2256489_1280.jpg",
      alt: "Luxury brand video content creation",
      size: 'medium' // Wide landscape video
    },
    {
      id: 3,
      type: 'image',
      src: "/grid_images/car-1544342_640.jpg",
      alt: "Premium automotive brand photography",
      size: 'small' // Small landscape
    },

    // Row 2 - Large landscape block and smaller items
    {
      id: 4,
      type: 'video',
      src: "/grid_images/214888_tiny.webm",
      poster: "/grid_images/building-6011756_1280.jpg",
      alt: "Dynamic brand storytelling video",
      size: 'large' // Large landscape video block
    },
    {
      id: 5,
      type: 'image',
      src: "/grid_images/architecture-5585737_1280.jpg",
      alt: "Architectural luxury brand visuals",
      size: 'small' // Small landscape
    },

    // Row 3 - Wide and small mix
    {
      id: 6,
      type: 'image',
      src: "/grid_images/outdoor-dining-1846137_1280.jpg",
      alt: "Luxury hospitality brand content",
      size: 'medium' // Wide landscape
    },
    {
      id: 7,
      type: 'image',
      src: "/grid_images/opal-4765457_1280.jpg",
      alt: "Luxury gemstone brand photography",
      size: 'small' // Small landscape
    },

    // Row 4 - Video and images
    {
      id: 8,
      type: 'image',
      src: "/grid_images/restaurant-4011989_1280.jpg",
      alt: "Fine dining brand visual identity",
      size: 'small' // Small landscape
    },
    {
      id: 9,
      type: 'video',
      src: "/grid_images/3152-166336023_small.webm",
      poster: "/grid_images/arra-luxury-8274729_1280.jpg",
      alt: "Premium brand showcase video",
      size: 'medium' // Wide landscape video
    },

    // Row 5 - Final items
    {
      id: 10,
      type: 'image',
      src: "/grid_images/fiji-7186952_1280.jpg",
      alt: "Luxury travel and lifestyle brands",
      size: 'small' // Small landscape
    },
    {
      id: 11,
      type: 'image',
      src: "/grid_images/architecture-2256489_1280.jpg",
      alt: "Architectural brand photography",
      size: 'small' // Small landscape
    },
    {
      id: 12,
      type: 'video',
      src: "/grid_images/34855-403777679_tiny.webm",
      poster: "/grid_images/table-5356682_1280.jpg",
      alt: "Luxury lifestyle content creation",
      size: 'medium' // Wide landscape video
    },

    // Additional landscape items
    {
      id: 13,
      type: 'image',
      src: "/grid_images/building-6011756_1280.jpg",
      alt: "Contemporary architecture branding",
      size: 'small' // Small landscape
    },
    {
      id: 14,
      type: 'image',
      src: "/grid_images/arra-luxury-8274729_1280.jpg",
      alt: "Premium lifestyle brand imagery",
      size: 'small' // Small landscape
    },
    {
      id: 15,
      type: 'image',
      src: "/grid_images/table-5356682_1280.jpg",
      alt: "Luxury dining experience branding",
      size: 'small' // Small landscape
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

        {/* Clean Uniform Masonry Gallery */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr items-start" 
          data-reveal
        >
          {galleryItems.map((item, index) => {
            // Simplified uniform sizing for clean masonry
            const getSizeClass = (size: string) => {
              switch (size) {
                case 'small': return 'h-64'; // Uniform height
                case 'medium': return 'md:col-span-2 h-48'; // Wide but uniform height
                case 'large': return 'md:col-span-2 h-80'; // Large but uniform height
                default: return 'h-64';
              }
            };

            return (
              <div
                key={item.id}
                data-index={index}
                className={`gallery-item group cursor-pointer ${getSizeClass(item.size)} w-full`}
                style={{
                  willChange: 'transform',
                }}
              >
                <div className="relative overflow-hidden rounded-lg bg-panel border border-line hover:border-ink/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg h-full w-full">
                  {item.type === 'image' ? (
                    // Image Item - Uniform aspect ratio
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url("${item.src}")`
                      }}
                      role="img"
                      aria-label={item.alt}
                    >
                      {/* Simple hover overlay */}
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300"></div>
                    </div>
                  ) : (
                    // Video Item - Uniform aspect ratio
                    <div className="w-full h-full relative">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={item.poster}
                        onError={(e) => {
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
                      
                      {/* Simple hover overlay */}
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
