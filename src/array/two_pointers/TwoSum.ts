/***************************************************************************
 * Problem No. : 1
 * Problem Name: Two Sum
 * Date        : August 07, 2022
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-array
 ***************************************************************************/

/**
 * The new description of this problem says:
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/**
 * Solution 1: Brute Force, O(n^2)
 * @param nums 
 * @param target 
 */
function twoSumSol1(nums: number[], target: number): number[] {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};