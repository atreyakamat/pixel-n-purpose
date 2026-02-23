import { motion } from 'motion/react';
import React, { useState } from 'react';
import { ArrowForward } from '../components/Icons';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="bg-background-dark text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12"
              >
                Let's <br />
                <span className="italic font-light opacity-60">Connect.</span>
              </motion.h1>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 opacity-40">General Inquiries</h4>
                  <a href="mailto:hello@pixelnpurpose.com" className="text-2xl md:text-3xl font-serif hover:opacity-60 transition-opacity">
                    hello@pixelnpurpose.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 opacity-40">New Business</h4>
                  <a href="mailto:projects@pixelnpurpose.com" className="text-2xl md:text-3xl font-serif hover:opacity-60 transition-opacity">
                    projects@pixelnpurpose.com
                  </a>
                </div>

                <div className="pt-12 border-t border-white/10">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Follow Us</h4>
                  <div className="flex flex-wrap gap-8 font-light text-sm">
                    <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">Behance</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 md:p-12 rounded-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-light text-lg"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-light text-lg"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Project Type</label>
                  <select 
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-light text-lg appearance-none cursor-pointer"
                    value={formState.project}
                    onChange={(e) => setFormState({...formState, project: e.target.value})}
                  >
                    <option value="" className="bg-charcoal">Select an option</option>
                    <option value="web" className="bg-charcoal">Website Design</option>
                    <option value="branding" className="bg-charcoal">Brand Identity</option>
                    <option value="packaging" className="bg-charcoal">Packaging</option>
                    <option value="other" className="bg-charcoal">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors font-light text-lg resize-none"
                    placeholder="Tell us about your vision..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full group flex items-center justify-between border border-white/20 hover:border-white p-6 transition-all duration-500 cursor-pointer"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Send Inquiry</span>
                  <ArrowForward className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
