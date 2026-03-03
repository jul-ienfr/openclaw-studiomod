"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/watcher", label: "Tableau de bord", exact: true },
  { href: "/watcher/review", label: "À traiter", exact: false },
  { href: "/watcher/scoring", label: "Scores", exact: false },
  { href: "/watcher/sources", label: "Sources", exact: false },
  { href: "/watcher/implementations", label: "Implémentations", exact: false },
  { href: "/watcher/reports", label: "Rapports", exact: false },
  { href: "/watcher/settings", label: "Réglages", exact: false },
];

export function WatcherNav() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="flex items-center gap-0.5 border-b border-border bg-sidebar px-4">
      <Link
        href="/"
        className="inline-flex items-center mr-2 px-2 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
        title="Retour au studio"
      >
        ← Studio
      </Link>
      <span className="h-5 w-px bg-border mr-2" />
      {NAV_LINKS.map(({ href, label, exact }) => {
        const active = isActive(href, exact);
        return (
          <Link
            key={href}
            href={href}
            className={`relative inline-flex items-center px-4 py-3 text-sm font-medium transition-colors ${
              active
                ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-t"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
