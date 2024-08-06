/***************************************************************************
 * Problem No. : 217
 * Problem Name: Contains Duplicate
 * Date        : January 2, 2024
 * Author      : @codingbro
 *
 * meta        : tag-set
 ***************************************************************************/

/**
 *
 * Note: When use the Set solution, we always want to check if set has a certian element first,
 * and if not, then we add that element into the set.
 *
 * This is due to the nature of a set.
 * If we add an element first and then check the set, we will see the set.has(el) always return true,
 * which wouldn't give us the right outcome.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      // has duplicates
      return true;
    }
    set.add(num);
  }

  return false;
};
