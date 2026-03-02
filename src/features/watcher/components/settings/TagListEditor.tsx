"use client";

import { useState, type KeyboardEvent } from "react";

type ValidateMode = "url" | "regex" | "none";

type TagListEditorProps = {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  validate?: ValidateMode;
};

function validateInput(input: string, mode: ValidateMode): string | null {
  if (mode === "url") {
    try {
      new URL(input);
      return null;
    } catch {
      return "URL invalide";
    }
  }
  if (mode === "regex") {
    try {
      new RegExp(input);
      return null;
    } catch {
      return "Expression régulière invalide";
    }
  }
  return null;
}

export function TagListEditor({
  value,
  onChange,
  placeholder,
  validate = "none",
}: TagListEditorProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  function tryAdd() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const err = validateInput(trimmed, validate);
    if (err) {
      setError(err);
      return;
    }
    if (value.includes(trimmed)) {
      setError("Déjà présent");
      return;
    }
    onChange([...value, trimmed]);
    setInput("");
    setError(null);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      tryAdd();
    }
  }

  function removeTag(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(null);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="button"
          onClick={tryAdd}
          className="ui-btn-primary px-3 py-1.5 text-sm"
        >
          Add
        </button>
      </div>

      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}

      {value.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {value.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="ui-badge inline-flex items-center gap-1"
            >
              <span className="max-w-[200px] truncate">{tag}</span>
              <button
                type="button"
                onClick={() => removeTag(i)}
                aria-label={`Supprimer ${tag}`}
                className="ml-0.5 opacity-60 hover:opacity-100"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
