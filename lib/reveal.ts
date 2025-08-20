// IntersectionObserver for reveal class toggle
export function setupReveal() {
  if (typeof window === 'undefined') return;
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  const revealEls = document.querySelectorAll('[data-reveal]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, { threshold: 0.1 });
  
  revealEls.forEach((el) => observer.observe(el));
}
