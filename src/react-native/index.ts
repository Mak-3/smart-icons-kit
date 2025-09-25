try {
  const { Buffer } = require("buffer");
  if (typeof global !== 'undefined' && typeof global.Buffer === 'undefined') {
    global.Buffer = Buffer;
  }
} catch (error) {
  console.warn('smart-icons-kit: Buffer polyfill not found. Please install the "buffer" package: npm install buffer');
}

import { initializeRegistry } from "../shared/registry.js";
import { lucideMap } from "./iconMap.js";

initializeRegistry(lucideMap);

export { SmartIcon } from "./SmartIcon.js";
export { registerIconFamily, getRegistry, resetRegistry } from "../shared/registry.js";
export type { IconEntry, IconMap, IconFamilyRegistry } from "../shared/types.js";
export { lucideMap } from "./iconMap.js";
