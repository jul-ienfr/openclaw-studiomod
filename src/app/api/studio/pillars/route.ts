import { NextRequest, NextResponse } from "next/server";
import { readPillars, writePillars } from "@/lib/pillars/server";
import { Pillar } from "@/lib/pillars";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const config = await readPillars();
    return NextResponse.json(config);
  } catch {
    return NextResponse.json(
      { error: "Failed to read pillars" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Pillar>;
    if (!body.id || !body.name) {
      return NextResponse.json(
        { error: "id and name are required" },
        { status: 400 },
      );
    }
    const config = await readPillars();
    const newPillar: Pillar = {
      id: body.id,
      type: body.type ?? "business",
      name: body.name,
      icon: body.icon,
      color: body.color,
      agents: body.agents ?? [],
      order: body.order ?? config.pillars.length,
      enabled: body.enabled ?? true,
    };
    config.pillars = [...config.pillars, newPillar];
    await writePillars(config);
    return NextResponse.json(newPillar, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create pillar" },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = (await req.json()) as { pillars: Pillar[] };
    const config = await readPillars();
    config.pillars = body.pillars;
    await writePillars(config);
    return NextResponse.json(config);
  } catch {
    return NextResponse.json(
      { error: "Failed to update pillars" },
      { status: 500 },
    );
  }
}
