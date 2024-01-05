/***************************************************************************
 * Problem No. : 290
 * Problem Name: Word Pattern
 * Date        : January 5, 2024
 * Author      : @codingbro
 *
 * meta        : tag-map
 ***************************************************************************/

/**
 * Algorithm:
 *  We use two maps - charToWordMap wordToCharMap
 *  during the traversal of the word list's length,
 *      if the charToWordMap for the current char is not the target word
 *          or the wordToCharMap for the current word is not the target char
 *              return false
 *      ow, put the corresponding char and word to the corresponding maps
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
    const words = s.split(' ');
    if (pattern.length != words.length) {
        return false;
    }

    const charToWordMap = new Map();
    const wordToCharMap = new Map();

    const n = pattern.length;
    for (let i = 0; i < n; i++) {
        const c = pattern[i];
        const w = words[i];

        if (charToWordMap.has(c) && charToWordMap.get(c) != w ||
            wordToCharMap.has(w) && wordToCharMap.get(w) != c) {
                return false;
            }

        charToWordMap.set(c, w);
        wordToCharMap.set(w, c);
    }

    return true;
};



/**
 * Tests
 */

console.log(wordPatternMatch("aabb", "dog cat cat dog")); // false
console.log(wordPatternMatch("abba", "dog cat cat dog")); // true
console.log(wordPatternMatch("aabb", "dog cat cat fish")); // false
console.log(wordPatternMatch("aaaa", "dog cat cat dog")); // false