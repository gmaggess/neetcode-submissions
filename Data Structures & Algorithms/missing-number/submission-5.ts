class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const map = new Map<number,number>();
        for (let i=0; i<nums.length; i++) {
            map.set (nums[i], 1);
        }
        for (let i=0; i<nums.length; i++) {
            if (!map.get(i)) return i;
        }
        return nums.length;
    }
}
