import { execFile } from "child_process";
import path from "path";

const WATCHER_SCRIPT = process.env.WATCHER_SCRIPT_PATH
  ?? path.join(process.env.HOME ?? "/home/jul", ".openclaw/skills/openclaw-watcher/scripts/watcher.py");

const PYTHON = process.env.WATCHER_PYTHON
  ?? path.join(process.env.HOME ?? "/home/jul", ".openclaw/workspace-openclaw-watcher/venv/bin/python3");

export function execWatcher(args: string[]): Promise<{ stdout: string; stderr: string; code: number }> {
  return new Promise((resolve) => {
    execFile(PYTHON, [WATCHER_SCRIPT, ...args], { timeout: 300_000 }, (error, stdout, stderr) => {
      resolve({
        stdout: stdout ?? "",
        stderr: stderr ?? "",
        code: error ? (error as NodeJS.ErrnoException & { code?: number }).code ? 1 : 1 : 0,
      });
    });
  });
}
