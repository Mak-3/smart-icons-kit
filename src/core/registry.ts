import type { IconFamilyRegistry, IconMap } from "./types";
import { lucideMap } from "./iconMap";

let registry: IconFamilyRegistry = {
  lucide: lucideMap,
};

export function getRegistry() {
  return registry;
}

export function registerIconFamily(family: string, map: IconMap) {
  registry[family] = map;
}
