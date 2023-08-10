/***************************************************************************
 * Problem No. : 239
 * Problem Name: Sliding Window Maximum
 * Date        : August 10, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-two-pointers
 ***************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = [];
    for (let l = 0, r = l+k-1; r < nums.length; r++) {
        let max = nums[l];
        let m = l+1;
        while (m <= r) {
            if (nums[m] > max) max = nums[m];
            m++;
        }
        res.push(max);
        l++;
    }
    return res;
};

// Tests
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // [1]