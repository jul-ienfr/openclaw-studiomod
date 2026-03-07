"use client";

import { useEffect, useState, useCallback } from "react";
import { CommandPalette } from "./CommandPalette";

// ---------------------------------------------------------------------------
// CommandPaletteProvider
//
// Renders the command palette modal and listens for Ctrl+K / Cmd+K globally.
// Place this once in the app layout (inside a client boundary).
// ---------------------------------------------------------------------------

interface CommandPaletteProviderProps {
  agents?: { agentId: string; name: string }[];
}

export function CommandPaletteProvider({
  agents,
}: CommandPaletteProviderProps) {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <CommandPalette open={open} onClose={handleClose} agents={agents} />
  );
}
