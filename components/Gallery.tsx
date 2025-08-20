'use client';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=400&fit=crop&crop=faces",
      alt: "Luxury brand social media post"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=600&fit=crop&crop=faces",
      alt: "Campaign visual design"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop&crop=faces",
      alt: "Brand photography"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=500&fit=crop&crop=faces",
      alt: "Content creation process"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=faces",
      alt: "Social media strategy"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop&crop=faces",
      alt: "Digital campaign asset"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=faces",
      alt: "Behind the scenes"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop&crop=faces",
      alt: "Luxury product styling"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop&crop=faces",
      alt: "Brand storytelling"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop&crop=faces",
      alt: "Creative direction"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=faces",
      alt: "Content planning session"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=500&fit=crop&crop=faces",
      alt: "Social media mockup"
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

        {/* Bento/Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-4 gap-3 space-y-3" data-reveal>
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden rounded-lg bg-panel border border-line hover:border-ink/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url("${item.image}")`,
                    aspectRatio: index % 4 === 1 || index % 4 === 3 ? '1/1.5' : '1/1'
                  }}
                  role="img"
                  aria-label={item.alt}
                >
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 text-canvas">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 3H6C4.9 3 4 3.9 4 5V16C4 17.1 4.9 18 6 18H15C16.1 18 17 17.1 17 16V5C17 3.9 16.1 3 15 3ZM12 13.5L9.5 10.5L7 13.5H12ZM14 11.5C14.8 11.5 15.5 10.8 15.5 10S14.8 8.5 14 8.5 12.5 9.2 12.5 10 13.2 11.5 14 11.5Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
