/***************************************************************************
 * Problem No. : 76
 * Problem Name: Minimum Window Substring
 * Date        : December 10, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-substring, tag-map, tag-array-map
 ***************************************************************************/

/**
 * Solution 3
 *  Using the template created by zjh and redtesla
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const m = s.length;
    const map = new Map(); // key: char, val: freq
    let count = t.length; // count init to be t.length, used for validating if the window string is valid
    let len = m + 1; // len is the length of the window substring
    let head = 0; // head - the starting index of the window substring

    // Init the map
    for (let c of t) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    // sliding window template
    for (let l = 0, r = 0; r < m; r++) {
        // handle r
        if (map.get(s[r]) > 0) {
            count--;
        }
        map.set(s[r], map.get(s[r]) - 1);

        while (count == 0) {
            // min window string
            if (r - l + 1 < len) {
                len = r - l + 1;
                head = l;
            }

            // handle l
            if (map.get(s[l]) == 0) {
                count++; // make cur substring invalid again
            }
            map.set(s[l], map.get(s[l]) + 1);
            l++;
        }
    }

    return len == m + 1 ? '' : s.substring(head, head + len);    
};


// Tests
console.log(minWindow("ADOBECK", "ABC")); // ADOBEC
console.log(minWindow("aa", "aa")); // aa
console.log(minWindow("BCDEFGHIJKLMNOPQRSTUVWXYZA", "A")); // A
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC

const s1 = "zfvdiuibotzsqrpgfnbfwudczyruzvuyaselommcfmuxdmgkzhpydsafttzsowrrovccjqhpcdohpurpeiphdrmwkooykfracvemmldqpragmtxqcmxfdmbnapomxfmzdqlpeofvghbubzkdnjirxlgxaujzcxzfqmuudbrllsfmtrpjczaakgzmdlofinkybgugjlrugygzrxiuwkwitvxwilbranrbvmigzbbfcjhthrpfclqxjntrawkajcdgqlmpppxrzemivcpzpfwauruuneuyiyeylrqagnthrgpokhozmmaheudryysjywhjpzmymhhfnxwxemzsyzbcvfwvfoedmoocnccckjjzifzoryhqxkuurspwgubtkqxxuzbeilersdhkdoccbywsrlpxhssriprdqujzhnsaszmvqoxrotjfhafqtxkdpbifvsgfhafccr"
const t1 = "xshxlvswdb"
console.log(minWindow(s1, t1)); // "bywsrlpxhssriprdqujzhnsaszmvqox"

const s2 = 'acedfecbd', t2 = 'cef';
console.log(minWindow(s2, t2)); // 'fec'