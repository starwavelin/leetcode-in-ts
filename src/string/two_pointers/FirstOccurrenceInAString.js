/***************************************************************************
 * Problem No. : 28
 * Problem Name: Find the Index of the First Occurrence in a String
 * Date        : January 23, 2024
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-string
 ***************************************************************************/



/**
 * Algorithm:
 *  1. Denote n as haystack’s length and m as the length of needle
    2. Use loop counter i to loop through the haystack to n-m (inclusively)
        1. if haystack.substring(i, i+m) == needle, return i
    3. otherwise case, return -1
 * 
 * 
 * Time Complexity: O(n*m)
 * Space Complexity: O(1)
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    for (let i = 0; i <= n-m; i++) {
        if (haystack.substring(i, i+m) == needle) {
            return i;
        }
    }
    return -1;
};