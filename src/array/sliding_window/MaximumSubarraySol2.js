/***************************************************************************
 * Problem No. : 53
 * Problem Name: Maximum Subarray (Sum)
 * Date        : January 15, 2024
 * Author      : @codingbro
 *
 * meta        : tag-divide-and-conquer, tag-dfs, tag-subarray
 ***************************************************************************/

/**
 * Algorithm:
 *  Use the algorithm similar to the problem asking for the largest path sum of a binary tree.
 * The maximum sum could come from the larger fo the left subarray or the right subaray, 
 * or the larger of the previous value and the sum summed up from left subarray to the mid number to the right subarray.
 * 
 * Use a dfs help function that takes the given input, left endpoint and right endpoint indices.
 * 
 * within the dfs help function
 *  set the base case
 *  get the leftSum of the left subarray
 *  get the rightSum of the right subarray
 * 
 * Use max function to figure out the possible larget sum
 * 
 * 
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length;
    return dfs(nums, 0, n-1);
};

const dfs = (nums, left, right) => {
    // base case
    if (left >= right) return nums[left];

    // recursive case (Divide)
    const mid = (left + right) >> 1;
    let leftSum = 0, rightSum = 0, curSum = 0;
        // scan from mid to left
            // Notes: 1. the starting index shall be mid-1 cuz we will evaluate nums[mid] in the conquer part
            // 2. the lower bound shall be dynamic, which is left
            // 3. the curSum shall count each nums[i] it traverses, unlike Madane's algo which eliminate the negative-impact num immediately
    for (let i = mid-1; i >= left; i--) {
        curSum += nums[i];
        leftSum = Math.max(leftSum, curSum);
    }
        // scan from mid to right
    curSum = 0; // reset curSum for right subarray calculation use
    for (let i = mid+1; i <= right; i++) {
        curSum += nums[i];
        rightSum = Math.max(rightSum, curSum);
    }

    // conquer
    return Math.max(Math.max(dfs(nums, left, mid-1), dfs(nums, mid+1, right)), leftSum + nums[mid] + rightSum);
}