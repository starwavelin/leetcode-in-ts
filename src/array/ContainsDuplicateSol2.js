/***************************************************************************
 * Problem No. : 217
 * Problem Name: Contains Duplicate
 * Date        : January 2, 2024
 * Author      : @codingbro
 *
 * meta        : tag-map
 ***************************************************************************/

/**
 *
 * Note: when it is the frequency count solution, unlike the set solution,
 * we want to:
 *  1. Add the num and frequency into the map first
 *  2. Then check if an element has met the > 1 condition
 *
 * This is because if we do the checking first,
 * In the case like [18, 4, 18], we will miss the opportunity to check the 2nd 18,
 * and thus directly return false, which is incorrect.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map(); // key - num, val - freq

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.get(num) > 1) {
      return true;
    }
  }

  return false;
};
