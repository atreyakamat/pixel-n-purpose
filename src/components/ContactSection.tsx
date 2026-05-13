"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Mail } from "lucide-react";
import emailjs from '@emailjs/browser';
import Magnetic from "./Magnetic";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setFormStatus("submitting");
    
    try {
      const formData = new FormData(formRef.current);
      
      const payload = {
        name: formData.get("Name")?.toString(),
        Name: formData.get("Name")?.toString(),
        email: formData.get("Email")?.toString(),
        Email: formData.get("Email")?.toString(),
        brand: formData.get("Brand")?.toString(),
        Brand: formData.get("Brand")?.toString(),
        message: formData.get("Message")?.toString(),
        Message: formData.get("Message")?.toString(),
        reply_to: formData.get("Email")?.toString()
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        payload, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 5000);
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-64 px-8 max-w-[1400px] mx-auto relative z-10">
      <div className="bg-white rounded-[3rem] p-12 md:p-24 overflow-hidden relative shadow-sm border border-secondary/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-[2px] bg-secondary mb-10" />
              <h2 className="font-display text-6xl md:text-[8vw] font-bold text-secondary mb-10 leading-[0.8] tracking-tighter uppercase text-bold-elegant">
                Let&apos;s <br/><span className="italic font-normal text-accent shimmer-gold px-4 -ml-4 rounded-lg">Initiate.</span>
              </h2>
              <p className="text-secondary/30 text-[9px] md:text-[10px] mb-16 max-w-xs leading-relaxed uppercase font-bold tracking-[0.3em]">
                Bespoke architecture for elite visionaries.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <Magnetic>
                  <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-all duration-500">
                    <Mail className="w-6 h-6 text-secondary group-hover:text-white" />
                  </div>
                </Magnetic>
                <a href="mailto:hello@pixelnpurpose.com" data-cursor="hover" className="text-xl md:text-3xl font-display font-bold text-secondary hover:text-accent transition-colors tracking-tight">hello@pixelnpurpose.com</a>
              </div>
            </div>
          </div>

          <div className="bg-secondary/5 rounded-[2.5rem] p-10 md:p-16 border border-secondary/5 shadow-inner backdrop-blur-sm">
            <h3 className="font-display text-2xl font-bold text-secondary mb-12 uppercase tracking-tighter">Engagement</h3>
            <form ref={formRef} className="space-y-10" onSubmit={handleContactSubmit}>
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="py-16 text-center"
                  >
                    <Star className="w-12 h-12 text-accent mx-auto mb-8 animate-pulse" />
                    <h4 className="text-secondary font-display font-bold text-3xl mb-4 tracking-tighter uppercase">Initiated.</h4>
                    <p className="text-secondary/30 font-bold tracking-widest text-[9px] uppercase">We will coordinate shortly.</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-10"
                  >
                    <div className="space-y-10">
                      <div className="relative border-b border-secondary/20 focus-within:border-accent transition-colors py-3">
                        <input name="Name" required type="text" className="w-full bg-transparent text-secondary text-xl focus:outline-none placeholder:text-secondary/30 font-bold tracking-tight" placeholder="Name" />
                      </div>
                      <div className="relative border-b border-secondary/20 focus-within:border-accent transition-colors py-3">
                        <input name="Email" required type="email" className="w-full bg-transparent text-secondary text-xl focus:outline-none placeholder:text-secondary/30 font-bold tracking-tight" placeholder="Email" />
                      </div>
                      <div className="relative border-b border-secondary/20 focus-within:border-accent transition-colors py-3">
                        <input name="Brand" required type="text" className="w-full bg-transparent text-secondary text-xl focus:outline-none placeholder:text-secondary/30 font-bold tracking-tight" placeholder="Brand / Company" />
                      </div>
                      <div className="relative border-b border-secondary/20 focus-within:border-accent transition-colors py-3">
                        <textarea name="Message" required rows={3} className="w-full bg-transparent text-secondary text-xl focus:outline-none placeholder:text-secondary/30 font-bold tracking-tight resize-none" placeholder="Message / Project Details"></textarea>
                      </div>
                    </div>
                    {formStatus === "error" && (
                      <p className="text-red-500 text-xs font-bold tracking-widest uppercase">Failed to send. Please try again.</p>
                    )}
                    <div className="pt-12">
                      <Magnetic>
                        <button 
                          disabled={formStatus === "submitting"}
                          data-cursor="hover"
                          type="submit" 
                          className="group relative h-40 w-40 flex items-center justify-center bg-secondary rounded-full text-white font-display font-bold text-lg overflow-hidden shadow-sm transition-transform duration-500 active:scale-95 disabled:opacity-50"
                        >
                          <span className="relative z-10 text-center leading-tight">
                            {formStatus === "submitting" ? "..." : <>Send<br/>Request</>}
                          </span>
                          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.85, 0, 0.15, 1]" />
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
