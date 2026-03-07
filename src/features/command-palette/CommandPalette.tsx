"use client";

import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  LayoutDashboard,
  Bot,
  Eye,
  ScrollText,
  FileText,
  CalendarClock,
  MessagesSquare,
  BarChart2,
  Radio,
  Layers,
  Puzzle,
  Lock,
  Mic,
  GitBranch,
  Webhook,
  SlidersHorizontal,
  Brain,
  Monitor,
  Smartphone,
  CornerDownLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useFuzzySearch } from "./useFuzzySearch";
import {
  getStaticCommands,
  buildAgentCommands,
  type CommandItem,
} from "./commands";

// ---------------------------------------------------------------------------
// Icon lookup — maps icon name strings to actual Lucide components
// ---------------------------------------------------------------------------

const ICON_MAP: Record<string, LucideIcon> = {
  LayoutDashboard,
  Bot,
  Eye,
  ScrollText,
  FileText,
  CalendarClock,
  MessagesSquare,
  BarChart2,
  Radio,
  Layers,
  Puzzle,
  Lock,
  Mic,
  GitBranch,
  Webhook,
  SlidersHorizontal,
  Brain,
  Monitor,
  Smartphone,
};

function getIcon(name?: string): LucideIcon | null {
  if (!name) return null;
  return ICON_MAP[name] ?? null;
}

// ---------------------------------------------------------------------------
// Section ordering for grouped display
// ---------------------------------------------------------------------------

const SECTION_ORDER = ["Navigation", "Agents", "Settings", "Actions"];

function groupBySections(items: CommandItem[]): Map<string, CommandItem[]> {
  const map = new Map<string, CommandItem[]>();
  for (const item of items) {
    const existing = map.get(item.section);
    if (existing) {
      existing.push(item);
    } else {
      map.set(item.section, [item]);
    }
  }
  // Sort sections by defined order
  const sorted = new Map<string, CommandItem[]>();
  for (const section of SECTION_ORDER) {
    const items = map.get(section);
    if (items) sorted.set(section, items);
  }
  // Append any sections not in the predefined order
  for (const [section, items] of map) {
    if (!sorted.has(section)) sorted.set(section, items);
  }
  return sorted;
}

// ---------------------------------------------------------------------------
// CommandPalette
// ---------------------------------------------------------------------------

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  agents?: { agentId: string; name: string }[];
}

export function CommandPalette({ open, onClose, agents }: CommandPaletteProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Build the full command list
  const allCommands = useMemo(() => {
    const staticCmds = getStaticCommands();
    const agentCmds = agents ? buildAgentCommands(agents) : [];
    return [...staticCmds, ...agentCmds];
  }, [agents]);

  // Search label includes keywords for better matching
  const getSearchLabel = useCallback(
    (item: CommandItem) =>
      [item.label, ...(item.keywords ?? [])].join(" "),
    [],
  );

  const results = useFuzzySearch(allCommands, query, getSearchLabel);

  // Limit visible results
  const visibleResults = results.slice(0, 10);

  // Flatten for index-based keyboard navigation
  const flatResults = visibleResults;

  // Open / close the dialog element
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      // Reset state on open
      setQuery("");
      setSelectedIndex(0);
      // Focus the input after a frame (dialog open is async)
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const selected = listRef.current.querySelector(
      '[data-selected="true"]',
    );
    selected?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const executeCommand = useCallback(
    (cmd: CommandItem) => {
      onClose();
      if (cmd.href) {
        router.push(cmd.href);
      } else if (cmd.action) {
        cmd.action();
      }
    },
    [onClose, router],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < flatResults.length - 1 ? prev + 1 : 0,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : flatResults.length - 1,
          );
          break;
        case "Enter":
          e.preventDefault();
          if (flatResults[selectedIndex]) {
            executeCommand(flatResults[selectedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [flatResults, selectedIndex, executeCommand, onClose],
  );

  // Group the visible results for rendering
  const grouped = groupBySections(visibleResults);

  // Build a global index counter for highlighting the selected item
  let globalIdx = 0;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label="Command palette"
      className="w-full max-w-lg rounded-xl border border-border bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/50 animate-[scaleIn_var(--animation-duration)_ease_both]"
    >
      {/* Search input */}
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search commands..."
          aria-label="Search commands"
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border bg-surface-1 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
          Esc
        </kbd>
      </div>

      {/* Results */}
      <div
        ref={listRef}
        role="listbox"
        aria-label="Command results"
        className="max-h-[320px] overflow-y-auto py-1.5"
      >
        {flatResults.length === 0 && query.length > 0 && (
          <div className="px-3 py-6 text-center text-sm text-muted-foreground">
            No results found.
          </div>
        )}

        {Array.from(grouped.entries()).map(([section, items]) => (
          <div key={section} role="group" aria-label={section}>
            <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {section}
            </div>
            {items.map((cmd) => {
              const idx = globalIdx++;
              const isSelected = idx === selectedIndex;
              const Icon = getIcon(cmd.icon);
              return (
                <button
                  key={cmd.id}
                  role="option"
                  aria-selected={isSelected}
                  data-selected={isSelected}
                  onClick={() => executeCommand(cmd)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-surface-1"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`h-4 w-4 shrink-0 ${isSelected ? "text-primary" : ""}`}
                      strokeWidth={1.75}
                    />
                  )}
                  <span className="flex-1 truncate">{cmd.label}</span>
                  {isSelected && (
                    <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer hint */}
      <div className="flex items-center gap-3 border-t border-border px-3 py-2 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <kbd className="rounded border border-border bg-surface-1 px-1 py-0.5 font-mono">
            &uarr;&darr;
          </kbd>
          navigate
        </span>
        <span className="flex items-center gap-1">
          <kbd className="rounded border border-border bg-surface-1 px-1 py-0.5 font-mono">
            &crarr;
          </kbd>
          select
        </span>
        <span className="flex items-center gap-1">
          <kbd className="rounded border border-border bg-surface-1 px-1 py-0.5 font-mono">
            esc
          </kbd>
          close
        </span>
      </div>
    </dialog>
  );
}
