"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C5A059] rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0A0A0A] rounded-full blur-[150px] animate-pulse-slow delay-1000" />
      </motion.div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
