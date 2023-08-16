/***************************************************************************
 * Problem No. : 340
 * Problem Name: Longest Substring with At Most K Distinct Characters
 * Date        : August 16, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-hash
 ***************************************************************************/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let res = 0, count = 0, map = new Array(128).fill(0);

    for (let l = 0, r = 0; r < s.length; r++) {
        if (map[s[r].charCodeAt(0)] == 0) count++;
        map[s[r].charCodeAt(0)]++;

        while (count > k) {
            map[s[l].charCodeAt(0)]--;
            if (map[s[l].charCodeAt(0)] == 0) count--;
            l++;
        }

        res = Math.max(res, r-l+1);
    }

    return res;
};

// Tests
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3
console.log(lengthOfLongestSubstringKDistinct("bb", 1)); // 2