import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

interface ClawHubSearchResult {
  score: number;
  slug: string;
  displayName: string;
  summary: string;
  version: string | null;
  updatedAt: string;
}

async function get_handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const limit = Math.min(30, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10)));

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ items: [] });
    }

    const clawhubUrl = `https://clawhub.ai/api/v1/search?q=${encodeURIComponent(query.trim())}&limit=${limit}`;

    const response = await fetch(clawhubUrl, {
      headers: {
        "User-Agent": "openclaw-studio/1.0",
      },
      signal: AbortSignal.timeout(10000), // 10s timeout
    });

    if (!response.ok) {
      throw new Error(`ClawHub API error: ${response.status}`);
    }

    const data = (await response.json()) as { results: ClawHubSearchResult[] };
    const results = data.results || [];

    return NextResponse.json({ items: results });
  } catch (err) {
    const message = err instanceof Error ? err.message : "ClawHub search failed.";
    return NextResponse.json({ error: message, items: [] }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);