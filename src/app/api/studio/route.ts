import { NextResponse } from "next/server";

import { type StudioSettingsPatch } from "@/lib/studio/settings";
import {
  applyStudioSettingsPatch,
  loadLocalGatewayDefaults,
  loadStudioSettings,
} from "@/lib/studio/settings-store";
import { withErrorHandler } from "@/lib/api/error-handler";
import { StudioSettingsPutSchema } from "@/lib/api/schemas/studio";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";

async function get_handler() {
  try {
    const settings = loadStudioSettings();
    const localGatewayDefaults = loadLocalGatewayDefaults();
    return NextResponse.json({ settings, localGatewayDefaults });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to load studio settings.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function put_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.configPatch);
  if (limited) return limited;

  try {
    const body = await parseBody(request, StudioSettingsPutSchema);
    if (isValidationError(body)) return body;

    const settings = applyStudioSettingsPatch(body as StudioSettingsPatch);
    return NextResponse.json({ settings });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to save studio settings.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);
export const PUT = withErrorHandler(put_handler);
