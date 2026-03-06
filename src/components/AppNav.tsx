"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  BarChart2,
  ScrollText,
  Radio,
  Layers,
  Puzzle,
  Lock,
  Mic,
  GitBranch,
  Webhook,
  MessagesSquare,
  LayoutDashboard,
  Brain,
  Smartphone,
  Settings,
  FileText,
  SlidersHorizontal,
  Menu,
  CalendarClock,
  Monitor,
} from "lucide-react";
import { WatcherNavIcon } from "@/components/WatcherNavIcon";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }> | null;
  exact?: boolean;
};

type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
  collapsible?: boolean;
};

const NAV_GROUPS: NavGroup[] = [
  {
    id: "operations",
    label: "Opérations",
    items: [
      { href: "/agents", label: "Agents", icon: Bot },
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/watcher", label: "Watcher", icon: null },
      { href: "/analytics", label: "Analytics", icon: BarChart2 },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    items: [
      { href: "/logs", label: "Logs", icon: ScrollText },
      { href: "/reports", label: "Rapports", icon: FileText },
      { href: "/jobs", label: "Cron Jobs", icon: CalendarClock },
      { href: "/intercom", label: "Intercom", icon: MessagesSquare },
    ],
  },
  {
    id: "configuration",
    label: "Configuration",
    collapsible: true,
    items: [
      { href: "/channels", label: "Channels", icon: Radio },
      { href: "/providers", label: "Providers", icon: Layers },
      { href: "/skills", label: "Skills", icon: Puzzle },
      { href: "/credentials", label: "Credentials", icon: Lock },
      { href: "/voice", label: "Voice", icon: Mic },
      { href: "/routing", label: "Routing", icon: GitBranch },
      { href: "/webhooks", label: "Webhooks", icon: Webhook },
      { href: "/canvas", label: "Canvas", icon: LayoutDashboard },
    ],
  },
  {
    id: "system",
    label: "Système",
    items: [
      { href: "/ai-manager", label: "AI Manager", icon: Brain },
      { href: "/browser-view", label: "Browser", icon: Monitor },
      { href: "/mobile-access", label: "Mobile", icon: Smartphone },
      { href: "/config", label: "Configuration", icon: Settings },
    ],
  },
];

export function AppNav() {
  const pathname = usePathname();

  // Auto-expand config group if a config route is active
  const configPaths =
    NAV_GROUPS.find((g) => g.id === "configuration")?.items.map(
      (i) => i.href,
    ) ?? [];
  const configActive = configPaths.some(
    (href) => pathname === href || pathname.startsWith(href + "/"),
  );
  const [configExpanded, setConfigExpanded] = useState(configActive);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Auto-close mobile drawer on navigation (React "adjusting state during render" pattern)
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  const isActive = (href: string, exact = false) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const renderItem = (item: NavItem) => {
    const active = isActive(item.href, item.exact);
    const className = `group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
      active
        ? "bg-primary text-primary-foreground"
        : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
    }`;
    return (
      <Link
        key={item.href}
        href={item.href}
        title={item.label}
        aria-label={item.label}
        className={className}
      >
        {item.href === "/watcher" ? (
          <WatcherNavIcon />
        ) : (
          item.icon && <item.icon className="h-5 w-5" strokeWidth={1.75} />
        )}
        <span className="pointer-events-none absolute left-full ml-2 z-50 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:block">
          {item.label}
        </span>
      </Link>
    );
  };

  const renderNavContent = () => (
    <>
      {NAV_GROUPS.map((group, groupIdx) => (
        <div key={group.id} className="contents">
          {/* Separator before each group except the first */}
          {groupIdx > 0 && <hr className="my-1 w-8 border-border" />}

          {/* Group items */}
          {group.collapsible ? (
            <>
              {/* Collapse toggle */}
              <button
                onClick={() => setConfigExpanded((v) => !v)}
                title={group.label}
                aria-label={`Toggle ${group.label}`}
                className="group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors text-muted-foreground hover:bg-surface-2 hover:text-foreground"
              >
                <SlidersHorizontal className="h-5 w-5" strokeWidth={1.75} />
                <span className="pointer-events-none absolute left-full ml-2 z-50 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:block">
                  {group.label} {configExpanded ? "▲" : "▼"}
                </span>
              </button>
              {configExpanded && group.items.map(renderItem)}
            </>
          ) : (
            group.items.map(renderItem)
          )}
        </div>
      ))}
    </>
  );

  return (
    <>
      {/* Desktop sidebar — hidden on mobile */}
      <nav
        className="hidden md:flex h-screen w-14 shrink-0 flex-col items-center gap-1 border-r border-sidebar-border bg-sidebar py-3 overflow-y-auto scrollbar-none"
        aria-label="Main navigation"
      >
        {renderNavContent()}
      </nav>

      {/* Mobile FAB */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-4 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className="relative flex h-screen w-14 shrink-0 flex-col items-center gap-1 border-r border-sidebar-border bg-sidebar py-3 overflow-y-auto scrollbar-none"
            aria-label="Main navigation"
          >
            {renderNavContent()}
          </nav>
        </div>
      )}
    </>
  );
}
