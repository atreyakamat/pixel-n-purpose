import { motion } from 'motion/react';
import { ArrowForward } from '../components/Icons';
import { Project, Page } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Aesop Minimalist',
    category: 'Web Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh2Jx0Z8R_FvU5aWZbJ9n6LxuV3DaLV0SiImkGcW5ZDSKereq8mbHjpAMIBRxnE66CiMFv_BCjeg7a7Gt8sIgD_StI7LsMsDVOMOwZP4Mi3oXzgIPmjv3wlI1mxbHFBqhuKxgsZxjvz6syTgWsGgnLJ25HdARxb7kakxx-knqRySqR3ki9pHvuspXNEJAUz-oUr_Xfj8TQJDIgWq8bwOrR9N_9aFOKvpRFCZS1RSxR5EJ7XM-eqRFCzox4lmNE06yi0lpqXSiG4S4'
  },
  {
    id: '2',
    title: 'Lumina Ceramics',
    category: 'Branding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP1MVEqTfF487zLb4chCDgJ0oKXrHQQ11O6D3DKEW5IAIXLK96iKyVcfQuczd4jhaPCrzhu3XnvPFEupv5eF9y7jyJkmJm9cfZmzUgqyT2NSC1YytAM-Boa19-N77IjZPm0JNQehimswrKtWEb62WyAlEZC5hkYJPvxTJFQxMhBwoFYvI_7BqmPa6-AD05zXSt-L-SKuovOWpTjbUtKXml86oJk0WBKcHlUyvkTIP5lrO1KPfoJdFoSgONBVkEmKoztcj8SUzsR8I'
  },
  {
    id: '3',
    title: 'Noir Editorial',
    category: 'Print',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrpbxCPHkSeTI7MkIRuFmqwf5i_0nt2lghyM9Fvw2S2BRuBu61eCBl0AvZ_s-oNG0pPP_U4-U_svw1CTReMajqIVVuv_oq_qQzDy0LAArQxBwfkYosq4_K8xU0MqFQ8Jf8_Slpzn3A4QpPM-XzxLaUV6MmjgIfx6yQx5dk6Ms8BauMDNMkZxdcqOicW10gW-TJP-xJiXklb7TifZWavYhKn2JAmUodn6EOpjc76vE2t3WC4NzKuysqyb69-oY6aUn7U3s0zKr-lzE'
  },
  {
    id: '4',
    title: 'Vertex Audio',
    category: 'Packaging',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSzlnN2EnM3ORMorrextivSmLoMXxCx2PQbqyhlHeYF6lkNQU7UW6D5kYbppapTWBW17JadoRLyAfIpaLvOk0PsUQ3BFidssxDa9WEcMPLuVVXvYvsBK3lHt_hElyll2YHei8m_WICT2UtWflDc0OEYUSoFMx0Di4g-9lGwII2H36DrtdlnAg6A2nuZThGM5qb5t1X8nypBmwQQQV7RIdKT7vi3OtG2So5Mh7D76tvkFYLvGy6VcMq4ByuE3EIU5ln_Umtrnh8IgQ'
  }
];

const expertise = [
  { id: '01', title: 'Digital Experience', italic: false, desc: 'Crafting immersive web environments that balance aesthetics with seamless functionality. From corporate platforms to experimental microsites.' },
  { id: '02', title: 'Brand Identity', italic: true, desc: 'Defining the visual and verbal language of tomorrow\'s leading brands. Logos, typography systems, and comprehensive style guides.' },
  { id: '03', title: 'Art Direction', italic: false, desc: 'Conceptualizing visual narratives for campaigns, editorials, and product launches. Photography, set design, and styling.' },
  { id: '04', title: 'Packaging', italic: true, desc: 'Tangible brand experiences. Sustainable materials, tactile finishes, and structural design that stands out on the shelf.' }
];

