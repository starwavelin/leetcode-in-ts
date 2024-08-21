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
 *
 * 这个解法的本质和运用Set的解法是一样的,
 * Set 是判断 while (set.has(s[r]))
 * 使用Map则是判断 while (map.get(s[r]) == 2) 即s[r]已重复出现了,需要移动l了.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length;

  let len = 0; // len is the length of the substring
  const map = new Map(); // key - char, val - count of the char
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
