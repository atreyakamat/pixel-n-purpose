"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [data-cursor='hover']");
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isVisible]);

  if (typeof window === "undefined" || window.matchMedia("(max-width: 768px)").matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isHovering ? 3 : isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}
