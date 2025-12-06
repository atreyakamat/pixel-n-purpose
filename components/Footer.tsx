'use client';

interface FooterProps {
  isHomePage?: boolean;
}

export default function Footer({ isHomePage = false }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`${isHomePage ? 'bg-white text-black border-t border-gray-200' : 'bg-canvas text-ink border-t border-line'}`}>
      {/* Footer Links */}
      <div className="border-t border-canvas/20">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            {/* Navigation Links and DesignRush Badge */}
            <div className="flex items-center justify-between gap-6 w-full">
              {/* Left spacer for centering */}
              <div className="flex-1"></div>
              
              {/* Navigation Links - Centered */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                <button
                  onClick={() => scrollToSection('hero')}
                  className={`text-base font-normal transition-colors duration-200 ${
                    isHomePage 
                      ? 'text-black hover:text-gray-700' 
                      : 'text-canvas/80 hover:text-canvas'
                  }`}
                >
                  Home
                </button>
                <a
                  href="/#brand-showcase"
                  className={`text-base font-normal transition-colors duration-200 ${
                    isHomePage 
                      ? 'text-black hover:text-gray-700' 
                      : 'text-canvas/80 hover:text-canvas'
                  }`}
                >
                  Services
                </a>
                <a
                  href="/about"
                  className={`text-base font-normal transition-colors duration-200 ${
                    isHomePage 
                      ? 'text-black hover:text-gray-700' 
                      : 'text-canvas/80 hover:text-canvas'
                  }`}
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className={`text-base font-normal transition-colors duration-200 ${
                    isHomePage 
                      ? 'text-black hover:text-gray-700' 
                      : 'text-canvas/80 hover:text-canvas'
                  }`}
                >
                  Contact
                </a>
                <a
                  href="/privacy"
                  className={`text-base font-normal transition-colors duration-200 ${
                    isHomePage 
                      ? 'text-black hover:text-gray-700' 
                      : 'text-canvas/80 hover:text-canvas'
                  }`}
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className={`text-base font-normal transition-colors duration-200 ${
                    isHomePage 
                      ? 'text-black hover:text-gray-700' 
                      : 'text-canvas/80 hover:text-canvas'
                  }`}
                >
                  Terms of Service
                </a>
              </div>
              
              {/* DesignRush Badge - Right side */}
              <div className="flex flex-col items-center gap-1 lg:items-end flex-1">
                <img 
                  src="/Verified Agency v2.png" 
                  alt="Pixel & Purpose featured on DesignRush" 
                  className="h-10 w-auto"
                />
                <p className={`text-xs font-normal text-center lg:text-right ${
                  isHomePage ? 'text-black/70' : 'text-canvas/50'
                }`}>
                  Featured on DesignRush
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/pixelnpurpose/" target="_blank" rel="noopener noreferrer" 
                className={`transition-colors duration-200 ${
                  isHomePage 
                    ? 'text-black hover:text-gray-700' 
                    : 'text-canvas/60 hover:text-canvas'
                }`} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/pixel-n-purpose-pixpur-design-house-b66360370/" target="_blank" rel="noopener noreferrer" 
                className={`transition-colors duration-200 ${
                  isHomePage 
                    ? 'text-black hover:text-gray-700' 
                    : 'text-canvas/60 hover:text-canvas'
                }`} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/19YA9X8FJo/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
                className={`transition-colors duration-200 ${
                  isHomePage 
                    ? 'text-black hover:text-gray-700' 
                    : 'text-canvas/60 hover:text-canvas'
                }`} aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0-16h24v63.63a88,88,0,1,1,16,0Z"/>
                </svg>
              </a>
              <a href="#" className={`transition-colors duration-200 ${
                  isHomePage 
                    ? 'text-black hover:text-gray-700' 
                    : 'text-canvas/60 hover:text-canvas'
                }`} aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Email Contact */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className={`text-base font-normal transition-colors duration-200 flex items-center gap-2 ${
                  isHomePage 
                    ? 'text-black hover:text-gray-700' 
                    : 'text-canvas/80 hover:text-canvas'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/>
                </svg>
                hello@pixelnpurpose.com
              </a>
            </div>

            {/* Copyright */}
            <p className={`text-sm font-normal ${
              isHomePage ? 'text-black' : 'text-canvas/60'
            }`}>
              © 2025 Pixel & Purpose By Pixpur Design House.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
