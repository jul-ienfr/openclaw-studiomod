"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  ScrollText,
  Radio,
  Layers,
  Puzzle,
  Lock,
  Mic,
  GitBranch,
  Webhook,
  Brain,
  Smartphone,
} from "lucide-react";
import { WatcherNavIcon } from "@/components/WatcherNavIcon";

const NAV_ITEMS = [
  { href: "/", label: "Agents", icon: Bot, exact: true },
  { href: "/logs", label: "Logs", icon: ScrollText },
  { href: "/channels", label: "Channels", icon: Radio },
  { href: "/providers", label: "Providers", icon: Layers },
  { href: "/skills", label: "Skills", icon: Puzzle },
  { href: "/credentials", label: "Credentials", icon: Lock },
  { href: "/voice", label: "Voice", icon: Mic },
  { href: "/routing", label: "Routing", icon: GitBranch },
  { href: "/webhooks", label: "Webhooks", icon: Webhook },
  { href: "/watcher", label: "Watcher", icon: null },
  { href: "/ai-manager", label: "AI Manager", icon: Brain },
  { href: "/mobile-access", label: "Mobile", icon: Smartphone },
];

export function AppNav() {
  const pathname = usePathname();

  const isActive = (href: string, exact = false) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      className="flex h-screen w-14 shrink-0 flex-col items-center gap-1 border-r border-sidebar-border bg-sidebar py-3"
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
        const active = isActive(href, exact);
        const className = `group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
          active
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
        }`;
        const children = (
          <>
            {href === "/watcher" ? (
              <WatcherNavIcon />
            ) : (
              Icon && <Icon className="h-5 w-5" strokeWidth={1.75} />
            )}
            <span className="pointer-events-none absolute left-full ml-2 z-50 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:block">
              {label}
            </span>
          </>
        );
        return (
          <Link
            key={href}
            href={href}
            title={label}
            aria-label={label}
            className={className}
          >
            {children}
          </Link>
        );
      })}
    </nav>
  );
}
