import { NextResponse } from "next/server";
import { z } from "zod";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { createLogger } from "@/lib/logger";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const log = createLogger("api:providers:validate");

const ValidateBodySchema = z.object({
  providerId: z.string().min(1),
  apiKey: z.string().optional(),
  accessToken: z.string().optional(),
  baseUrl: z.string().optional(),
});

type ValidateBody = z.infer<typeof ValidateBodySchema>;

// Default base URLs per provider
const PROVIDER_BASE_URLS: Record<string, string> = {
  anthropic: "https://api.anthropic.com",
  openai: "https://api.openai.com",
  gemini: "https://generativelanguage.googleapis.com",
  mistral: "https://api.mistral.ai",
  groq: "https://api.groq.com/openai",
  together: "https://api.together.xyz",
  deepseek: "https://api.deepseek.com",
  perplexity: "https://api.perplexity.ai",
  xai: "https://api.x.ai",
  cohere: "https://api.cohere.ai",
  "01ai": "https://api.01.ai",
  fireworks: "https://api.fireworks.ai/inference",
  hyperbolic: "https://api.hyperbolic.xyz",
  novita: "https://api.novita.ai/v3/openai",
  "hugging-face": "https://api-inference.huggingface.co",
  moonshot: "https://api.moonshot.cn/v1",
  ollama: "http://localhost:11434",
};

// Anthropic validation: try GET /v1/models first, fall back to a minimal POST /v1/messages
// (some proxies like anthrouter only support the messages endpoint)
async function validateAnthropic(
  apiKey: string,
  baseUrl: string,
): Promise<{ valid: boolean; error?: string }> {
  const base = baseUrl.replace(/\/$/, "");

  // First try GET /v1/models (works with api.anthropic.com)
  const modelsUrl = `${base}/v1/models`;
  const modelsRes = await fetch(modelsUrl, {
    method: "GET",
    headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
    signal: AbortSignal.timeout(8000),
  }).catch(() => null);

  if (modelsRes?.ok) return { valid: true };

  // If 405, the proxy likely only supports /v1/messages — try a minimal POST
  if (modelsRes?.status === 405) {
    const messagesUrl = `${base}/v1/messages`;
    const messagesRes = await fetch(messagesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1,
        messages: [{ role: "user", content: "." }],
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (messagesRes.ok) return { valid: true };
    const text = await messagesRes.text().catch(() => "");
    // 401 = bad key, 429 = rate limited (but key works), 529 = overloaded (but key works)
    if (messagesRes.status === 429 || messagesRes.status === 529)
      return { valid: true };
    return {
      valid: false,
      error: `HTTP ${messagesRes.status}: ${text.slice(0, 200)}`,
    };
  }

  const text = modelsRes
    ? await modelsRes.text().catch(() => "")
    : "Connection failed";
  return {
    valid: false,
    error: modelsRes ? `HTTP ${modelsRes.status}: ${text.slice(0, 200)}` : text,
  };
}

// OpenAI-compatible validation: GET /v1/models with Bearer token
async function validateOpenAI(
  key: string,
  baseUrl: string,
  authHeader: "Bearer" | "Token" = "Bearer",
): Promise<{ valid: boolean; error?: string }> {
  const url = `${baseUrl.replace(/\/$/, "")}/v1/models`;
  const res = await fetch(url, {
    method: "GET",
    headers: { Authorization: `${authHeader} ${key}` },
    signal: AbortSignal.timeout(8000),
  });
  if (res.ok) return { valid: true };
  const text = await res.text().catch(() => "");
  return { valid: false, error: `HTTP ${res.status}: ${text.slice(0, 200)}` };
}

// Ollama: GET /api/tags (no auth)
async function validateOllama(
  baseUrl: string,
): Promise<{ valid: boolean; error?: string }> {
  const url = `${baseUrl.replace(/\/$/, "")}/api/tags`;
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (res.ok) return { valid: true };
  return { valid: false, error: `HTTP ${res.status}` };
}

// Gemini: GET models with key param
async function validateGemini(
  apiKey: string,
): Promise<{ valid: boolean; error?: string }> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (res.ok) return { valid: true };
  const text = await res.text().catch(() => "");
  return { valid: false, error: `HTTP ${res.status}: ${text.slice(0, 200)}` };
}

