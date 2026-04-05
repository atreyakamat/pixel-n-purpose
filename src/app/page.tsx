"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Package, Camera, Code2, Plus } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import FloatingNavbar from "@/components/FloatingNavbar";
import Magnetic from "@/components/Magnetic";
import { cn } from "@/lib/utils";

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
  const yHero = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(heroScroll, [0, 1], [1, 0]);

  const { scrollYProgress: horizontalScroll } = useScroll({ 
    target: horizontalRef,
    offset: ["start start", "end end"]
  });

  const scrollVelocity = useVelocity(horizontalScroll);
  const skewBase = useTransform(scrollVelocity, [-1, 1], [10, -10]);
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
      <Preloader progress={loadingProgress} isComplete={showContent} />

      <FloatingNavbar />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-secondary">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 w-full h-full scale-110">
          <div className="absolute inset-0 bg-secondary/80 z-10 mix-blend-multiply" />
          <Image 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero background" 
            fill 
            sizes="100vw"
            style={{ objectFit: "cover" }} 
            className="opacity-40 grayscale"
            priority
            quality={90}
          />
        </motion.div>

        <div className="relative z-20 max-w-[1400px] mx-auto w-full flex flex-col items-center mt-20">
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
      <section ref={horizontalRef} className="relative h-[400vh] bg-secondary">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-white/10 z-20 hidden md:block">
            <motion.div style={{ scaleX: horizontalScroll }} className="absolute inset-0 bg-primary origin-left" />
          </div>

          <motion.div ref={contentRef} style={{ x: xTranslate, skewX: skew }} className="flex gap-32 px-[10vw]">
            <div className="flex-shrink-0 w-[85vw] md:w-[70vw] flex flex-col justify-center">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-20%" }} className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-8">Studio Thesis</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ margin: "-20%" }} className="text-white font-display font-bold text-[12vw] md:text-[10vw] leading-[0.8] mb-12 tracking-tighter uppercase">
                Engineering <br/> <span className="text-primary italic font-normal">Prestige.</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ margin: "-20%" }} className="text-white/60 font-display font-medium text-2xl md:text-4xl leading-tight max-w-4xl tracking-tight">
                We believe that profound aesthetic rigor is the <span className="text-white italic">ultimate conversion lever.</span> No fluff. Just authority.
              </motion.p>
            </div>
            
            {MANIFESTO.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[85vw] md:w-[55vw] flex flex-col justify-center relative">
                <motion.span initial={{ opacity: 0, scale: 0.8, rotate: -10 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ margin: "-20%" }} className="absolute -top-20 -left-20 text-[40vw] font-display font-bold text-white/[0.02] pointer-events-none select-none leading-none">0{i + 1}</motion.span>
                <div className="relative z-10 border-l-2 border-primary/20 pl-12 md:pl-24 py-10">
                  <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-20%" }} className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] mb-14 block">Protocol 0{i + 1}</motion.span>
                  <motion.h3 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }} viewport={{ margin: "-20%" }} className="text-white font-display font-bold text-6xl md:text-[7vw] mb-14 leading-[0.85] tracking-tighter uppercase">
                    {item.title.split(' ').map((word, index) => (<span key={index} className={index === 1 ? 'text-primary italic font-normal block' : 'block'}>{word}</span>))}
                  </motion.h3>
                  <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ margin: "-20%" }} className="text-white/30 text-xl md:text-3xl leading-relaxed max-w-lg font-light tracking-tight">{item.desc}</motion.p>
                </div>
              </div>
            ))}

            <div className="flex-shrink-0 w-[85vw] md:w-[70vw] flex flex-col justify-center items-center text-center">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "circOut" }} viewport={{ margin: "-20%" }} className="relative">
                <h2 className="text-white font-display font-bold text-[10vw] leading-none mb-12 tracking-tighter uppercase relative z-10">End of <br/><span className="text-primary italic">Mediocrity.</span></h2>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-primary/10 blur-[120px] rounded-full -z-10" />
              </motion.div>
              <Magnetic>
                <a href="#services" className="h-32 w-32 md:h-48 md:w-48 rounded-full border border-white/10 flex flex-col items-center justify-center text-white hover:bg-white hover:text-secondary transition-all duration-700 group mt-10">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 opacity-40 group-hover:opacity-100 transition-opacity">Deploy</span>
                  <ArrowRight className="w-10 h-10 group-hover:rotate-90 transition-transform duration-700" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-32 md:py-64 px-8 max-w-[1400px] mx-auto bg-background relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          <div className="lg:col-span-5">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col sticky top-40">
              <motion.div variants={fadeSlideUp} className="w-16 h-[3px] bg-primary mb-12" />
              <motion.h2 variants={fadeSlideUp} className="font-display text-6xl md:text-8xl font-bold text-secondary mb-12 leading-[0.85] tracking-tighter uppercase">Disciplines <br/><span className="italic font-normal text-primary">Arsenal.</span></motion.h2>
              <motion.p variants={fadeSlideUp} className="text-text-primary/50 max-w-sm text-lg leading-relaxed uppercase font-bold tracking-widest text-xs">We bridge the gap between artisan craft and elite digital execution.</motion.p>
              <motion.div variants={fadeSlideUp} className="mt-20">
                <Magnetic><button className="flex items-center gap-6 text-secondary font-bold group">
                  <span className="h-16 w-16 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-out"><Plus className="w-6 h-6" /></span>
                  <span className="text-xs tracking-[0.4em] uppercase font-bold">Inquire Capabilities</span>
                </button></Magnetic>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((service, i) => (
                <motion.div key={service.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }} data-cursor="hover" className="group bg-white rounded-[3rem] p-10 md:p-14 border border-secondary/5 flex flex-col justify-between aspect-square hover:bg-secondary transition-all duration-700 ease-[0.85, 0, 0.15, 1] shadow-sm hover:shadow-2xl">
                  <div>
                    <span className="text-primary font-display font-bold text-2xl mb-10 block group-hover:text-accent transition-colors">0{service.id}</span>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-secondary group-hover:text-white transition-colors leading-none tracking-tighter">{service.title}</h3>
                  </div>
                  <div>
                    <p className="text-text-primary/40 text-sm group-hover:text-white/40 transition-colors mb-12 leading-relaxed">{service.desc}</p>
                    <div className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center group-hover:border-white/20 text-secondary group-hover:text-white transition-all duration-500"><ArrowRight className="w-5 h-5 transform group-hover:rotate-[-45deg] transition-transform" /></div>
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
      <footer className="bg-secondary py-32 px-8 overflow-hidden">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
            <div className="font-display font-bold text-[10vw] text-white leading-none tracking-tighter">P<span className="text-primary italic">&</span>P</div>
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
            <div className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-bold">© 2026 Pixel & Purpose. Engineered for Prestige.</div>
            <div className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-bold">Designed by Excellence.</div>
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
