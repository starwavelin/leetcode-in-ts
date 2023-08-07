/***************************************************************************
 * Problem No. : 424
 * Problem Name: Longest Repeating Character Replacement
 * Date        : August 7, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-two-pointers
 ***************************************************************************/

/**
 * Solution 2 is an optimization based on Solution 1
 * becasue we have 
 *  maxLen - maxFrequency > k as the condition to move l pointer
 * we know that if we want to get a maxLen, we need to have a higher frequency of letter so that we would have
 *  maxLen - maxFrequency <= k to be satisfied.
 * That said, we only care about maxFrequency so that when doing Math.max, we can just compare maxFreq with the current letter's freq
 */

// s is the given string and k is a number
var charReplacement = (s, k) => {
    let res = 0;
    let maxFreq = 0;
    const map = new Map(); // key - char, val - freq

    for (let l = 0, r = 0; r < s.length; r++) {
        map.set(s[r], (map.get(s[r]) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(s[r]));

        // when to move l
        while ( (r-l+1) - maxFreq > k ) {
            map.set(s[l], map.get(s[l])-1);
            l++;
        }

        res = Math.max(res, r-l+1);
    }

    return res;
}