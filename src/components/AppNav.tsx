"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  Settings,
  Menu,
  X,
  ScrollText,
  BarChart2,
  CalendarClock,
  MessagesSquare,
  FileText,
  GitBranch,
  Layers,
  Puzzle,
  Lock,
  Mic,
  Webhook,
  Brain,
  Monitor,
  Smartphone,
  SlidersHorizontal,
  Radio,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { WatcherNavIcon } from "@/components/WatcherNavIcon";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }> | null;
  exact?: boolean;
};

type MainSection = {
  id: string;
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }> | null;
  /** Routes that should make this section "active" */
  matchPrefixes: string[];
  /** Collapsible sub-items shown below when this section is active/expanded */
  subItems?: NavItem[];
  /** Whether this section uses a custom badge icon instead of regular icon */
  customIcon?: boolean;
  /** Live badge count from URL poll */
  badgeCount?: number;
};

// ---------------------------------------------------------------------------
// Operations sub-routes (errors badge fetched live)
// ---------------------------------------------------------------------------

const OPERATIONS_SUB_ITEMS: NavItem[] = [
  { href: "/logs", label: "Logs", icon: ScrollText },
  { href: "/reports", label: "Rapports", icon: FileText },
  { href: "/jobs", label: "Cron Jobs", icon: CalendarClock },
  { href: "/intercom", label: "Intercom", icon: MessagesSquare },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/canvas", label: "Canvas", icon: LayoutDashboard },
];

// ---------------------------------------------------------------------------
// Settings sub-routes
// ---------------------------------------------------------------------------

const SETTINGS_SUB_ITEMS: NavItem[] = [
  { href: "/channels", label: "Channels", icon: Radio },
  { href: "/providers", label: "Providers", icon: Layers },
  { href: "/skills", label: "Skills", icon: Puzzle },
  { href: "/credentials", label: "Credentials", icon: Lock },
  { href: "/voice", label: "Voice", icon: Mic },
  { href: "/routing", label: "Routing", icon: GitBranch },
  { href: "/webhooks", label: "Webhooks", icon: Webhook },
  { href: "/config", label: "Configuration", icon: SlidersHorizontal },
  { href: "/ai-manager", label: "AI Manager", icon: Brain },
  { href: "/browser-view", label: "Browser", icon: Monitor },
  { href: "/mobile-access", label: "Mobile", icon: Smartphone },
];

const OPERATIONS_PREFIXES = OPERATIONS_SUB_ITEMS.map((i) => i.href);
const SETTINGS_PREFIXES = SETTINGS_SUB_ITEMS.map((i) => i.href);

// ---------------------------------------------------------------------------
// Main 5 sections
// ---------------------------------------------------------------------------

const MAIN_SECTIONS: MainSection[] = [
  {
    id: "dashboard",
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    matchPrefixes: ["/dashboard"],
  },
  {
    id: "agents",
    href: "/agents",
    label: "Agents",
    icon: Bot,
    matchPrefixes: ["/agents"],
  },
  {
    id: "watcher",
    href: "/watcher",
    label: "Watcher",
    icon: null,
    customIcon: true,
    matchPrefixes: ["/watcher"],
  },
  {
    id: "operations",
    href: "/logs",
    label: "Operations",
    icon: ScrollText,
    matchPrefixes: OPERATIONS_PREFIXES,
    subItems: OPERATIONS_SUB_ITEMS,
  },
  {
    id: "settings",
    href: "/config",
    label: "Settings",
    icon: Settings,
    matchPrefixes: SETTINGS_PREFIXES,
    subItems: SETTINGS_SUB_ITEMS,
  },
];

// ---------------------------------------------------------------------------
// OperationsBadge — live error count from log entries
// ---------------------------------------------------------------------------

function useOperationsErrorCount(): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true;

    async function fetchCount() {
      try {
        const res = await fetch("/api/logs?level=error&limit=1");
        if (!res.ok || !mounted) return;
        const data = (await res.json()) as { total?: number };
        if (typeof data.total === "number") setCount(data.total);
      } catch {
        /* silent */
      }
    }

    fetchCount();
    const id = setInterval(fetchCount, 30_000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return count;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isSectionActive(section: MainSection, pathname: string): boolean {
  return section.matchPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/"),
  );
}

function isSubItemActive(href: string, pathname: string): boolean {
  return pathname === href || pathname.startsWith(href + "/");
}

// ---------------------------------------------------------------------------
// Sub-item (vertical list)
// ---------------------------------------------------------------------------

function SubItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isSubItemActive(item.href, pathname);
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      title={item.label}
      aria-label={item.label}
      className={`group relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
      }`}
    >
      {item.icon && <item.icon className="h-4 w-4" strokeWidth={1.75} />}
      {/* Tooltip */}
      <span className="pointer-events-none absolute left-full ml-2 z-50 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:block">
        {item.label}
      </span>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Main section button
