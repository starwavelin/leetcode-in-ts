/***************************************************************************
 * Problem No. : 76
 * Problem Name: Minimum Window Substring
 * Date        : August 11, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-substring, tag-hash, tag-array-map
 ***************************************************************************/

/**
 * Brute Force Solution
 * Not truly using sliding window
 *  And will exceed the time boundary set by LeetCode
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let res = '';
    const m = s.length, n = t.length;
    const windowMap = new Array(128).fill(0), countMap = new Array(128).fill(0);

    // Can fill countMap first because t is (usually) the smaller string
    for (let c of t) {
        countMap[c.charCodeAt(0)]++;
    }

    let len = m+1; // because the most possible longest s that has min-window substring is length m

    for (let l = 0; l < m-n+1; l++) {
        for (let r = l+n-1; r < m; r++) {

            // Do the comparion for the window formed by [l, r] inclusively
            for (let k = l; k <= r; k++) {
                windowMap[s.charCodeAt(k)]++;
            }

            // Found a valid substring and the substring's length is smaller than the current valid substring
            if (isIncluded(windowMap, countMap) && r-l+1 < len) {
                len = r-l+1;
                res = s.substring(l, r+1);
                windowMap.fill(0); // reset the windowMap
                break; 
            }

            windowMap.fill(0); // don't forget to restore windowMap before the next round of checking
        }
    }    

    return res;
};

const isIncluded = (A, B) => { // check if Array Map B is included in Array Map A
    for (let i = 0; i < 128; i++) {
        A[i] -= B[i];
        if (A[i] < 0) {
            return false;
        }
    }
    return true;
}




// Tests
console.log(minWindow("ADOBECK", "ABC")); // ADOBEC
console.log(minWindow("ADOBEC", "ABC")); // ADOBEC
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC

const s = "zfvdiuibotzsqrpgfnbfwudczyruzvuyaselommcfmuxdmgkzhpydsafttzsowrrovccjqhpcdohpurpeiphdrmwkooykfracvemmldqpragmtxqcmxfdmbnapomxfmzdqlpeofvghbubzkdnjirxlgxaujzcxzfqmuudbrllsfmtrpjczaakgzmdlofinkybgugjlrugygzrxiuwkwitvxwilbranrbvmigzbbfcjhthrpfclqxjntrawkajcdgqlmpppxrzemivcpzpfwauruuneuyiyeylrqagnthrgpokhozmmaheudryysjywhjpzmymhhfnxwxemzsyzbcvfwvfoedmoocnccckjjzifzoryhqxkuurspwgubtkqxxuzbeilersdhkdoccbywsrlpxhssriprdqujzhnsaszmvqoxrotjfhafqtxkdpbifvsgfhafccr"
const t = "xshxlvswdb"
console.log(minWindow(s, t)); // "bywsrlpxhssriprdqujzhnsaszmvqox"

console.log(minWindow("BCDEFGHIJKLMNOPQRSTUVWXYZA", "A")); // A
console.log(minWindow("aa", "aa")); // aa

const s2 = 'acedfecbd', t2 = 'cef';
console.log(minWindow(s2, t2)); // 'fec'
