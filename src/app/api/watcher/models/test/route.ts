import { NextResponse } from "next/server";
import { requireAuth } from "@/features/watcher/operations/authMiddleware";
import { decryptApiKey } from "@/lib/watcher/config";

export const runtime = "nodejs";

const PROVIDER_URLS: Record<string, string> = {
  anthropic: "https://api.anthropic.com/v1/messages",
  google: "https://generativelanguage.googleapis.com/v1beta/models",
  openai: "https://api.openai.com/v1/chat/completions",
  custom: "",
};

async function testModel(
  provider: string,
  modelId: string,
  baseUrl: string | undefined,
  apiKey: string | undefined,
  timeoutSeconds: number,
): Promise<{ ok: boolean; latency_ms: number; error?: string }> {
  const start = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutSeconds * 1000);

  try {
    let url: string;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    let body: string;

    const resolvedKey = apiKey ? decryptApiKey(apiKey) : undefined;

    if (provider === "anthropic") {
      url = baseUrl ?? PROVIDER_URLS.anthropic;
      if (resolvedKey) headers["x-api-key"] = resolvedKey;
      headers["anthropic-version"] = "2023-06-01";
      body = JSON.stringify({
        model: modelId,
        max_tokens: 1,
        messages: [{ role: "user", content: "ping" }],
      });
    } else if (provider === "google") {
      const googleBase = baseUrl ?? "https://generativelanguage.googleapis.com";
      url = `${googleBase}/v1beta/models/${modelId}:generateContent`;
      if (resolvedKey) url += `?key=${resolvedKey}`;
      body = JSON.stringify({
        contents: [{ parts: [{ text: "ping" }] }],
        generationConfig: { maxOutputTokens: 1 },
      });
    } else {
      // openai-compatible
      url = baseUrl ?? PROVIDER_URLS.openai;
      if (!url.endsWith("/chat/completions"))
        url = url.replace(/\/$/, "") + "/chat/completions";
      if (resolvedKey) headers["Authorization"] = `Bearer ${resolvedKey}`;
      body = JSON.stringify({
        model: modelId,
        max_tokens: 1,
        messages: [{ role: "user", content: "ping" }],
      });
    }

    const res = await fetch(url, {
      method: "POST",
      headers,
      body,
      signal: controller.signal,
    });
    const latency_ms = Date.now() - start;

    if (res.ok || res.status === 400) {
      // 400 can mean the request format is slightly off but the API is reachable and authenticated
      return { ok: true, latency_ms };
    }
    const errText = await res.text().catch(() => res.statusText);
    return {
      ok: false,
      latency_ms,
      error: `HTTP ${res.status}: ${errText.slice(0, 200)}`,
    };
  } catch (err) {
    const latency_ms = Date.now() - start;
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, latency_ms, error: msg };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const { models } = body as {
      models: Array<{
        id: string;
        provider: string;
        model_id: string;
        base_url?: string;
        api_key?: string;
        timeout_seconds?: number;
      }>;
    };

    if (!Array.isArray(models) || models.length === 0) {
      return NextResponse.json(
        { error: "models array required" },
        { status: 400 },
      );
    }

    const results = await Promise.all(
      models.map(async (m) => {
        const result = await testModel(
          m.provider,
          m.model_id,
          m.base_url,
          m.api_key,
          m.timeout_seconds ?? 30,
        );
        return { id: m.id, ...result };
      }),
    );

    return NextResponse.json({ results });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Test failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
