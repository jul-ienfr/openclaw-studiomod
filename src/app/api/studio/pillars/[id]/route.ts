import { NextRequest, NextResponse } from "next/server";
import { loadPillarsConfig, savePillarsConfig } from "@/lib/pillars/server";
import type { Pillar } from "@/lib/pillars";
import { withErrorHandler } from "@/lib/api/error-handler";
import { PillarPatchSchema } from "@/lib/api/schemas/studio";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

async function patch_handler(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await parseBody(req, PillarPatchSchema);
  if (isValidationError(body)) return body;

  const config = loadPillarsConfig() ?? { version: "1" as const, pillars: [] };
  const idx = config.pillars.findIndex((p) => p.id === id);
  if (idx === -1) {
    return NextResponse.json({ error: "Pillar not found" }, { status: 404 });
  }
  config.pillars[idx] = { ...config.pillars[idx], ...body, id } as Pillar;
  savePillarsConfig(config);
  return NextResponse.json(config.pillars[idx]);
}

async function delete_handler(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const limited = applyRateLimit(_req, RATE_LIMITS.deleteGeneric);
  if (limited) return limited;

  const { id } = await params;
  const config = loadPillarsConfig() ?? { version: "1" as const, pillars: [] };
  config.pillars = config.pillars.filter((p) => p.id !== id);
  savePillarsConfig(config);
  return NextResponse.json({ ok: true });
}

export const PATCH = withErrorHandler(patch_handler);
export const DELETE = withErrorHandler(delete_handler);
