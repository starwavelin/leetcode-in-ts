/***************************************************************************
 * Problem No. : 239
 * Problem Name: Sliding Window Maximum
 * Date        : August 10, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-deque
 ***************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const res = [];

    const q = [];
    for (let i = 0; i < n; i++) {
        // remove the head of the deque if it is out of range k
        while (q.length > 0 && q[0] < i - k + 1) {
            q.shift();
        }

        // remove smaller number in range k from the end of the deque 
        // when newly added nums[i] is greater than the number at the end of the deque
        while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
            q.pop();
        }

        // deque contains the index of elements and deque's head contains the index of the max
        // res contains the content. When i >= k-1 we start to fill the res
        q.push(i);
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;
};

// Tests
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // [1]