/***************************************************************************
 * Problem No. :
 * Problem Name: Insertion Sort
 * Date        : July 29, 2023
 * Author      : @codingbro
 * Notes       :
 * 	An example of Insertion Sort
 *  Input Array:
 *      [9, 8, 10, 5]
 *      Core idea:
 *          Starting from index 1, use the fast pointer i to point it and store its val to var tmp
 *          for the slow pointer j=i-1, if j's num is greater than tmp, we override (j+1)'s num with j's num,
 *              until either j's num is not greater than tmp or j's value is less than 0.
 *          then, we set (j+1)'s num with tmp
 *
 *  So, the input array will be transitioning step by step as:
 *      [8, 9, 10, 5]
 *      [5, 8, 9, 10]
 * meta        : tag-sort, tag-two-pointers, tag-array
 ***************************************************************************/

/**
 * Let r start from index 1 because asssume index 0 is always sorted
 * tmp always refer to the nums[r], a potentially smaller number
 * @param {*} nums
 * @returns
 */

const sort = (nums) => {
  const n = nums.length;

  // Start from index 1 because the 0th element is always sorted.
  for (let r = 1; r < n; r++) {
    // r - fast pointer
    const tmp = nums[r];
    let l = r - 1;

    // shift the elements of the sorted portion to the right to make space for tmp
    while (l >= 0 && nums[l] > tmp) {
      nums[l + 1] = nums[l];
      l--;
    }

    // place tmp into its correct position
    nums[l + 1] = tmp;
  }

  return nums;
};

module.exports = {
  sort
};

// Tests
// console.log(sort([8, 9, 10, 5]));
// console.log(sort([8, 9, -10, 5, 73, -2, -9, 18]));
