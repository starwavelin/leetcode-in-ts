/***************************************************************************
 * Problem No. : 
 * Problem Name: Quick Select
 * Date        : November 2, 2024
 * Author      : @codingbro
 * Notes       :
 * 	Scenario:
 * 		Implement Quick Select algorithm to find the K-th smallest number in an array
 * 	Assumption:
 * 		- What is the size of the array? [1 to 500 numbers].
        - What is the value range of each number? [-100, 100]
 * meta        : tag-sort, tag-two-pointers, tag-array
 ***************************************************************************/

/**
 * Senario: Select the k-th smallest number from the given unsorted array
 *  Here K is index-1 based
 *
 * The high level idea of the algorithm:
 * 1. In the partition function (same as the PartitionArraySol1.js), choose a pivotIndex (can use high - the last element)
 * 2. Partition: After the completion of the partition function, we return the partitionIndex (or can call it pivotIndex)
 * 3. QuickSelect function
 *  3-1. If pivotIndex == k, we found the K-th smallest, return nums[k]
 *  3-2. If the pivotIndex > k, rightBound should be pivotIndex - 1, and then recursively call the QuickSelect fn
 *  3-3. If the pivotIndex < k, leftBound should be pivotIndex + 1, and then recursively call the QuickSelect fn.
 *
 *
 * Time Complexity:
 *  O(n) on average, as it effectively halves the search space with each partition.
 * However, in the worst case, it can degrade to O(n²) if the pivot selection is poor
 * (e.g., if the pivot is always the largest or smallest element in each partition).
 *
 * Space Complexity:
 *  O(log n) on average for recursive stack space.
 *
 *
 * Using Quick Select to Find the  k -th Largest Element:
 *  Calling quickSelect(nums, nums.length - k + 1) to search for the  (n - k + 1) -th smallest element,
 * which is equivalent to the  k -th largest element.
 *
 * @param {*} nums
 * @returns
 */

const select = (nums, k) => {
  const n = nums.length;
  return quickSelect(nums, 0, n - 1, k - 1); // Use k-1 because nums array is 0-index based
  // If want to find the K-th largest, use n-k+1 instead.
};

const quickSelect = (nums, left, right, k) => {
  if (left === right) return nums[left]; // Base case, only one number left

  const partitionIndex = partition(nums, left, right);

  if (partitionIndex === k) {
    return nums[k];
  } else if (partitionIndex < k) {
    return quickSelect(nums, partitionIndex + 1, right, k);
  } else {
    return quickSelect(nums, left, partitionIndex - 1, k);
  }
};

const partition = (nums, low, high) => {
  // low - initial left bound, high - initial right bound
  const pivotValue = nums[high];

  let l = low;

  for (let r = low; r < high; r++) {
    // Move elements less than pivot to the front
    if (nums[r] < pivotValue) {
      if (r !== l) {
        [nums[r], nums[l]] = [nums[l], nums[r]];
      }

      l++;
    }
  }

  // swap the num in position l and pivotIndex
  [nums[l], nums[high]] = [nums[high], nums[l]];

  return l;
};

module.exports = {
  select
};