// ---------------------------------------------------------------------------

type SectionButtonProps = {
  section: MainSection;
  active: boolean;
  expanded: boolean;
  onToggleExpand: () => void;
  operationsErrorCount: number;
};

function SectionButton({
  section,
  active,
  expanded,
  onToggleExpand,
  operationsErrorCount,
}: SectionButtonProps) {
  const hasSubItems = (section.subItems?.length ?? 0) > 0;
  const badgeCount =
    section.id === "operations" ? operationsErrorCount : 0;

  const buttonClass = `group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
    active
      ? "bg-primary/10 text-primary border-l-[3px] border-primary rounded-l-none"
      : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
  }`;

  const inner = (
    <>
      {/* Icon */}
      {section.id === "watcher" ? (
        <WatcherNavIcon />
      ) : (
        section.icon && (
          <section.icon className="h-5 w-5" strokeWidth={1.75} />
        )
      )}

      {/* Operations error badge */}
      {badgeCount > 0 && (
        <span
          className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[9px] font-bold leading-none text-white"
          aria-label={`${badgeCount} errors`}
        >
          {badgeCount > 99 ? "99+" : badgeCount}
        </span>
      )}

      {/* Expand indicator for sections with sub-items */}
      {hasSubItems && (
        <span className="absolute bottom-0.5 right-0.5 text-muted-foreground/50">
          {expanded ? (
            <ChevronUp className="h-2.5 w-2.5" />
          ) : (
            <ChevronDown className="h-2.5 w-2.5" />
          )}
        </span>
      )}

      {/* Tooltip */}
      <span className="pointer-events-none absolute left-full ml-2 z-50 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md group-hover:block">
        {section.label}
      </span>
    </>
  );

  if (hasSubItems) {
    return (
      <button
        onClick={onToggleExpand}
        aria-expanded={expanded}
        aria-label={section.label}
        title={section.label}
        className={buttonClass}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      href={section.href}
      aria-current={active ? "page" : undefined}
      aria-label={section.label}
      title={section.label}
      className={buttonClass}
    >
      {inner}
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Nav content (shared between desktop sidebar and mobile drawer)
// ---------------------------------------------------------------------------

type NavContentProps = {
  pathname: string;
  expandedSections: Set<string>;
  onToggleSection: (id: string) => void;
  operationsErrorCount: number;
};

function NavContent({
  pathname,
  expandedSections,
  onToggleSection,
  operationsErrorCount,
}: NavContentProps) {
  return (
    <>
      {MAIN_SECTIONS.map((section, idx) => {
        const active = isSectionActive(section, pathname);
        const expanded = expandedSections.has(section.id);
        const hasSubItems = (section.subItems?.length ?? 0) > 0;

        return (
          <div key={section.id} className="contents">
            {/* Separator before each section except the first */}
            {idx > 0 && <hr className="my-1 w-8 border-border" />}

            {/* Main section button */}
            <SectionButton
              section={section}
              active={active}
              expanded={expanded}
              onToggleExpand={() => onToggleSection(section.id)}
              operationsErrorCount={operationsErrorCount}
            />

            {/* Sub-items when expanded */}
            {hasSubItems && expanded && (
              <div className="flex flex-col items-center gap-0.5">
                {section.subItems!.map((item) => (
                  <SubItem key={item.href} item={item} pathname={pathname} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

// ---------------------------------------------------------------------------
// AppNav component
// ---------------------------------------------------------------------------

export function AppNav() {
  const pathname = usePathname();
  const operationsErrorCount = useOperationsErrorCount();

  // Determine which sections are currently active by route — used only for initial state
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const expanded = new Set<string>();
    for (const section of MAIN_SECTIONS) {
      if (isSectionActive(section, pathname) && (section.subItems?.length ?? 0) > 0) {
        expanded.add(section.id);
      }
    }
    return expanded;
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Auto-close mobile drawer on navigation
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  const handleToggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const navContentProps: NavContentProps = {
    pathname,
    expandedSections,
    onToggleSection: handleToggleSection,
    operationsErrorCount,
  };

  return (
    <>
      {/* Desktop sidebar — hidden on mobile */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="hidden md:flex h-screen w-[72px] shrink-0 flex-col items-center gap-1 border-r border-sidebar-border bg-sidebar py-3 overflow-y-auto scrollbar-none backdrop-blur-sm"
      >
        <NavContent {...navContentProps} />
      </nav>

      {/* Mobile FAB */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-4 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="relative flex h-screen w-[72px] shrink-0 flex-col items-center gap-1 border-r border-sidebar-border bg-sidebar py-3 overflow-y-auto scrollbar-none"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-surface-2"
              aria-label="Close navigation"
            >
              <X className="h-4 w-4" />
            </button>
            <NavContent {...navContentProps} />
          </nav>
        </div>
      )}
    </>
  );
}
