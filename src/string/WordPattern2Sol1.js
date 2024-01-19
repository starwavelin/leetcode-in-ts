/***************************************************************************
 * Problem No. : 291
 * Problem Name: Word Pattern II
 * Date        : January 18, 2024
 * Author      : @codingbro
 *
 * meta        : tag-backtracking
 ***************************************************************************/

/**
 * Algorithm:
 *  
 */


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, s) {
    const map = new Map(); // key - ch, val - word
    let p = 0, r = 0; // p - index of the pattern and r - index of the s string
    return dfs(pattern, s, p, r, map);
};

const dfs = (pattern, s, p, r, map) => {
    // Base case - happy case
    if (p == pattern.length && r == s.length) { 
        return true;
    }

    // Base case - falsey case - p goes to the end but r doesn't or r goes to the end but p doesn't
    if (p == pattern.length || r == s.length) {
        return false;
    }

    // generic recursive case - neither p nor r goes to the end of the pattern or s string
    const c = pattern[p]; // get the pattern character first

    for (let i = r; i < s.length; i++) {
        const t = s.substring(r, i+1);  // t is a substring from s 

        // if the substring t is already in the map and being mapped to a given character, call dfs to determine the result
        if (map.has(c) && map.get(c) == t) {
            if (dfs(pattern, s, p+1, i+1, map)) {
                return true;
            }
        }
        // the current character is not in the map
        else if (!map.has(c)) {
            let isTInMap = false;

            // loop through map to see if t is in Map
            for (let key of map.keys()) {
                if (map.get(key) == t) {
                    isTInMap = true;
                }
            }

            // only when we're sure t is not in the map, we set the backtracking invocation
            if (!isTInMap) {
                map.set(c, t);
                const dfsRes = dfs(pattern, s, p+1, i+1, map);
                if (dfsRes) {
                    return true;
                } else {
                    map.delete(c);    
                }
            }
        }
    }

    // If overall we didn't find a match, return false
    return false;
}