import CinematicScene from '@/components/CinematicScene';
import CustomCursor from '@/components/CustomCursor';
import { SCENES } from '@/lib/constants';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Custom Experience Cursor */}
      <CustomCursor />

      {/* Cinematic Noise Layer (Fixed) */}
      <div className="noise-bg fixed inset-0 z-50 pointer-events-none opacity-[0.05]" />
      
      {/* Navigation - Minimalist mix-blend-difference */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-12 py-10 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="flex flex-col gap-1 pointer-events-auto cursor-pointer group">
          <span className="text-white text-2xl font-serif font-medium tracking-tighter leading-none group-hover:tracking-widest transition-all duration-700 uppercase">
            Pixel &apos;N&apos; Purpose
          </span>
          <span className="text-[7px] tracking-[0.8em] uppercase text-white/40">Creative Studio</span>
        </div>

        <div className="hidden md:flex items-center space-x-16">
          {['Websites', 'Portfolio', 'Packaging', 'Photography'].map((item) => (
            <span key={item} className="text-[10px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-all cursor-pointer pointer-events-auto relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
            </span>
          ))}
        </div>

        <button className="text-white text-[9px] tracking-[0.4em] uppercase border border-white/10 px-8 py-3 rounded-sm pointer-events-auto hover:bg-white hover:text-black hover:border-white transition-all duration-500 font-bold">
          Initiate
        </button>
      </nav>

      {/* Cinematic Scene Sections */}
      <div className="relative">
        {SCENES.map((scene, index) => (
          <CinematicScene
            key={scene.id}
            id={scene.id}
            frames={scene.frames}
            title={scene.title}
            subtitle={scene.subtitle}
            content={scene.content}
            isFirst={index === 0}
          />
        ))}
      </div>

      {/* Luxury Footer */}
      <footer className="relative bg-black py-40 px-12 border-t border-white/5 overflow-hidden">
        {/* Large Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-medium text-white/[0.02] select-none whitespace-nowrap pointer-events-none">
          PIXEL PURPOSE
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-5xl font-serif font-medium mb-12 tracking-tight max-w-md leading-tight">
                Ready to transform your brand into a cinematic experience?
              </h3>
              <div className="flex gap-4">
                <button className="px-10 py-4 bg-white text-black text-[10px] tracking-[0.4em] uppercase font-bold hover:scale-105 transition-all">
                  Let&apos;s Connect
                </button>
              </div>
            </div>
            
            <div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 block mb-8 font-mono">Location_</span>
              <p className="text-sm text-white/60 leading-relaxed uppercase tracking-widest">
                Goa, India<br />Remote Global
              </p>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 block mb-8 font-mono">Social_</span>
              <div className="flex flex-col gap-4">
                {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                  <span key={social} className="text-[10px] tracking-widest uppercase text-white/50 hover:text-white transition-colors cursor-pointer">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-24 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8">
            <div className="text-white/20 text-[9px] tracking-[0.6em] uppercase">
              © 2026 Pixel &apos;N&apos; Purpose Studio
            </div>
            <div className="text-white/10 text-[7px] tracking-[1em] uppercase">
              Quiet Ideas. Measurable Impact.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
