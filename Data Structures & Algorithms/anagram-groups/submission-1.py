class Solution:
    def isAnagram(self, word1: str, word2: str) -> bool:
        return sorted(word1) == sorted(word2)
        
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        arrays: List[List[str]] = []
        seen = set()  # Track INDICES, not values
        
        for i in range(len(strs)):
            if i in seen:  # Check index, not value
                continue
            
            array: List[str] = [strs[i]]
            
            for j in range(i + 1, len(strs)):
                if j not in seen and self.isAnagram(strs[i], strs[j]):
                    array.append(strs[j])
                    seen.add(j)  # Mark index as seen
            
            arrays.append(array)
            seen.add(i)
        
        return arrays