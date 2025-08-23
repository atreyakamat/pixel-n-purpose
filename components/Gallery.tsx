'use client';

import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isAssembled, setIsAssembled] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const lastScrollRef = useRef(0);

  // Assembly animation on section entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAssembled) {
            setIsAssembled(true);
            // Trigger staggered assembly animation
            const items = entry.target.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              const element = item as HTMLElement;
              const delay = Math.floor(index / 3) * 80 + (index % 3) * 60; // Row + column stagger
              setTimeout(() => {
                element.classList.add('assembled');
              }, delay);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, [isAssembled]);

  // Optimized parallax with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleParallax = () => {
      if (!galleryRef.current || !isAssembled) return;

      const rect = galleryRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Only apply parallax when gallery is in viewport
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      // Calculate scroll progress through gallery
      const scrollProgress = Math.max(0, Math.min(1, 
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      ));

      const items = galleryRef.current.querySelectorAll('.gallery-item.assembled');
      items.forEach((item, index) => {
        const element = item as HTMLElement;
        
        // Calculate grid position
        const column = index % 3;
        const row = Math.floor(index / 3);
        
        // Define parallax layers with subtle speed variations
        const parallaxLayers = [
          // Layer speeds: some faster, some slower, few counter-direction
          [0.3, -0.1, 0.5],  // Row 0: slow, counter, medium
          [0.8, 0.2, -0.3],  // Row 1: fast, slow, counter
          [0.1, 0.6, 0.4],   // Row 2: very slow, medium-fast, medium
          [-0.2, 0.9, 0.7],  // Row 3: counter, very fast, fast
          [0.5, 0.3, -0.1]   // Row 4: medium, slow, counter
        ];
        
        const layerIndex = row % parallaxLayers.length;
        const speed = parallaxLayers[layerIndex][column] || 0.3;
        
        // Calculate parallax offset (max 40px for subtlety)
        const maxOffset = 40;
        const offset = scrollProgress * maxOffset * speed;
        
        // Apply clean vertical parallax
        element.style.transform = `translateY(${offset}px)`;
      });

      ticking = false;
    };

    const onScroll = () => {
      lastScrollRef.current = window.scrollY;
      if (!ticking) {
        animationFrameRef.current = requestAnimationFrame(handleParallax);
        ticking = true;
      }
    };

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAssembled]);

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

        {/* Premium Bento Grid Gallery */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]" 
          data-reveal
        >
          {galleryItems.map((item, index) => {
            // Premium bento sizing with clean proportions
            const getSizeClass = (size: string) => {
              switch (size) {
                case 'small': return 'row-span-1 col-span-1'; // 1x1 tiles
                case 'medium': return 'md:col-span-2 row-span-1'; // 2x1 wide tiles
                case 'large': return 'md:col-span-2 row-span-2'; // 2x2 large tiles
                default: return 'row-span-1 col-span-1';
              }
            };

            return (
              <div
                key={item.id}
                data-index={index}
                className={`gallery-item group cursor-pointer ${getSizeClass(item.size)} 
                  opacity-0 scale-95 translate-y-4 transition-all duration-700 ease-out`}
                style={{
                  willChange: 'transform, opacity',
                }}
              >
                <div className="relative overflow-hidden rounded-xl bg-panel border border-line 
                  transition-all duration-300 ease-out hover:scale-[1.02] hover:border-ink/30 
                  hover:shadow-xl hover:shadow-ink/5 h-full w-full group-hover:z-10">
                  {item.type === 'image' ? (
                    // Premium image presentation
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700"
                      style={{
                        backgroundImage: `url("${item.src}")`
                      }}
                      role="img"
                      aria-label={item.alt}
                    >
                      {/* Premium hover overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    // Premium video presentation
                    <div className="w-full h-full relative">
                      <video
                        className="w-full h-full object-cover transition-transform duration-700"
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
                      
                      {/* Fallback with premium styling */}
                      <div
                        className="hidden w-full h-full bg-center bg-no-repeat bg-cover"
                        style={{
                          backgroundImage: `url("${item.poster}")`
                        }}
                      ></div>
                      
                      {/* Premium video overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
