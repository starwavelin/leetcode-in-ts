/***************************************************************************
 * Problem No. : 49
 * Problem Name: Group Anagrams
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-hash
 ***************************************************************************/

/**
 * Updated on 7/14/2023
 * A concised JS solution
 */
var groupAnagramsPolishedSol = function (strs: string[]) {
    const res = [];
    const map = new Map();
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    for (let [key, val] of map) {
        res.push(val);
    }
    return res;
};

function groupAnagrams(strs: string[]): string[][] {
    const res = [];
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (map.has(key)) {
            map.get(key)?.push(str);
        } else {
            map.set(key, [str]);
        }
    }
    for (const val of map.values()) {
        res.push(val);
    }
    return res;
}
