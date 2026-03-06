"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Toggle } from "@/components/ui/Toggle";
import { Copy, Play } from "lucide-react";
import type { SkillUISchema, SkillField } from "../types";

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: SkillField;
  value: string;
  onChange: (value: string) => void;
}) {
  switch (field.type) {
    case "textarea":
      return (
        <div className="flex flex-col gap-1">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder ?? ""}
            rows={3}
            className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          />
        </div>
      );
    case "boolean":
      return (
        <Toggle
          checked={value === "true"}
          onChange={(checked) => onChange(checked ? "true" : "false")}
        />
      );
    case "number":
      return (
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? ""}
        />
      );
    case "url":
      return (
        <Input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? "https://"}
        />
      );
    case "email":
      return (
        <Input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? "user@example.com"}
        />
      );
    case "select":
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select...</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    default:
      return (
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? ""}
        />
      );
  }
}

export function SkillAutoForm({
  schema,
  skillPath,
}: {
  schema: SkillUISchema;
  skillPath: string;
}) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const field of schema.fields) {
      init[field.name] = field.placeholder ?? "";
    }
    return init;
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = useCallback(
    (fieldName: string, value: string) => {
      setValues((prev) => ({ ...prev, [fieldName]: value }));
      setPreview(null); // Clear preview on change
    },
    [],
  );

  const handleRender = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/skills/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skillPath,
          commandName: schema.commandName,
          parameters: values,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to render command");
        return;
      }
      setPreview(data.command);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }, [skillPath, schema.commandName, values]);

  const handleCopy = useCallback(() => {
    if (!preview) return;
    navigator.clipboard.writeText(preview).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [preview]);

  return (
    <div className="space-y-4">
      {schema.fields.length === 0 ? (
        <p className="text-xs text-muted-foreground">
          This command has no configurable parameters.
        </p>
      ) : (
        schema.fields.map((field) => (
          <div key={field.name} className="space-y-1">
            <label className="flex items-center gap-1 text-xs font-medium text-foreground">
              {field.label}
              {field.required && (
                <span className="text-destructive">*</span>
              )}
            </label>
            <FieldInput
              field={field}
              value={values[field.name] ?? ""}
              onChange={(v) => handleChange(field.name, v)}
            />
          </div>
        ))
      )}

      <div className="flex items-center gap-2 pt-2">
        <Button
          variant="primary"
          size="sm"
          onClick={handleRender}
          loading={loading}
        >
          <Play className="h-3 w-3" />
          Preview Command
        </Button>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive">
          {error}
        </div>
      )}

      {preview && (
        <div className="relative">
          <pre className="overflow-x-auto rounded-lg border border-border bg-surface-1 p-3 text-xs font-mono text-foreground">
            {preview}
          </pre>
          <button
            type="button"
            onClick={handleCopy}
            className="absolute right-2 top-2 rounded p-1 text-muted-foreground hover:text-foreground transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="h-3.5 w-3.5" />
          </button>
          {copied && (
            <span className="absolute right-8 top-2 text-[10px] text-green-500">
              Copied
            </span>
          )}
        </div>
      )}
    </div>
  );
}
