import { NextRequest, NextResponse } from "next/server";
import { loadPillarsConfig, savePillarsConfig } from "@/lib/pillars/server";
import type { Pillar, PillarsConfig } from "@/lib/pillars";
import { withErrorHandler } from "@/lib/api/error-handler";
import {
  PillarCreateSchema,
  PillarsReorderSchema,
} from "@/lib/api/schemas/studio";
import { parseBody, isValidationError } from "@/lib/api/validation";

export const dynamic = "force-dynamic";

function getOrEmptyConfig(): PillarsConfig {
  return loadPillarsConfig() ?? { version: "1", pillars: [] };
}

async function get_handler() {
  const config = getOrEmptyConfig();
  return NextResponse.json(config);
}

async function post_handler(req: NextRequest) {
  const body = await parseBody(req, PillarCreateSchema);
  if (isValidationError(body)) return body;

  const config = getOrEmptyConfig();
  const newPillar: Pillar = {
    id: body.id,
    type: body.type,
    name: body.name,
    icon: body.icon,
    color: body.color,
    agents: body.agents,
    workflows: body.workflows as Pillar["workflows"],
    order: body.order ?? config.pillars.length,
    enabled: body.enabled,
  };
  config.pillars = [...config.pillars, newPillar];
  savePillarsConfig(config);
  return NextResponse.json(newPillar, { status: 201 });
}

async function put_handler(req: NextRequest) {
  const body = await parseBody(req, PillarsReorderSchema);
  if (isValidationError(body)) return body;

  const config = getOrEmptyConfig();
  config.pillars = body.pillars as Pillar[];
  savePillarsConfig(config);
  return NextResponse.json(config);
}

export const GET = withErrorHandler(get_handler);
export const POST = withErrorHandler(post_handler);
export const PUT = withErrorHandler(put_handler);
