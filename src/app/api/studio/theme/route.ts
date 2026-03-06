import { NextRequest, NextResponse } from "next/server";
import { readTheme, writeTheme } from "@/lib/theme/server";
import { ThemeConfig } from "@/lib/theme";
import { withErrorHandler } from "@/lib/api/error-handler";

export const dynamic = "force-dynamic";

async function get_handler() {
  try {
    const theme = await readTheme();
    return NextResponse.json(theme);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to read theme" },
      { status: 500 },
    );
  }
}

async function patch_handler(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ThemeConfig>;
    const current = await readTheme();
    const merged: ThemeConfig = {
      ...current,
      ...body,
      version: "1",
      colors: {
        light: { ...current.colors.light, ...(body.colors?.light ?? {}) },
        dark: { ...current.colors.dark, ...(body.colors?.dark ?? {}) },
      },
      typography: { ...current.typography, ...(body.typography ?? {}) },
      spacing: { ...current.spacing, ...(body.spacing ?? {}) },
      branding: { ...current.branding, ...(body.branding ?? {}) },
    };
    await writeTheme(merged);
    return NextResponse.json(merged);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to write theme" },
      { status: 500 },
    );
  }
}

async function put_handler(req: NextRequest) {
  // Full replacement
  try {
    const body = (await req.json()) as ThemeConfig;
    await writeTheme({ ...body, version: "1" });
    return NextResponse.json(body);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to write theme" },
      { status: 500 },
    );
  }
}

export const GET = withErrorHandler(get_handler);
export const PUT = withErrorHandler(put_handler);
export const PATCH = withErrorHandler(patch_handler);