"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import FloatingNavbar from "@/components/FloatingNavbar";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;

  // This would normally come from a CMS like Sanity
  const projectTitle = slug ? slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "Case Study";
  const isPhotography = slug === "photography" || slug === "photography-image";
  const hasPdf = ["package-design", "portfolio-design", "website-design"].includes(slug);

  return (
    <main className="bg-background min-h-screen text-text-primary">
      <FloatingNavbar inquireHref="mailto:info@pixelandpurpose.com" />
      
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-secondary">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: [0.85, 0, 0.15, 1] }}
          className="absolute inset-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            alt={projectTitle} 
            fill 
            className="object-cover grayscale"
          />
        </motion.div>
        
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-10 text-xs font-bold tracking-[0.3em] uppercase">
              <ArrowLeft className="w-4 h-4" /> Back to Exhibitions
            </Link>
            <h1 className="text-white font-display font-bold text-[10vw] md:text-[8vw] leading-none tracking-tighter uppercase">
              {projectTitle}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-40 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-12">
              <div>
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Client</span>
                <p className="text-secondary font-display font-bold text-2xl uppercase">Global Visionaries</p>
              </div>
              <div>
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Services</span>
                <p className="text-secondary/60 font-medium">Digital Prestige · Artisan Branding</p>
              </div>
              <div>
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Year</span>
                <p className="text-secondary/60 font-medium">2026</p>
              </div>
              {hasPdf && (
                <div>
                  <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Project Deck</span>
                  <a href={`/pdf/${slug}.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-secondary/60 hover:text-primary transition-colors border-b border-primary pb-1">
                    Download PDF
                  </a>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-32">
              <div className="space-y-10">
                <h2 className="text-secondary font-display font-bold text-4xl md:text-6xl tracking-tighter uppercase leading-none">The Challenge</h2>
                <p className="text-secondary/60 text-lg md:text-2xl leading-relaxed font-light">
                  How do you architect digital authority for a brand that refuses to compromise? We were tasked with dismantling generic expectations and engineering a digital monopoly that commands immediate respect.
                </p>
              </div>
              
              <div className="aspect-[16/9] relative overflow-hidden rounded-[2rem] bg-secondary/5 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop" 
                  alt="Process" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>

              <div className="space-y-10">
                <h2 className="text-secondary font-display font-bold text-4xl md:text-6xl tracking-tighter uppercase leading-none">The Execution</h2>
                <p className="text-secondary/60 text-lg md:text-2xl leading-relaxed font-light">
                  Every sub-pixel was scrutinized. We deployed kinetic typography, fluid spatial logic, and zero-compromise motion design to ensure the narrative was not just read, but felt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-40 bg-secondary text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col items-center text-center">
          <span className="text-white/50 font-bold tracking-[0.5em] uppercase text-[10px] mb-12">Discover More</span>
          <Link href="/#portfolio" className="group flex flex-col items-center">
            <h2 className="font-display font-bold text-white text-[12vw] md:text-[10vw] leading-none tracking-tighter uppercase mb-12 hover:italic transition-all duration-700">
              View Portfolio
            </h2>
            <Magnetic>
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <ArrowRight className="w-10 h-10 group-hover:scale-125 transition-transform" />
              </div>
            </Magnetic>
          </Link>
        </div>
      </section>

      <footer className="bg-white py-16 px-8 border-t border-secondary/5 text-center flex flex-col items-center justify-center gap-6">
        <Image src="/PNP-black.png" alt="Pixel & Purpose" width={160} height={64} className="object-contain w-32 md:w-40 h-auto opacity-80" />
        <div className="text-secondary/40 text-[10px] font-bold tracking-[0.4em] uppercase">
          © 2026 Pixel & Purpose. Engineering Prestige.
        </div>
      </footer>
    </main>
  );
}