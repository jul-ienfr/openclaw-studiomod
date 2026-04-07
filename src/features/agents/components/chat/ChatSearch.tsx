"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { AgentChatItem } from "@/features/agents/components/chatItems";

interface ChatSearchProps {
  messages: AgentChatItem[];
  onFilter: (filtered: AgentChatItem[]) => void;
}

export function ChatSearch({ messages, onFilter }: ChatSearchProps) {
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show on Ctrl+F, hide on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        setVisible(true);
        setTimeout(() => inputRef.current?.focus(), 0);
        return;
      }
      if (e.key === "Escape") {
        setVisible(false);
        setQuery("");
        onFilter(messages);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [messages, onFilter]);

  // Debounced filter
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);

      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        if (!value.trim()) {
          onFilter(messages);
          return;
        }
        const lower = value.toLowerCase();
        const filtered = messages.filter((msg) =>
          msg.text.toLowerCase().includes(lower),
        );
        onFilter(filtered);
      }, 200);
    },
    [messages, onFilter],
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-2">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search messages..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
      <button
        onClick={() => {
          setVisible(false);
          setQuery("");
          onFilter(messages);
        }}
        className="text-xs text-muted-foreground hover:text-foreground"
        aria-label="Close search"
      >
        Esc
      </button>
    </div>
  );
}
