"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ progress, isComplete }: { progress: number; isComplete: boolean }) {
  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[9999] bg-secondary flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-[2px] bg-primary absolute top-0 left-0"
            />
            <div className="text-white text-[15vw] font-display font-bold tracking-tighter leading-none">
              {Math.min(progress, 100)}
            </div>
            <div className="text-white/20 text-[2vw] uppercase tracking-[0.5em] mt-4 font-sans font-bold">
              Pixel & Purpose
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
