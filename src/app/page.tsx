"use client";

import FloatingNavbar from "@/components/FloatingNavbar";
import { motion } from "framer-motion";
import { ArrowRight, Star, Palette, Camera, Code } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SERVICES = [
  { title: "Portfolio Design", icon: Star, desc: "Curated narratives that speak before you do." },
  { title: "Packaging & Branding", icon: Palette, desc: "Shelves won at first sight with artisan experiences." },
  { title: "Photography", icon: Camera, desc: "High-impact imagery capturing your brand soul." },
  { title: "Web Development", icon: Code, desc: "Digital presences engineered for performance." },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white pb-32 overflow-x-hidden">
      <FloatingNavbar />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4"
      >
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] md:w-[400px] md:h-[400px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto z-10 flex flex-col items-center mt-20 md:mt-0">
          <div className="hero-element mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/10 bg-white/50 backdrop-blur-sm text-sm font-medium text-secondary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Award-Winning Creative Agency
          </div>

          <h1 className="hero-element font-display font-bold text-5xl md:text-7xl lg:text-8xl text-secondary leading-[1.1] md:leading-[1.05] tracking-tight mb-8">
            Crafting digital <br />
            <span className="text-primary italic font-normal">masterpieces.</span>
          </h1>

          <p className="hero-element text-lg md:text-xl text-text-primary/70 max-w-2xl mb-12 leading-relaxed">
            We transform visions into unforgettable experiences. Specializing in luxury brand narratives, packaging, photography, and high-performance web development.
          </p>

          <div className="hero-element flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto bg-white text-secondary border border-secondary/10 px-8 py-4 rounded-full font-medium hover:bg-background hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-center justify-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight">
                Disciplines of <br />
                <span className="italic font-normal text-primary">Excellence.</span>
              </h2>
            </div>
            <p className="text-text-primary/60 max-w-md md:text-right pb-2">
              Four distinct verticals, executed with a singular standard of award-winning quality and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-secondary/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 text-secondary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-primary/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Teaser CTA */}
      <section className="py-24 px-4 text-center mt-12 relative">
        <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent absolute top-0 left-4 right-4" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto glass-panel rounded-[3rem] p-10 md:p-24 relative overflow-hidden bg-white/80"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
          <h2 className="font-display text-4xl md:text-6xl font-bold text-secondary mb-6 relative z-10 leading-tight">
            Ready to elevate your <span className="italic font-normal text-primary">brand?</span>
          </h2>
          <p className="text-text-primary/70 text-lg md:text-xl mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
            Let's collaborate to build an unforgettable digital experience that resonates with your audience and drives results.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-primary transition-all duration-300 shadow-lg relative z-10 transform hover:scale-105 active:scale-95"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
