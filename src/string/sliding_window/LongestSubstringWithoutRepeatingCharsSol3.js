/***************************************************************************
 * Problem No. : 3
 * Problem Name: Longest Substring Without Repeating Characters
 * Date        : August 5, 2023
 * Author      : @codingbro
 *
 * meta        : tag-substring, tag-set, tag-sliding-window, tag-two-pointers
 ***************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let len = 0; // the length of the substring
    const set = new Set();

    for (let l=0, r=0; r < n; r++) {
        // update l to its correct position based on r's increment
        while (set.has(s[r])) { // pop l from the left of the substring
            set.delete(s[l]);
            l++;
        }

        set.add(s[r]);

        len = Math.max(len, r - l + 1);
    }

    return len;
};

// Tests
console.log(lengthOfLongestSubstring('tmmzuxt')); // 5 formed by mzuxt
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('ccccccc')); // 1
console.log(lengthOfLongestSubstring('aedfgbcb')); // 7