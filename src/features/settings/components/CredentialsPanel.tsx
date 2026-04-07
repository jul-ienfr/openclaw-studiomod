"use client";

import { useTranslations } from "next-intl";
import { KeyRound } from "lucide-react";

/**
 * Global credentials overview for the settings page.
 * Per-agent credentials are managed inside each agent's settings panel.
 */
export function CredentialsPanel() {
  const t = useTranslations("credentials");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
      <KeyRound className="h-10 w-10 text-muted-foreground" />
      <h2 className="text-lg font-semibold text-foreground">{t("title")}</h2>
      <p className="max-w-md text-sm text-muted-foreground">
        {t("globalHint")}
      </p>
    </div>
  );
}
