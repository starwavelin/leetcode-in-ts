/***************************************************************************
 * Problem No. : 76
 * Problem Name: Minimum Window Substring
 * Date        : August 14, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-substring, tag-map, tag-array-map
 ***************************************************************************/

/**
 * Solution 2:
 *  The idea is from NeetCode Video: https://www.youtube.com/watch?v=jSto0O4AJbM
 * Using two counts, `have` and `need`
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const n = s.length;

  let head = 0,
    len = n + 1; // len is the length of the window substring, init to a cannot obtained value
  const sourceMap = new Map(),
    targetMap = new Map(); // key - char, val - frequency
  let haveCount = 0,
    needCount = 0;

  // count need: we fill the targetMap first b/c t is the target string
  for (let c of t) {
    targetMap.set(c, (targetMap.get(c) || 0) + 1);
  }
  needCount = targetMap.size;

  // Sliding window template
  for (let l = 0, r = 0; r < n; r++) {
    // handle r
    const cur = s[r];
    sourceMap.set(cur, (sourceMap.get(cur) || 0) + 1);
    if (targetMap.has(cur) && sourceMap.get(cur) === targetMap.get(cur)) {
      // count the possible increase of haveCount
      haveCount++;
    }

    while (haveCount === needCount) {
      // min window string, update res here
      if (r - l + 1 < len) {
        head = l;
        len = r - l + 1;
      }

      // update l pointer and the have count, pop the left el from the window
      const leftChar = s[l];
      sourceMap.set(leftChar, sourceMap.get(leftChar) - 1);
      if (targetMap.has(leftChar) && sourceMap.get(leftChar) < targetMap.get(leftChar)) {
        haveCount--;
      }
      l++;
    }
  }

  return len === n + 1 ? '' : s.substring(head, head + len);
};

// Unit Tests

/* Using array map solution 
 * The not good part of using array-map are two:
    1. At this time there are both upper and lowercase letters involved, so the array map of size 128 is acutally discrete (in two parts)
    2. It is not easy to count the unique letters existing in an arrayMap, but is easier to do so using a regular map (map.size)
 *
*/

var minWindowArrayMap = function (s, t) {
  const m = s.length;
  let res = [-1, -1],
    len = m + 1; // because the most possible longest s that has min-window substring is length m
  const windowMap = new Array(128).fill(0),
    countMap = new Array(128).fill(0);
  let have = 0,
    need = 0;

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
      if (r - l + 1 < len) {
        res = [l, r];
        len = r - l + 1;
      }

      // Pop from the left of our window
      windowMap[s[l].charCodeAt(0)]--;
      if (countMap[s[l].charCodeAt(0)] > 0 && windowMap[s[l].charCodeAt(0)] < countMap[s[l].charCodeAt(0)]) {
        have--;
      }
      l++;
    }
  }

  return len === m + 1 ? '' : s.substring(res[0], res[1] + 1);
};

module.exports = {
  minWindow,
  minWindowArrayMap
};
