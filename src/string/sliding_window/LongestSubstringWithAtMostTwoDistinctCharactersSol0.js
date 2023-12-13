/***************************************************************************
 * Problem No. : 159
 * Problem Name: Longest Substring with At Most Two Distinct Characters
 * Date        : December 13, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-hash
 ***************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    const n = s.length;
    const map = new Map(); // key - char, val - freq
    let len = 0;
    let count = 0;

    // sliding window template
    for (let l = 0, r = 0; r < n; r++) {
        // handle r
        map.set(s[r], (map.get(s[r]) || 0) + 1);
        count = map.size;

        // handle l
        while (count > 2) { // pop l from the left of the substring
            map.set(s[l], map.get(s[l]) - 1);
            if (map.get(s[l]) == 0) { // condition to reduce count to make the substring valid again
                map.delete(s[l]);
                count = map.size;
            }
            l++;
        }

        // max substring res
        len = Math.max(len, r - l + 1);
    }

    return len;
};