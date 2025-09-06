import { initializeRegistry } from "../shared/registry";
import { lucideMap } from "./iconMap";

// Initialize the registry with React Native icons
initializeRegistry(lucideMap);

export { SmartIcon } from "./SmartIcon";
export { registerIconFamily, getRegistry, resetRegistry } from "../shared/registry";
export type { IconEntry, IconMap, IconFamilyRegistry } from "../shared/types";
export { lucideMap } from "./iconMap";
