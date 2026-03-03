export type ProviderId =
  | "anthropic"
  | "openai"
  | "perplexity"
  | "google"
  | "mistral"
  | "groq"
  | "openrouter"
  | "ollama"
  | "deepseek"
  | "together"
  | "fireworks"
  | "cohere"
  | "amazon-bedrock"
  | "azure-openai"
  | "cloudflare"
  | "nvidia"
  | "huggingface"
  | "xai"
  | "litellm"
  | "custom";

export type ProviderAuthType = "apiKey" | "accessToken";

export type ProviderStatus = "configured" | "unconfigured" | "error";

export type ProviderConfig = {
  id: ProviderId;
  /** Storage key in openclaw.json (e.g. "anthropic", "anthropic-proxy") — may differ from id for extra keys */
  storageKey?: string;
  /** Human-readable label to distinguish multiple keys (e.g. "Proxy", "Personal") */
  label?: string;
  apiKey?: string;
  accessToken?: string;
  authType: ProviderAuthType;
  baseUrl?: string;
  enabled: boolean;
};

export type OcApiType = "anthropic-messages" | "openai" | "openai-responses" | "google" | "mistral" | "bedrock";

export type ProviderDefinition = {
  id: ProviderId;
  name: string;
  description: string;
  docsUrl: string;
  iconColor: string;
  models: ProviderModelInfo[];
  supportsCustomEndpoint: boolean;
  supportsAccessToken: boolean;
  /** OpenClaw api format string — determines which plugin handles this provider */
  ocApi: OcApiType;
  /** Default baseUrl for OpenAI-compatible providers that have a fixed endpoint */
  defaultBaseUrl?: string;
  signupUrl?: string;
  guideSteps?: string[];
};

export type ProviderModelInfo = {
  id: string;
  name: string;
  category: "reasoning" | "general" | "search" | "code" | "multimodal" | "fast";
  contextWindow: number;
  costTier: "low" | "mid" | "high";
  badges: string[];
};

/** A configured key entry for a provider (one provider can have multiple) */
export type ProviderKeyEntry = {
  /** Storage key in openclaw.json (e.g. "anthropic", "anthropic-proxy") */
  storageKey: string;
  /** Display label (e.g. "Default", "Proxy") */
  label: string;
  config: ProviderConfig;
};

export type ProviderWithStatus = ProviderDefinition & {
  status: ProviderStatus;
  config?: ProviderConfig;
  /** All configured keys for this provider type */
  keys: ProviderKeyEntry[];
};
