import { getSynonymRegistry } from "./registry.js";

export function findIconKey(name: string, family: string, prefixMatch: boolean = false, sentenceMatch: boolean = false): string | null {
  const lower = name.toLowerCase();
  const synonymMap = getSynonymRegistry()[family];
  
  if (!synonymMap) return null;
  
  // O(1) direct lookup first
  if (synonymMap[lower]) return synonymMap[lower];
  
  // If sentence matching is enabled, try to find icon from sentence words
  if (sentenceMatch && lower.includes(' ')) {
    const words = lower.split(/\s+/).filter(word => word.length > 0);
    
    // Try to find icon for each word, starting from the last word (most specific)
    for (let i = words.length - 1; i >= 0; i--) {
      const word = words[i];
      
      // Direct word lookup
      if (synonymMap[word]) return synonymMap[word];
      
      // If prefix matching is also enabled, try strict prefix matching on the word
      if (prefixMatch && word.length > 0) {
        const result = findStrictPrefixMatch(word, synonymMap);
        if (result) return result;
      }
    }
    
    return null;
  }
  
  // If prefix matching is enabled and input is not empty, try strict prefix matching
  if (prefixMatch && lower.length > 2) {
    return findStrictPrefixMatch(lower, synonymMap);
  }
  
  return null;
}

function findStrictPrefixMatch(input: string, synonymMap: Record<string, string>): string | null {
  const synonyms = Object.keys(synonymMap);
  
  const strictPrefixMatch = synonyms.find(synonym => {
    return synonym.startsWith(input) && input.length <= synonym.length && input.length > 0;
  });
  
  if (strictPrefixMatch) return synonymMap[strictPrefixMatch];
  
  return null;
}
