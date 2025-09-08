'use client';

import { useEffect, useRef } from 'react';

export default function AboutUs() {
  const aboutRef = useRef<HTMLDivElement>(null);

  // Enhanced intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-reveal]');
            elements.forEach((element, index) => {
              const el = element as HTMLElement;
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-canvas" ref={aboutRef}>
      <div className="container">
        {/* Section Header */}
        <div 
          data-reveal 
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em] text-ink mb-6">
            About <span className="text-white">Pixel & Purpose</span>
          </h2>
          <p className="text-lg text-ink max-w-3xl mx-auto leading-relaxed">
            Crafting compelling visual narratives that transform brands into unforgettable experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <div 
              data-reveal
              className="mb-8"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
                Our Story
              </h3>
              <p className="text-ink leading-relaxed mb-6">
                At Pixel & Purpose, we believe every brand has a unique story waiting to be told. 
                Founded with a passion for visual storytelling, we specialize in creating compelling 
                content that resonates with audiences and drives meaningful engagement.
              </p>
              <p className="text-ink leading-relaxed">
                From concept to execution, we craft each piece of content with meticulous attention 
                to detail, ensuring your brand's voice shines through every pixel.
              </p>
            </div>

            <div 
              data-reveal
              className="mb-8"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
                Our Mission
              </h3>
              <p className="text-ink leading-relaxed">
                To transform ideas into compelling visual narratives that captivate audiences, 
                build lasting connections, and drive real business results. We're not just creating 
                content – we're crafting experiences that matter.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div 
            data-reveal
            className="relative"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-panel border border-line shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-ink/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-ink/10 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-display text-xl font-bold text-ink mb-2">Creative Excellence</h4>
                  <p className="text-ink text-sm">Every project crafted with passion and precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div 
          data-reveal
          className="mt-20"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-ink mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-6 rounded-xl bg-panel border border-line hover:border-line transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-bold text-ink mb-2">Innovation</h4>
              <p className="text-ink text-sm leading-relaxed">
                Pushing creative boundaries with cutting-edge techniques and fresh perspectives
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-6 rounded-xl bg-panel border border-line hover:border-line transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-bold text-ink mb-2">Quality</h4>
              <p className="text-ink text-sm leading-relaxed">
                Delivering exceptional results that exceed expectations every single time
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-6 rounded-xl bg-panel border border-line hover:border-line transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-bold text-ink mb-2">Partnership</h4>
              <p className="text-ink text-sm leading-relaxed">
                Building lasting relationships through transparent communication and collaboration
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          data-reveal
          className="text-center mt-16"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <p className="text-ink max-w-2xl mx-auto leading-relaxed mb-8">
            Ready to transform your brand's story? Let's create something extraordinary together.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center min-w-[200px] cursor-pointer overflow-hidden rounded-lg h-12 px-8 bg-ink text-canvas text-sm font-bold leading-normal tracking-[0.015em] hover:bg-ink/90 focus:outline-none transition-all duration-200"
          >
            Start Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