// Cohere: GET /v2/models with Bearer
async function validateCohere(
  apiKey: string,
): Promise<{ valid: boolean; error?: string }> {
  const res = await fetch("https://api.cohere.ai/v2/models", {
    method: "GET",
    headers: { Authorization: `Bearer ${apiKey}` },
    signal: AbortSignal.timeout(8000),
  });
  if (res.ok) return { valid: true };
  const text = await res.text().catch(() => "");
  return { valid: false, error: `HTTP ${res.status}: ${text.slice(0, 200)}` };
}

async function post_handler(request: Request) {
  try {
    const parsed = await parseBody(request, ValidateBodySchema);
    if (isValidationError(parsed)) return parsed;

    const { providerId, apiKey, accessToken, baseUrl } = parsed;

    log.info("Validating provider", { providerId });

    const secret = apiKey?.trim() || accessToken?.trim() || "";
    const effectiveBase =
      baseUrl?.trim() || PROVIDER_BASE_URLS[providerId] || "";

    // Providers that need no key (local)
    if (providerId === "ollama") {
      const result = await validateOllama(
        effectiveBase || "http://localhost:11434",
      );
      log.info("Validation result", { providerId, valid: result.valid });
      return NextResponse.json(result);
    }

    if (!secret) {
      return NextResponse.json({ valid: false, error: "No API key provided" });
    }

    // Gemini uses key in query param
    if (providerId === "gemini") {
      const result = await validateGemini(secret);
      log.info("Validation result", { providerId, valid: result.valid });
      return NextResponse.json(result);
    }

    // Anthropic (and custom anthropic-messages compatible proxies)
    if (providerId === "anthropic" || providerId === "anthropic-proxy") {
      const base = effectiveBase || "https://api.anthropic.com";
      const result = await validateAnthropic(secret, base);
      log.info("Validation result", { providerId, valid: result.valid });
      return NextResponse.json(result);
    }

    // Cohere
    if (providerId === "cohere") {
      const result = await validateCohere(secret);
      log.info("Validation result", { providerId, valid: result.valid });
      return NextResponse.json(result);
    }

    // All OpenAI-compatible providers
    if (effectiveBase) {
      const result = await validateOpenAI(secret, effectiveBase);
      log.info("Validation result", { providerId, valid: result.valid });
      return NextResponse.json(result);
    }

    // Default: OpenAI format with known base
    const defaultBase = PROVIDER_BASE_URLS[providerId];
    if (defaultBase) {
      const result = await validateOpenAI(secret, defaultBase);
      log.info("Validation result", { providerId, valid: result.valid });
      return NextResponse.json(result);
    }

    return NextResponse.json({
      valid: false,
      error: "Unknown provider — no base URL configured",
    });
  } catch (err) {
    // Timeout or fetch error
    const msg = err instanceof Error ? err.message : String(err);
    log.error("Validation failed", { error: msg });
    if (
      msg.includes("timeout") ||
      msg.includes("abort") ||
      msg.includes("ETIMEDOUT")
    ) {
      return NextResponse.json({ valid: false, error: "Connection timed out" });
    }
    if (
      msg.includes("ECONNREFUSED") ||
      msg.includes("ENOTFOUND") ||
      msg.includes("fetch failed")
    ) {
      return NextResponse.json({ valid: false, error: "Host unreachable" });
    }
    return NextResponse.json({ valid: false, error: msg.slice(0, 200) });
  }
}

export const POST = withErrorHandler(post_handler);