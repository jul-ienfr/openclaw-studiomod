import { NextRequest, NextResponse } from "next/server";

import {
  restoreAgentStateLocally,
  trashAgentStateLocally,
} from "@/lib/agent-state/local";
import { isLocalGatewayUrl } from "@/lib/gateway/local-gateway";
import {
  resolveConfiguredSshTarget,
  resolveGatewaySshTargetFromGatewayUrl,
} from "@/lib/ssh/gateway-host";
import {
  restoreAgentStateOverSsh,
  trashAgentStateOverSsh,
} from "@/lib/ssh/agent-state";
import { loadStudioSettings } from "@/lib/studio/settings-store";
import { z } from "zod";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";

const safeAgentIdRegex = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/;

const TrashAgentStateSchema = z.object({
  agentId: z
    .string()
    .min(1)
    .max(128)
    .regex(safeAgentIdRegex, "Invalid agentId format"),
});

const RestoreAgentStateSchema = z.object({
  agentId: z
    .string()
    .min(1)
    .max(128)
    .regex(safeAgentIdRegex, "Invalid agentId format"),
  trashDir: z.string().min(1),
});

const resolveAgentStateSshTarget = (): string | null => {
  const configured = resolveConfiguredSshTarget(process.env);
  if (configured) return configured;
  const settings = loadStudioSettings();
  const gatewayUrl = settings.gateway?.url ?? "";
  if (isLocalGatewayUrl(gatewayUrl)) return null;
  return resolveGatewaySshTargetFromGatewayUrl(gatewayUrl, process.env);
};

async function post_handler(request: NextRequest) {
  const limited = applyRateLimit(request, RATE_LIMITS.deleteGeneric);
  if (limited) return limited;

  try {
    const body = await parseBody(request, TrashAgentStateSchema);
    if (isValidationError(body)) return body;

    const sshTarget = resolveAgentStateSshTarget();
    const result = sshTarget
      ? trashAgentStateOverSsh({ sshTarget, agentId: body.agentId })
      : trashAgentStateLocally({ agentId: body.agentId });
    return NextResponse.json({ result });
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Failed to trash agent workspace/state.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function put_handler(request: Request) {
  try {
    const body = await parseBody(request, RestoreAgentStateSchema);
    if (isValidationError(body)) return body;

    const sshTarget = resolveAgentStateSshTarget();
    const result = sshTarget
      ? restoreAgentStateOverSsh({
          sshTarget,
          agentId: body.agentId,
          trashDir: body.trashDir,
        })
      : restoreAgentStateLocally({
          agentId: body.agentId,
          trashDir: body.trashDir,
        });
    return NextResponse.json({ result });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to restore agent state.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const POST = withErrorHandler(post_handler);
export const PUT = withErrorHandler(put_handler);
