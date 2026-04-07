"use client";

import { ChevronUp, ChevronDown, X, Plus } from "lucide-react";
import { useState } from "react";

interface FallbackChainEditorProps {
  items: string[];
  availableModels: { id: string; name: string }[];
  onChange: (items: string[]) => void;
  emptyLabel?: string;
}

export function FallbackChainEditor({
  items,
  availableModels,
  onChange,
  emptyLabel = "No fallbacks configured",
}: FallbackChainEditorProps) {
  const [addValue, setAddValue] = useState("");

  const move = (idx: number, dir: -1 | 1) => {
    const next = [...items];
    const swap = idx + dir;
    if (swap < 0 || swap >= next.length) return;
    [next[idx], next[swap]] = [next[swap], next[idx]];
    onChange(next);
  };

  const remove = (idx: number) => {
    onChange(items.filter((_, i) => i !== idx));
  };

  const add = () => {
    if (!addValue || items.includes(addValue)) return;
    onChange([...items, addValue]);
    setAddValue("");
  };

  const unselected = availableModels.filter((m) => !items.includes(m.id));

  return (
    <div className="space-y-1">
      {items.length === 0 && (
        <p className="text-sm text-muted-foreground py-1">{emptyLabel}</p>
      )}
      {items.map((id, idx) => {
        const model = availableModels.find((m) => m.id === id);
        return (
          <div
            key={id}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface-1 px-3 py-2"
          >
            <span className="w-5 shrink-0 text-center text-xs text-muted-foreground">
              {idx + 1}
            </span>
            <span className="flex-1 truncate text-sm">{model?.name ?? id}</span>
            <div className="flex shrink-0 items-center gap-0.5">
              <button
                type="button"
                onClick={() => move(idx, -1)}
                disabled={idx === 0}
                aria-label="Move up"
                className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => move(idx, 1)}
                disabled={idx === items.length - 1}
                aria-label="Move down"
                className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => remove(idx)}
                aria-label="Remove"
                className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        );
      })}

      {unselected.length > 0 && (
        <div className="flex items-center gap-2 pt-1">
          <select
            value={addValue}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setAddValue(e.target.value)
            }
            className="flex-1 rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--foreground)",
            }}
          >
            <option value="">Add model...</option>
            {unselected.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={add}
            disabled={!addValue}
            className="ui-btn-secondary flex items-center gap-1.5 px-3 py-2 text-sm disabled:opacity-40"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      )}
    </div>
  );
}
