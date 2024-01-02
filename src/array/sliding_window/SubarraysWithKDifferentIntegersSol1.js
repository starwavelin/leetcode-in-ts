/***************************************************************************
 * Problem No. : 992
 * Problem Name: Subarrays with K Different Integers
 * Date        : August 16, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-map, tag-math
 ***************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k-1); 
};

var atMostKDistinct = function(nums, k) {
    let res = 0, count = 0; // count records the number of different integers involved
    const map = new Array(2 * 10 ** 4 + 1).fill(0);

    for (let l = 0, r = 0; r < nums.length; r++) {
        if (map[nums[r]] == 0) count++;
        map[nums[r]]++;

        while (count > k) {
            map[nums[l]]--;
            if (map[nums[l]] == 0) count--;
            l++;
        }

        res += r-l+1;
    }

    return res;
};


// Tests
console.log(subarraysWithKDistinct([1,2,1,2,3], 2))  // 7
console.log(subarraysWithKDistinct([1,2,1,3,4], 3))  // 3


/**
 * The following is an incorrect solution.
 *  If using the following solution, due to the way of handling l pointer's moving
 * console.log(subarraysWithKDistinct([1,2,1,3,4], 3))  // should have 3 solutions: [1,2,1,3], [2,1,3], [1,3,4]
 *  will omit the solution [2,1,3] because when [2,1,3,4] is formed, meaning r pointer has reached to the last number [value 4], 
 *  the count remains 4 so that l pointer will bypass 2 to point to the 2nd 1. So that the solution [2,1,3] is ignored.
 */
var WRONGsubarraysWithKDistinct = function(nums, k) {
    let res = 0, count = 0; // count records the number of different integers involved
    const map = new Array(2 * 10 ** 4 + 1).fill(0);

    for (let l = 0, r = 0; r < nums.length; r++) {
        // handle r pointer
        if (map[nums[r]] == 0) {
            count++;
        }
        map[nums[r]]++;

        // Handle l pointer
        while (count > k) {
            map[nums[l]]--;
            if (map[nums[l]] == 0) count--;
            l++;
        }

        // update result
        if (count == k) {
            res += 1;
        }
    }

    return res;
};