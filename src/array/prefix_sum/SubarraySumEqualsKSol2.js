/***************************************************************************
 * Problem No. : 560
 * Problem Name: Subarray Sum Equals K
 * Date        : January 3, 2024
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-prefix-sum, tag-math
 ***************************************************************************/

/**
 * Algorithm:
 *  Initialization of the map matters in this problem.
 * 
 * Core Idea: 
 *  when there exists some subarray whose sum is `sum - k`, then there must exists a subarray whose sum is `k`, 
 *      and the num of such eligible subarray should be the accumulated sum of `map.get(sum-k)`.
    And, if sum equals k, which means sum - k = 0, so we need to have a count init for 0, otherwise we will omit an eligible sum-k when sum-k == 0.

    Also I'd say this uses the idea of 2-sum, like target - nums[i]. If target - nums[i] exists in the map, then target must exists and can be formed from
        [target - nums[i], nums[i]] 


    Steps:
    - let res = 0, sum = 0; // sum denotes the accumulated sum of a subarray at position i
    - create a map, key - sum of a subarray, val - freq of such sum
    - map.set(0, 1); // init 0 sum with 1 count
    - traverse the nums array
        - sum += nums[i]
        - res += map.get(sum - k) || 0
        - increment the count of sum in the map, b/c we have current sum at least once
    - return res
 * 
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const n = nums.length;
    let res = 0, sum = 0; // sum is the accumulated sum at position i for the subarray ending at i

    const map = new Map(); // key - sum of a subarray, val - freq of this sum
    map.set(0, 1); // set the 0 sum with 1 count

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        res += map.get(sum - k) || 0;
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return res;
};

/**
 * Tests
 */

console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, 1, 1], 3)); // 1
console.log(subarraySum([0, 1, 1, 0], 2)); // 4