/**
 * lib/emailjs.ts
 * ──────────────
 * Typed EmailJS integration layer.
 * All email sends go through `sendContactEmail()` — one place to change config/logic.
 *
 * Setup:
 *   1. Create a free account at https://emailjs.com
 *   2. Add a Gmail (or any SMTP) service → get Service ID
 *   3. Create an email template (see template below) → get Template ID
 *   4. Copy your Public Key from Account → API Keys
 *   5. Add to .env.local:
 *        NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
 *        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
 *        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
 *
 * ── Recommended EmailJS Template ──────────────────────────────────────
 * Subject:  New Inquiry from {{from_name}} — Pixel & Purpose
 *
 * Body:
 *   You have a new project inquiry from pixelnpurpose.com
 *
 *   Name:             {{from_name}}
...

 *   Service Interest: {{service_interest}}
 *
 *   Message:
 *   {{message}}
 *
 *   ─────────────────────────────────
 *   Sent via pixelnpurpose.com contact form
 * ──────────────────────────────────────────────────────────────────────
 */

import emailjs from '@emailjs/browser';

export interface ContactFormPayload {
    name: string;
    email: string;
    service: string;
    message: string;
}

export type SendResult =
    | { ok: true }
    | { ok: false; reason: 'missing_config' | 'send_failed'; detail?: string };

/** Read EmailJS credentials from env (all must be set). */
function getConfig(): { serviceId: string; templateId: string; publicKey: string } | null {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) return null;
    return { serviceId, templateId, publicKey };
}

/**
 * Sends a contact-form submission email via EmailJS.
 * Returns a discriminated union so callers can branch without try/catch.
 */
export async function sendContactEmail(payload: ContactFormPayload): Promise<SendResult> {
    const config = getConfig();

    if (!config) {
        console.error(
            '[EmailJS] Missing env variables. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, ' +
            'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local'
        );
        return { ok: false, reason: 'missing_config' };
    }

    const { serviceId, templateId, publicKey } = config;

    try {
        emailjs.init(publicKey);

        await emailjs.send(serviceId, templateId, {
            from_name: payload.name,
            from_email: payload.email,
            service_interest: payload.service || 'Not specified',
            message: payload.message,
            // 'to_email' can be added to your template if you want it as a variable;
            // most EmailJS templates route to a fixed address set in the dashboard.
            to_email: 'hello@pixelnpurpose.com',
        }, publicKey);

        return { ok: true };
    } catch (err: unknown) {
        const detail = err instanceof Error ? err.message : String(err);
        console.error('[EmailJS] Send failed:', detail);
        return { ok: false, reason: 'send_failed', detail };
    }
}
