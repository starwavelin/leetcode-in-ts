/***************************************************************************
 * Problem No. : 560
 * Problem Name: Subarray Sum Equals K
 * Date        : January 3, 2024
 * Author      : @codingbro
 *
 * meta        : tag-prefix-sum, tag-math
 ***************************************************************************/

/**
 * Algorithm:
 * 
 *  1. From the given nums array, form a new running sum array sums.
    2. let rest = 0
    3. traverse the sums array
        1. if encounter a sums[i] == k, increment res
        2. meanwhile when the loop counter i is there, traverse back from i-1 to index 0 to see if there is any sums[i] - sums[j] = k, 
            1. if yes, that means the subarray from index j to i also has the sum of k, increment res
    4. return res
 * 
 * 
 * Time Complexity: O(n^2) -- double for loops
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const n = nums.length;

    // get running sum array
    const sums = new Array(n).fill(0);
    sums[0] = nums[0];
    for (let i = 1; i < n; i++) {
        sums[i] = sums[i-1] + nums[i];
    }

    let res = 0; // store the num of eligible subarrays
    for (let i = 0; i < n; i++) {
        if (sums[i] == k) {
            res++;
        }
        for (let j = i-1; j >= 0; j--) {
            if (sums[i] - sums[j] == k) {
                res++;
            }
        }
    }

    return res;
};


/**
 * Tests
 */

console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, 1, 1], 3)); // 1
console.log(subarraySum([0, 1, 1, 0], 2)); // 4
