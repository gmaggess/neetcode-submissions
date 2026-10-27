class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const check = new Map<number, number>();
        let hasIt: boolean = false;
        nums.map(num => {
            console.log(num, check.has(num));
            if (check.has(num)) hasIt = true;
            check.set(num,num);
        });
        return hasIt;
    }
}
