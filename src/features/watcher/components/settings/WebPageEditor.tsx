"use client";

import { useState } from "react";
import type { WebPage } from "@/features/watcher/types";

type WebPageEditorProps = {
  value: WebPage[];
  onChange: (value: WebPage[]) => void;
};

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function WebPageEditor({ value, onChange }: WebPageEditorProps) {
  const [urlErrors, setUrlErrors] = useState<Record<number, string>>({});

  function updateRow(index: number, field: keyof WebPage, fieldValue: string) {
    const updated = value.map((row, i) =>
      i === index ? { ...row, [field]: fieldValue } : row
    );
    if (field === "url") {
      const newErrors = { ...urlErrors };
      if (fieldValue && !isValidUrl(fieldValue)) {
        newErrors[index] = "URL invalide";
      } else {
        delete newErrors[index];
      }
      setUrlErrors(newErrors);
    }
    onChange(updated);
  }

  function addRow() {
    onChange([...value, { url: "", selector: "", label: "" }]);
  }

  function removeRow(index: number) {
    const newErrors = { ...urlErrors };
    delete newErrors[index];
    setUrlErrors(newErrors);
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-3">
      {value.map((row, i) => (
        <div key={i} className="space-y-2 rounded-lg border border-border p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Page {i + 1}</span>
            <button
              type="button"
              onClick={() => removeRow(i)}
              aria-label="Supprimer cette page"
              className="text-xs text-muted-foreground hover:text-red-500"
            >
              × Supprimer
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div>
              <input
                type="text"
                value={row.url}
                onChange={(e) => updateRow(i, "url", e.target.value)}
                placeholder="https://example.com"
                className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {urlErrors[i] && (
                <p className="mt-0.5 text-xs text-red-500">{urlErrors[i]}</p>
              )}
            </div>

            <input
              type="text"
              value={row.selector}
              onChange={(e) => updateRow(i, "selector", e.target.value)}
              placeholder="CSS selector (ex: .article-list)"
              className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="text"
              value={row.label}
              onChange={(e) => updateRow(i, "label", e.target.value)}
              placeholder="Label (ex: Blog officiel)"
              className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="w-full rounded-md border border-dashed border-border py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
      >
        + Ajouter une page
      </button>
    </div>
  );
}
