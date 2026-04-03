"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Star, Package, Camera, Code2, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import FloatingNavbar from "@/components/FloatingNavbar";
import { cn } from "@/lib/utils";

// --- Data ---
const SERVICES = [
  { id: "01", title: "Portfolio Design", icon: Star, desc: "Curated narratives that speak before you do. We design portfolios that make the right people stop and look." },
  { id: "02", title: "Packaging & Branding", icon: Package, desc: "Packaging that earns attention without shouting. Structured, honest, and memorable artisan experiences." },
  { id: "03", title: "Photography", icon: Camera, desc: "Visual storytelling that translates brand values into high-impact, trust-building imagery." },
  { id: "04", title: "Web Development", icon: Code2, desc: "Websites that perform beautifully. Engineered for speed, clarity, conversion, and accessibility." },
];

const PORTFOLIO = [
  { id: 1, category: "Event", title: "Gala Symphony", img: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=800&auto=format&fit=crop" },
  { id: 2, category: "Branding", title: "Aura Skincare", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop" },
  { id: 3, category: "Web", title: "Nexus Platform", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" },
  { id: 4, category: "Photo", title: "Urban Shadows", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" },
  { id: 5, category: "Branding", title: "Verve Coffee", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" },
  { id: 6, category: "Web", title: "Lumina App", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" },
  { id: 7, category: "Event", title: "Horizon Summit", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop" },
  { id: 8, category: "Photo", title: "Echoes of Time", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop" },
];

const FILTERS = ["All", "Event", "Branding", "Web", "Photo"];

// --- Animation Variants ---
const staggerContainer: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeSlideUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const [filter, setFilter] = useState("All");
  const filteredPortfolio = filter === "All" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // Initial load animation for Hero Text
    gsap.fromTo(".hero-text-line", 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <main className="bg-background min-h-screen text-text-primary overflow-hidden">
      <FloatingNavbar />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-secondary">
        {/* Parallax Background */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-secondary/60 z-10 mix-blend-multiply" />
          <Image 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero background" 
            fill 
            style={{ objectFit: "cover" }} 
            className="opacity-60"
            priority
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center mt-20">
          <div className="overflow-hidden mb-4">
            <p className="hero-text-line text-accent font-medium tracking-[0.2em] uppercase text-sm md:text-base">Award-Winning Creative Agency</p>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[6rem] text-white leading-[1.1] tracking-tight mb-8">
            <div className="overflow-hidden"><span className="hero-text-line block">Crafting digital</span></div>
            <div className="overflow-hidden"><span className="hero-text-line block text-primary italic font-normal">masterpieces.</span></div>
          </h1>

          <div className="overflow-hidden mb-12">
            <p className="hero-text-line text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              We transform visions into unforgettable experiences. Specializing in luxury brand narratives, packaging, photography, and high-performance web development.
            </p>
          </div>

          <div className="overflow-hidden">
            <motion.div className="hero-text-line">
              <a 
                href="#portfolio" 
                data-cursor="hover"
                className="group relative inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium overflow-hidden shadow-[0_0_40px_rgba(255,111,97,0.3)] transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Explore Our Work</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-primary-hover translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <motion.div variants={fadeSlideUp} className="w-12 h-[2px] bg-primary mb-6" />
          <motion.h2 variants={fadeSlideUp} className="font-display text-4xl md:text-6xl font-bold text-secondary mb-4">
            Disciplines of <span className="italic font-normal text-primary">Excellence.</span>
          </motion.h2>
          <motion.p variants={fadeSlideUp} className="text-text-primary/70 max-w-2xl text-lg">
            Four distinct verticals, executed with a singular standard of award-winning quality and precision.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeSlideUp}
              data-cursor="hover"
              className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(51,78,104,0.1)] border border-secondary/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="text-secondary/20 font-display font-bold text-3xl transition-colors duration-500 group-hover:text-primary/20">{service.id}</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-4 relative inline-block">
                {service.title}
                {/* Custom animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
              </h3>
              
              <p className="text-text-primary/70 text-base md:text-lg leading-relaxed flex-grow">
                {service.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <motion.div variants={fadeSlideUp} className="w-12 h-[2px] bg-primary mb-6" />
              <motion.h2 variants={fadeSlideUp} className="font-display text-4xl md:text-6xl font-bold text-secondary">
                Selected <span className="italic font-normal text-primary">Works.</span>
              </motion.h2>
            </div>
            
            {/* Filters */}
            <motion.div variants={fadeSlideUp} className="flex flex-wrap gap-2 md:gap-4">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  data-cursor="hover"
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    filter === f 
                      ? "bg-secondary text-white shadow-md" 
                      : "bg-background text-secondary hover:bg-secondary/10"
                  )}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary cursor-pointer"
                  data-cursor="hover"
                >
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-150"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-accent text-xs font-medium tracking-widest uppercase mb-2">{item.category}</span>
                    <h3 className="text-white font-display font-bold text-2xl">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
              className="text-white flex flex-col justify-between"
            >
              <div>
                <motion.h2 variants={fadeSlideUp} className="font-display text-4xl md:text-6xl font-bold mb-6">
                  Let's create something <span className="italic font-normal text-primary">extraordinary.</span>
                </motion.h2>
                <motion.p variants={fadeSlideUp} className="text-white/70 text-lg mb-12 max-w-md">
                  Whether you have a specific project in mind or just want to explore possibilities, we're ready to listen.
                </motion.p>
              </div>

              <motion.div variants={fadeSlideUp} className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Email Us</p>
                    <a href="mailto:hello@pixelnpurpose.com" data-cursor="hover" className="text-lg font-medium hover:text-primary transition-colors">hello@pixelnpurpose.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Call Us</p>
                    <a href="tel:+1234567890" data-cursor="hover" className="text-lg font-medium hover:text-primary transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Visit Us</p>
                    <p className="text-lg font-medium">123 Creative Avenue,<br/>Design District, NY 10001</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl"
            >
              <h3 className="font-display text-2xl font-bold text-secondary mb-8">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Name</label>
                    <input type="text" className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Email</label>
                    <input type="email" className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Service Interested In</label>
                  <select className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                    <option>Select a service...</option>
                    <option>Portfolio Design</option>
                    <option>Packaging & Branding</option>
                    <option>Photography</option>
                    <option>Web Development</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Message</label>
                  <textarea rows={4} className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button 
                  data-cursor="hover"
                  type="submit" 
                  className="w-full bg-primary text-white font-medium py-4 rounded-xl hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-secondary/10 py-8 px-4 text-center text-secondary/60 text-sm">
        <p>© {new Date().getFullYear()} Pixel & Purpose. Designed for Excellence.</p>
      </footer>
    </main>
  );
}
