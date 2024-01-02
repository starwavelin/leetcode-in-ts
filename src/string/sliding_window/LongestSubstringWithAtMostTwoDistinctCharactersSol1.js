/***************************************************************************
 * Problem No. : 159
 * Problem Name: Longest Substring with At Most Two Distinct Characters
 * Date        : August 9, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-map
 ***************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let res = 0;
    const map = new Array(128).fill(0);
    
    let count =0;
    for (let l = 0, r = 0; r < s.length; r++) {
        // update based on the r pointer
        if (map[s[r].charCodeAt(0)] === 0) {            
            count++;
        }
        map[s[r].charCodeAt(0)]++;
        
        // update the l pointer, think about an example: ecebbbb
        while (count > 2) {
            map[s[l].charCodeAt(0)]--;
            if (map[s[l].charCodeAt(0)] === 0) count--;
            l++;
        }
        
        res = Math.max(res, r-l+1);
    }

    return res;
};

// Tests
console.log(lengthOfLongestSubstringTwoDistinct('ecebbbb')) // 5


// We can also use Regular Map to handle this problem

var lengthOfLongestSubstringTwoDistinctRegMap = function(s) {
    let res = 0, count = 0; // the num of distinct chars
    const map = new Map(); // key - char , val - frequency

    for (let l = 0, r = 0; r < s.length; r++) {
        if (!map.has(s[r]) || map.get(s[r]) == 0) {
            count++;
        }
        map.set(s[r], (map.get(s[r]) || 0) + 1);

        while (count > 2) {
            map.set(s[l], map.get(s[l]) - 1);
            if (map.get(s[l]) == 0) count--;
            l++;
        }
        
        res = Math.max(res, r-l+1);
    }

    return res;
};