import type { IconMap } from "./types.js";

let registry: Record<string, IconMap> | null = null;
let synonymRegistry: Record<string, Record<string, string>> | null = null;
let defaultIconMap: IconMap | null = null;

export function initializeRegistry(iconMap: IconMap) {
  defaultIconMap = iconMap;
  registry = { lucide: iconMap };
  synonymRegistry = buildSynonymRegistry();
}

export function getRegistry() {
  if (!registry || !defaultIconMap) {
    throw new Error("Registry not initialized. Call initializeRegistry() first.");
  }
  return registry;
}

export function getSynonymRegistry() {
  if (!synonymRegistry) {
    synonymRegistry = buildSynonymRegistry();
  }
  return synonymRegistry;
}

function buildSynonymRegistry() {
  const synonymMap: Record<string, Record<string, string>> = {};

  // Use registry directly instead of getRegistry() to avoid circular dependency during initialization
  if (!registry) {
    return synonymMap;
  }

  for (const [family, map] of Object.entries(registry)) {
    synonymMap[family] = {};
    for (const [key, { synonyms }] of Object.entries(map)) {
      for (const word of synonyms) {
        synonymMap[family][word.toLowerCase()] = key;
      }
    }
  }

  return synonymMap;
}

// Extend the registry with new/overridden entries
export function registerIconFamily(
  family: string,
  extensions: Record<
    string,
    { synonyms: string[]; component: React.ComponentType<any> }
  >
) {
  const reg = getRegistry();

  if (!reg[family]) {
    reg[family] = {};
  }

  // merge new/override entries
  Object.keys(extensions).forEach((key) => {
    reg[family][key] = {
      ...reg[family][key], // preserve if exists
      ...extensions[key],  // override or add
    };
  });

  // rebuild synonym registry
  synonymRegistry = buildSynonymRegistry();
}

/**
 * Reset to default registry (in case user wants a clean slate)
 */
export function resetRegistry() {
  if (!defaultIconMap) {
    throw new Error("Registry not initialized. Call initializeRegistry() first.");
  }
  registry = { lucide: defaultIconMap };
  synonymRegistry = buildSynonymRegistry();
}
