"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      springX.set(e.clientX);
      springY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
      
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

  if (typeof window === "undefined" || window.matchMedia("(max-width: 768px)").matches) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      x: "-50%",
      y: "-50%",
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "difference" as any,
    },
    hover: {
      width: 48,
      height: 48,
      x: "-50%",
      y: "-50%",
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "difference" as any,
    },
    text: {
      width: 80,
      height: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "normal" as any,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden hidden md:flex"
      style={{ x: springX, y: springY }}
      variants={variants}
      animate={isVisible ? cursorState : "default"}
      initial="default"
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <motion.span 
        className="text-white text-[10px] font-bold tracking-widest uppercase"
        animate={{ opacity: cursorState === "text" ? 1 : 0, scale: cursorState === "text" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
}
