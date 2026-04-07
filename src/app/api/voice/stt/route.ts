import { NextResponse } from "next/server";
import { execFile } from "node:child_process";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";

const TRANSCRIBE_SCRIPT = "/home/jul/faster-whisper/transcribe.py";

async function post_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.voiceStt);
  if (limited) return limited;

  let tmpPath = "";
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio");
    if (!audioFile || !(audioFile instanceof Blob)) {
      return NextResponse.json(
        { error: "Missing audio file" },
        { status: 400 },
      );
    }

    const lang = (formData.get("language") as string | null) ?? "fr";

    // Write audio blob to temp file
    const buf = Buffer.from(await audioFile.arrayBuffer());
    tmpPath = path.join(os.tmpdir(), `stt-${Date.now()}.webm`);
    await fs.writeFile(tmpPath, buf);

    // Call faster-whisper transcribe.py
    const text = await new Promise<string>((resolve, reject) => {
      execFile(
        "python3",
        [
          TRANSCRIBE_SCRIPT,
          tmpPath,
          "--model",
          "large-v3-turbo",
          "--device",
          "cuda",
          "--compute-type",
          "float16",
          "--language",
          lang,
          "--vad",
        ],
        { timeout: 60_000, maxBuffer: 1024 * 1024 },
        (err, stdout, stderr) => {
          if (err) {
            reject(
              new Error(`faster-whisper failed: ${stderr || err.message}`),
            );
            return;
          }
          resolve(stdout.trim());
        },
      );
    });

    return NextResponse.json({ text });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  } finally {
    if (tmpPath) {
      fs.unlink(tmpPath).catch(() => {});
    }
  }
}

export const POST = withErrorHandler(post_handler);
