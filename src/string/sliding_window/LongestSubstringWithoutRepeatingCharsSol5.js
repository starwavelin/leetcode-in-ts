/***************************************************************************
 * Problem No. : 3
 * Problem Name: Longest Substring Without Repeating Characters
 * Date        : August 18, 2023
 * Author      : @codingbro
 *
 * meta        : tag-dp, tag-two-pointers
 ***************************************************************************/

/**
 * 这是在 Solution 4 的基础上, 不用 Array Map 而用常规 Map 的解法
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0, map = new Map(); // key - char, val - index 1-based index
    
    for (let l = 0, r = 0; r < s.length; r++) {
        
        // handle l pointer; l is chasing the r pointer
        l = Math.max( l, (map.get(s[r]) || 0) );

        // handle r pointer
        map.set(s[r], r + 1);  // here the index of s[r] need to be 1 based so r+1

        // gen res
        res = Math.max(res, r - l + 1);
    }

    return res;
};

// Tests

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('ccccccc')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3