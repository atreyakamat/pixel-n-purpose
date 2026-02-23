/**
 * hooks/useContactForm.ts
 * ───────────────────────
 * Encapsulates ALL contact-form state and EmailJS send logic.
 * The Contact page component stays purely presentational.
 */

'use client';

import { useState, useCallback } from 'react';
import { sendContactEmail, type ContactFormPayload } from '@/lib/emailjs';

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'misconfigured';

export interface ContactFormState {
    name: string;
    email: string;
    service: string;
    message: string;
}

const INITIAL_STATE: ContactFormState = {
    name: '',
    email: '',
    service: '',
    message: '',
};

/** Minimal validation — expand as needed. */
function validate(form: ContactFormState): string | null {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim()) return 'Please enter your email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        return 'Please enter a valid email address.';
    if (!form.message.trim()) return 'Please tell us about your project.';
    return null;
}

export function useContactForm() {
    const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [error, setError] = useState<string | null>(null);

    /** Generic field updater — works for input, textarea, and select. */
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setForm((prev) => ({ ...prev, [name]: value }));
            // Clear error when user corrects a field
            if (error) setError(null);
        },
        [error]
    );

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();

            const validationError = validate(form);
            if (validationError) {
                setError(validationError);
                return;
            }

            setStatus('submitting');
            setError(null);

            const payload: ContactFormPayload = {
                name: form.name.trim(),
                email: form.email.trim(),
                service: form.service,
                message: form.message.trim(),
            };

            const result = await sendContactEmail(payload);

            if (result.ok) {
                setStatus('success');
                setForm(INITIAL_STATE);
            } else if (result.reason === 'missing_config') {
                setStatus('misconfigured');
                setError('Email service is not configured. Please email us directly at hello@pixelnpurpose.com');
            } else {
                setStatus('error');
                setError('Something went wrong sending your message. Please try again or email us directly.');
            }

            // Reset status after 7s so the form is re-usable
            setTimeout(() => setStatus('idle'), 7000);
        },
        [form]
    );

    return { form, status, error, handleChange, handleSubmit };
}
