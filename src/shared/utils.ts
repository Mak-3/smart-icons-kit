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
      
      // If prefix matching is also enabled, try fuzzy matching on the word
      if (prefixMatch && word.length >= 3) {
        const synonyms = Object.keys(synonymMap);
        
        // 1. Exact prefix match - find synonyms that start with the word
        const exactPrefixMatch = synonyms.find(synonym => synonym.startsWith(word));
        if (exactPrefixMatch) return synonymMap[exactPrefixMatch];
        
        // 2. Contains match - find synonyms that contain the word (but not at start)
        const containsMatch = synonyms.find(synonym => 
          synonym.includes(word) && !synonym.startsWith(word)
        );
        if (containsMatch) return synonymMap[containsMatch];
        
        // 3. Reverse prefix match - find synonyms where word is a prefix of the synonym
        const reversePrefixMatch = synonyms.find(synonym => word.startsWith(synonym));
        if (reversePrefixMatch) return synonymMap[reversePrefixMatch];
      }
    }
    
    // If no word matched, return null
    return null;
  }
  
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
