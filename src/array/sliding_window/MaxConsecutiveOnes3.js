/***************************************************************************
 * Problem No. : 1004
 * Problem Name: Max Consecutive Ones III
 * Date        : December 13, 2023
 * Author      : @codingbro
 *
 * meta        : tag-subarray, tag-sliding-window
 ***************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    const n = nums.length;
    // No map needed
    let count = 0; // count the number of 0's that we flipped into 1
    let len = 0;

    for (let l = 0, r = 0; r < n; r++) {
        // handle r
        if (nums[r] == 0) {
            count++;
        }
        // No need to actually modify the 0's value

        // handle l
        while (count > k) { // pop l from the left of the subarray
            if (nums[l] == 0) { // reduce count to make subarray valid again
                count--;                    
            }
            l++;
        }


        // max subarray of 1's
        len = Math.max(len, r - l + 1);
    }

    return len;
};


/**
 * Tests
 */
console.log(longestOnes([0,1,1,1,0,0,1,1,1], 1)); // expect 4
console.log(longestOnes([0,1,1,1,0,0,1,1,1], 0)); // expect 3
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); // expect 10
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // expect 6