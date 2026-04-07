// ---------------------------------------------------------------------------
// Command registry — static navigation + dynamic agent commands
// ---------------------------------------------------------------------------

export type CommandItem = {
  id: string;
  label: string;
  section: string; // "Navigation" | "Agents" | "Actions" | "Settings"
  icon?: string; // lucide icon name
  href?: string; // for navigation commands
  action?: () => void; // for action commands
  keywords?: string[]; // extra search terms
};

export function getStaticCommands(): CommandItem[] {
  return [
    // -- Main navigation --
    {
      id: "nav-dashboard",
      label: "Dashboard",
      section: "Navigation",
      icon: "LayoutDashboard",
      href: "/dashboard",
    },
    {
      id: "nav-agents",
      label: "Agents",
      section: "Navigation",
      icon: "Bot",
      href: "/agents",
    },
    {
      id: "nav-watcher",
      label: "Watcher",
      section: "Navigation",
      icon: "Eye",
      href: "/watcher",
    },

    // -- Operations sub-routes --
    {
      id: "nav-ops-logs",
      label: "Logs",
      section: "Navigation",
      icon: "ScrollText",
      href: "/logs",
      keywords: ["log", "error", "operations"],
    },
    {
      id: "nav-ops-reports",
      label: "Reports",
      section: "Navigation",
      icon: "FileText",
      href: "/reports",
      keywords: ["operations"],
    },
    {
      id: "nav-ops-cron",
      label: "Cron Jobs",
      section: "Navigation",
      icon: "CalendarClock",
      href: "/jobs",
      keywords: ["cron", "schedule", "operations"],
    },
    {
      id: "nav-ops-intercom",
      label: "Intercom",
      section: "Navigation",
      icon: "MessagesSquare",
      href: "/intercom",
      keywords: ["messages", "operations"],
    },
    {
      id: "nav-ops-analytics",
      label: "Analytics",
      section: "Navigation",
      icon: "BarChart2",
      href: "/analytics",
      keywords: ["stats", "operations"],
    },
    {
      id: "nav-ops-canvas",
      label: "Canvas",
      section: "Navigation",
      icon: "LayoutDashboard",
      href: "/canvas",
      keywords: ["operations"],
    },

    // -- Settings sub-routes --
    {
      id: "nav-settings-channels",
      label: "Channels",
      section: "Settings",
      icon: "Radio",
      href: "/channels",
      keywords: ["telegram", "whatsapp", "settings"],
    },
    {
      id: "nav-settings-providers",
      label: "Providers",
      section: "Settings",
      icon: "Layers",
      href: "/providers",
      keywords: ["llm", "api", "model", "settings"],
    },
    {
      id: "nav-settings-skills",
      label: "Skills",
      section: "Settings",
      icon: "Puzzle",
      href: "/skills",
      keywords: ["settings"],
    },
    {
      id: "nav-settings-credentials",
      label: "Credentials",
      section: "Settings",
      icon: "Lock",
      href: "/credentials",
      keywords: ["secret", "token", "settings"],
    },
    {
      id: "nav-settings-voice",
      label: "Voice",
      section: "Settings",
      icon: "Mic",
      href: "/voice",
      keywords: ["tts", "speech", "settings"],
    },
    {
      id: "nav-settings-routing",
      label: "Routing",
      section: "Settings",
      icon: "GitBranch",
      href: "/routing",
      keywords: ["settings"],
    },
    {
      id: "nav-settings-webhooks",
      label: "Webhooks",
      section: "Settings",
      icon: "Webhook",
      href: "/webhooks",
      keywords: ["settings"],
    },
    {
      id: "nav-settings-config",
      label: "Configuration",
      section: "Settings",
      icon: "SlidersHorizontal",
      href: "/config",
      keywords: ["settings", "config"],
    },
    {
      id: "nav-settings-ai-manager",
      label: "AI Manager",
      section: "Settings",
      icon: "Brain",
      href: "/ai-manager",
      keywords: ["proxy", "settings"],
    },
    {
      id: "nav-settings-browser",
      label: "Browser",
      section: "Settings",
      icon: "Monitor",
      href: "/browser-view",
      keywords: ["settings"],
    },
    {
      id: "nav-settings-mobile",
      label: "Mobile Access",
      section: "Settings",
      icon: "Smartphone",
      href: "/mobile-access",
      keywords: ["settings"],
    },

    // -- Actions --
    {
      id: "action-clear-session",
      label: "Clear session",
      section: "Actions",
      icon: "Trash2",
      action: () => document.dispatchEvent(new CustomEvent("chat:clear")),
    },
    {
      id: "action-toggle-sidebar",
      label: "Toggle sidebar",
      section: "Actions",
      icon: "PanelLeft",
      action: () => document.dispatchEvent(new CustomEvent("sidebar:toggle")),
      keywords: ["sidebar"],
    },
    {
      id: "action-export-chat",
      label: "Export conversation",
      section: "Actions",
      icon: "Download",
      action: () => document.dispatchEvent(new CustomEvent("chat:export")),
      keywords: ["export", "download"],
    },
    {
      id: "action-restart-agent",
      label: "Restart agent",
      section: "Actions",
      icon: "RefreshCw",
      action: () => document.dispatchEvent(new CustomEvent("agent:restart")),
      keywords: ["restart", "reload", "agent"],
    },
    {
      id: "action-stop-agent",
      label: "Stop agent",
      section: "Actions",
      icon: "Square",
      action: () => document.dispatchEvent(new CustomEvent("agent:stop")),
      keywords: ["stop", "kill", "agent"],
    },
    {
      id: "action-toggle-tools",
      label: "Toggle tool calling",
      section: "Actions",
      icon: "Wrench",
      action: () =>
        document.dispatchEvent(new CustomEvent("agent:toggle-tools")),
      keywords: ["tools", "function", "toggle"],
    },
    {
      id: "action-toggle-thinking",
      label: "Toggle thinking traces",
      section: "Actions",
      icon: "Brain",
      action: () =>
        document.dispatchEvent(new CustomEvent("agent:toggle-thinking")),
      keywords: ["thinking", "reasoning", "traces", "toggle"],
    },
    {
      id: "action-switch-model",
      label: "Switch model",
      section: "Actions",
      icon: "Cpu",
      action: () =>
        document.dispatchEvent(new CustomEvent("agent:switch-model")),
      keywords: ["model", "llm", "switch", "change"],
    },
  ];
}

export function getActionCommands(handlers: {
  clearSession?: () => void;
  toggleSidebar?: () => void;
}): CommandItem[] {
  const items: CommandItem[] = [];
  if (handlers.clearSession) {
    items.push({
      id: "action-clear-session-handler",
      label: "Clear session",
      section: "Actions",
      icon: "Trash2",
      action: handlers.clearSession,
    });
  }
  if (handlers.toggleSidebar) {
    items.push({
      id: "action-toggle-sidebar-handler",
      label: "Toggle sidebar",
      section: "Actions",
      icon: "PanelLeft",
      action: handlers.toggleSidebar,
      keywords: ["sidebar"],
    });
  }
  return items;
}

export function buildAgentCommands(
  agents: { agentId: string; name: string }[],
): CommandItem[] {
  return agents.map((a) => ({
    id: `agent-${a.agentId}`,
    label: a.name,
    section: "Agents",
    icon: "Bot",
    href: `/agents?agent=${a.agentId}`,
    keywords: [a.agentId],
  }));
}
