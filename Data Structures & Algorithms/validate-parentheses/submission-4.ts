class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let found: boolean = true;
        const array: string[] = s.split('');
        const stack: string[] = [];
        // Use a lookup object for O(1) matching pairs
        const pairs = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
        array.map(a => {
            console.log(a);
            if (a in pairs) {
                // It's an opening bracket, push to stack
                stack.push(a);
            } else {
                // It's a closing bracket, pop and check for a match
                const last = stack.pop();
                if (pairs[last] !== a) {
                    found = false; // Mismatched bracket
                }
            }
        });
        if (stack.length>0) return false;
        return found;
    }
}