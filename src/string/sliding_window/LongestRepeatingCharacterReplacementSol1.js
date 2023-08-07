/***************************************************************************
 * Problem No. : 424
 * Problem Name: Longest Repeating Character Replacement
 * Date        : August 7, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-two-pointers
 ***************************************************************************/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let res = 0;
    const map = new Map(); // key - char , value - freq of a char

    for (let l = 0, r = 0; r < s.length; r++) {
        // from r we update the map first
        map.set(s[r], (map.get(s[r]) || 0) + 1);

        // handle when to update the l pointer
        while ( (r-l+1) - Math.max(...map.values()) > k ) {
            map.set(s[l], map.get(s[l])-1); // reduce the freq of the letter pointed by l
            l++;
        }

        res = Math.max(res, r - l + 1);
    }
    return res;
};