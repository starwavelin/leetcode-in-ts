/***************************************************************************
 * Problem No. : 3
 * Problem Name: Longest Substring Without Repeating Characters
 * Date        : August 18, 2023
 * Author      : @codingbro
 *
 * meta        : tag-dp, tag-two-pointers
 ***************************************************************************/

/**
 * 这是在 Solution 2 的基础上, array map不用初始化为每个格子都是-1的解法.
 * Instead, array map 初始化每个格子为 0 就可以了.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0, map = new Array(128).fill(0);
    
    for (let l = 0, r = 0; r < s.length; r++) {
        
        // handle l pointer
        l = Math.max( l, map[s.charCodeAt(r)] ); // r is index 1 based so l needs to follow r

        // handle r pointer
        map[s.charCodeAt(r)] = r + 1;  // here the index of s[r] need to be 1 based so r+1

        // gen res
        res = Math.max(res, r - l + 1);
    }

    return res;
};

// Tests

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('ccccccc')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3