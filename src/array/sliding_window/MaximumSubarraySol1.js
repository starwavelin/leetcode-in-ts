/***************************************************************************
 * Problem No. : 53
 * Problem Name: Maximum Subarray (Sum)
 * Date        : January 10, 2024
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-greedy
 ***************************************************************************/

/**
 * Algorithm:
 * 
 *  1. Set the var `maxValue` to denote the answer, set the help var `sum` to represent the local sum
    2. Traverse the given nums array using r pointer (this problem doesn’t need l pointer actually)
        1. if sum < 0, reset it to be 0 for further use
        2. sum += nums[r]
        3. if sum > maxValue (The Condition), then we update maxValue to be sum [This reminds us the maxValue shall be set to -Infinity at the beginning]
    3. return maxValue

    Time Complexity: O(n)
    Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    const n = nums.length;

    let maxValue = -Infinity;
    let sum = 0; // denote local sum

    for (let r = 0; r < n; r++) {
        if (sum < 0) {  // reset sum
            sum = 0;
        }

        sum += nums[r];

        if (sum > maxValue) {
            maxValue = sum;
        }
    }

    return maxValue;
};

/**
 * Tests
 */

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([-2])); // -2
console.log(maxSubArray([5,4,-1,7,8])); // 23



/**
 * Kadane's algorithm
 * 
 * Core Algorithm:
    Will num itself or num+sum (local sum) provide a larger value?
    Whoever is larger will be assigned into sum (form a new sum) first.
 * 
 * @param {number[]} nums 
 * @returns number
 */
const maxSubArrayKadane = nums => {
    let maxValue = -Infinity;
    let sum = 0; // denote local sum

    for (let num of nums) {
        sum = Math.max(num, sum + num);
        maxValue = Math.max(maxValue, sum);
    }

    return maxValue;
};

/**
 * Tests 2
 */

console.log(maxSubArrayKadane([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArrayKadane([-2])); // -2
console.log(maxSubArrayKadane([5,4,-1,7,8])); // 23