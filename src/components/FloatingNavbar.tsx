"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
];

export default function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
    
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-[100] flex justify-center pt-6 px-4 transition-all duration-500",
        hasScrolled ? "pt-4" : "pt-8"
      )}
    >
      <div className="glass-panel w-full max-w-4xl rounded-full px-4 py-2 flex items-center justify-between border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Logo */}
        <Magnetic>
          <Link href="/" className="font-display font-bold text-2xl text-secondary tracking-tighter ml-4 p-2">
            P<span className="text-primary">&</span>P
          </Link>
        </Magnetic>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <Link
                href={link.href}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary/60 hover:text-primary transition-colors duration-300 px-4 py-2"
              >
                {link.name}
              </Link>
            </Magnetic>
          ))}
        </nav>

        {/* CTA */}
        <Magnetic>
          <Link
            href="#contact"
            className="bg-secondary text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-primary transition-colors duration-300 shadow-lg mr-2"
          >
            Inquire
          </Link>
        </Magnetic>
      </div>
    </motion.header>
  );
}
