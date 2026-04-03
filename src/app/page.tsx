"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FloatingNavbar from "@/components/FloatingNavbar";

const SERVICES = [
  { id: "01", title: "Website Design", desc: "Digital presences engineered for performance.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
  { id: "02", title: "Portfolio Design", desc: "Curated narratives that speak before you do.", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop" },
  { id: "03", title: "Packaging", desc: "Shelves won at first sight with artisan experiences.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop" },
  { id: "04", title: "Photography", desc: "High-impact imagery capturing your brand soul.", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop" },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    // Preloader sequence
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      }
    });
    
    tl.to(".preloader-text", { y: 0, duration: 1, stagger: 0.1, ease: "power4.out" })
      .to(".preloader-text", { y: -100, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power4.in", delay: 0.5 })
      .to(".preloader-bg", { height: 0, duration: 1, ease: "expo.inOut" })
      .from(".hero-word", { y: 150, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", rotation: 5 }, "-=0.5")
      .from(".hero-sub", { opacity: 0, y: 20, duration: 1 }, "-=0.5");
      
    return () => { tl.kill(); };
  }, []);

  return (
    <main ref={containerRef} className="bg-background min-h-screen">
      {/* Preloader */}
      <div className="preloader-bg fixed inset-0 z-[100] bg-secondary flex items-center justify-center overflow-hidden">
        <div className="overflow-hidden flex gap-2">
          <div className="preloader-text translate-y-[100px] text-white font-display text-4xl md:text-6xl font-bold">
            Pixel
          </div>
          <div className="preloader-text translate-y-[100px] text-primary italic font-display text-4xl md:text-6xl font-bold">
            &
          </div>
          <div className="preloader-text translate-y-[100px] text-white font-display text-4xl md:text-6xl font-bold">
            Purpose
          </div>
        </div>
      </div>

      <FloatingNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-end pb-20 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
            <motion.div style={{ y }} className="w-full h-full relative">
                <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" alt="Hero background" fill style={{ objectFit: "cover" }} className="opacity-[0.15] grayscale" priority />
            </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full pt-32">
          <p className="hero-sub text-primary font-medium tracking-[0.2em] uppercase mb-4 md:mb-8 text-sm md:text-base">Creative Agency</p>
          <h1 className="font-display text-[12vw] leading-[0.85] tracking-tighter text-secondary uppercase m-0 p-0 flex flex-wrap">
            <span className="overflow-hidden block"><span className="hero-word block origin-bottom-left">Crafting</span></span>
            <span className="w-full h-2 md:h-4"></span>
            <span className="overflow-hidden block"><span className="hero-word block origin-bottom-left italic text-primary pr-4 md:pr-8">Digital</span></span>
            <span className="overflow-hidden block"><span className="hero-word block origin-bottom-left">Masterpieces</span></span>
          </h1>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-32 md:py-48 px-4 md:px-10 bg-secondary text-white relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-between items-start">
          <h2 className="font-display text-4xl md:text-6xl max-w-xl leading-tight font-bold">
            We don't just design. We build narratives that <span className="text-primary italic font-normal">demand attention.</span>
          </h2>
          <p className="max-w-md text-white/70 text-lg md:text-xl leading-relaxed mt-4">
            Our approach combines meticulous strategy with unapologetic aesthetic excellence. Whether it's a digital platform or an artisan package, every pixel serves a purpose.
          </p>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="py-32 md:py-48 px-4 md:px-10 relative bg-background z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">
          {/* Left: Sticky Image Reveal */}
          <div className="hidden lg:block w-1/2 relative min-h-[600px] xl:min-h-[800px]">
            <div className="sticky top-40 w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              {SERVICES.map((service, i) => (
                <div 
                  key={service.id} 
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${activeService === i ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                >
                  <Image src={service.img} alt={service.title} fill style={{ objectFit: "cover" }} />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Service List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-16">Our Disciplines</h3>
            <div className="flex flex-col border-t border-secondary/10">
              {SERVICES.map((service, i) => (
                <div 
                  key={service.id}
                  data-cursor="hover"
                  onMouseEnter={() => setActiveService(i)}
                  className="group relative border-b border-secondary/10 py-10 md:py-16 cursor-pointer overflow-hidden flex flex-col justify-center"
                >
                  {/* Hover bg sweep */}
                  <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] -z-10" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 relative z-10 group-hover:text-white transition-colors duration-300 px-4 md:px-8">
                    <span className="text-lg md:text-xl font-medium text-primary group-hover:text-accent transition-colors duration-300">{service.id}</span>
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter m-0">{service.title}</h2>
                  </div>
                  
                  <div className="px-4 md:px-8 relative z-10 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-8 transition-all duration-500 delay-100 text-white/70 overflow-hidden max-w-lg">
                    <p className="text-lg md:text-xl">{service.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-accent font-medium text-sm tracking-widest uppercase">
                      Explore Case Studies <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Mobile image preview (hidden on desktop) */}
                  <div className="block lg:hidden mt-8 w-full aspect-video relative overflow-hidden rounded-xl h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mb-4 transition-all duration-500 mx-4 md:mx-8 max-w-[calc(100%-2rem)]">
                     <Image src={service.img} alt={service.title} fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image Break */}
      <section className="h-[70vh] w-full relative overflow-hidden z-10">
        <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
          <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="Parallax divider" fill style={{ objectFit: "cover" }} className="grayscale brightness-50" />
        </motion.div>
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
           <h2 className="font-display text-5xl md:text-8xl text-white font-bold tracking-tighter text-center px-4 mix-blend-overlay">
              DESIGN WITH <br/><span className="italic">PURPOSE</span>
           </h2>
        </div>
      </section>

      {/* CTA Footer */}
      <footer id="contact" className="bg-primary text-white py-32 md:py-48 px-4 md:px-10 text-center relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <p className="text-white/80 uppercase tracking-[0.2em] text-sm font-medium mb-8">Ready to start?</p>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10vw] font-bold leading-[0.9] tracking-tighter mb-12 hover:scale-105 transition-transform duration-500 cursor-default">
            LET'S TALK
          </h2>
          <a data-cursor="hover" href="mailto:hello@pixelnpurpose.com" className="inline-block border-b-2 border-white/30 pb-2 text-xl md:text-4xl font-medium hover:text-accent hover:border-accent transition-all duration-300">
            hello@pixelnpurpose.com
          </a>
          
          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-sm font-medium text-white/50 border-t border-white/10 pt-8">
            <p>© 2026 Pixel & Purpose. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a data-cursor="hover" href="#" className="hover:text-white transition-colors">Instagram</a>
              <a data-cursor="hover" href="#" className="hover:text-white transition-colors">Twitter</a>
              <a data-cursor="hover" href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
