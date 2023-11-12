/***************************************************************************
 * Problem No. : 10002
 * Problem Name: Partition Array
 * Date        : November 8, 2023
 * Author      : @codingbro
 * Notes       :
 * 	Scenario:
 * 		Given an integer array and an integer k, I want you to partition the array such that all the
 * 		integers < k will be moved to the left, and all the integers >= k will be moved to the right.
 * 	Assumption:
 * 		1. k may not exist in the given array
 * 		2. You don't need to preserve the relative order of integers < k or >= k
 *	Example:
 * 	Input/Output:
 * 		Input nums array: [9, 3, -1, 12, 5] k=8
 * 		One possible Output nums array: [3, -1, 5, 9, 12]
 * 	Data Structure and Alg:
 * 		see code comments
 * meta        : tag-sort, tag-two-pointers, tag-array
 ***************************************************************************/

/**
 * Use a left pointer and right pointer to let them walking toward each other
 *  l - left pointer
 *  r - right pointer
 * And, unlike Solution 1, this algorithm could not preserve any relative order for the nums that are < k or 
 *  nums that are >= k.
 * @param {*} nums 
 * @param {*} k 
 */
const partition = (nums, k) => {
    const n = nums.length;
    let l = 0, r = n-1;
    while (l < r) {
        while (nums[l] < k) {
            l++;
        }
        while (nums[r] >= k) {
            r--;
        }
        if (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
    return nums;
}

/**
 * Tests
 */
const nums1 = [16, 3, 9, 7, 4, 12], k1 = 8;
console.log(partition(nums1, k1));

const nums2 = [18, 3], k2 = 10;
console.log(partition(nums2, k2));

const nums3 = [17, 9, 23, 8, 5], k3 = 8;
console.log(partition(nums3, k3));

const nums4 = [2, 9, 23, 8, 5], k4 = 8;
console.log(partition(nums4, k4)); // expect [ 2, 5, 23, 8, 9 ]