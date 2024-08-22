/***************************************************************************
 * Problem No. : 154
 * Problem Name: Find Minimum in Rotated Sorted Array II
 * Date        : Auguest 22, 2024
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

var findMin = function (nums) {
  const n = nums.length;

  if (n === 1 || nums[0] < nums[n - 1]) {
    return nums[0];
  }

  let l = 0,
    r = n - 1;
  while (l + 1 < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < nums[r]) {
      r = mid;
    } else if (nums[mid] > nums[r]) {
      l = mid;
    } else {
      // nums[mid] == nums[r]
      r--;
    }
  }
  return nums[l] < nums[r] ? nums[l] : nums[r];
};

/**
 * Tests
 */

const nums1 = [10, 1, 10, 10, 10];
console.log(findMin(nums1)); // 1

const nums2 = [2, 2, 2, 0, 1];
console.log(findMin(nums2)); // 0

const nums3 = [1, 4, 7];
console.log(findMin(nums3)); // 1

const nums4= [3, 5, 1];
console.log(findMin(nums4)); // 1
