'use client';

import { useEffect, useRef } from 'react';

interface GalleryProps {
  isHomePage?: boolean;
}

export default function Gallery({ isHomePage = false }: GalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Simple intersection observer for reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              const element = item as HTMLElement;
              // Staggered reveal with shorter delays
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
              }, index * 80);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Premium bento/masonry gallery items with intelligent sizing
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: "/grid_images/jewellery-1723638_640.jpg",
      alt: "Luxury jewelry photography for premium brands",
      size: 'small' // Perfect for square jewelry detail shots
    },
    {
      id: 2,
      type: 'image',
      src: "/grid_images/architecture-2256489_1280.jpg",
      alt: "Luxury architectural brand photography",
      size: 'medium' // Wide format perfect for architectural shots
    },
    {
      id: 4,
      type: 'image',
      src: "/grid_images/car.jpg",
      alt: "Premium automotive brand photography",
      size: 'medium' // Automotive detail shots work well in square format
    },
    {
      id: 3,
      type: 'image',
      src: "/grid_images/building-6011756_1280.jpg",
      alt: "Contemporary commercial brand photography",
      size: 'small' // Large format showcases commercial architecture
    },
    {
      id: 5,
      type: 'image',
      src: "/grid_images/architecture-5585737_1280.jpg",
      alt: "Architectural luxury brand visuals",
      size: 'small' // Architectural details in focused square format
    },
    {
      id: 6,
      type: 'image',
      src: "/grid_images/dining.jpg",
      alt: "Luxury hospitality brand content",
      size: 'medium' // Wide format showcases dining atmosphere
    },
    {
      id: 7,
      type: 'image',
      src: "/grid_images/opal.jpg",
      alt: "Luxury gemstone brand photography",
      size: 'medium' // Gemstone macro shots perfect in square
    },
    {
      id: 9,
      type: 'image',
      src: "/grid_images/arra-luxury-8274729_1280.jpg",
      alt: "Premium luxury brand showcase",
      size: 'small' // Luxury brands work well in wide format
    },
    {
      id: 10,
      type: 'image',
      src: "/grid_images/fiji-7186952_1280.jpg",
      alt: "Luxury travel and lifestyle brands",
      size: 'small' // Travel moments captured in square format
    },
    {
      id: 11,
      type: 'image',
      src: "/grid_images/table-5356682_1280.jpg",
      alt: "Luxury retail store brand photography",
      size: 'medium' // Wide format showcases retail atmosphere
    },
    {
      id: 16,
      type: 'image',
      src: "/grid_images/apparel-1850804.jpg",
      alt: "Luxury apparel branding",
      size: 'medium' // Apparel details perfect in square format
    },
    {
      id: 17,
      type: 'image',
      src: "/grid_images/restaurant-1837150.jpg",
      alt: "Premium restaurant interior branding",
      size: 'small' // Wide format showcases interior design
    }
  ];

  return (
    <section id="gallery" className={`pt-20 pb-6 ${isHomePage ? 'bg-white' : ''}`}>
      <div className="container">
        <div data-reveal className="text-center mb-12" suppressHydrationWarning>
          <h2 className={`font-display text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] ${isHomePage ? 'text-black' : 'text-ink'}`}>
            <b>What We Create</b>
          </h2>
        </div>

        {/* Premium Bento Grid Masonry Gallery */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]" 
          data-reveal
          suppressHydrationWarning
        >
          {galleryItems.map((item, index) => {
            // Intelligent bento sizing based on content type and format
            const getSizeClass = (size: string) => {
              switch (size) {
                case 'small': return 'row-span-1 col-span-1'; // Perfect for details, portraits, square content
                case 'medium': return 'md:col-span-2 row-span-1'; // Wide format for landscapes, cinematic content
                case 'large': return 'md:col-span-2 row-span-2'; // Hero content that demands attention
                default: return 'row-span-1 col-span-1';
              }
            };

            return (
              <div
                key={item.id}
                data-index={index}
                className={`gallery-item group cursor-pointer ${getSizeClass(item.size)}`}
                style={{
                  opacity: 0,
                  transform: 'translateY(20px) scale(0.95)',
                  transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s linear',
                  willChange: 'transform, opacity',
                }}
              >
                <div className="relative overflow-hidden rounded-xl bg-panel border border-line 
                  transition-all duration-500 ease-out hover:scale-[1.02] hover:border-ink/30 
                  hover:shadow-2xl hover:shadow-ink/10 h-full w-full group-hover:z-10">
                  {/* Premium image presentation with intelligent positioning and lazy loading */}
                  <div className="w-full h-full relative">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-all duration-700 
                        group-hover:scale-105"
                      style={{
                        minHeight: '200px', // Ensure minimum height for visibility
                        objectPosition: 'center center'
                      }}
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '1';
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    {/* Multi-layer hover overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-ink/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink/20
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced description */}
        <div data-reveal className="text-center mt-16 pt-8" suppressHydrationWarning>
          <p className={`max-w-2xl mx-auto leading-relaxed ${isHomePage ? 'text-black' : 'text-ink'}`}>
            From brand storytelling to campaign execution — witness the creative journey that transforms ideas into compelling social narratives.
          </p>
        </div>
      </div>
    </section>
  );
}


