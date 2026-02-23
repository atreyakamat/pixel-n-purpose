import { motion } from 'motion/react';
import { ArrowForward, ArrowDownward } from '../components/Icons';
import { Service, ProcessStep } from '../types';

const services: Service[] = [
  {
    id: '1',
    number: '01 — Core',
    title: 'Website Design',
    description: 'We build immersive digital flagships. Beyond aesthetics, our websites are engineered for conversion, speed, and seamless user journeys. We strip away the noise to reveal your brand\'s essence.',
    details: ['UX/UI Strategy', 'Creative Direction', 'Responsive Development', 'WebGL & Interactions'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2QaadVM7d3f4lzjco4H8G0v_zMIFkWPEO7rBkhb3ShALFLJmt2zBp-9x63V4gJFxYb-YIZCr_DmwfFp1jQg2ocEUWf16PyOonnY6Rd9UdPRxy6qXqYmspNAZ5IWWsh7l7d_sDR-c5KpeKLC0vYtqBk058UGXSVb317gOjelKd-yTgsv6m5gxMZiIfMQsuycr9Yx7TwNv0uk3vo55Tu1yDtZmFS3HuJ7xK4PAtzxv-BQI_S9rQp0_iq9a4WszYGJFKzJAiu7-kOQg',
    category: 'Core'
  },
  {
    id: '2',
    number: '02 — Identity',
    title: 'Portfolio Design',
    description: 'For artists, architects, and visionaries. We create digital galleries that honor your work. Minimalist frameworks that allow your projects to breathe and speak for themselves.',
    details: ['Curation Strategy', 'Archive Systems', 'Personal Branding'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFqhZbJcoRuv1l07-cxVPRW-BbFEzkhCuxX9Z94lflw7WXcPz_sLzlKMHP8c1QIhxu4VCA49x3WJW29UEmsnzoOgXD1krYzfAsL_2I4pxCWQkItmMCUIIKJ7btEcV9jeBs702uxjXZ-JgvZBSjWj8zl01CuUFiAerdWtDzDUVyTUCNJMYspOE-PCWs5LVYhVJ-eIYg7J3LytOjh2rB2AA2_OCxn7lxrB6XmvvjtSz1xZpuFg4EieU2POy7rIs4fiia1wjyl01FyeM',
    category: 'Identity'
  },
  {
    id: '3',
    number: '03 — Physical',
    title: 'Packaging Design',
    description: 'Tactile experiences that elevate the unboxing ritual. We design sustainable, high-impact packaging systems that translate your digital brand into physical reality.',
    details: ['Structural Design', 'Material Selection', 'Print Production'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_u_qMpxd1xgzXU4Fe6p4L7uR9Fmuux8KjRgFobd003Dld7bvA5rgdyuneaLY8HuNsXQRP34222VNevuYqNLaum_FVDVxBA-xv-fWdix-E0Ok65edv6vPS4H5IVETG2pnyC14xA1I35wPKyqIx-WAXM1w35bTUfIVfINIqgJOs7oRgTH22QUmpdBZHIVM8MzNPYUEuhxBE02qFFx7Zd8e17vkl_kznKI8rxO7hiGk2hzjPbjvQyc1tUwpv7Paqq1cXHa83NucNkRQ',
    category: 'Physical'
  },
  {
    id: '4',
    number: '04 — Capture',
    title: 'Photography',
    description: 'Visual storytelling through a cinematic lens. We provide art direction and photography that captures the mood, texture, and soul of your products and spaces.',
    details: ['Art Direction', 'Product Photography', 'Editorial Campaigns'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBztjSVI-QzxnbWWl4kcjipxVvp9kYeNEWx1NFxwlM_rifGHFqMYOzzgJI7y2m0InbRd-k4jvgbb3ntUiFFimw96gnWS5EUVrf02nCg1ilDGzwgE90Yv_Y66EZDGtYcc3LQrgQksUr0fRZ2WnJKHutk62MkumjL2nJYnPUyoYeo4Q5QGQ2YNzzyJHxuCCBRSbzNvoYPF9fA9kwqzF3OU_vphteqLZHmfrMckld17ba-nnXB3ptCSsGiXzCer-CuSk-CAKGsToomk60',
    category: 'Capture'
  }
];

const processSteps: ProcessStep[] = [
  { number: '01.', title: 'Strategy', description: 'Defining the core problem and aligning objectives with brand truth.' },
  { number: '02.', title: 'Design', description: 'Exploration of form, typography, and layout. Divergent thinking.' },
  { number: '03.', title: 'Refine', description: 'Convergent thinking. Polishing details, micro-interactions, and consistency.' },
  { number: '04.', title: 'Deliver', description: 'Launch strategy, handover documentation, and post-launch support.' }
];

export default function Services() {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center bg-background-light dark:bg-matte-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-light dark:to-matte-black" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-8xl lg:text-9xl mb-6 tracking-tight text-gray-900 dark:text-white"
          >
            <span className="block italic font-light opacity-80">Refined</span>
            <span className="block font-semibold mt-2">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light tracking-wide leading-relaxed"
          >
            We craft digital experiences that merge purpose with pixel-perfect precision. Our approach is holistic, minimal, and relentlessly focused on impact.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <a href="#services-start" className="inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity text-gray-900 dark:text-white group">
              <span>Explore Offerings</span>
              <ArrowDownward className="animate-bounce w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </header>

      <main id="services-start">
        {services.map((service, idx) => (
          <section 
            key={service.id}
            className={`min-h-screen flex items-center py-24 ${idx % 2 === 0 ? 'bg-white dark:bg-soft-charcoal' : 'bg-gray-50 dark:bg-matte-black'} relative border-t border-gray-200 dark:border-gray-900`}
          >
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${idx % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'} relative h-[600px] w-full group overflow-hidden rounded-sm`}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${idx % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}
              >
                <div className="glass-panel-light dark:glass-panel p-10 md:p-14 rounded-sm">
                  <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">{service.number}</span>
                  <h2 className="font-serif text-4xl md:text-6xl mb-8 text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg font-light leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 font-sans border-t border-gray-300 dark:border-gray-700 pt-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center justify-between group cursor-default">
                        <span className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors font-light tracking-wide">{detail}</span>
                        <ArrowForward className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Process Framework */}
        <section className="py-32 bg-white dark:bg-charcoal text-center border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6">
            <div className="mb-24">
              <h2 className="font-serif text-5xl md:text-6xl text-gray-900 dark:text-white mb-6">Process Framework</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-light text-lg">
                Our methodology is circular and iterative. We refine until the purpose is clear.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative glass-panel-light dark:glass-panel p-10 h-80 flex flex-col justify-between items-start text-left rounded-sm transition-all hover:-translate-y-2"
                >
                  <div className="text-4xl text-gray-300 dark:text-gray-700 font-serif group-hover:text-black dark:group-hover:text-white transition-colors">{step.number}</div>
                  <div>
                    <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">{step.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Start a Project */}
        <section className="py-32 bg-gray-50 dark:bg-matte-black relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gray-200 dark:bg-gray-800 opacity-20 blur-3xl" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="font-serif text-5xl md:text-8xl mb-8 text-stroke-light dark:text-stroke opacity-30 hover:opacity-100 transition-opacity duration-700 cursor-default uppercase tracking-tighter">
              Let's Create
            </h2>
            <h2 className="font-serif text-4xl md:text-6xl text-gray-900 dark:text-white mb-12 -mt-16 md:-mt-24 pointer-events-none">
              Start a Project
            </h2>
            <button className="inline-block px-12 py-5 border border-gray-900 dark:border-white text-gray-900 dark:text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 cursor-pointer">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
