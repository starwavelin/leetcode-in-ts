/***************************************************************************
 * Problem No. : 10007
 * Problem Name: Quick Sort
 * Date        : October 31, 2024
 * Author      : @codingbro
 * Notes       :
 * 	Scenario:
 * 		Implement Quick Sort on a given integer array.
 *      For the array partition, use fast slow pointer approach.
 * 	Assumption:
 * 		- What is the size of the array? [1 to 500 numbers].
        - What is the value range of each number? [-100, 100]
 * meta        : tag-sort, tag-two-pointers, tag-array
 ***************************************************************************/

/**
 * This version of Quick Sort is based on Partition Array Method 1 -
 * using a left pointer chasing after a right pointer
 *
 * @param {*} nums
 * @returns
 */

const sort = (nums) => {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

const quickSort = (nums, left, right) => {
  if (left < right) {
    const partitionIndex = partition(nums, left, right);
    quickSort(nums, left, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, right);
  }
};

const partition = (nums, low, high) => {
  const pivotIndex = high;

  let l = low;

  for (let r = low; r < high; r++) {
    // Move elements less than pivot to the front
    if (nums[r] < nums[pivotIndex]) {
      if (r !== l) {
        [nums[r], nums[l]] = [nums[l], nums[r]];
      }

      l++;
    }
  }

  // swap the num in position l and pivotIndex
  [nums[l], nums[pivotIndex]] = [nums[pivotIndex], nums[l]];

  return l;
};

module.exports = {
  sort
};