export default function Home({ setCurrentPage }: { setCurrentPage: (page: Page) => void }) {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark text-white px-6 md:px-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neutral-800 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-neutral-700 rounded-full mix-blend-overlay filter blur-3xl opacity-20" />
        </div>
        
        <div className="container mx-auto relative z-10 pt-20">
          <div className="max-w-5xl mx-auto">
            <div className="glass-panel p-8 md:p-16 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8"
              >
                <span className="block">Design with</span>
                <span className="block italic font-light ml-8 md:ml-16">Clarity</span>
                <span className="block text-right">and Intent.</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col md:flex-row justify-between items-end mt-12 md:mt-20 border-t border-white/10 pt-8"
              >
                <p className="max-w-md text-neutral-400 font-light text-lg">
                  We are a global creative studio shaping brands through minimalist aesthetics and strategic precision.
                </p>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="mt-8 md:mt-0 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] hover:gap-4 transition-all duration-300 cursor-pointer"
                >
                  Explore Work <ArrowForward className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white" />
        </div>
      </header>

      {/* Expertise Section */}
      <section className="py-32 bg-background-light dark:bg-neutral-900 text-neutral-900 dark:text-white" id="services">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 flex justify-between items-end">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Our Expertise</h2>
            <div className="h-[1px] flex-grow bg-current ml-8 opacity-20" />
          </div>

          <div className="space-y-4">
            {expertise.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ x: 10 }}
                className="group relative"
              >
                <div className="glass-panel bg-neutral-100 dark:bg-white/5 p-8 md:p-12 transition-all duration-500 hover:bg-neutral-200 dark:hover:bg-white/10 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center border-l-4 border-transparent hover:border-black dark:hover:border-white">
                  <div className="mb-4 md:mb-0">
                    <span className="text-[10px] font-mono opacity-50 mb-2 block">{item.id}</span>
                    <h3 className={`font-serif text-3xl md:text-5xl ${item.italic ? 'italic' : ''}`}>{item.title}</h3>
                  </div>
                  <div className="max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowForward className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -rotate-45 group-hover:rotate-0 w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Grid */}
      <section className="py-32 bg-background-light dark:bg-background-dark text-neutral-900 dark:text-white" id="work">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-neutral-800 relative mb-8 rounded-sm">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white border border-white/30 px-8 py-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-xs uppercase tracking-widest">
                      View Case Study
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline border-b border-neutral-300 dark:border-neutral-800 pb-6">
                  <h3 className="font-serif text-2xl md:text-3xl">{project.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <button className="inline-block border border-neutral-900 dark:border-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 cursor-pointer">
              All Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-neutral-100 dark:bg-black text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-6xl mb-8 leading-tight"
              >
                Let's create something<br />
                <span className="italic text-neutral-500 font-light">meaningful.</span>
              </motion.h2>
              <p className="max-w-md text-neutral-600 dark:text-neutral-400 font-light text-lg mb-12 leading-relaxed">
                We are currently accepting new projects for Q4 2024. Reach out to discuss how we can elevate your brand.
              </p>
              <a 
                href="mailto:hello@pixelnpurpose.com" 
                className="text-2xl md:text-4xl font-serif underline decoration-1 underline-offset-12 hover:text-neutral-500 transition-colors"
              >
                hello@pixelnpurpose.com
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-12 lg:pl-20">
              <div>
                <h4 className="uppercase tracking-[0.3em] text-[10px] font-bold mb-8 opacity-40">Social</h4>
                <ul className="space-y-6 font-light text-sm">
                  <li><a href="#" className="hover:underline decoration-neutral-400 underline-offset-4">Instagram</a></li>
                  <li><a href="#" className="hover:underline decoration-neutral-400 underline-offset-4">LinkedIn</a></li>
                  <li><a href="#" className="hover:underline decoration-neutral-400 underline-offset-4">Behance</a></li>
                  <li><a href="#" className="hover:underline decoration-neutral-400 underline-offset-4">Twitter</a></li>
                </ul>
              </div>
              <div>
                <h4 className="uppercase tracking-[0.3em] text-[10px] font-bold mb-8 opacity-40">Office</h4>
                <address className="not-italic font-light text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  100 Broadway<br />
                  New York, NY 10005<br />
                  United States
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
