import { NextRequest, NextResponse } from "next/server";
import { readTheme, writeTheme } from "@/lib/theme/server";
import { ThemeConfig } from "@/lib/theme";

export const dynamic = "force-dynamic";

export async function GET() {
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

export async function PATCH(req: NextRequest) {
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

export async function PUT(req: NextRequest) {
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
