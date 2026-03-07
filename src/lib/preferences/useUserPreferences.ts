"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export type UserPreferences = {
  lastSection: string;
  lastOperationsTab: string;
  lastSettingsSection: string;
  sidebarCollapsed: boolean;
  lastAgentId: string | null;
  notificationFilter: string;
};

export const DEFAULT_PREFERENCES: UserPreferences = {
  lastSection: "dashboard",
  lastOperationsTab: "logs",
  lastSettingsSection: "appearance",
  sidebarCollapsed: false,
  lastAgentId: null,
  notificationFilter: "all",
};

const STORAGE_KEY = "openclaw-studio-v2-prefs";

const loadFromStorage = (): UserPreferences => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    const parsed = JSON.parse(raw) as Partial<UserPreferences>;
    return { ...DEFAULT_PREFERENCES, ...parsed };
  } catch {
    return DEFAULT_PREFERENCES;
  }
};

const saveToStorage = (prefs: UserPreferences): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // localStorage may be full or unavailable — silently ignore
  }
};

const isServer = typeof window === "undefined";

export const useUserPreferences = () => {
  const [prefs, setPrefs] = useState<UserPreferences>(() =>
    isServer ? DEFAULT_PREFERENCES : loadFromStorage(),
  );
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestPrefsRef = useRef<UserPreferences>(prefs);

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        // Flush pending write on unmount
        saveToStorage(latestPrefsRef.current);
      }
    };
  }, []);

  const setPref = useCallback(
    <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
      setPrefs((prev) => {
        const next = { ...prev, [key]: value };
        latestPrefsRef.current = next;

        // Debounced write to localStorage (500ms)
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
          saveToStorage(next);
          debounceRef.current = null;
        }, 500);

        return next;
      });
    },
    [],
  );

  return { prefs, setPref } as const;
};
