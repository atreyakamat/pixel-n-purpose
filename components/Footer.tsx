'use client';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pixelnpurpose/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pixel-n-purpose-pixpur-design-house-b66360370/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-ink-rule">
      <div className="container py-16 md:py-20">
        {/* Top row: logo + links */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6 max-w-xs">
            <div className="flex flex-col gap-3">
              <img src="/PNP-white.png" alt="Pixel & Purpose" className="h-16 w-auto object-contain object-left" width={200} height={64} />
              <p className="text-[11px] tracking-[0.4em] uppercase text-ink-ghost font-bold ml-1">
                By Pixpur Design House
              </p>
            </div>
            <p className="text-sm text-ink-dim leading-relaxed">
              A global creative studio. Websites. Portfolios. Packaging.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-ink-ghost hover:text-ink transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <p className="caps text-ink-ghost mb-2">Navigate</p>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="link-line text-sm text-ink-dim">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="caps text-ink-ghost mb-2">Get in touch</p>
            <a href="mailto:hello@pixelnpurpose.com" className="link-line text-sm text-ink-dim">
              hello@pixelnpurpose.com
            </a>
            <a href="/contact" className="btn-ghost text-xs inline-block mt-4 w-fit">
              Start a project →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-rule flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-ghost">
            © {new Date().getFullYear()} Pixel & Purpose by Pixpur Design House. All rights reserved.
          </p>
          <p className="text-xs text-ink-ghost font-accent">
            PIXELNPURPOSE.COM
          </p>
        </div>
      </div>
    </footer>
  );
}
