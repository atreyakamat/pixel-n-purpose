"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Package, Camera, Code2, Plus, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  { id: "01", title: "Website Design", icon: Package, desc: "Websites that perform as beautifully as they look — built for speed, clarity, and conversion.", slug: "website-projects", category: "Website" },
  { id: "02", title: "Portfolio Design", icon: Package, desc: "Portfolios that make the right people stop scrolling and start conversations.", slug: "portfolio-projects", category: "Portfolio" },
  { id: "03", title: "Packaging Design", icon: Package, desc: "Packaging that earns shelf space and builds brand trust at first sight.", slug: "packaging-projects", category: "Packaging" },
  { id: "04", title: "Photography", icon: Camera, desc: "High-impact imagery that captures the soul of your brand and builds aesthetic trust.", slug: "visual-identity", category: "Photography" },
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(heroScroll, [0, 1], [1, 0]);

  const { scrollYProgress: horizontalScroll } = useScroll({ 
    target: horizontalRef,
    offset: ["start start", "end end"]
  });

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
        { y: "100%", opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "expo.out" }
      );
    }
  }, [showContent]);

  return (
    <main className="bg-background min-h-screen text-text-primary overflow-x-clip selection:bg-primary selection:text-white">
      <Preloader progress={loadingProgress} isComplete={showContent} />

      <FloatingNavbar />

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero background" 
            fill 
            sizes="100vw"
            style={{ objectFit: "cover" }} 
            className="opacity-[0.08] grayscale"
            priority
            quality={90}
          />
        </motion.div>

        <div className="relative z-20 max-w-[1400px] mx-auto w-full flex flex-col items-center mt-20">
          <div className="overflow-hidden mb-6">
            <p className="hero-text-line text-accent font-bold tracking-[0.6em] uppercase text-[9px]">Design That Means Something</p>
          </div>
          
          <h1 className="font-display font-bold text-[13vw] md:text-[10vw] lg:text-[8vw] text-secondary leading-[0.8] tracking-tighter mb-16 uppercase">
            <div className="overflow-hidden h-[1.1em]"><span className="hero-text-line block">Design</span></div>
            <div className="overflow-hidden h-[1.1em]"><span className="hero-text-line block text-accent italic font-normal text-[10vw]">That Means</span></div>
            <div className="overflow-hidden h-[1.1em]"><span className="hero-text-line block">Something.</span></div>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-20 px-10">
            <div className="overflow-hidden text-left max-w-xs">
              <p className="hero-text-line text-[9px] md:text-[10px] text-secondary/30 leading-relaxed font-bold uppercase tracking-[0.2em]">
                Websites, Portfolios & Packaging — built with clarity, structure, and intent.
              </p>
            </div>
            
            <div className="overflow-hidden">
              <motion.div className="hero-text-line">
                <Magnetic>
                  <a 
                    href="#portfolio" 
                    data-cursor-text="EXPLORE"
                    className="group relative h-28 w-28 md:h-36 md:w-36 flex items-center justify-center bg-secondary rounded-full text-white font-display font-bold text-[10px] overflow-hidden shadow-sm transition-transform duration-300"
                  >
                    <span className="relative z-10 text-center leading-tight text-white group-hover:text-secondary transition-colors duration-500 tracking-[0.1em] uppercase">Explore<br/>Work</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1]" />
                  </a>
                </Magnetic>
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 text-secondary/10"
        >
          <span className="text-[8px] font-bold tracking-[0.5em] uppercase">Scroll</span>
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </section>

      {/* --- STRATEGIC MARQUEE --- */}
      <section className="py-8 bg-white border-y border-secondary/5 relative z-10">
        <ParallaxText baseVelocity={-1.5}>Visual Authority · Market Dominance · Strategic Beauty · Global Standard ·</ParallaxText>
      </section>

      {/* --- STUDIO MANIFESTO (STRICT HORIZONTAL SCROLL) --- */}
      <section ref={horizontalRef} className="relative h-[400vh] bg-white border-b border-secondary/5">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div ref={contentRef} style={{ x: xTranslate }} className="flex gap-40 px-[10vw]">
            <div className="flex-shrink-0 w-[85vw] md:w-[60vw] flex flex-col justify-center">
              <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-20%" }} className="text-accent font-bold tracking-[0.6em] uppercase text-[9px] mb-6">Studio Philosophy</motion.span>
              <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ margin: "-20%" }} className="text-secondary font-display font-bold text-[10vw] md:text-[8vw] leading-[0.8] mb-10 tracking-tighter uppercase">
                We build what <br/> <span className="text-accent italic font-normal">lasts.</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ margin: "-20%" }} className="text-secondary/40 font-display font-medium text-lg md:text-2xl leading-tight max-w-2xl tracking-tight">
                Not what <span className="text-secondary italic">trends.</span> Every project we touch is designed to endure — in memory, in market, and in meaning.
              </motion.p>
            </div>
            
            {MANIFESTO.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[80vw] md:w-[45vw] flex flex-col justify-center relative">
                <div className="relative z-10 border-l border-secondary/10 pl-10 md:pl-20 py-8 bg-secondary/[0.01] rounded-[2rem] border border-secondary/5 backdrop-blur-[2px]">
                  <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-20%" }} className="text-accent font-bold tracking-[0.6em] uppercase text-[8px] mb-10 block">Protocol 0{i + 1}</motion.span>
                  <motion.h3 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }} viewport={{ margin: "-20%" }} className="text-secondary font-display font-bold text-4xl md:text-[5vw] mb-10 leading-[0.85] tracking-tighter uppercase">
                    {item.title}
                  </motion.h3>
                  <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} viewport={{ margin: "-20%" }} className="text-secondary/30 text-base md:text-xl leading-relaxed max-w-xs font-light tracking-tight">{item.desc}</motion.p>
                </div>
              </div>
            ))}

            <div className="flex-shrink-0 w-[85vw] md:w-[60vw] flex flex-col justify-center items-center text-center">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "circOut" }} viewport={{ margin: "-20%" }} className="relative">
                <h2 className="text-secondary font-display font-bold text-[8vw] leading-none mb-10 tracking-tighter uppercase relative z-10">Artisan <br/><span className="text-accent italic">Standard.</span></h2>
              </motion.div>
              <Magnetic>
                <a href="#services" className="h-20 w-20 md:h-28 md:w-28 rounded-full border border-secondary/10 flex flex-col items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-700 group mt-8">
                  <ArrowRight className="w-6 h-6 group-hover:rotate-90 transition-transform duration-700" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 md:py-48 px-8 max-w-[1400px] mx-auto bg-background relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32">
          <div className="lg:col-span-5">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col sticky top-40">
              <motion.div variants={fadeSlideUp} className="w-10 h-[1.5px] bg-secondary mb-8" />
              <motion.h2 variants={fadeSlideUp} className="font-display text-5xl md:text-7xl font-bold text-secondary mb-8 leading-[0.85] tracking-tighter uppercase">Disciplines <br/><span className="italic font-normal text-accent">Arsenal.</span></motion.h2>
              <motion.p variants={fadeSlideUp} className="text-secondary/30 max-w-xs text-[9px] leading-relaxed uppercase font-bold tracking-widest">Bridging the gap between artisan craft and elite digital execution.</motion.p>
              <motion.div variants={fadeSlideUp} className="mt-14">
                <Magnetic><button className="flex items-center gap-5 text-secondary font-bold group">
                  <span className="h-10 w-10 rounded-full border border-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-out"><Plus className="w-3 h-3" /></span>
                  <span className="text-[8px] tracking-[0.4em] uppercase font-bold">Inquire</span>
                </button></Magnetic>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {SERVICES.map((service, i) => (
                <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }} data-cursor="hover" className="group">
                  <Link href={`/work/${service.slug}`} className="bg-white rounded-[2rem] p-8 md:p-10 border border-secondary/5 flex flex-col justify-between aspect-square hover:bg-secondary transition-all duration-700 shadow-sm hover:shadow-lg block">
                    <div>
                      <span className="text-accent font-display font-bold text-lg mb-6 block transition-colors tracking-widest">0{service.id}</span>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-secondary group-hover:text-white transition-colors leading-none tracking-tighter uppercase">{service.title}</h3>
                    </div>
                    <div>
                      <p className="text-secondary/30 text-[10px] group-hover:text-white/30 transition-colors mb-8 leading-relaxed max-w-[180px] font-medium">{service.desc}</p>
                      <div className="w-8 h-8 rounded-full border border-secondary/10 flex items-center justify-center group-hover:border-white/20 text-secondary group-hover:text-white transition-all duration-500"><ArrowRight className="w-4 h-4 transform group-hover:rotate-[-45deg] transition-transform" /></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Exhibitions filter={filter} setFilter={setFilter} />
      
      <ContactSection />

      {/* Footer */}
      <footer className="bg-white py-20 px-8 border-t border-secondary/5 overflow-hidden">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <Image src="/PNP-black.png" alt="Pixel & Purpose" width={160} height={64} className="object-contain w-32 md:w-48 h-auto" />
              </div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-secondary/30 font-bold ml-1">By Pixpur Design House</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20">
              <div className="flex flex-col gap-5">
                <span className="text-secondary/20 text-[8px] font-bold tracking-[0.4em] uppercase">Navigation</span>
                <div className="flex flex-col gap-2">
                  <Magnetic><a href="#" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-[10px] uppercase tracking-wider">Home</a></Magnetic>
                  <Magnetic><a href="#services" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-[10px] uppercase tracking-wider">Services</a></Magnetic>
                  <Magnetic><a href="#portfolio" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-[10px] uppercase tracking-wider">Portfolio</a></Magnetic>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-secondary/20 text-[8px] font-bold tracking-[0.4em] uppercase">Connect</span>
                <div className="flex flex-col gap-2">
                  <Magnetic><a href="https://www.instagram.com/pixelnpurpose/" target="_blank" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-[10px] uppercase tracking-wider">Instagram</a></Magnetic>
                  <Magnetic><a href="https://www.linkedin.com/in/pixel-n-purpose-pixpur-design-house-b66360370/" target="_blank" className="text-secondary/60 hover:text-secondary transition-colors font-medium text-[10px] uppercase tracking-wider">LinkedIn</a></Magnetic>
                </div>
              </div>
              <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
                <span className="text-secondary/20 text-[8px] font-bold tracking-[0.4em] uppercase">Studio</span>
                <div className="text-secondary/40 text-[10px] leading-relaxed max-w-[140px] font-medium uppercase tracking-tight">
                  A global creative studio. Websites. Portfolios. Packaging.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-secondary/5 gap-6">
            <div className="text-secondary/20 text-[7px] tracking-[0.5em] uppercase font-bold">© 2026 Pixel & Purpose by Pixpur Design House. All rights reserved.</div>
            <div className="text-secondary/20 text-[7px] tracking-[0.5em] uppercase font-bold">PIXELNPURPOSE.COM</div>
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
