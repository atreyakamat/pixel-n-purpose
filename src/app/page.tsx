"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Star, Package, Camera, Code2, MapPin, Phone, Mail, Plus } from "lucide-react";
import Image from "next/image";
import FloatingNavbar from "@/components/FloatingNavbar";
import ParallaxText from "@/components/ParallaxText";
import Magnetic from "@/components/Magnetic";
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
  { id: 4, category: "Photo", title: "Urban Shadows", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" },
  { id: 5, category: "Branding", title: "Verve Coffee", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" },
  { id: 6, category: "Web", title: "Lumina App", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" },
  { id: 7, category: "Event", title: "Horizon Summit", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop" },
  { id: 8, category: "Photo", title: "Echoes of Time", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop" },
];

const FILTERS = ["All", "Event", "Branding", "Web", "Photo"];

const MANIFESTO = [
  { title: "Visual Authority", desc: "We architect narratives that convert attention into prestige." },
  { title: "Strategic Beauty", desc: "Our designs are as smart as they are beautiful. No fluff. Just impact." },
  { title: "Artisanal Detail", desc: "From the pixel to the print label, every detail is engineered with love." },
  { title: "Global Standard", desc: "We build for the visionaries. The leaders. The elite." }
];

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
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  
  const filteredPortfolio = filter === "All" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 5000);
  };
  
  const heroRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(heroScroll, [0, 1], [1, 0]);

  const { scrollYProgress: horizontalScroll } = useScroll({ target: horizontalRef });
  const xTranslate = useTransform(horizontalScroll, [0, 1], ["0%", "-60%"]);

  // Preloader Logic
  useEffect(() => {
    let interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowContent(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showContent) {
      gsap.fromTo(".hero-text-line", 
        { y: "100%", opacity: 0, rotateX: -20 }, 
        { y: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.15, ease: "power4.out" }
      );
    }
  }, [showContent]);

  return (
    <main className="bg-background min-h-screen text-text-primary overflow-hidden selection:bg-primary selection:text-white">
      {/* --- PRELOADER --- */}
      <AnimatePresence>
        {!showContent && (
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 z-[9999] bg-secondary flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                className="h-[2px] bg-primary absolute top-0 left-0"
              />
              <div className="text-white text-[15vw] font-display font-bold tracking-tighter leading-none">
                {Math.min(loadingProgress, 100)}
              </div>
              <div className="text-white/20 text-[2vw] uppercase tracking-[0.5em] mt-4 font-sans font-bold">
                Pixel & Purpose
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingNavbar />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-secondary">
        {/* Parallax Background */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 w-full h-full scale-110">
          <div className="absolute inset-0 bg-secondary/80 z-10 mix-blend-multiply" />
          <Image 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero background" 
            fill 
            style={{ objectFit: "cover" }} 
            className="opacity-40 grayscale"
            priority
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-[1400px] mx-auto flex flex-col items-center mt-20">
          <div className="overflow-hidden mb-8">
            <p className="hero-text-line text-accent font-bold tracking-[0.5em] uppercase text-xs">Architects of Visual Prestige</p>
          </div>
          
          <h1 className="font-display font-bold text-[13vw] md:text-[10vw] lg:text-[9vw] text-white leading-[0.8] tracking-tighter mb-16 uppercase">
            <div className="overflow-hidden h-[1.1em]"><span className="hero-text-line block">Crafting</span></div>
            <div className="overflow-hidden h-[1.1em]"><span className="hero-text-line block text-primary italic font-normal">Masterpieces.</span></div>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-20 px-10">
            <div className="overflow-hidden text-left max-w-sm">
              <p className="hero-text-line text-xs md:text-sm text-white/40 leading-relaxed font-bold uppercase tracking-[0.2em]">
                We build narratives that demand attention. Unapologetic aesthetic excellence. Engineered for dominance.
              </p>
            </div>
            
            <div className="overflow-hidden">
              <motion.div className="hero-text-line">
                <Magnetic>
                  <a 
                    href="#portfolio" 
                    data-cursor-text="EXPLORE"
                    className="group relative h-40 w-40 md:h-48 md:w-48 flex items-center justify-center bg-primary rounded-full text-white font-display font-bold text-xl overflow-hidden shadow-2xl transition-transform duration-300"
                  >
                    <span className="relative z-10 text-center leading-tight">Explore<br/>Work</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1]" />
                    <span className="absolute z-20 text-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1] font-display font-bold text-xl text-center leading-tight">Explore<br/>Work</span>
                  </a>
                </Magnetic>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 right-12 flex flex-col items-center gap-6 z-20 text-white/30"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase vertical-text">Initiate Scroll</span>
          <motion.div 
            animate={{ height: [0, 64, 0], y: [0, 32, 64] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-white/30"
          />
        </motion.div>
      </section>

      {/* --- STRATEGIC MARQUEE --- */}
      <section className="py-12 bg-white border-y border-secondary/5 relative z-10">
        <ParallaxText baseVelocity={-3}>Visual Authority · Market Dominance · Strategic Beauty · Global Standard ·</ParallaxText>
        <ParallaxText baseVelocity={3}>Artisan Execution · Digital Monopolies · Detail Obsessed · Conversion Architecture ·</ParallaxText>
      </section>

      {/* --- STUDIO MANIFESTO (HORIZONTAL SCROLL) --- */}
      <section ref={horizontalRef} className="relative h-[300vh] bg-secondary">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x: xTranslate }} className="flex gap-20 px-[10vw]">
            <div className="flex-shrink-0 w-[80vw] md:w-[60vw] flex flex-col justify-center">
              <h2 className="text-primary font-display font-bold text-[10vw] md:text-[8vw] leading-none mb-10 tracking-tighter italic">Manifesto.</h2>
              <p className="text-white font-display font-semibold text-3xl md:text-5xl leading-tight max-w-4xl tracking-tight">
                We believe that profound aesthetic rigor is the <span className="text-primary italic">ultimate conversion lever.</span>
              </p>
            </div>
            
            {MANIFESTO.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center border-l border-white/10 pl-12 md:pl-20">
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-8">0{i + 1}</span>
                <h3 className="text-white font-display font-bold text-4xl md:text-6xl mb-8 leading-none tracking-tighter">{item.title}</h3>
                <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-32 md:py-64 px-8 max-w-[1400px] mx-auto bg-background relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          <div className="lg:col-span-5">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="flex flex-col sticky top-40"
            >
              <motion.div variants={fadeSlideUp} className="w-16 h-[3px] bg-primary mb-12" />
              <motion.h2 variants={fadeSlideUp} className="font-display text-6xl md:text-8xl font-bold text-secondary mb-12 leading-[0.85] tracking-tighter uppercase">
                Disciplines <br/><span className="italic font-normal text-primary">Arsenal.</span>
              </motion.h2>
              <motion.p variants={fadeSlideUp} className="text-text-primary/50 max-w-sm text-lg leading-relaxed uppercase font-bold tracking-widest text-xs">
                We bridge the gap between artisan craft and elite digital execution.
              </motion.p>
              
              <motion.div variants={fadeSlideUp} className="mt-20">
                <Magnetic>
                  <button className="flex items-center gap-6 text-secondary font-bold group">
                    <span className="h-16 w-16 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-out">
                      <Plus className="w-6 h-6" />
                    </span>
                    <span className="text-xs tracking-[0.4em] uppercase font-bold">Inquire Capabilities</span>
                  </button>
                </Magnetic>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  data-cursor="hover"
                  className="group bg-white rounded-[3rem] p-10 md:p-14 border border-secondary/5 flex flex-col justify-between aspect-square hover:bg-secondary transition-all duration-700 ease-[0.85, 0, 0.15, 1] shadow-sm hover:shadow-2xl"
                >
                  <div>
                    <span className="text-primary font-display font-bold text-2xl mb-10 block group-hover:text-accent transition-colors">0{service.id}</span>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-secondary group-hover:text-white transition-colors leading-none tracking-tighter">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div>
                    <p className="text-text-primary/40 text-sm group-hover:text-white/40 transition-colors mb-12 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center group-hover:border-white/20 text-secondary group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-5 h-5 transform group-hover:rotate-[-45deg] transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-32 md:py-64 px-8 bg-secondary">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-20 mb-32">
            <div>
              <div className="w-16 h-[3px] bg-primary mb-12" />
              <h2 className="font-display text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase leading-[0.8] mb-4">
                Selected <br/><span className="italic font-normal text-primary">Exhibitions.</span>
              </h2>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {FILTERS.map((f) => (
                <Magnetic key={f}>
                  <button
                    onClick={() => setFilter(f)}
                    className={cn(
                      "px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-700",
                      filter === f 
                        ? "bg-primary text-white shadow-xl shadow-primary/20" 
                        : "bg-white/5 text-white/30 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {f}
                  </button>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
                >
                  <Link 
                    href={`/work/${item.title.toLowerCase().replace(/ /g, "-")}`}
                    className="group relative aspect-[3/4.5] overflow-hidden rounded-[3rem] bg-white/5 cursor-pointer shadow-2xl block"
                    data-cursor-text="VIEW"
                  >
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-1000" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-10 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white transition-colors duration-500 backdrop-blur-sm">
                          <Plus className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-700" />
                        </span>
                        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{item.category}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-display font-bold text-4xl group-hover:text-accent transition-colors duration-700 leading-none tracking-tighter mb-4">{item.title}</h3>
                        <div className="w-0 h-[3px] bg-accent transition-all duration-[1.2s] ease-[0.85, 0, 0.15, 1] group-hover:w-full mt-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 md:py-64 px-8 max-w-[1400px] mx-auto">
        <div className="bg-white rounded-[4rem] p-12 md:p-32 overflow-hidden relative shadow-2xl border border-secondary/5">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="w-16 h-[3px] bg-primary mb-12" />
                <h2 className="font-display text-7xl md:text-[8vw] font-bold text-secondary mb-12 leading-[0.8] tracking-tighter uppercase">
                  Let's <br/><span className="italic font-normal text-primary">Initiate.</span>
                </h2>
                <p className="text-text-primary/40 text-xs md:text-sm mb-20 max-w-sm leading-relaxed uppercase font-bold tracking-[0.3em]">
                  Your brand is either unforgettable, or it is invisible.
                </p>
              </div>

              <div className="space-y-16">
                <div className="flex items-center gap-10 group">
                  <Magnetic>
                    <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                      <Mail className="w-8 h-8 text-secondary group-hover:text-white" />
                    </div>
                  </Magnetic>
                  <a href="mailto:hello@pixelnpurpose.com" data-cursor="hover" className="text-2xl md:text-4xl font-display font-bold text-secondary hover:text-primary transition-colors tracking-tight">hello@pixelnpurpose.com</a>
                </div>
                <div className="flex items-center gap-10 group">
                  <Magnetic>
                    <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                      <Phone className="w-8 h-8 text-secondary group-hover:text-white" />
                    </div>
                  </Magnetic>
                  <a href="tel:+1234567890" data-cursor="hover" className="text-2xl md:text-4xl font-display font-bold text-secondary hover:text-primary transition-colors tracking-tight">+1 (234) 567-890</a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-background rounded-[4rem] p-12 md:p-20 border border-secondary/5 shadow-inner">
              <h3 className="font-display text-3xl font-bold text-secondary mb-16 uppercase tracking-tighter">Engagement Form</h3>
              <form className="space-y-12" onSubmit={handleContactSubmit}>
                <AnimatePresence mode="wait">
                  {formStatus === "success" ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="py-20 text-center"
                    >
                      <Star className="w-16 h-16 text-primary mx-auto mb-10 animate-pulse" />
                      <h4 className="text-secondary font-display font-bold text-4xl mb-4 tracking-tighter uppercase">Initiated.</h4>
                      <p className="text-secondary/40 font-bold tracking-widest text-xs uppercase">We will coordinate with your team shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-12"
                    >
                      <div className="space-y-12">
                        <div className="relative border-b border-secondary/10 focus-within:border-primary transition-colors py-4">
                          <input required type="text" className="w-full bg-transparent text-secondary text-2xl focus:outline-none placeholder:text-secondary/10 font-bold tracking-tight" placeholder="Full Identity" />
                        </div>
                        <div className="relative border-b border-secondary/10 focus-within:border-primary transition-colors py-4">
                          <input required type="email" className="w-full bg-transparent text-secondary text-2xl focus:outline-none placeholder:text-secondary/10 font-bold tracking-tight" placeholder="Coordinate" />
                        </div>
                        <div className="relative border-b border-secondary/10 focus-within:border-primary transition-colors py-4">
                          <select className="w-full bg-transparent text-secondary text-2xl focus:outline-none appearance-none font-bold tracking-tight">
                            <option className="text-secondary/20">Objective</option>
                            <option>Portfolio Design</option>
                            <option>Packaging & Branding</option>
                            <option>Photography</option>
                            <option>Web Development</option>
                          </select>
                        </div>
                      </div>
                      <div className="pt-20">
                        <Magnetic>
                          <button 
                            disabled={formStatus === "submitting"}
                            data-cursor="hover"
                            type="submit" 
                            className="group relative h-48 w-48 flex items-center justify-center bg-secondary rounded-full text-white font-display font-bold text-xl overflow-hidden shadow-2xl transition-transform duration-500 active:scale-95 disabled:opacity-50"
                          >
                            <span className="relative z-10 text-center leading-tight">
                              {formStatus === "submitting" ? "Initiating..." : <>Send<br/>Request</>}
                            </span>
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1]" />
                            <span className="absolute z-20 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1] font-display font-bold text-xl text-center leading-tight">Send<br/>Request</span>
                          </button>
                        </Magnetic>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-32 px-8 overflow-hidden">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
            <div className="font-display font-bold text-[10vw] text-white leading-none tracking-tighter">
              P<span className="text-primary italic">&</span>P
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20 md:gap-32">
              <div className="flex flex-col gap-6">
                <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">Navigation</span>
                <div className="flex flex-col gap-4">
                  <Magnetic><a href="#" className="text-white hover:text-primary transition-colors font-medium">Home</a></Magnetic>
                  <Magnetic><a href="#services" className="text-white hover:text-primary transition-colors font-medium">Arsenal</a></Magnetic>
                  <Magnetic><a href="#portfolio" className="text-white hover:text-primary transition-colors font-medium">Works</a></Magnetic>
                  <Magnetic><a href="#contact" className="text-white hover:text-primary transition-colors font-medium">Initiate</a></Magnetic>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">Connect</span>
                <div className="flex flex-col gap-4">
                  <Magnetic><a href="#" className="text-white hover:text-primary transition-colors font-medium">Instagram</a></Magnetic>
                  <Magnetic><a href="#" className="text-white hover:text-primary transition-colors font-medium">LinkedIn</a></Magnetic>
                  <Magnetic><a href="#" className="text-white hover:text-primary transition-colors font-medium">Twitter</a></Magnetic>
                  <Magnetic><a href="#" className="text-white hover:text-primary transition-colors font-medium">Vimeo</a></Magnetic>
                </div>
              </div>
              <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">Legal</span>
                <div className="flex flex-col gap-4">
                  <Magnetic><a href="#" className="text-white hover:text-primary transition-colors font-medium text-xs">Privacy Protocol</a></Magnetic>
                  <Magnetic><a href="#" className="text-white hover:text-primary transition-colors font-medium text-xs">Terms of Engagement</a></Magnetic>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 gap-10">
            <div className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-bold">
              © {new Date().getFullYear()} Pixel & Purpose. Engineered for Prestige.
            </div>
            <div className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-bold">
              Designed by Excellence.
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </main>
  );
}
