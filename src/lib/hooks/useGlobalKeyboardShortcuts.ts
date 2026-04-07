"use client";

import { useEffect } from "react";

export function useGlobalKeyboardShortcuts() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMod = e.metaKey || e.ctrlKey;

      if (isMod && e.key === "Enter") {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent("chat:submit"));
        return;
      }

      if (e.key === "Escape") {
        document.dispatchEvent(new CustomEvent("modal:close"));
        return;
      }

      if (isMod && e.key === "/") {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent("sidebar:toggle"));
        return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
