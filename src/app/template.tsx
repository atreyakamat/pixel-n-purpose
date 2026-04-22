"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="fixed inset-0 pointer-events-none z-[10000] flex flex-col">
        <motion.div 
          className="w-full h-1/2 bg-secondary origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div 
          className="w-full h-1/2 bg-secondary origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
      
      {/* Slide-in Overlay for entering */}
      <motion.div
        className="fixed inset-0 bg-secondary z-[10000] origin-bottom pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      />
      
      {children}
    </motion.div>
  );
}
