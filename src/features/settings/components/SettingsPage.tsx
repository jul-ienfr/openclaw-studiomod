"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";

const ProvidersPanel = dynamic(
  () =>
    import("@/features/providers/components/ProvidersPanel").then(
      (m) => m.ProvidersPanel,
    ),
  { ssr: false },
);
const ChannelsPanel = dynamic(
  () =>
    import("@/features/channels/components/ChannelsPanel").then(
      (m) => m.ChannelsPanel,
    ),
  { ssr: false },
);
const RoutingPanel = dynamic(
  () =>
    import("@/features/routing/components/RoutingPanel").then(
      (m) => m.RoutingPanel,
    ),
  { ssr: false },
);
const WebhooksPanel = dynamic(
  () =>
    import("@/features/webhooks/components/WebhooksPanel").then(
      (m) => m.WebhooksPanel,
    ),
  { ssr: false },
);
const SkillsBrowser = dynamic(
  () =>
    import("@/features/skills/components/SkillsBrowser").then(
      (m) => m.SkillsBrowser,
    ),
  { ssr: false },
);
const WorkflowEditor = dynamic(
  () =>
    import("@/features/settings/components/WorkflowEditor").then(
      (m) => m.WorkflowEditor,
    ),
  { ssr: false },
);
const VoiceControls = dynamic(
  () =>
    import("@/features/voice/components/VoiceControls").then(
      (m) => m.VoiceControls,
    ),
  { ssr: false },
);
const BrandingPanel = dynamic(
  () =>
    import("@/features/settings/components/BrandingPanel").then(
      (m) => m.BrandingPanel,
    ),
  { ssr: false },
);
const AdvancedPanel = dynamic(
  () =>
    import("@/features/settings/components/AdvancedPanel").then(
      (m) => m.AdvancedPanel,
    ),
  { ssr: false },
);
const MobilePanel = dynamic(
  () =>
    import("@/features/settings/components/MobilePanel").then(
      (m) => m.MobilePanel,
    ),
  { ssr: false },
);

type Section = {
  key: string;
  subs: string[];
};

const SECTIONS: Section[] = [
  { key: "appearance", subs: ["theme", "branding"] },
  { key: "organisation", subs: ["pillars", "workflows"] },
  {
    key: "integrations",
    subs: ["providers", "credentials", "channels", "skills"],
  },
  { key: "automation", subs: ["routing", "webhooks", "voice"] },
  { key: "system", subs: ["mobile", "advanced"] },
];

function LoadingFallback() {
  return (
    <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
      <span>...</span>
    </div>
  );
}

function ContentPanel({ section, sub }: { section: string; sub: string }) {
  if (section === "integrations" && sub === "providers")
    return <ProvidersPanel />;
  if (section === "integrations" && sub === "channels")
    return <ChannelsPanel />;
  if (section === "integrations" && sub === "skills") return <SkillsBrowser />;
  if (section === "automation" && sub === "routing") return <RoutingPanel />;
  if (section === "automation" && sub === "webhooks") return <WebhooksPanel />;
  if (section === "automation" && sub === "voice") return <VoiceControls />;
  if (section === "organisation" && sub === "workflows")
    return <WorkflowEditor />;
  if (section === "appearance" && sub === "branding") return <BrandingPanel />;
  if (section === "system" && sub === "advanced") return <AdvancedPanel />;
  if (section === "system" && sub === "mobile") return <MobilePanel />;
  return null;
}

function SettingsPageInner() {
  const t = useTranslations("settings");
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeSection =
    searchParams.get("section") ?? SECTIONS[0]?.key ?? "appearance";
  const activeSub =
    searchParams.get("sub") ??
    SECTIONS.find((s) => s.key === activeSection)?.subs[0] ??
    "";

  const navigate = (section: string, sub: string) => {
    const params = new URLSearchParams();
    params.set("section", section);
    params.set("sub", sub);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 overflow-y-auto border-r border-border bg-surface-1 py-4">
        {SECTIONS.map((section) => (
          <div key={section.key} className="mb-1">
            <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t(`section_${section.key}`)}
            </div>
            {section.subs.map((sub) => {
              const active = activeSection === section.key && activeSub === sub;
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => navigate(section.key, sub)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                  }`}
                >
                  {t(`sub_${sub}`)}
                  {active && <ChevronRight className="h-3 w-3 shrink-0" />}
                </button>
              );
            })}
          </div>
        ))}
      </aside>

      {/* Content */}
      <main className="min-w-0 flex-1 overflow-hidden">
        <Suspense fallback={<LoadingFallback />}>
          <ContentPanel section={activeSection} sub={activeSub} />
        </Suspense>
      </main>
    </div>
  );
}

export function SettingsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
          <span>...</span>
        </div>
      }
    >
      <SettingsPageInner />
    </Suspense>
  );
}
