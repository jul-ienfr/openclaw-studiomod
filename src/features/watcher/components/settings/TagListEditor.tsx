"use client";

import { useState, useCallback, type KeyboardEvent } from "react";

type TagListEditorProps = {
  value: string[];
  onChange: (value: string[]) => void;
  label: string;
  placeholder?: string;
  validate?: (v: string) => boolean;
};

export function TagListEditor({
  value,
  onChange,
  label,
  placeholder,
  validate,
}: TagListEditorProps) {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = !validate || !touched || input === "" || validate(input);

  const addTag = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;
    if (validate && !validate(trimmed)) return;
    if (value.includes(trimmed)) return;
    onChange([...value, trimmed]);
    setInput("");
    setTouched(false);
  }, [input, value, onChange, validate]);

  const removeTag = useCallback(
    (index: number) => {
      onChange(value.filter((_, i) => i !== index));
    },
    [value, onChange],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addTag();
      }
    },
    [addTag],
  );

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setTouched(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`flex-1 rounded-md border px-3 py-1.5 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 ${
            !isValid
              ? "border-red-500 focus:ring-red-500"
              : "border-slate-300 dark:border-slate-600 focus:ring-blue-500"
          } focus:outline-none focus:ring-2`}
        />
        <button
          type="button"
          onClick={addTag}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm text-slate-700 dark:text-slate-300"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(i)}
                className="ml-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                aria-label={`Remove ${tag}`}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
