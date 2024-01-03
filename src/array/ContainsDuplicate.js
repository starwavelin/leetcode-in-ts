/***************************************************************************
 * Problem No. : 217
 * Problem Name: Contains Duplicate
 * Date        : January 2, 2024
 * Author      : @codingbro
 *
 * meta        : tag-set
 ***************************************************************************/

/**
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) { // has duplicates
            return true;
        }
        set.add(num);
    }
    return false;
};