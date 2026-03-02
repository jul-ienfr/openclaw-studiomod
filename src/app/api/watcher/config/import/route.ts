import { NextResponse } from "next/server";
import { saveWatcherConfigLocked } from "@/lib/watcher/config";
import { requireAuth } from "@/features/watcher/operations/authMiddleware";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    const contentType = request.headers.get("content-type") ?? "";

    let config: Record<string, unknown>;

    if (contentType.includes("application/json")) {
      config = await request.json();
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const file = formData.get("file");
      if (!file || typeof file === "string") {
        return NextResponse.json({ error: "No file provided." }, { status: 400 });
      }
      const text = await (file as Blob).text();
      config = JSON.parse(text);
    } else {
      return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });
    }

    if (!config || typeof config !== "object" || Array.isArray(config)) {
      return NextResponse.json({ error: "Invalid config: must be a JSON object." }, { status: 400 });
    }

    // Basic structural validation
    if (config.sources && typeof config.sources !== "object") {
      return NextResponse.json({ error: "Invalid config: sources must be an object." }, { status: 400 });
    }

    await saveWatcherConfigLocked(config);
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON file." }, { status: 400 });
    }
    const message = err instanceof Error ? err.message : "Import failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
