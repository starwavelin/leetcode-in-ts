/***************************************************************************
 * Problem No. : 76
 * Problem Name: Minimum Window Substring
 * Date        : August 11, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-hash
 ***************************************************************************/

/**
 * Brute Force Solution
 * Not truly using sliding window
 *  And will exceed the given time set by LeetCode
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let res = '';
    const m = s.length, n = t.length;
    const map1 = new Array(128).fill(0), map2 = new Array(128).fill(0);

    // Can fill map2 first b/c t is the smaller string
    for (let c of t) {
        map2[c.charCodeAt(0)]++;
    }

    let len = m+1; // because the most possible longest s that has min-window substring is length m
    for (let l = 0; l < m-n+1; l++) {
        for (r = l+n-1; r < m; r++) {

            // Do the comparion within the [l, r] inclusive window
            for (let k = l; k <= r; k++) {
                map1[s[k].charCodeAt(0)]++;
            }
            if (isIncluded(map1, map2) && r-l+1 < len) {
                len = r-l+1;
                res = s.substring(l, r+1);
                map1.fill(0);
                break;             
            }

            map1.fill(0); // don't forget to restore map1 before the next round of checking
        }
    }    

    return res;
};

const isIncluded = (A, B) => { // check if Array Map B is included in Array Map A
    for (let i = 0; i < 128; i++) {
        A[i] -= B[i];
        if (A[i] < 0) return false;
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
