import { NextRequest, NextResponse } from "next/server";
import { readTheme, writeTheme } from "@/lib/theme/server";
import { ThemeConfig } from "@/lib/theme";
import { withErrorHandler } from "@/lib/api/error-handler";
import { ThemePatchSchema, ThemePutSchema } from "@/lib/api/schemas/studio";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

async function get_handler() {
  try {
    const theme = await readTheme();
    return NextResponse.json(theme);
  } catch {
    return NextResponse.json(
      { error: "Failed to read theme" },
      { status: 500 },
    );
  }
}

async function patch_handler(req: NextRequest) {
  const limited = applyRateLimit(req, RATE_LIMITS.themePatch);
  if (limited) return limited;

  try {
    const body = await parseBody(req, ThemePatchSchema);
    if (isValidationError(body)) return body;

    const current = await readTheme();
    const merged: ThemeConfig = {
      ...current,
      ...body,
      version: current.version,
      colors: {
        light: { ...current.colors.light, ...(body.colors?.light ?? {}) },
        dark: { ...current.colors.dark, ...(body.colors?.dark ?? {}) },
      },
      typography: { ...current.typography, ...(body.typography ?? {}) },
      spacing: { ...current.spacing, ...(body.spacing ?? {}) },
      layout: { ...current.layout, ...(body.layout ?? {}) },
      branding: { ...current.branding, ...(body.branding ?? {}) },
    };
    await writeTheme(merged);
    return NextResponse.json(merged);
  } catch {
    return NextResponse.json(
      { error: "Failed to write theme" },
      { status: 500 },
    );
  }
}

async function put_handler(req: NextRequest) {
  const limited = applyRateLimit(req, RATE_LIMITS.themePut);
  if (limited) return limited;

  try {
    const body = await parseBody(req, ThemePutSchema);
    if (isValidationError(body)) return body;

    await writeTheme(body as ThemeConfig);
    return NextResponse.json(body);
  } catch {
    return NextResponse.json(
      { error: "Failed to write theme" },
      { status: 500 },
    );
  }
}

export const GET = withErrorHandler(get_handler);
export const PUT = withErrorHandler(put_handler);
export const PATCH = withErrorHandler(patch_handler);
