/***************************************************************************
 * Problem No. : 41
 * Problem Name: First Missing Positive
 * Date        : January 9, 2024
 * Author      : @codingbro
 *
 * meta        : tag-sort, tag-array-map
 ***************************************************************************/

/**
 * Algorithm: Use the idea of Bucket Sort
 * 
 *  1. Traverse the given input array incremently
    2. When (while) the current value nums[i] is greater than 0 and less than or equal to n (n is the size of the input array), and the current value nums[i] is not in its right position [because when nums[i] satisfies the first two conditions, it is a positive integer, the right position for it should be nums[nums[i]-1] ]. So, if it is not in the right position, it means nums[i] ≠ nums[ nums[i] - 1 ]
        1. We swap nums[i] with nums[ nums[i] - 1 ], but be careful, don’t directly use JS’ destructure way. [See Pain Point]
    3. Traverse the newly ordered input array nums
        1. if we see nums[i] ≠ i+1, we return i+1 as the positive integer we want
    4. Otherwise return n+1 because for 1 to n they are already in their right positions.

    Time Complexity: O(n)
    Space Complexity: O(1)
 * 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[i] != nums [nums[i] - 1]) {
            swap(nums, i, nums[i] - 1);
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (nums[i] != i+1) {
            return i + 1;
        }
    }

    return n + 1;
};

const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}