/***************************************************************************
 * Problem No. : 49
 * Problem Name: Group Anagrams
 * Date        : February 5, 2024
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-array-map
 ***************************************************************************/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map(); // key - key of a set of anagrams, val - a list of anagrams

    for (let s of strs) {
        let key = getKey(s);

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(s);
    }

    return Array.from(map.values());
};

/**
 * form the key based on the count of characters in s
 * @param {string} s 
 */
const getKey = s => {
    let countMap = new Array(26).fill(0); // array map
    for (let c of s) {
        countMap[c.charCodeAt(0) - 97]++; // 97 is the ASCII code of 'a'
    }
    return countMap.map(val => `#${val}`).join('');
}


 /**
  * tests
  */
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));