'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-ink text-canvas">
      {/* Footer Links */}
      <div className="border-t border-canvas/20">
        <div className="container py-12">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-canvas/80 text-base font-normal hover:text-canvas transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-canvas/80 text-base font-normal hover:text-canvas transition-colors duration-200"
              >
                Services
              </button>
              <a
                href="/about"
                className="text-canvas/80 text-base font-normal hover:text-canvas transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-canvas/80 text-base font-normal hover:text-canvas transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="/privacy-policy"
                className="text-canvas/80 text-base font-normal hover:text-canvas transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-canvas/80 text-base font-normal hover:text-canvas transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a href="#" className="text-canvas/60 hover:text-canvas transition-colors duration-200" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/>
                </svg>
              </a>
              <a href="#" className="text-canvas/60 hover:text-canvas transition-colors duration-200" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/>
                </svg>
              </a>
              <a href="#" className="text-canvas/60 hover:text-canvas transition-colors duration-200" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"/>
                </svg>
              </a>
              <a href="#" className="text-canvas/60 hover:text-canvas transition-colors duration-200" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Email Contact */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className="text-canvas/80 text-base font-normal hover:text-canvas transition-colors duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/>
                </svg>
                hello@pixelnpurpose.com
              </a>
            </div>

            {/* Copyright */}
            <p className="text-canvas/60 text-base font-normal">
              © 2025 Pixel & Purpose By Pixpur Design House.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
