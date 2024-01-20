/***************************************************************************
 * Problem No. : 291
 * Problem Name: Word Pattern II
 * Date        : January 20, 2024
 * Author      : @codingbro
 *
 * meta        : tag-backtracking, tag-map
 ***************************************************************************/

/**
 * Algorithm:
 * 
 * 
 *  时间复杂度：O( n^(n/m) ) - 
    空间复杂度：O(n) - m is the length of the pattern and n is the length of the string
 */


/**
Backtracking + Two Maps (c to w and w to c) 
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, s) {
    const map1 = new Map(); // c to w map
    const map2 = new Map(); // w to c map

    let p = 0, r = 0; // p is the length of pattern and r is the length of s string being used
    return dfs(pattern, s, p, r, map1, map2);
};

const dfs = (pattern, s, p, r, map1, map2) => {
    // base case - happy case: match
    if (p == pattern.length && r == s.length) {
        return true;
    }

    // base case - not match
    if (p == pattern.length || r == s.length) {
        return false;
    }

    // recursive case - neither p nor r has reached the end of pattern or s string
    const c = pattern[p];
    if (map1.has(c)) {
        const t = map1.get(c); // t is the substring being associated with c
        if (r + t.length > s.length) {
            return false;
        }
        if (s.substring(r, r + t.length) !== t) {
            return false;
        }
        return dfs(pattern, s, p+1, r+t.length, map1, map2);
    } else { // the ch-w map doesn't have the current character
        for (let i = r; i < s.length; i++) {
            const t = s.substring(r, i+1);
            if (map2.has(t)) {
                continue;
            }

            // mark change
            map1.set(c, t);
            map2.set(t, c);

            if (dfs(pattern, s, p+1, r+t.length, map1, map2)) {
                return true;
            }

            // reset mark
            map1.delete(c);
            map2.delete(t);
        }
        return false;
    }
}