import { initializeRegistry } from "../shared/registry.js";
import { lucideMap } from "./iconMap.js";

// Initialize the registry with React Native icons
initializeRegistry(lucideMap);

export { SmartIcon } from "./SmartIcon.js";
export { registerIconFamily, getRegistry, resetRegistry } from "../shared/registry.js";
export type { IconEntry, IconMap, IconFamilyRegistry } from "../shared/types.js";
export { lucideMap } from "./iconMap.js";
