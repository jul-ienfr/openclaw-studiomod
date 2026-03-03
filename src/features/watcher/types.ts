// ─── Watcher Domain Types ───

export interface SourceState {
  source: string;
  last_check: string | null;
  last_success: string | null;
  consecutive_errors: number;
  last_error: string | null;
  items_total: number;
}

export interface WatchItem {
  id: string;
  source: string;
  source_tier: number;
  source_url: string;
  author: string;
  title: string;
  content: string;
  category: string;
  timestamp: string;
  raw_data: string;
  first_seen: string;
  status: "new" | "scored" | "implemented" | "archived";
}

export interface ScoreRecord {
  item_id: string;
  fiabilite: number;
  securite: number;
  fonctionnement: number;
  interet: number;
  global: number;
  decision: "AUTO" | "PROPOSE" | "NOTIFY" | "ARCHIVE" | "BLOCK" | "SUSPECT";
  details: string;
  scored_at: string;
  // Joined from items
  title?: string;
  source?: string;
  source_url?: string;
  category?: string;
  author?: string;
  timestamp?: string;
}

export interface Implementation {
  id: string;
  item_id: string;
  action: string;
  backup_path: string | null;
  status: "success" | "failed" | "rolled_back";
  implemented_at: string;
  rollback_cmd: string | null;
  // Joined from items
  title?: string;
  source?: string;
}

export type Decision = ScoreRecord["decision"];
export type AutomationLevel = "notify" | "analyze" | "semi-auto" | "full-auto";

export interface WebPage {
  url: string;
  selector: string;
  label: string;
}

export interface SourceConfig {
  enabled: boolean;
  check_interval_minutes: number;
  [key: string]: unknown;
}

export interface ScoringWeights {
  fiabilite: number;
  securite: number;
  fonctionnement: number;
  interet: number;
}

export interface DecisionThresholds {
  auto: { global: number; fiabilite_min: number; securite_min: number };
  propose: { global: number; fiabilite_min: number; securite_min: number };
  notify: { global: number; fiabilite_min: number; securite_min: number };
}

export interface WatcherConfig {
  sources: Record<string, SourceConfig>;
  models?: ModelConfig[];
  models_tasks?: {
    scoring?: string;
    analysis?: string;
    reports?: string;
  };
  models_budget?: {
    limit_api_calls: boolean;
    max_calls_per_hour: number;
    max_calls_per_day: number;
  };
  scoring: {
    weights: ScoringWeights;
    thresholds: DecisionThresholds;
    security_floor: number;
    reliability_floor: number;
    block_credentials_modification: boolean;
    block_systemd_modification: boolean;
    block_root_access: boolean;
    warn_unaudited_npm: boolean;
    security_fix_multiplier: number;
    breaking_change_security_ceiling: number;
    sub_criteria: Record<string, Record<string, number>>;
    tier_reliability: Record<string, number>;
  };
  automation: {
    automation_level: AutomationLevel;
    dry_run_enabled: boolean;
    zod_validation: boolean;
    npm_diff_enabled: boolean;
    backup_before_modification: boolean;
    auto_rollback_on_error: boolean;
    rollback_retention_days: number;
    feedback_enabled: boolean;
    feedback_auto_tune_threshold: number;
    feedback_recalibration_interval_days: number;
    correlation_similarity_threshold: number;
    cross_check_github: boolean;
    cross_check_npm: boolean;
  };
  notifications: {
    telegram_enabled: boolean;
    telegram_chat_id: string;
    digest_mode: boolean;
    digest_interval_minutes: number;
    inline_keyboard: boolean;
    notify_on_auto: boolean;
    notify_on_propose: boolean;
    notify_on_block: boolean;
    notify_on_errors: boolean;
    weekly_report_enabled: boolean;
    weekly_report_schedule: string;
    weekly_report_timezone: string;
    weekly_report_format: "markdown" | "html" | "json";
    weekly_report_sync_nextcloud: boolean;
  };
  security: {
    blocklist_authors: string[];
    blocklist_packages: string[];
    blocklist_patterns: string[];
    virustotal_check: boolean;
    virustotal_min_clean_engines: number;
    min_downloads_for_auto: number;
    code_review_required: boolean;
    dangerous_patterns: string[];
    warn_on_minified: boolean;
    warn_on_obfuscated: boolean;
    scan_npm_dependencies: boolean;
    allow_deprecated_packages: boolean;
    llm_proxy_provider?: string;
  };
  advanced: {
    circuit_breaker: {
      max_consecutive_errors: number;
      backoff_minutes: number[];
      auto_reset_on_success: boolean;
      notify_on_source_down: boolean;
    };
    cache_days: number;
    cache_max_items: number;
    language_filter: string[];
    search_keywords_global: string[];
    max_items_per_check: number;
    max_items_per_source: number;
    min_content_length: number;
    ignore_retweets: boolean;
    ignore_replies: boolean;
    check_schedule: string;
    check_timezone: string;
    check_timeout_seconds: number;
    log_level: "debug" | "info" | "warn" | "error";
    log_format: "json" | "text";
    log_to_file: boolean;
    log_retention_days: number;
    concurrent_source_fetches: number;
    http_timeout_seconds: number;
    http_retries: number;
    rate_limit_respect: boolean;
    db_path: string;
    db_cleanup_days: number;
    db_vacuum_on_startup: boolean;
  };
}

export interface Filters {
  source?: string;
  decision?: Decision;
  category?: string;
  page: number;
  limit: number;
}

// ─── Model Config ───

export type ModelProvider = "anthropic" | "google" | "openai" | "custom";

export interface ModelConfig {
  id: string;
  enabled: boolean;
  model_id: string;
  provider: ModelProvider;
  base_url?: string;
  api_key?: string;
  max_tokens: number;
  temperature: number;
  timeout_seconds: number;
  max_retries: number;
}
