/***************************************************************************
 * Problem No. : 3
 * Problem Name: Longest Substring Without Repeating Characters
 * Date        : August 4, 2023
 * Author      : @codingbro
 *
 * meta        : tag-dp, tag-two-pointers
 ***************************************************************************/

/**
 * 动态规划思想
 *  
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    let map = new Array(128).fill(-1);
    for (let l = 0, r = 0; r < s.length; r++) {
        l = Math.max( l, map[s.charCodeAt(r)]+1 );

        map[s.charCodeAt(r)] = r;
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
};

// Tests

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('ccccccc')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3