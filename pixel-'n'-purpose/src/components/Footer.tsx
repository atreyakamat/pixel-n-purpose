import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-charcoal border-t border-gray-200 dark:border-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold">Pixel 'N' Purpose</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs font-light">
              A digital studio crafting clarity for forward-thinking brands.
            </p>
          </div>
          
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 mb-6">Social</h5>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Behance</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 mb-6">Explore</h5>
            <ul className="space-y-4 text-sm font-light">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Work</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Services</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">About</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 mb-6">Office</h5>
            <address className="not-italic font-light text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              100 Broadway<br />
              New York, NY 10005<br />
              United States
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] pt-8 border-t border-gray-100 dark:border-gray-900">
          <p>© 2024 Pixel 'N' Purpose. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
            <span className="font-mono">EST. 2012 — LDN / NYC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
