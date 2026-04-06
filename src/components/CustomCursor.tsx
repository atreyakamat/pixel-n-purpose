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
      width: 16,
      height: 16,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(26, 26, 26, 0.4)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    hover: {
      width: 64,
      height: 64,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
    },
    text: {
      width: 100,
      height: 100,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
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
        className="text-text-primary text-[10px] font-bold tracking-[0.2em] uppercase"
        animate={{ opacity: cursorState === "text" ? 1 : 0, scale: cursorState === "text" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
}
