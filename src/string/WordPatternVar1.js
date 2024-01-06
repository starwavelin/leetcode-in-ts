/***************************************************************************
 * Problem No. : 290 Var 1
 * Problem Name: Word Pattern
 * Date        : January 5, 2024
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-array-map
 ***************************************************************************/

/**
 * Problem:
 *  Unlike the one on LeetCode, this time the pattern is an array of integers
 *  pattern = [1, 2, 2, 1], word = 'dog cat cat dog'
 *  this will return true.
 * 
 * Assume the integers provided in the pattern array will be positive integers
 * ranging from 1 to 1000
 */

/**
 * Algorithm:
 *  We use two maps - numToWordMap wordToNumMap
 *  during the traversal of the word list's length,
 *      if the numToWordMap for the current num is not the target word
 *          or the wordToNumMap for the current word is not the target num
 *              return false
 *      ow, put the corresponding num and word to the corresponding maps
 * 
 *  return true
 * 
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, s) {
    const words = s.split(/\s+/);
    if (pattern.length != words.length) {
        return false;
    }

    const map1 = new Array(1001).fill(undefined); // num to word map
    const map2 = new Map(); // word to num map

    const n = pattern.length;
    for (let i = 0; i < n; i++) {
        const num = pattern[i];
        const w = words[i];

        // follow the definition of bijection
        if (map1[num] && map1[num] != w ||
            map2.has(w) && map2.get(w) != num) {
                return false;
            }

        map1[num] = w;
        map2.set(w, num);
    }

    return true;
};



/**
 * Tests
 */

console.log(wordPatternMatch([1, 2, 2, 1], "dog cat cat dog")); // true
console.log(wordPatternMatch([1, 2, 2, 1], "dog dog dog dog")); // false
console.log(wordPatternMatch([1, 1, 2, 2], "dog cat cat dog")); // false
console.log(wordPatternMatch([1, 1, 2, 2], "dog cat cat fish")); // false
console.log(wordPatternMatch([1, 1, 1, 1], "dog cat cat dog")); // false
console.log(wordPatternMatch([1, 2, 9, 1], "dog cat monkey dog")); // true