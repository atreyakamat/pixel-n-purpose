"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Premium", "Bespoke", "Artisan", "Elite", "Prestige"];

export default function Preloader({ progress, isComplete }: { progress: number; isComplete: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div 
          initial={{ y: 0 }}
          exit={{ 
            y: "-100vh",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[10000] bg-secondary flex flex-col items-center justify-center"
        >
          <div className="relative h-[120px] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={words[index]}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="text-white text-[10vw] md:text-[6vw] font-display font-bold tracking-tighter leading-none"
              >
                {words[index]}
              </motion.p>
            </AnimatePresence>
          </div>
          
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-[200px] h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                className="absolute inset-0 bg-primary origin-left"
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="text-white/30 text-[9px] uppercase tracking-[0.6em] font-sans font-bold">
              Initiating Protocol {Math.min(progress, 100)}%
            </div>
          </div>

          {/* SVG Curve for curtain effect exit */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-secondary pointer-events-none">
            <motion.path 
              initial={{ d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z" }}
              exit={{ 
                d: "M0 0 L100 0 L100 100 Q50 110 0 100 Z",
                transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
              }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
