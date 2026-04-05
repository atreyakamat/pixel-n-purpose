"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const FILTERS = ["All", "Event", "Branding", "Web", "Photo"];

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

export default function Exhibitions({ filter, setFilter }: { filter: string; setFilter: (f: string) => void }) {
  const filteredPortfolio = filter === "All" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 md:py-64 px-8 bg-secondary relative z-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-20 mb-32">
          <div>
            <div className="w-16 h-[3px] bg-primary mb-12" />
            <h2 className="font-display text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase leading-[0.8] mb-4">
              Selected <br/><span className="italic font-normal text-primary">Exhibitions.</span>
            </h2>
          </div>
          
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-1000" />
                  
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
  );
}
