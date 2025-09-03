import { getRegistry } from "./registry";

export function findIconKey(name: string, family: string): string | null {
  const lower = name.toLowerCase();
  const map = getRegistry()[family];

  if (!map) return null;

  return (
    Object.keys(map).find((k) =>
      map[k].synonyms.some((s) => lower.includes(s))
    ) || null
  );
}
