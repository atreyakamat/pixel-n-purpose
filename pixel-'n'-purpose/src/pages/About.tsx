import { motion } from 'motion/react';
import { Balance, Focus, Remove, Brightness } from '../components/Icons';

const principles = [
  {
    id: '01',
    title: 'Responsibility',
    icon: <Balance className="w-6 h-6" />,
    desc: 'Every design decision carries weight. We don\'t just fill space; we curate experiences that respect the user\'s time and cognitive load. Our digital footprints are minimal, purposeful, and ethical.'
  },
  {
    id: '02',
    title: 'Intent',
    icon: <Focus className="w-6 h-6" />,
    desc: 'Ambiguity is the enemy of utility. We design with ruthless intent, ensuring that form always follows function, but never at the expense of beauty.'
  },
  {
    id: '03',
    title: 'Reduction',
    icon: <Remove className="w-6 h-6" />,
    desc: 'The hardest thing to do is simplify. We iterate by subtraction, removing the unnecessary until only the essential remains.'
  }
];

const stats = [
  { label: 'Years Active', value: '12' },
  { label: 'Global Awards', value: '48' },
  { label: 'Investors', value: '0' },
  { label: 'Purpose', value: '1' }
];

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark transition-colors duration-500 relative overflow-x-hidden selection:bg-gray-800 selection:text-white dark:selection:bg-gray-200 dark:selection:text-black">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-gray-300/30 to-transparent dark:from-gray-800/20 dark:to-transparent blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-gray-400/20 to-transparent dark:from-gray-700/10 dark:to-transparent blur-[140px]" />
        <div className="absolute inset-0 z-[-1] grainy-bg opacity-50 dark:opacity-20 pointer-events-none mix-blend-overlay" />
      </div>

      <header className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-12 relative">
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-panel w-full bg-white/40 dark:bg-glass-dark border border-black/5 dark:border-white/10 p-8 md:p-16 lg:p-24 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] mb-8 text-gray-500 dark:text-gray-400">Our Philosophy</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-12 text-gray-900 dark:text-gray-100">
              Clarity-Driven <br />
              <span className="italic font-light text-gray-600 dark:text-gray-400">Design.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-300 dark:border-gray-700 pt-12">
              <p className="max-w-md text-lg md:text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
                We strip away the noise to reveal the signal. In a world of digital clutter, we build sanctuaries of focus and intent.
              </p>
              <div className="mt-8 md:mt-0 flex items-center gap-4">
                <span className="text-[10px] font-mono text-gray-500 tracking-widest">SCROLL</span>
                <div className="h-px w-16 bg-gray-400 dark:bg-gray-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="px-6 md:px-12 py-24 space-y-40 max-w-7xl mx-auto">
        {/* Mindset Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-6">The Mindset</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-8">Not just pixels,<br /> but principles.</h3>
          </div>
          <div className="lg:col-span-8 space-y-20">
            {principles.map((p, idx) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="glass-panel bg-white/40 dark:bg-black/40 border border-black/5 dark:border-white/10 p-10 md:p-14 rounded-xl hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-6xl font-serif text-gray-300 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">{p.id}</span>
                  <div className="text-gray-400 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {p.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{p.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-lg">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <span className="text-[25vw] font-serif italic font-bold">PnP</span>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <p className="font-serif text-3xl md:text-5xl leading-tight text-gray-800 dark:text-gray-200">
              "We believe that the future of the web is quiet, personal, and profoundly human."
            </p>
            <div className="mt-16 flex justify-center items-center gap-6">
              <div className="h-px w-16 bg-gray-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">The Founders</span>
              <div className="h-px w-16 bg-gray-400" />
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-10 text-center border-l border-gray-200 dark:border-gray-800 rounded-none bg-transparent backdrop-blur-sm"
            >
              <span className="block text-4xl md:text-6xl font-serif font-bold mb-3">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">{stat.label}</span>
            </motion.div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="glass-panel w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black border border-black/5 dark:border-white/10 p-12 md:p-24 rounded-2xl text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 grainy-bg opacity-[0.05]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-serif mb-8">Ready to define your purpose?</h2>
              <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12 font-light">
                Let's build something that lasts longer than a scroll.
              </p>
              <button className="inline-block px-12 py-5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-mono text-[10px] uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform duration-300 rounded-sm cursor-pointer">
                Start a Project
              </button>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gray-400/20 dark:bg-gray-700/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
          </motion.div>
        </section>
      </main>

      {/* Theme Toggle */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-2xl hover:scale-110 transition-transform cursor-pointer" 
          onClick={() => document.documentElement.classList.toggle('dark')}
        >
          <Brightness className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
