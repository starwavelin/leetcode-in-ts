/***************************************************************************
 * Problem No. : 3
 * Problem Name: Longest Substring Without Repeating Characters
 * Date        : August 5, 2023
 * Author      : @codingbro
 *
 * meta        : tag-set, tag-sliding-window, tag-two-pointers
 ***************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    const set = new Set();

    for (let l=0, r=0; r < s.length; r++) {
        // update l to its right position
        while (set.has(s[r])) { // if set has the current character
            set.delete(s[l]);
            l++;
        }

        set.add(s[r]);
        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
};

// Tests

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('ccccccc')); // 1
console.log(lengthOfLongestSubstring('aedfgbcb')); // 7