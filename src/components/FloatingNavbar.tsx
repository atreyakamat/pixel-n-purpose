"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About", href: "/#about" },
];

export default function FloatingNavbar({ inquireHref = "/#contact" }: { inquireHref?: string }) {
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
      <div className="glass-panel w-full max-w-5xl rounded-full pl-6 pr-4 py-2 flex items-center justify-between border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Logo */}
        <Magnetic>
          <Link href="/" className="flex items-center">
            <Image src="/PNP-black.png" alt="Pixel & Purpose" width={160} height={64} className="object-contain h-12 md:h-14 w-auto" priority />
          </Link>
        </Magnetic>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <Link
                href={link.href}
                className="text-[12px] font-bold tracking-[0.3em] uppercase text-secondary/60 hover:text-primary transition-colors duration-300 px-4 py-2"
              >
                {link.name}
              </Link>
            </Magnetic>
          ))}
        </nav>

        {/* CTA */}
        <Magnetic>
          <Link
            href={inquireHref}
            className="bg-secondary text-white text-[12px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-primary transition-colors duration-300 shadow-lg"
          >
            Inquire
          </Link>
        </Magnetic>
      </div>
    </motion.header>
  );
}
