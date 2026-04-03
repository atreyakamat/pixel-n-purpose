"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4 transition-all duration-500",
        hasScrolled ? "pt-4" : "pt-8"
      )}
    >
      <div className="glass-panel w-full max-w-4xl rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display font-bold text-xl text-secondary tracking-tighter">
          P<span className="text-primary">&</span>P
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-primary/70 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="bg-secondary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary transition-colors duration-300 transform hover:scale-105 active:scale-95"
        >
          Get a Quote
        </Link>
      </div>
    </motion.header>
  );
}
