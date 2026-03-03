"use client";

import Link from "next/link";

const TABS = [
  { id: "sources", label: "Sources" },
  { id: "scoring", label: "Scores" },
  { id: "automation", label: "Automatisation" },
  { id: "notifications", label: "Notifications" },
  { id: "models", label: "Modèles" },
  { id: "security", label: "Sécurité" },
  { id: "advanced", label: "Avancé" },
] as const;

type SettingsNavProps = {
  current: string;
};

export function SettingsNav({ current }: SettingsNavProps) {
  return (
    <nav className="flex gap-1 rounded-xl bg-muted p-1" role="tablist">
      {TABS.map((tab) => {
        const isActive = current === tab.id;
        return (
          <Link
            key={tab.id}
            href={`/watcher/settings/${tab.id}`}
            role="tab"
            aria-selected={isActive}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
