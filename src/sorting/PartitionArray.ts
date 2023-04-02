/***************************************************************************
 * Problem No. :
 * Problem Name: Partition Array
 * Date        : August 28, 2022
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

export class PartitionArray {
    partitionSol1 = (nums: number[], k: number): number[] => {
        const n = nums.length;
        let i = 0,
            j = 0;
        while (j < n) {
            if (nums[j] < k) {
                if (nums[i] !== nums[j]) {
                    this.swap(nums, i, j);
                }
                i++;
            }
            j++;
        }
        return nums;
    };
    // 运行结束后 [0, ..., i-1] 与 [i,...,j-1] 即为quicksort需要继续处理的子数组

    partitionSol2 = (nums: number[], k: number): number[] => {
        const n = nums.length;
        let l = 0,
            r = n - 1;
        while (l < r) {
            while (l < n && nums[l] < k) {
                l++;
            }
            while (r >= 0 && nums[r] >= k) {
                r--;
            }
            if (l < r) {
                this.swap(nums, l, r);
                l++;
                r--;
            }
        }
        return nums;
    };
    // 运行结束后 [0, ..., l-1] 与 [l,...,n-1] 即为quicksort需要继续处理的子数组

    swap = (nums: number[], i: number, j: number): void => {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    };
}
