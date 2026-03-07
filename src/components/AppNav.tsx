"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Bot, Eye, Zap, Settings, Bell } from "lucide-react";
import { useNotifications } from "@/features/notifications/useNotifications";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agents", label: "Agents", icon: Bot },
  { href: "/watcher", label: "Watcher", icon: Eye },
  { href: "/operations", label: "Operations", icon: Zap },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;

export function AppNav() {
  const pathname = usePathname();
  const { unreadCount } = useNotifications();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className="glass-sidebar flex h-screen w-[72px] shrink-0 flex-col items-center border-r border-border/50 py-4"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <Bot className="h-5 w-5" />
      </div>

      {/* Nav items */}
      <div className="flex flex-1 flex-col items-center gap-1.5">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              title={label}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 ${
                active
                  ? "bg-primary/15 text-primary shadow-sm ring-1 ring-primary/20"
                  : "text-muted-foreground hover:bg-surface-2 hover:text-foreground hover:scale-105"
              }`}
            >
              {active && (
                <span className="absolute -left-[1px] top-2 h-7 w-[3px] rounded-r-full bg-primary" />
              )}
              <Icon className="h-5 w-5" strokeWidth={active ? 2 : 1.75} />
              <span className="pointer-events-none absolute left-full ml-3 z-50 hidden whitespace-nowrap rounded-lg border border-border bg-popover px-2.5 py-1.5 text-xs font-medium text-popover-foreground shadow-lg group-hover:block">
                {label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Footer — notification bell */}
      <div className="mt-auto flex flex-col items-center gap-2 pb-2">
        <button
          className="relative flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell className="h-5 w-5" strokeWidth={1.75} />
          {unreadCount > 0 && (
            <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
