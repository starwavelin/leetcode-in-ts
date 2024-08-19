/***************************************************************************
 * Problem No. : 3
 * Problem Name: Longest Substring Without Repeating Characters
 * Date        : December 12, 2023
 * Author      : @codingbro
 *
 * meta        : tag-substring, tag-sliding-window, tag-map
 ***************************************************************************/

/**
 * This solution uses my template
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length;

  let len = 0; // len is the length of the substring
  const map = new Map();
  // map.get(c) is as count in the template

  // sliding window template
  for (let l = 0, r = 0; r < n; r++) {
    // handle r
    const c = s[r];
    map.set(c, (map.get(c) || 0) + 1);

    // handle l
    while (map.get(c) == 2) {
      // pop l from the left of the substring
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }

    // max substring result
    len = Math.max(len, r - l + 1);
  }

  return len;
};

// Tests
console.log(lengthOfLongestSubstring('tmmzuxt')); // 5 formed by mzuxt
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('ccccccc')); // 1
console.log(lengthOfLongestSubstring('aedfgbcb')); // 7
