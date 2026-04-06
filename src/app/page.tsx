"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Package, Camera, Code2, Plus, ArrowDown } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import FloatingNavbar from "@/components/FloatingNavbar";
import Magnetic from "@/components/Magnetic";

// Dynamic Imports for non-critical components
const ParallaxText = dynamic(() => import("@/components/ParallaxText"), { ssr: false });
const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
const Exhibitions = dynamic(() => import("@/components/Exhibitions"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

// --- Data ---
const SERVICES = [
  { id: "01", title: "Portfolio Design", icon: Package, desc: "Curated narratives that speak before you do. We design portfolios that make the right people stop and look." },
  { id: "02", title: "Packaging & Branding", icon: Package, desc: "Packaging that earns attention without shouting. Structured, honest, and memorable artisan experiences." },
  { id: "03", title: "Photography", icon: Camera, desc: "Visual storytelling that translates brand values into high-impact, trust-building imagery." },
  { id: "04", title: "Web Development", icon: Code2, desc: "Websites that perform beautifully. Engineered for speed, clarity, conversion, and accessibility." },
];

const MANIFESTO = [
  { title: "Visual Authority", desc: "We architect narratives that convert attention into prestige." },
  { title: "Strategic Beauty", desc: "Our designs are as smart as they are beautiful. No fluff. Just impact." },
  { title: "Artisanal Detail", desc: "From the pixel to the print label, every detail is engineered with love." },
  { title: "Global Standard", desc: "We build for the visionaries. The leaders. The elite." }
];

// --- Animation Variants ---
const staggerContainer: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeSlideUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 5000);
  };
  
  const heroRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(heroScroll, [0, 1], [1, 0]);

  const { scrollYProgress: horizontalScroll } = useScroll({ 
    target: horizontalRef,
    offset: ["start start", "end end"]
  });

  const scrollVelocity = useVelocity(horizontalScroll);
  const skewBase = useTransform(scrollVelocity, [-1, 1], [5, -5]);
  const skew = useSpring(skewBase, { stiffness: 100, damping: 30 });

  const [xRange, setXRange] = useState(0);
  useEffect(() => {
    const calculateRange = () => {
      if (contentRef.current) {
        setXRange(contentRef.current.scrollWidth - window.innerWidth);
      }
    };
    const timer = setTimeout(calculateRange, 100);
    window.addEventListener("resize", calculateRange);
    return () => {
      window.removeEventListener("resize", calculateRange);
      clearTimeout(timer);
    };
  }, [showContent]);

  const xTranslate = useTransform(horizontalScroll, [0, 1], [0, -xRange]);

  useEffect(() => {
    const interval = setInterval(() => {
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
      <Preloader progress={loadingProgress} isComplete={showContent} />

      <FloatingNavbar />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-white/40 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero background" 
            fill 
            sizes="100vw"
            style={{ objectFit: "cover" }} 
            className="opacity-20 grayscale"
            priority
            quality={90}
          />
        </motion.div>

        <div className="relative z-20 max-w-[1400px] mx-auto w-full flex flex-col items-center mt-20">
          <div className="overflow-hidden mb-8">
            <p className="hero-text-line text-accent font-bold tracking-[0.5em] uppercase text-[10px]">Architects of Visual Prestige</p>
          </div>
          
          <h1 className="font-display font-bold text-[13vw] md:text-[10vw] lg:text-[8vw] text-secondary leading-[0.8] tracking-tighter mb-16 uppercase">
            <div className="overflow-hidden h-[1.1em]"><span className="hero-text-line block">Premium</span></div>
            <div className="overflow-hidden h-[1.1em]"><span className="hero-text-line block text-accent italic font-normal">Design.</span></div>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-20 px-10">
            <div className="overflow-hidden text-left max-w-sm">
              <p className="hero-text-line text-[10px] md:text-xs text-secondary/40 leading-relaxed font-bold uppercase tracking-[0.2em]">
                Bespoke digital architecture for elite visionaries. Unapologetic aesthetic rigor. Engineered for prestige.
              </p>
            </div>
            
            <div className="overflow-hidden">
              <motion.div className="hero-text-line">
                <Magnetic>
                  <a 
                    href="#portfolio" 
                    data-cursor-text="EXPLORE"
                    className="group relative h-32 w-32 md:h-40 md:w-40 flex items-center justify-center bg-secondary rounded-full text-white font-display font-bold text-sm overflow-hidden shadow-sm transition-transform duration-300"
                  >
                    <span className="relative z-10 text-center leading-tight text-white group-hover:text-secondary transition-colors duration-500">Explore<br/>Work</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1]" />
                  </a>
                </Magnetic>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 text-secondary/20"
        >
          <span className="text-[9px] font-bold tracking-[0.5em] uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* --- STRATEGIC MARQUEE --- */}
      <section className="py-10 bg-white border-y border-secondary/5 relative z-10">
        <ParallaxText baseVelocity={-2}>Visual Authority · Market Dominance · Strategic Beauty · Global Standard ·</ParallaxText>
      </section>

      {/* --- STUDIO MANIFESTO (HORIZONTAL SCROLL) --- */}
      <section ref={horizontalRef} className="relative h-[400vh] bg-white border-b border-secondary/5">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div ref={contentRef} style={{ x: xTranslate, skewX: skew }} className="flex gap-40 px-[10vw]">
            <div className="flex-shrink-0 w-[85vw] md:w-[60vw] flex flex-col justify-center">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-20%" }} className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-8">Studio Thesis</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ margin: "-20%" }} className="text-secondary font-display font-bold text-[10vw] md:text-[8vw] leading-[0.8] mb-12 tracking-tighter uppercase">
                Engineering <br/> <span className="text-accent italic font-normal">Prestige.</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ margin: "-20%" }} className="text-secondary/40 font-display font-medium text-xl md:text-3xl leading-tight max-w-3xl tracking-tight">
                We believe that profound aesthetic rigor is the <span className="text-secondary italic">ultimate conversion lever.</span> No fluff. Just authority.
              </motion.p>
            </div>
            
            {MANIFESTO.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[80vw] md:w-[45vw] flex flex-col justify-center relative">
                <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: "-20%" }} className="absolute -top-10 -left-10 text-[30vw] font-display font-bold text-secondary/[0.02] pointer-events-none select-none leading-none">0{i + 1}</motion.span>
                <div className="relative z-10 border-l border-secondary/10 pl-10 md:pl-20 py-8">
                  <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-20%" }} className="text-accent font-bold tracking-[0.6em] uppercase text-[9px] mb-12 block">Protocol 0{i + 1}</motion.span>
                  <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }} viewport={{ margin: "-20%" }} className="text-secondary font-display font-bold text-5xl md:text-[6vw] mb-12 leading-[0.85] tracking-tighter uppercase">
                    {item.title}
                  </motion.h3>
                  <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ margin: "-20%" }} className="text-secondary/30 text-lg md:text-2xl leading-relaxed max-w-md font-light tracking-tight">{item.desc}</motion.p>
                </div>
              </div>
            ))}

            <div className="flex-shrink-0 w-[85vw] md:w-[60vw] flex flex-col justify-center items-center text-center">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "circOut" }} viewport={{ margin: "-20%" }} className="relative">
                <h2 className="text-secondary font-display font-bold text-[8vw] leading-none mb-12 tracking-tighter uppercase relative z-10">Artisan <br/><span className="text-accent italic">Standard.</span></h2>
              </motion.div>
              <Magnetic>
                <a href="#services" className="h-24 w-24 md:h-32 md:w-32 rounded-full border border-secondary/10 flex flex-col items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-700 group mt-10">
                  <ArrowRight className="w-8 h-8 group-hover:rotate-90 transition-transform duration-700" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-32 md:py-64 px-8 max-w-[1400px] mx-auto bg-background relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32">
          <div className="lg:col-span-5">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col sticky top-40">
              <motion.div variants={fadeSlideUp} className="w-12 h-[2px] bg-secondary mb-10" />
              <motion.h2 variants={fadeSlideUp} className="font-display text-5xl md:text-7xl font-bold text-secondary mb-10 leading-[0.85] tracking-tighter uppercase">Disciplines <br/><span className="italic font-normal text-accent">Arsenal.</span></motion.h2>
              <motion.p variants={fadeSlideUp} className="text-secondary/40 max-w-xs text-[10px] leading-relaxed uppercase font-bold tracking-widest">Bridging the gap between artisan craft and elite digital execution.</motion.p>
              <motion.div variants={fadeSlideUp} className="mt-16">
                <Magnetic><button className="flex items-center gap-6 text-secondary font-bold group">
                  <span className="h-12 w-12 rounded-full border border-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-out"><Plus className="w-4 h-4" /></span>
                  <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Inquire</span>
                </button></Magnetic>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {SERVICES.map((service, i) => (
                <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }} data-cursor="hover" className="group bg-white rounded-[2rem] p-8 md:p-12 border border-secondary/5 flex flex-col justify-between aspect-square hover:bg-secondary transition-all duration-700 ease-[0.85, 0, 0.15, 1] shadow-sm hover:shadow-xl">
                  <div>
                    <span className="text-accent font-display font-bold text-xl mb-8 block transition-colors">0{service.id}</span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-secondary group-hover:text-white transition-colors leading-none tracking-tighter">{service.title}</h3>
                  </div>
                  <div>
                    <p className="text-secondary/30 text-xs group-hover:text-white/30 transition-colors mb-10 leading-relaxed max-w-[200px]">{service.desc}</p>
                    <div className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center group-hover:border-white/20 text-secondary group-hover:text-white transition-all duration-500"><ArrowRight className="w-4 h-4 transform group-hover:rotate-[-45deg] transition-transform" /></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Exhibitions filter={filter} setFilter={setFilter} />
      
      <ContactSection formStatus={formStatus} handleContactSubmit={handleContactSubmit} />

      {/* Footer */}
      <footer className="bg-white py-24 px-8 border-t border-secondary/5 overflow-hidden">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-24">
            <div className="font-display font-bold text-[8vw] text-secondary leading-none tracking-tighter">P<span className="text-accent italic">&</span>P</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
              <div className="flex flex-col gap-6">
                <span className="text-secondary/20 text-[9px] font-bold tracking-[0.4em] uppercase">Navigation</span>
                <div className="flex flex-col gap-3">
                  <Magnetic><a href="#" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-xs">Home</a></Magnetic>
                  <Magnetic><a href="#services" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-xs">Arsenal</a></Magnetic>
                  <Magnetic><a href="#portfolio" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-xs">Works</a></Magnetic>
                  <Magnetic><a href="#contact" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-xs">Initiate</a></Magnetic>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-secondary/20 text-[9px] font-bold tracking-[0.4em] uppercase">Connect</span>
                <div className="flex flex-col gap-3">
                  <Magnetic><a href="#" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-xs">Instagram</a></Magnetic>
                  <Magnetic><a href="#" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-xs">LinkedIn</a></Magnetic>
                  <Magnetic><a href="#" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-xs">Twitter</a></Magnetic>
                </div>
              </div>
              <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                <span className="text-secondary/20 text-[9px] font-bold tracking-[0.4em] uppercase">Studio</span>
                <div className="text-secondary/40 text-xs leading-relaxed max-w-[150px]">
                  Bespoke digital architecture for elite visionaries.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-secondary/5 gap-8">
            <div className="text-secondary/20 text-[8px] tracking-[0.4em] uppercase font-bold">© 2026 Pixel & Purpose. Engineered for Prestige.</div>
            <div className="text-secondary/20 text-[8px] tracking-[0.4em] uppercase font-bold">Minimalism is the ultimate sophistication.</div>
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
