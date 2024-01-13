/***************************************************************************
 * Problem No. : 152
 * Problem Name: Maximum Product Subarray
 * Date        : January 13, 2024
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-math
 ***************************************************************************/

/**
 * Algorithm:
 *  Traverse the original array twice to get the maximum product from the subarrays
 * 
 *  1. Initiate res to be -Infinity, prod (help local product) to be 1
    2. Traverse from left to right
        1. record the larger res by comparing res and curProduct
        2. if encountering a 0, reset prod to be 1 for further use
    3. Reset prod to be 1 and then traverse again from right to left and update res accordingly
    4. Return res
 * 
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = -Infinity, prod = 1; // res stores the final answer, prod - local product
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        prod = prod * nums[i];
        res = Math.max(res, prod);
        if (nums[i] == 0) {
            prod = 1;
        }
    }

    prod = 1;
    for (let i = n-1; i >= 0; i--) {
        prod = prod * nums[i];
        res = Math.max(res, prod);
        if (nums[i] == 0) {
            prod = 1;
        }
    }

    return res;
};