import fs from "fs";
import path from "path";
import { createLogger } from "@/lib/logger";
import { resolveStateDir } from "@/lib/clawdbot/paths";

const log = createLogger("config:backup");

const BACKUP_DIR = ".backups";
const MAX_BACKUPS = 10;

/**
 * Create a timestamped backup of openclaw.json before write
 * Non-blocking; logs failures but doesn't throw
 */
export async function createConfigBackup(
  config: Record<string, unknown>,
): Promise<boolean> {
  try {
    const stateDir = resolveStateDir();
    const configPath = path.join(stateDir, "openclaw.json");
    const backupDirPath = path.join(stateDir, BACKUP_DIR);

    // Only backup if config file already exists
    if (!fs.existsSync(configPath)) {
      log.debug("Config file does not exist yet, skipping backup");
      return true;
    }

    // Ensure backup directory exists
    if (!fs.existsSync(backupDirPath)) {
      fs.mkdirSync(backupDirPath, { recursive: true });
    }

    // Create timestamped backup
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(backupDirPath, `openclaw.json.${timestamp}`);

    fs.writeFileSync(backupPath, JSON.stringify(config, null, 2), "utf8");
    log.info("Config backup created", { backupPath });

    // Rotate old backups
    await rotateBackups(backupDirPath);

    return true;
  } catch (error) {
    log.error("Failed to create config backup", {
      error: error instanceof Error ? error.message : String(error),
    });
    return false;
  }
}

/**
 * Keep only the most recent N backups
 */
async function rotateBackups(backupDirPath: string): Promise<void> {
  try {
    const files = fs.readdirSync(backupDirPath);
    const backups = files
      .filter((f) => f.startsWith("openclaw.json."))
      .sort()
      .reverse();

    if (backups.length > MAX_BACKUPS) {
      const toDelete = backups.slice(MAX_BACKUPS);
      for (const file of toDelete) {
        fs.unlinkSync(path.join(backupDirPath, file));
      }
      log.debug("Rotated old backups", {
        kept: backups.length - toDelete.length,
        deleted: toDelete.length,
      });
    }
  } catch (error) {
    log.error("Failed to rotate backups", {
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

/**
 * List available backups in reverse chronological order
 */
export async function listBackups(): Promise<
  Array<{ filename: string; timestamp: string; path: string }>
> {
  try {
    const stateDir = resolveStateDir();
    const backupDirPath = path.join(stateDir, BACKUP_DIR);

    if (!fs.existsSync(backupDirPath)) {
      return [];
    }

    const files = fs.readdirSync(backupDirPath);
    return files
      .filter((f) => f.startsWith("openclaw.json."))
      .sort()
      .reverse()
      .map((filename) => ({
        filename,
        timestamp: filename.replace("openclaw.json.", ""),
        path: path.join(backupDirPath, filename),
      }));
  } catch (error) {
    log.error("Failed to list backups", {
      error: error instanceof Error ? error.message : String(error),
    });
    return [];
  }
}

/**
 * Restore from a specific backup (by timestamp)
 */
export async function restoreBackup(timestamp: string): Promise<boolean> {
  try {
    const stateDir = resolveStateDir();
    const backupDirPath = path.join(stateDir, BACKUP_DIR);
    const backupPath = path.join(backupDirPath, `openclaw.json.${timestamp}`);
    const configPath = path.join(stateDir, "openclaw.json");

    if (!fs.existsSync(backupPath)) {
      log.error("Backup not found", { timestamp });
      return false;
    }

    const backupContent = fs.readFileSync(backupPath, "utf8");
    fs.writeFileSync(configPath, backupContent, "utf8");
    log.info("Config restored from backup", { timestamp });
    return true;
  } catch (error) {
    log.error("Failed to restore backup", {
      error: error instanceof Error ? error.message : String(error),
    });
    return false;
  }
}
