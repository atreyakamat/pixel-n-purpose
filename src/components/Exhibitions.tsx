"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const FILTERS = ["All", "Website", "Portfolio", "Packaging", "Photography"];

const PORTFOLIO = [
  { id: 1, category: "Website", title: "Website Projects", img: "/images/website-design.png" },
  { id: 2, category: "Portfolio", title: "Portfolio Projects", img: "/images/portfolio-design.jpg" },
  { id: 3, category: "Packaging", title: "Packaging Projects", img: "/images/package-design.png" },
  { id: 4, category: "Photography", title: "Visual Identity", img: "/images/photography-image.png" },
];

export default function Exhibitions({ filter, setFilter }: { filter: string; setFilter: (f: string) => void }) {
  const filteredPortfolio = filter === "All" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 md:py-64 px-8 bg-white relative z-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-20 mb-32">
          <div>
            <div className="w-12 h-[2px] bg-secondary mb-10" />
            <h2 className="font-display text-5xl md:text-8xl font-bold text-secondary tracking-tighter uppercase leading-[0.8] mb-4">
              Selected <br/><span className="italic font-normal text-accent">Exhibitions.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {FILTERS.map((f) => (
              <Magnetic key={f}>
                <button
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-6 py-2 rounded-full text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-700",
                    filter === f 
                      ? "bg-secondary text-white shadow-sm" 
                      : "bg-secondary/5 text-secondary/30 hover:bg-secondary/10 hover:text-secondary"
                  )}
                >
                  {f}
                </button>
              </Magnetic>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              >
                <Link 
                  href={`/work/${item.title.toLowerCase().replace(/ /g, "-")}`}
                  className="group relative aspect-[4/5.5] overflow-hidden rounded-[2.5rem] bg-secondary/5 cursor-pointer shadow-sm block"
                  data-cursor-text="VIEW"
                >
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <span className="h-10 w-10 rounded-full border border-secondary/10 flex items-center justify-center text-secondary backdrop-blur-md">
                        <Plus className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-700" />
                      </span>
                      <span className="text-accent text-[9px] font-bold tracking-[0.4em] uppercase">{item.category}</span>
                    </div>
                    <div>
                      <h3 className="text-secondary font-display font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 leading-none tracking-tighter mb-4">{item.title}</h3>
                      <div className="w-0 h-[1.5px] bg-accent transition-all duration-[1.5s] ease-[0.33, 1, 0.68, 1] group-hover:w-full" />
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
