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
 * Use a slow pointer to catch up with the fast pointer
 *  i - slow
 *  j - fast
 * And, this algorithm can preserve the relative order of the nums that are < k, but 
 *  cannot preserve the relative order of the nums that are >= k.
 * @param {*} nums 
 * @param {*} k 
 */
const partition = (nums, k) => {
    const n = nums.length;
    let i = 0, j = 0; // i - slow, j - fast; j should also start from 0th index
    while (j < n) {
        if (nums[j] < k) {
            if (nums[j] !== nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            i++;
        }
        j++;
    }
    return nums;
}

/**
 * Tests
 */
const nums1 = [16, 3, 9, 7, 4, 12], k1 = 8;
console.log(partition(nums1, k1)); // expect [3, 7, 4, 16, 9, 12]

const nums2 = [18, 3], k2 = 10;
console.log(partition(nums2, k2)); // expect [3, 18]

const nums3 = [17, 9, 23, 8, 5], k3 = 8;
console.log(partition(nums3, k3)); // expect [5, 9, 23, 8, 17]

// Test Case 4 shows why j cannot start from index 1.
const nums4 = [2, 9, 23, 8, 5], k4 = 8;
console.log(partition(nums4, k4)); // expect [2, 5, 23, 8, 9]