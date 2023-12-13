/***************************************************************************
 * Problem No. : 3
 * Problem Name: Longest Substring Without Repeating Characters
 * Date        : August 4, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-hash, tag-two-pointers
 ***************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = 0;
    let map = new Array(128).fill(-1);

    for (let l = 0, r = 0; r < s.length; r++) {
        // Define when to move the l pointer
        if (map[s.charCodeAt(r)] >= l) {
            l = map[s.charCodeAt(r)] + 1;
        }

        // Handle r
        map[s.charCodeAt(r)] = r;

        // max substring result
        len = Math.max(len, r - l + 1);
    }

    return len;
};

// Tests

console.log(lengthOfLongestSubstring('tmmzuxt')); // 5 formed by mzuxt
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('ccccccc')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3