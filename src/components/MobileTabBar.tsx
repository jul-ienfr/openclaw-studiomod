"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, LayoutDashboard, Puzzle, Radio, Settings } from "lucide-react";

const TABS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agents", label: "Agents", icon: Bot },
  { href: "/skills", label: "Skills", icon: Puzzle },
  { href: "/channels", label: "Channels", icon: Radio },
  { href: "/config", label: "Config", icon: Settings },
] as const;

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {TABS.map((tab) => {
        const active =
          pathname === tab.href || pathname.startsWith(tab.href + "/");
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className="mobile-bottom-nav-item"
            data-active={active}
          >
            <tab.icon strokeWidth={1.75} />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
