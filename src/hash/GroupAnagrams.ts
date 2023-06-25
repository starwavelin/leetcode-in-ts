/***************************************************************************
 * Problem No. : 49
 * Problem Name: Group Anagrams
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-hash
 ***************************************************************************/

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
