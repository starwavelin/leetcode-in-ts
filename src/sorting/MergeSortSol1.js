/***************************************************************************
 * Problem No. : 10008
 * Problem Name: Merge Sort
 * Date        : November 13, 2023
 * Author      : @codingbro
 * Notes       :
 * 	Scenario:
 * 		Implement Merge Sort on a given integer array.
 * 	Assumption:
 * 		- What is the size of the array? [1 to 500 numbers].
        - What is the value range of each number? [-100, 100]
 * meta        : tag-sort, tag-two-pointers, tag-array
 ***************************************************************************/

const mergeSort = (nums) => {
  sort(nums, 0, nums.length - 1);
};

const sort = (nums, start, end) => {
  if (start >= end) {
    // termination condition
    return;
  }
  const mid = (start + end) >> 1;

  // Divide
  sort(nums, start, mid);
  sort(nums, mid + 1, end);

  // conquer
  merge(nums, start, mid, end);
};

const merge = (nums, start, mid, end) => {
  let tmp = new Array(nums.length);
  let l = start,
    r = mid + 1,
    k = start;

  while (l <= mid && r <= end) {
    tmp[k++] = nums[l] < nums[r] ? nums[l++] : nums[r++];
  }

  // Copy remaining elements from the left subarray
  while (l <= mid) {
    tmp[k++] = nums[l++];
  }

  // Copy remaining elements from the right subarray
  while (r <= end) {
    tmp[k++] = nums[r++];
  }

  // Copy the merged elements back to the original array
  for (let i = start; i <= end; i++) {
    nums[i] = tmp[i];
  }
};

/**
 * Tests
 */
const nums1 = [8];
mergeSort(nums1);
console.log(nums1); // expect [8]

const nums2 = [9, -3, 14, 5, 7, -9, 16];
mergeSort(nums2);
console.log(nums2); // expect [-9, -3, 5, 7, 9, 14, 16]

const nums3 = [105, -33, 214, 15, 37, 16, -5, -2];
mergeSort(nums3);
console.log(nums3); // expect [-33, -5, -2, 15, 16, 37, 105, 214]
