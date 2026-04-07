"use client";

import { Input } from "@/components/ui/Input";

interface FormFieldProps {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
  hint?: string;
}

export function FormField({
  label,
  id,
  required,
  error,
  children,
  hint,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

interface TextFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
  hint?: string;
  type?: string;
}

export function TextField({
  label,
  id,
  value,
  onChange,
  required,
  placeholder,
  error,
  hint,
  type = "text",
}: TextFieldProps) {
  return (
    <FormField
      label={label}
      id={id}
      required={required}
      error={error}
      hint={hint}
    >
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        error={error}
      />
    </FormField>
  );
}

interface TextareaFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  hint?: string;
}

export function TextareaField({
  label,
  id,
  value,
  onChange,
  placeholder,
  rows = 3,
  hint,
}: TextareaFieldProps) {
  return (
    <FormField label={label} id={id} hint={hint}>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:bg-card resize-none"
      />
    </FormField>
  );
}

interface SelectFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}

export function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  required,
}: SelectFieldProps) {
  return (
    <FormField label={label} id={id} required={required}>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}
