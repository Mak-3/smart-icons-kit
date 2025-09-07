import { getSynonymRegistry } from "./registry.js";

export function findIconKey(name: string, family: string, prefixMatch: boolean = false): string | null {
  const lower = name.toLowerCase();
  const synonymMap = getSynonymRegistry()[family];
  
  if (!synonymMap) return null;
  
  // O(1) direct lookup first
  if (synonymMap[lower]) return synonymMap[lower];
  
  // If prefix matching is enabled and input is 3+ chars, try fuzzy matching
  if (prefixMatch && lower.length >= 3) {
    const synonyms = Object.keys(synonymMap);
    
    // 1. Exact prefix match - find synonyms that start with the input
    const exactPrefixMatch = synonyms.find(synonym => synonym.startsWith(lower));
    if (exactPrefixMatch) return synonymMap[exactPrefixMatch];
    
    // 2. Contains match - find synonyms that contain the input (but not at start)
    const containsMatch = synonyms.find(synonym => 
      synonym.includes(lower) && !synonym.startsWith(lower)
    );
    if (containsMatch) return synonymMap[containsMatch];
    
    // 3. Reverse prefix match - find synonyms where input is a prefix of the synonym
    const reversePrefixMatch = synonyms.find(synonym => lower.startsWith(synonym));
    if (reversePrefixMatch) return synonymMap[reversePrefixMatch];
  }
  
  return null;
}
