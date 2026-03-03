import { Check, KeyRound, Plus, Settings } from "lucide-react";
import type { ProviderWithStatus, ProviderKeyEntry } from "../types";
import { ServiceLogo } from "@/components/ServiceLogo";

type HealthStatus = "idle" | "testing" | "healthy" | "unhealthy";

type ProviderCardProps = {
  provider: ProviderWithStatus;
  onConfigure: (storageKey: string) => void;
  onAddKey: (providerId: string) => void;
  healthStatus?: HealthStatus;
};

export const ProviderCard = ({ provider, onConfigure, onAddKey, healthStatus }: ProviderCardProps) => {
  const isConfigured = provider.status === "configured";
  const keys = provider.keys ?? [];

  return (
    <div
      className={`ui-card group relative flex flex-col gap-3 rounded-xl border p-4 transition-all ${
        isConfigured
          ? "border-primary/30 bg-primary/5"
          : "border-border bg-card hover:border-border/80"
      }`}
      data-testid={`provider-card-${provider.id}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <ServiceLogo
            serviceId={provider.id}
            name={provider.name}
            fallbackColor={provider.iconColor}
            size={32}
          />
          <div>
            <h3 className="text-sm font-semibold text-foreground">{provider.name}</h3>
            <p className="text-[11px] text-muted-foreground">{provider.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {healthStatus && healthStatus !== "idle" ? (
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                healthStatus === "testing"
                  ? "animate-pulse bg-yellow-400"
                  : healthStatus === "healthy"
                    ? "bg-green-500"
                    : "bg-red-500"
              }`}
              title={healthStatus}
              aria-label={`Provider ${healthStatus}`}
            />
          ) : null}
          {isConfigured ? (
            <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              <Check className="h-3 w-3" aria-hidden="true" />
              {keys.length > 1 ? `${keys.length} clés` : "Active"}
            </span>
          ) : null}
        </div>
      </div>

      {provider.models.length > 0 ? (
        <div className="flex flex-wrap gap-1">
          {provider.models.map((model) => (
            <span
              key={model.id}
              className="rounded-md bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {model.name}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-[10px] text-muted-foreground italic">Custom models</p>
      )}

      {isConfigured ? (
        <div className="space-y-1.5">
          {keys.map((key) => (
            <KeyRow key={key.storageKey} entry={key} onEdit={() => onConfigure(key.storageKey)} />
          ))}
          <button
            type="button"
            className="ui-btn-ghost inline-flex w-full items-center justify-center gap-1 rounded-md border border-dashed border-border/60 px-2 py-1 text-[10px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            onClick={() => onAddKey(provider.id)}
          >
            <Plus className="h-3 w-3" aria-hidden="true" />
            Ajouter une clé
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="ui-btn-ghost w-full justify-center rounded-md border border-dashed border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          onClick={() => onAddKey(provider.id)}
          data-testid={`configure-${provider.id}`}
        >
          <KeyRound className="mr-1.5 inline h-3 w-3" aria-hidden="true" />
          Add API Key
        </button>
      )}
    </div>
  );
};

function KeyRow({ entry, onEdit }: { entry: ProviderKeyEntry; onEdit: () => void }) {
  const maskedKey = entry.config.apiKey
    ? `${entry.config.apiKey.slice(0, 6)}${"*".repeat(6)}`
    : entry.config.baseUrl
      ? entry.config.baseUrl.replace(/^https?:\/\//, "").slice(0, 20)
      : "Key set";

  return (
    <div className="flex items-center justify-between rounded-md bg-surface-2/50 px-2 py-1.5">
      <div className="flex items-center gap-2 min-w-0">
        <KeyRound className="h-3 w-3 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span className="truncate text-[11px] font-medium text-foreground">{entry.label}</span>
        <span className="truncate text-[10px] text-muted-foreground font-mono">{maskedKey}</span>
      </div>
      <button
        type="button"
        className="ui-btn-ghost inline-flex shrink-0 items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium"
        onClick={onEdit}
        aria-label={`Modifier ${entry.label}`}
      >
        <Settings className="h-3 w-3" aria-hidden="true" />
      </button>
    </div>
  );
}
