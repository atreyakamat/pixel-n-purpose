"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const springX = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      springX.set(e.clientX);
      springY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      
      const textElement = target.closest("[data-cursor-text]");
      if (textElement) {
        setCursorState("text");
        setCursorText(textElement.getAttribute("data-cursor-text") || "");
        return;
      }

      const isClickable = target.closest("a, button, [data-cursor='hover']");
      if (isClickable) {
        setCursorState("hover");
        return;
      }

      setCursorState("default");
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isVisible, springX, springY]);

  if (!mounted || typeof window === "undefined" || window.matchMedia("(max-width: 768px)").matches) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(10, 10, 10, 1)",
      backdropFilter: "blur(0px)",
      border: "0px solid transparent",
    },
    hover: {
      width: 80,
      height: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(20px) saturate(180%)",
      border: "1px solid rgba(10, 10, 10, 0.05)",
      boxShadow: "0 4px 24px -1px rgba(0, 0, 0, 0.05)",
    },
    text: {
      width: 120,
      height: 120,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(25px) saturate(200%)",
      border: "1px solid rgba(10, 10, 10, 0.08)",
      boxShadow: "0 8px 32px -1px rgba(0, 0, 0, 0.08)",
    }
  };

  return (
    <>
      <svg className="hidden">
        <filter id="foggy-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15" />
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>
      
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden hidden md:flex"
        style={{ x: springX, y: springY }}
        variants={variants}
        animate={isVisible ? cursorState : "default"}
        initial="default"
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" style={{ filter: 'url(#foggy-texture)' }} />
        
        <motion.span 
          className="text-secondary text-[9px] font-bold tracking-[0.3em] uppercase relative z-10"
          animate={{ opacity: cursorState === "text" ? 1 : 0, scale: cursorState === "text" ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {cursorText}
        </motion.span>
      </motion.div>
    </>
  );
}
