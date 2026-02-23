/**
 * components/FormField.tsx
 * ─────────────────────────
 * Reusable monochrome underline form field.
 * Supports: text, email, textarea, and select.
 */

import { forwardRef, ReactNode } from 'react';

interface BaseProps {
    id: string;
    name: string;
    label: string;
    required?: boolean;
    className?: string;
}

interface InputFieldProps extends BaseProps {
    as?: 'input';
    type?: 'text' | 'email' | 'tel';
    value: string;
    placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface TextareaFieldProps extends BaseProps {
    as: 'textarea';
    rows?: number;
    value: string;
    placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

interface SelectFieldProps extends BaseProps {
    as: 'select';
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    children: ReactNode;
}

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

const fieldBase =
    'bg-transparent border-0 border-b border-[var(--ink-rule)] pb-3 ' +
    'text-[var(--ink)] placeholder:text-[var(--ink-ghost)] ' +
    'focus:outline-none focus:border-[var(--ink-dim)] ' +
    'transition-colors duration-300 text-base w-full';

export function FormField(props: FormFieldProps) {
    const { id, name, label, required = false, className = '' } = props;

    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            <label htmlFor={id} className="caps text-[var(--ink-ghost)]">
                {label}{required && ' *'}
            </label>

            {props.as === 'textarea' ? (
                <textarea
                    id={id}
                    name={name}
                    required={required}
                    rows={props.rows ?? 5}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    className={`${fieldBase} resize-none leading-relaxed`}
                />
            ) : props.as === 'select' ? (
                <select
                    id={id}
                    name={name}
                    required={required}
                    value={props.value}
                    onChange={props.onChange}
                    className={`${fieldBase} appearance-none cursor-pointer`}
                    style={{ color: props.value ? 'var(--ink)' : 'var(--ink-ghost)' }}
                >
                    {props.children}
                </select>
            ) : (
                <input
                    id={id}
                    name={name}
                    type={props.type ?? 'text'}
                    required={required}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    className={fieldBase}
                />
            )}
        </div>
    );
}
