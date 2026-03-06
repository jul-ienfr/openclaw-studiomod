import { NextRequest, NextResponse } from "next/server";
import { readPillars, writePillars } from "@/lib/pillars/server";
import { Pillar } from "@/lib/pillars";

export const dynamic = "force-dynamic";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = (await req.json()) as Partial<Pillar>;
    const config = await readPillars();
    const idx = config.pillars.findIndex((p) => p.id === id);
    if (idx === -1) {
      return NextResponse.json({ error: "Pillar not found" }, { status: 404 });
    }
    config.pillars[idx] = { ...config.pillars[idx], ...body, id };
    await writePillars(config);
    return NextResponse.json(config.pillars[idx]);
  } catch {
    return NextResponse.json(
      { error: "Failed to update pillar" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const config = await readPillars();
    config.pillars = config.pillars.filter((p) => p.id !== id);
    await writePillars(config);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete pillar" },
      { status: 500 },
    );
  }
}
