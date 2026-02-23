import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Work', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4' : 'py-8'
      } ${currentPage === 'contact' ? 'text-white' : 'mix-blend-difference text-white'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-xl md:text-2xl font-serif font-bold tracking-wider uppercase cursor-pointer"
        >
          Pixel 'N' Purpose
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 font-sans text-xs tracking-widest uppercase font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`hover:opacity-60 transition-opacity cursor-pointer relative py-1 ${
                currentPage === item.id ? 'opacity-100' : 'opacity-70'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-px bg-current"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-black/5 dark:border-white/5 p-6 flex flex-col space-y-6 md:hidden text-gray-900 dark:text-white"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-sm tracking-widest uppercase font-medium text-left"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
