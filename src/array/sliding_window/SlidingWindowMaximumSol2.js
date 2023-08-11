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
    const res = [];
    const n = nums.length;
    const q = []; // deque for storing the indices of elements; deque's head contains the index of the max

    for (let l = 0, r = 0; r < n; r++) {
        // remove smaller number in range k from the end of the deque 
        // when newly added nums[r] is greater than the number at the end of the deque
        while (q.length > 0 && nums[r] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(r);

        // remove the head of the deque if it is out of range k
        if (l > q[0]) {
            q.shift();
        }

        // When r >= k-1 we start to fill the res        
        if (r >= k - 1) {
            res.push(nums[q[0]]);
            l++;
        }
    }
    return res;
};

// Tests
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // [1]



// Solution 2, old way of writing it, without explicitly use left pointer:
var maxSlidingWindowSol2 = function(nums, k) {
    const res = [];
    const n = nums.length;
    const q = []; // deque for storing the indices of elements; deque's head contains the index of the max

    for (let r = 0; r < n; r++) {
        // remove smaller number in range k from the end of the deque 
        // when newly added nums[r] is greater than the number at the end of the deque
        while (q.length > 0 && nums[r] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(r);

        // remove the head of the deque if it is out of range k
        if (r-k+1 > q[0]) {
            q.shift();
        }

        // When r >= k-1 we start to fill the res        
        if (r >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;
};