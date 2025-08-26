'use client';

import { useEffect, useRef } from 'react';

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Enhanced intersection observer with parallax scroll effect
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

  // Parallax scroll effect for gallery items
  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;

      const scrollY = window.scrollY;
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      
      items.forEach((item, index) => {
        const element = item as HTMLElement;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate if element is in viewport
        const isInViewport = rect.top < windowHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Create different parallax speeds for different sized items
          const speed = element.classList.contains('row-span-2') ? 0.5 : // Large items slower
                       element.classList.contains('md:col-span-2') ? 0.3 : // Medium items medium speed
                       0.2; // Small items faster
          
          // Calculate parallax offset based on scroll position
          const yPos = -(scrollY - elementTop) * speed;
          
          // Apply subtle parallax transform while maintaining scale
          element.style.transform = `translateY(${yPos}px) scale(1)`;
        }
      });
    };

    // Throttle scroll events for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
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
      type: 'video',
      src: "/grid_images/11289-229221023_small.webm",
      poster: "/grid_images/architecture-2256489_1280.jpg",
      alt: "Luxury brand video content creation",
      size: 'medium' // Wide format perfect for cinematic brand videos
    },
    {
      id: 3,
      type: 'image',
      src: "/grid_images/car-1544342_640.jpg",
      alt: "Premium automotive brand photography",
      size: 'small' // Automotive detail shots work well in square format
    },
    {
      id: 4,
      type: 'video',
      src: "/grid_images/214888_tiny.webm",
      poster: "/grid_images/building-6011756_1280.jpg",
      alt: "Dynamic brand storytelling video",
      size: 'large' // Hero video deserves premium large format
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
      src: "/grid_images/outdoor-dining-1846137_1280.jpg",
      alt: "Luxury hospitality brand content",
      size: 'medium' // Wide format showcases dining atmosphere
    },
    {
      id: 7,
      type: 'image',
      src: "/grid_images/opal-4765457_1280.jpg",
      alt: "Luxury gemstone brand photography",
      size: 'small' // Gemstone macro shots perfect in square
    },
    {
      id: 8,
      type: 'image',
      src: "/grid_images/restaurant-4011989_1280.jpg",
      alt: "Fine dining brand visual identity",
      size: 'small' // Restaurant details in intimate square format
    },
    {
      id: 9,
      type: 'video',
      src: "/grid_images/3152-166336023_small.webm",
      poster: "/grid_images/arra-luxury-8274729_1280.jpg",
      alt: "Premium brand showcase video",
      size: 'medium' // Brand showcase videos work well in wide format
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
      src: "/grid_images/architecture-2256489_1280.jpg",
      alt: "Architectural brand photography",
      size: 'medium' // Architecture benefits from wide landscape format
    },
    {
      id: 12,
      type: 'video',
      src: "/grid_images/34855-403777679_tiny.webm",
      poster: "/grid_images/table-5356682_1280.jpg",
      alt: "Luxury lifestyle content creation",
      size: 'medium' // Lifestyle videos in cinematic wide format
    },
    {
      id: 13,
      type: 'image',
      src: "/grid_images/building-6011756_1280.jpg",
      alt: "Contemporary architecture branding",
      size: 'small' // Architectural details in focused format
    },
    {
      id: 14,
      type: 'image',
      src: "/grid_images/arra-luxury-8274729_1280.jpg",
      alt: "Premium lifestyle brand imagery",
      size: 'small' // Lifestyle details in square format
    },
    {
      id: 15,
      type: 'image',
      src: "/grid_images/table-5356682_1280.jpg",
      alt: "Luxury dining experience branding",
      size: 'small' // Dining details perfect in square format
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

        {/* Premium Bento Grid Masonry Gallery */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]" 
          data-reveal
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
                  {item.type === 'image' ? (
                    // Premium image presentation with intelligent positioning
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover transition-all duration-700 
                        group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${item.src}")`,
                        backgroundPosition: 'center center',
                        minHeight: '200px' // Ensure minimum height for visibility
                      }}
                      role="img"
                      aria-label={item.alt}
                    >
                      {/* Multi-layer hover overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-ink/5 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink/20
                        opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Content type indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 delay-200">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Premium video presentation with intelligent aspect handling
                    <div className="w-full h-full relative group">
                      <video
                        className="w-full h-full object-cover transition-all duration-700 
                          group-hover:scale-105"
                        style={{
                          objectPosition: item.size === 'large' ? 'center center' : 
                                        item.size === 'medium' ? 'center center' : 'center center'
                        }}
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
                      
                      {/* Fallback with same styling as video */}
                      <div
                        className="hidden w-full h-full bg-center bg-no-repeat bg-cover 
                          transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url("${item.poster}")`,
                          backgroundPosition: 'center center'
                        }}
                      ></div>
                      
                      {/* Multi-layer video overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-ink/5 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink/20
                        opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Video play indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 delay-200">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2 2 0 001.5-2V6a2 2 0 011.5-1.5H15M9 14h1.5a2 2 0 001.5-2v-2a2 2 0 011.5-1.5H15" />
                          </svg>
                        </div>
                      </div>

                      {/* Video progress indicator (aesthetic) */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                        <div className="h-full bg-white/60 w-0 group-hover:w-full 
                          transition-all duration-[3000ms] ease-linear"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced description */}
        <div data-reveal className="text-center mt-16">
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
            From brand storytelling to campaign execution — witness the creative journey that transforms ideas into compelling social narratives.
          </p>
        </div>
      </div>
    </section>
  );
}


