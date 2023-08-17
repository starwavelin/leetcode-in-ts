/***************************************************************************
 * Problem No. : 340 Variant 1
 * Problem Name: Longest Substring with At Most K Distinct Characters
 * Date        : August 16, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-hash
 ***************************************************************************/

/**
 * Problem:
 *  Similar but unlike to LC 340, this time I want to get the number of substrings that 
 *  has at most K distinct characters, how shall I handle that?
 * 
 * And a condition:
 *  The same character at different indices are considered as different chars.
 * 
 * Solution:
 *  For the generating result portion, instead of res = Math.max(res, r - l +1).
 *  When we find a valid solution, we just let res += r - l + 1; That's it.
 */

var numOfSubstringKDistinct = function(s, k) {
    let res = 0, count = 0, map = new Array(128).fill(0);

    for (let l = 0, r = 0; r < s.length; r++) {
        if (map[s[r].charCodeAt(0)] == 0) count++;
        map[s[r].charCodeAt(0)]++;

        while (count > k) {
            map[s[l].charCodeAt(0)]--;
            if (map[s[l].charCodeAt(0)] == 0) count--;
            l++;
        }

        res += r-l+1;
    }

    return res;
};

// Tests
console.log(numOfSubstringKDistinct("eceba", 2)); // 10 [The 5 Single characters, 'ec', 'ece', 'ce', 'eb', 'ba']
console.log(numOfSubstringKDistinct("eceba", 1)); // 5 ['e', 'c', 'e', 'b', 'a'] 
console.log(numOfSubstringKDistinct("eceba", 3)); // 13 [ The solution from example 1 + 'eceb', 'ceb', 'eba'] 
console.log(numOfSubstringKDistinct("bb", 1)); // 3 Why this is 3??  I think this should be 2 as ['b', 'b']
console.log(numOfSubstringKDistinct("bb", 2)); // 3     ['b', 'b', 'bb']



/**
 * Use typical Map (not array map) to handle this
 */
var numOfSubstringKDistinctTypicalMap = function(s, k) {
    let res = 0, count = 0; // the num of distinct chars
    const map = new Map(); // key - char , val - frequency

    for (let l = 0, r = 0; r < s.length; r++) {
        if (!map.has(s[r]) || map.get(s[r]) == 0) {
            count++;
        }
        map.set(s[r], (map.get(s[r]) || 0) + 1);

        while (count > k) {
            map.set(s[l], map.get(s[l]) - 1);
            if (map.get(s[l]) == 0) count--;
            l++;
        }
        
        res += r-l+1;
    }

    return res;
};

// Tests 2
console.log('Test Part2 starts: ');
console.log(numOfSubstringKDistinctTypicalMap("eceba", 2)); // 10 [The 5 Single characters, 'ec', 'ece', 'ce', 'eb', 'ba']
console.log(numOfSubstringKDistinctTypicalMap("eceba", 1)); // 5 ['e', 'c', 'e', 'b', 'a'] 
console.log(numOfSubstringKDistinctTypicalMap("eceba", 3)); // 13 [ The solution from example 1 + 'eceb', 'ceb', 'eba'] 
console.log(numOfSubstringKDistinctTypicalMap("bb", 1)); // 3 Why this is 3??  I think this should be 2 as ['b', 'b']
console.log(numOfSubstringKDistinctTypicalMap("bb", 2)); // 3     ['b', 'b', 'bb']



/**
 * The Solution from Grand Yang
 *  Solutoin 2:
 *  https://grandyang.com/leetcode/992/
 */

var numOfSubstringKDistinctGrandYang = function(s, k) {
    const n = s.length;
    let res = 0;
    let left = 0;
    const numCnt = new Map();

    for (let i = 0; i < n; ++i) {
        numCnt.set(s[i], (numCnt.get(s[i]) || 0) + 1);
        
        while (numCnt.size > k) {
            if (numCnt.get(s[left]) === 1) {
                numCnt.delete(s[left]);
            } else {
                numCnt.set(s[left], numCnt.get(s[left]) - 1);
            }
            ++left;
        }
        
        res += i - left + 1;
    }
    
    return res;
};

// Tests 3
console.log('Test Part3 starts: ');
console.log(numOfSubstringKDistinctGrandYang("eceba", 2)); // 10 [The 5 Single characters, 'ec', 'ece', 'ce', 'eb', 'ba']
console.log(numOfSubstringKDistinctGrandYang("eceba", 1)); // 5 ['e', 'c', 'e', 'b', 'a'] 
console.log(numOfSubstringKDistinctGrandYang("eceba", 3)); // 13 [ The solution from example 1 + 'eceb', 'ceb', 'eba'] 
console.log(numOfSubstringKDistinctGrandYang("bb", 1)); // 3 Why this is 3??  I think this should be 2 as ['b', 'b']
console.log(numOfSubstringKDistinctGrandYang("bb", 2)); // 3     ['b', 'b', 'bb']