"use client";

import { useGlobalKeyboardShortcuts } from "@/lib/hooks/useGlobalKeyboardShortcuts";

export function GlobalKeyboardShortcuts() {
  useGlobalKeyboardShortcuts();
  return null;
}
