class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        //clean string
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        return s === s.split("").reverse().join("");
    }
}
