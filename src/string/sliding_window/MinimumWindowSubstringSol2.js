/***************************************************************************
 * Problem No. : 76
 * Problem Name: Minimum Window Substring
 * Date        : August 14, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-substring, tag-hash, tag-array-map
 ***************************************************************************/

/**
 * Solution 2:
 *  The idea is from NeetCode Video: https://www.youtube.com/watch?v=jSto0O4AJbM
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const m = s.length;
    let head = 0, len = m + 1; // because the most possible longest s that has min-window substring is length m 
    const windowMap = new Map(), countMap = new Map(); // key - char, val - frequency    

    // Can fill countMap first b/c t is the smaller string
    for (let c of t) {
        countMap.set(c, (countMap.get(c) || 0) + 1);
    }
    let have = 0, need = countMap.size;


    for (let l = 0, r = 0; r < m; r++) {
        const c = s[r];
        windowMap.set(c, (windowMap.get(c) || 0) + 1);

        if (countMap.get(c) > 0 && windowMap.get(c) === countMap.get(c)) {
            have++;
        }

        while (have === need) {
            // Update result
            if ( r-l+1 < len ) {
                head = l;
                len = r-l+1;
            }

            // Start popping (removing) element from the left of our window
            const c = s[l];
            windowMap.set(c, windowMap.get(c) - 1);
            if (countMap.get(c) > 0 && windowMap.get(c) < countMap.get(c)) {
                have--;
            }
            l++;
        }
    }

    return len === m + 1 ? '' : s.substring(head, head + len);
};


// Tests
console.log(minWindow("ADOBECK", "ABC")); // ADOBEC
console.log(minWindow("aa", "aa")); // aa
console.log(minWindow("BCDEFGHIJKLMNOPQRSTUVWXYZA", "A")); // A

console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC

const s = "zfvdiuibotzsqrpgfnbfwudczyruzvuyaselommcfmuxdmgkzhpydsafttzsowrrovccjqhpcdohpurpeiphdrmwkooykfracvemmldqpragmtxqcmxfdmbnapomxfmzdqlpeofvghbubzkdnjirxlgxaujzcxzfqmuudbrllsfmtrpjczaakgzmdlofinkybgugjlrugygzrxiuwkwitvxwilbranrbvmigzbbfcjhthrpfclqxjntrawkajcdgqlmpppxrzemivcpzpfwauruuneuyiyeylrqagnthrgpokhozmmaheudryysjywhjpzmymhhfnxwxemzsyzbcvfwvfoedmoocnccckjjzifzoryhqxkuurspwgubtkqxxuzbeilersdhkdoccbywsrlpxhssriprdqujzhnsaszmvqoxrotjfhafqtxkdpbifvsgfhafccr"
const t = "xshxlvswdb"
console.log(minWindow(s, t)); // "bywsrlpxhssriprdqujzhnsaszmvqox"

const s2 = 'acedfecbd', t2 = 'cef';
console.log(minWindow(s2, t2)); // 'fec'







/* Using array map solution 
 * The not good part of using array-map are two:
    1. At this time there are both upper and lowercase letters involved, so the array map of size 128 is acutally discrete (in two parts)
    2. It is not easy to count the unique letters existing in an arrayMap, but is easier to do so using a regular map (map.size)
 *
*/

var minWindowArrayMap = function(s, t) {
    const m = s.length;
    let res = [-1, -1], len = m+1; // because the most possible longest s that has min-window substring is length m 
    const windowMap = new Array(128).fill(0), countMap = new Array(128).fill(0);
    let have = 0, need = 0;

    // Can fill countMap first b/c t is the smaller string
    for (let c of t) {
        countMap[c.charCodeAt(0)]++;
    }

    // Traverse the countMap map array to get the real need value
    for (let i = 0; i < countMap.length; i++) {
        if (countMap[i] > 0) {
            need++;
        }
    }


    for (let l = 0, r = 0; r < m; r++) {
        const c = s[r];
        windowMap[c.charCodeAt(0)]++;

        if (countMap[c.charCodeAt(0)] > 0 && windowMap[c.charCodeAt(0)] === countMap[c.charCodeAt(0)]) {
            have++;
        }

        while (have === need) {
            // Update result
            if ( r-l+1 < len ) {
                res = [l, r];
                len = r-l+1;
            }

            // Pop from the left of our window
            windowMap[s[l].charCodeAt(0)]--;
            if (countMap[s[l].charCodeAt(0)] > 0 && windowMap[s[l].charCodeAt(0)] < countMap[s[l].charCodeAt(0)]) {
                have--;
            }
            l++;
        }
    }

    return len === m + 1 ? '' : s.substring(res[0], res[1]+1);
};