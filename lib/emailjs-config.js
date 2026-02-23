/**
 * lib/emailjs-config.js  ← DEPRECATED
 * ──────────────────────
 * This file is superseded by lib/emailjs.ts which provides:
 *  - Full TypeScript types
 *  - A sendContactEmail() function with discriminated union return
 *  - Inline setup docs
 *
 * This file is kept only for reference. Do not import it.
 * It will be removed in a future cleanup.
 */

export const EmailJSConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};