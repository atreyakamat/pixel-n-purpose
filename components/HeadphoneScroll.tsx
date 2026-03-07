'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'motion/react';

const FRAME_COUNT = 192; // Assuming 0 to 191 frames
const BASE_URL = '/animations/zenith-x'; // Folder where frames are stored

export default function HeadphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth the scroll progress for cinematic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll (0-1) to frame index (0-191)
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages: HTMLImageElement[] = [];

    const loadImages = async () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        // Based on prompt naming convention: frame_[i]_delay-0.04s.webp
        img.src = `${BASE_URL}/frame_${frameNumber}_delay-0.04s.webp`;
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
          if (loadedCount === FRAME_COUNT) {
            setIsLoading(false);
          }
        };
        preloadedImages.push(img);
      }
      setImages(preloadedImages);
    };

    loadImages();
  }, []);

  // Draw to Canvas
  useEffect(() => {
    const render = () => {
      if (!canvasRef.current || images.length < FRAME_COUNT) return;
      
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      const currentFrame = Math.round(frameIndex.get());
      const image = images[currentFrame];

      if (image) {
        // Clear canvas
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        // Handle responsive scaling
        const canvas = canvasRef.current;
        const hRatio = canvas.width / image.width;
        const vRatio = canvas.height / image.height;
        const ratio = Math.min(hRatio, vRatio);
        const centerShiftX = (canvas.width - image.width * ratio) / 2;
        const centerShiftY = (canvas.height - image.height * ratio) / 2;
        
        ctx.drawImage(
          image,
          0, 0, image.width, image.height,
          centerShiftX, centerShiftY, image.width * ratio, image.height * ratio
        );
      }
      
      requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [images, frameIndex]);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-[#050505]">
      {/* Sticky Canvas Layer */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-contain pointer-events-none"
        />
        
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505] z-50">
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-white origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: loadingProgress / 100 }}
              />
            </div>
            <p className="mt-4 text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono">
              Synchronizing Zenith X — {loadingProgress}%
            </p>
          </div>
        )}

        {/* Text Sections (Storytelling) */}
        <TextOverlay scrollProgress={scrollYProgress} />
      </div>
      
      {/* Scroll Spacers to trigger the progress */}
      <div className="h-screen" /> {/* 0% */}
      <div className="h-screen" /> {/* 12.5% */}
      <div className="h-screen" /> {/* 25% */}
      <div className="h-screen" /> {/* 37.5% */}
      <div className="h-screen" /> {/* 50% */}
      <div className="h-screen" /> {/* 62.5% */}
      <div className="h-screen" /> {/* 75% */}
      <div className="h-screen" /> {/* 87.5% */}
    </div>
  );
}

function TextOverlay({ scrollProgress }: { scrollProgress: any }) {
  // 0% Scroll: "Zenith X. Pure Sound." (Centered Title)
  const opacity1 = useTransform(scrollProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  
  // 30% Scroll: "Precision Engineering." (Left aligned)
  const opacity2 = useTransform(scrollProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const x2 = useTransform(scrollProgress, [0.25, 0.3], [-20, 0]);

  // 60% Scroll: "Titanium Drivers." (Right aligned)
  const opacity3 = useTransform(scrollProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const x3 = useTransform(scrollProgress, [0.55, 0.6], [20, 0]);

  // 90% Scroll: "Hear Everything." (Centered CTA)
  const opacity4 = useTransform(scrollProgress, [0.85, 0.9, 0.98, 1], [0, 1, 1, 1]);
  const scale4 = useTransform(scrollProgress, [0.85, 0.9], [0.95, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Section 1: Intro */}
      <motion.div 
        style={{ opacity: opacity1 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight text-center">
          Zenith X
        </h1>
        <p className="mt-4 text-xs tracking-[0.4em] uppercase text-white/60">
          Pure Sound. Zero Distraction.
        </p>
      </motion.div>

      {/* Section 2: Engineering */}
      <motion.div 
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-y-0 left-0 flex flex-col justify-center px-12 md:px-24 max-w-2xl"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 block font-mono">01 — Construction</span>
        <h2 className="text-4xl md:text-6xl font-serif leading-tight">
          Precision<br />Engineering.
        </h2>
        <p className="mt-6 text-sm text-white/60 leading-relaxed font-sans max-w-sm">
          Every component is machined to sub-micron tolerances. A symbiotic relationship between hardware and acoustics.
        </p>
      </motion.div>

      {/* Section 3: Internals */}
      <motion.div 
        style={{ opacity: opacity3, x: x3 }}
        className="absolute inset-y-0 right-0 flex flex-col justify-center items-end text-right px-12 md:px-24 max-w-2xl"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 block font-mono">02 — The Core</span>
        <h2 className="text-4xl md:text-6xl font-serif leading-tight">
          Titanium<br />Drivers.
        </h2>
        <p className="mt-6 text-sm text-white/60 leading-relaxed font-sans max-w-sm ml-auto">
          Ultra-lightweight diaphragms capable of producing frequencies beyond human hearing, delivered with absolute clarity.
        </p>
      </motion.div>

      {/* Section 4: CTA */}
      <motion.div 
        style={{ opacity: opacity4, scale: scale4 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-center">
          Hear Everything.
        </h2>
        <motion.button 
          className="mt-12 px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-bold hover:bg-white/90 transition-colors pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience Zenith X
        </motion.button>
      </motion.div>
    </div>
  );
}
