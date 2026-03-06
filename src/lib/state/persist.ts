import type { StateCreator, StoreMutatorIdentifier } from "zustand";

/**
 * Middleware Zustand qui persiste certaines clés de state dans SQLite preferences.
 * Utilise preferences-repo (côté serveur) ou localStorage comme fallback côté client.
 *
 * Seules les clés listées dans `options.keys` sont persistées.
 * Si `options.keys` est omis, toutes les clés non-fonction sont persistées.
 */
type PersistOptions<T> = {
  /** Namespace prefix utilisé comme clé de stockage: `${name}.${key}` */
  name: string;
  /** Liste des clés de state à persister. Toutes les clés non-fonction si omis. */
  keys?: (keyof T)[];
};

// ---------------------------------------------------------------------------
// Storage abstraction — localStorage côté client, no-op côté serveur
// La version SQLite (preferences-repo) ne peut être appelée que depuis le
// serveur (Server Actions / API routes). Ce middleware s'exécutant dans le
// browser, localStorage est le bon fallback.
// ---------------------------------------------------------------------------

const storage = {
  get: (key: string): unknown => {
    if (typeof window === "undefined") return null;
    try {
      return JSON.parse(localStorage.getItem(key) ?? "null");
    } catch {
      return null;
    }
  },
  set: (key: string, value: unknown): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage may be full or unavailable
    }
  },
};

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------

/**
 * Middleware Zustand qui persiste les clés sélectionnées via localStorage
 * (avec une interface compatible preferences-repo pour une migration future).
 *
 * @example
 * ```ts
 * export const useMyStore = create<MyState>()(
 *   devtools(
 *     sqlitePersist(
 *       (set) => ({ ... }),
 *       { name: "my-store", keys: ["theme", "sidebarCollapsed"] }
 *     ),
 *     { name: "MyStore" }
 *   )
 * );
 * ```
 */
export function sqlitePersist<
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
>(
  config: StateCreator<T, Mps, Mcs>,
  options: PersistOptions<T>,
): StateCreator<T, Mps, Mcs> {
  return (set, get, api) => {
    // Rehydrate persisted values before initialising the store
    const rehydrate = (initialState: T): T => {
      const result = { ...initialState };
      const keys = (options.keys as string[] | undefined) ?? Object.keys(result as object);
      for (const key of keys) {
        const storageKey = `${options.name}.${key}`;
        const persisted = storage.get(storageKey);
        if (persisted !== null && persisted !== undefined) {
          (result as Record<string, unknown>)[key] = persisted;
        }
      }
      return result;
    };

    // Wrap set to persist after each state update
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const persistingSet: typeof set = ((...setArgs: any[]) => {
      (set as (...a: any[]) => void)(...setArgs);

      // After the update, persist the affected keys
      const currentState = get();
      const keys = (options.keys as string[] | undefined) ??
        Object.keys(currentState as object).filter(
          (k) => typeof (currentState as Record<string, unknown>)[k] !== "function",
        );

      for (const key of keys) {
        const value = (currentState as Record<string, unknown>)[key];
        if (typeof value !== "function") {
          storage.set(`${options.name}.${key}`, value);
        }
      }
    }) as typeof set;

    // Initialise the inner store
    const innerState = config(persistingSet, get, api);

    // Merge persisted values into initial state
    return rehydrate(innerState);
  };
}
