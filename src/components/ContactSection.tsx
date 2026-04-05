"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Mail, Phone } from "lucide-react";
import Magnetic from "./Magnetic";

const fadeSlideUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ContactSection({ 
  formStatus, 
  handleContactSubmit 
}: { 
  formStatus: string; 
  handleContactSubmit: (e: React.FormEvent) => void 
}) {
  return (
    <section id="contact" className="py-32 md:py-64 px-8 max-w-[1400px] mx-auto relative z-10">
      <div className="bg-white rounded-[4rem] p-12 md:p-32 overflow-hidden relative shadow-2xl border border-secondary/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-16 h-[3px] bg-primary mb-12" />
              <h2 className="font-display text-7xl md:text-[8vw] font-bold text-secondary mb-12 leading-[0.8] tracking-tighter uppercase">
                Let's <br/><span className="italic font-normal text-primary">Initiate.</span>
              </h2>
              <p className="text-text-primary/40 text-xs md:text-sm mb-20 max-w-sm leading-relaxed uppercase font-bold tracking-[0.3em]">
                Your brand is either unforgettable, or it is invisible.
              </p>
            </div>

            <div className="space-y-16">
              <div className="flex items-center gap-10 group">
                <Magnetic>
                  <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Mail className="w-8 h-8 text-secondary group-hover:text-white" />
                  </div>
                </Magnetic>
                <a href="mailto:hello@pixelnpurpose.com" data-cursor="hover" className="text-2xl md:text-4xl font-display font-bold text-secondary hover:text-primary transition-colors tracking-tight">hello@pixelnpurpose.com</a>
              </div>
              <div className="flex items-center gap-10 group">
                <Magnetic>
                  <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Phone className="w-8 h-8 text-secondary group-hover:text-white" />
                  </div>
                </Magnetic>
                <a href="tel:+1234567890" data-cursor="hover" className="text-2xl md:text-4xl font-display font-bold text-secondary hover:text-primary transition-colors tracking-tight">+1 (234) 567-890</a>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-[4rem] p-12 md:p-20 border border-secondary/5 shadow-inner">
            <h3 className="font-display text-3xl font-bold text-secondary mb-16 uppercase tracking-tighter">Engagement Form</h3>
            <form className="space-y-12" onSubmit={handleContactSubmit}>
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="py-20 text-center"
                  >
                    <Star className="w-16 h-16 text-primary mx-auto mb-10 animate-pulse" />
                    <h4 className="text-secondary font-display font-bold text-4xl mb-4 tracking-tighter uppercase">Initiated.</h4>
                    <p className="text-secondary/40 font-bold tracking-widest text-xs uppercase">We will coordinate with your team shortly.</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-12"
                  >
                    <div className="space-y-12">
                      <div className="relative border-b border-secondary/10 focus-within:border-primary transition-colors py-4">
                        <input required type="text" className="w-full bg-transparent text-secondary text-2xl focus:outline-none placeholder:text-secondary/10 font-bold tracking-tight" placeholder="Full Identity" />
                      </div>
                      <div className="relative border-b border-secondary/10 focus-within:border-primary transition-colors py-4">
                        <input required type="email" className="w-full bg-transparent text-secondary text-2xl focus:outline-none placeholder:text-secondary/10 font-bold tracking-tight" placeholder="Coordinate" />
                      </div>
                      <div className="relative border-b border-secondary/10 focus-within:border-primary transition-colors py-4">
                        <select className="w-full bg-transparent text-secondary text-2xl focus:outline-none appearance-none font-bold tracking-tight">
                          <option className="text-secondary/20">Objective</option>
                          <option>Portfolio Design</option>
                          <option>Packaging & Branding</option>
                          <option>Photography</option>
                          <option>Web Development</option>
                        </select>
                      </div>
                    </div>
                    <div className="pt-20">
                      <Magnetic>
                        <button 
                          disabled={formStatus === "submitting"}
                          data-cursor="hover"
                          type="submit" 
                          className="group relative h-48 w-48 flex items-center justify-center bg-secondary rounded-full text-white font-display font-bold text-xl overflow-hidden shadow-2xl transition-transform duration-500 active:scale-95 disabled:opacity-50"
                        >
                          <span className="relative z-10 text-center leading-tight">
                            {formStatus === "submitting" ? "Initiating..." : <>Send<br/>Request</>}
                          </span>
                          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1]" />
                          <span className="absolute z-20 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1] font-display font-bold text-xl text-center leading-tight">Send<br/>Request</span>
                        </button>
                      </Magnetic>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
