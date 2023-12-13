/***************************************************************************
 * Problem No. : 209
 * Problem Name: Minimum Size Subarray Sum
 * Date        : December 11, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-subarray, tag-prefix-sum
 ***************************************************************************/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const m = nums.length;
    let len = m + 1; // len init to be a length that cannot be obtained
    let sum = 0; // sum is similar to map in other sliding window problems
    // target is like count condition in other sliding window problems

    for (let l = 0, r = 0; r < m; r++) {
        // handle r
        sum += nums[r];

        while (sum >= target) {
            // min subarray, update result
            if (r - l + 1 < len) {
                len = r - l + 1;
            }

            // handle l
            sum -= nums[l];
            l++;
        }

    }

    return len == m + 1 ? 0 : len;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */