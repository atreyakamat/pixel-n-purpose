'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useTransform, useSpring, motion, useMotionValue, useMotionValueEvent } from 'motion/react';
import { cn } from '@/lib/utils';

interface CinematicSceneProps {
  id: string;
  frames: string[];
  title: string;
  subtitle: string;
  content: any;
  isFirst?: boolean;
}

export default function CinematicScene({ id, frames, title, subtitle, content, isFirst }: CinematicSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastRenderedFrame = useRef<number>(-1);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Tighter springs for faster response
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 80, 
    damping: 30,
    restDelta: 0.001
  });

  // Animation plays through the core scroll area (0 to 0.9)
  const frameIndex = useTransform(smoothProgress, [0, 0.9], [0, frames.length - 1]);

  // UI Reveal Mappings (Compressed for 250vh)
  // Title appears instantly, fades by 30%
  const titleOpacity = useTransform(smoothProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.3], [0, -20]);
  
  // Content reveals faster (starts at 20%, fully in by 40%)
  const contentOpacity = useTransform(smoothProgress, [0.2, 0.35, 0.9, 1], [0, 1, 1, 0]);
  const contentY = useTransform(smoothProgress, [0.2, 0.4], [30, 0]);
  const contentParallax = useTransform(smoothProgress, [0.4, 1], [0, -40]);

  const canvasX = useTransform(smoothMouseX, [-0.5, 0.5], ["-1%", "1%"]);
  const canvasY = useTransform(smoothMouseY, [-0.5, 0.5], ["-1%", "1%"]);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length < frames.length) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    const img = images[index];
    if (!img || index === lastRenderedFrame.current && !mouseX.isAnimating()) return; 
    lastRenderedFrame.current = index;
    
    ctx.filter = 'contrast(1.02) brightness(0.98)';
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const w = img.width * ratio * 1.05;
    const h = img.height * ratio * 1.05;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, 0, 0, img.width, img.height, x, y, w, h);
  }, [images, frames.length, mouseX]);

  useMotionValueEvent(frameIndex, "change", (latest) => drawFrame(Math.round(latest)));
  useMotionValueEvent(smoothMouseX, "change", () => drawFrame(Math.round(frameIndex.get())));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];
    frames.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / frames.length) * 100));
        if (loadedCount === frames.length) {
          setIsLoaded(true);
          setTimeout(() => drawFrame(0), 100);
        }
      };
      loadedImages[i] = img;
    });
    setImages(loadedImages);
  }, [frames, drawFrame]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        drawFrame(Math.round(frameIndex.get()));
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ANIMATION BACKGROUND */}
        <motion.div style={{ x: canvasX, y: canvasY, scale: 1.05 }} className="w-full h-full">
          <canvas ref={canvasRef} className={cn("w-full h-full object-cover transition-opacity duration-1000", isLoaded ? "opacity-100" : "opacity-0")} />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* HUD OVERLAY */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          
          {/* PHASE 1: TITLE */}
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          >
            <h2 className="text-6xl md:text-[8vw] font-serif font-medium tracking-tighter text-white uppercase leading-none">
              {title}
            </h2>
            <p className="text-[10px] tracking-[0.8em] uppercase text-white/40 font-mono mt-6">{subtitle}</p>
          </motion.div>

          {/* PHASE 2: CONTENT */}
          {content && (
            <motion.div 
              style={{ opacity: contentOpacity, y: contentY, translateY: contentParallax }}
              className="w-full max-w-7xl px-8 md:px-24 pointer-events-none"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-5 text-left border-l border-white/10 pl-10 py-2">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-mono block mb-6">Service_Matrix</span>
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight tracking-tight">
                    {content.description.split('.')[0]}.
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                    {content.description.split('.').slice(1).join('.')}
                  </p>
                </div>

                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 pointer-events-auto">
                  {content.cards?.map((card: any, idx: number) => (
                    <motion.div 
                      key={idx} 
                      className="glass-panel p-8 border-white/5 hover:border-white/20 transition-all duration-500 group"
                    >
                      <div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white transition-all" />
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3 group-hover:text-white">
                        {card.title}
                      </h4>
                      <p className="text-xs text-white/20 group-hover:text-white/60 leading-relaxed">
                        {card.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* SCENE TRANSITION LOADING */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-[60]">
            <div className="text-[10px] tracking-[1em] uppercase text-white/20 animate-pulse font-mono">Loading_Sequence_{id}</div>
          </div>
        )}
      </div>
    </div>
  );
}
