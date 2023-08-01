/***************************************************************************
 * Problem No. : 128
 * Problem Name: Longest Consecutive Sequence
 * Date        : August 1, 2023
 * Author      : @codingbro
 *
 * meta        : tag-set, tag-hash
 ***************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of nums) {
        // Find the beginning of a sequence
        if (!set.has(num-1)) {
            let len = 1;
            while (set.has(num+len)) {
                len += 1;
            }
            longest = Math.max(longest, len);
        }
    }
    return longest;
};