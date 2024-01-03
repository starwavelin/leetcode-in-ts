/***************************************************************************
 * Problem No. : 136
 * Problem Name: Single Number
 * Date        : January 3, 2024
 * Author      : @codingbro
 *
 * meta        : tag-bit
 ***************************************************************************/

/**
 * ie. [1, 2, 2, 1, 3, 4, 3]
 *  return 4
 *  because 4 only appears once, other numbers all appear twice.
 */

/**
 * Algorithm:
 *  The offset of two equal numbers
 * 
 * XOR has two definitions:
 *  1. Two same bits = 0, two diff bits = 1
 *  2. An addition without carry over
 * 
 * 01
 * 01
 * __
 * 00
 * 
 * 11
 * 11
 * __
 * 00
 * 
 * 10
 * 10
 * __
 * 00
 * 
 * 
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const n = nums.length;
    
    let res = nums[0];
    for (let i = 1; i < n; i++) {
        res ^= nums[i];
    }

    return res;
};