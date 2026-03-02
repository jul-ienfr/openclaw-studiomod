import fs from "fs";

interface LockHandle {
  lockPath: string;
}

const LOCK_TIMEOUT_MS = 5_000;
const LOCK_RETRY_DELAY_MS = 100;
const LOCK_MAX_RETRIES = LOCK_TIMEOUT_MS / LOCK_RETRY_DELAY_MS;

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export async function acquireLock(filePath: string): Promise<LockHandle> {
  const lockPath = `${filePath}.lock`;
  for (let i = 0; i < LOCK_MAX_RETRIES; i++) {
    try {
      fs.mkdirSync(lockPath);
      return { lockPath };
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "EEXIST") throw err;
      await sleep(LOCK_RETRY_DELAY_MS);
    }
  }
  throw new Error(`Could not acquire lock on ${filePath} after ${LOCK_TIMEOUT_MS}ms`);
}

export function releaseLock(handle: LockHandle): void {
  try {
    fs.rmdirSync(handle.lockPath);
  } catch {
    // ignore
  }
}
