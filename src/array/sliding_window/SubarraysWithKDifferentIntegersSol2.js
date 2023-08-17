/***************************************************************************
 * Problem No. : 992
 * Problem Name: Subarrays with K Different Integers
 * Date        : August 17, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-hash, tag-math
 ***************************************************************************/

/**
 * Solution 1 uses Array Map and this solution uses a regular map
 * This solution can handle the case if there are negative integers used in the nums array
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k-1); 
};

var atMostKDistinct = function(nums, k) {
    let res = 0, count = 0, map = new Map(); // key - int, value - the freq of a specific int

    for (let l=0, r=0; r < nums.length; r++) {
        // handle r pointer
        if (!map.has(nums[r]) || map.get(nums[r]) == 0) {
            count++;
        }
        map.set(nums[r], (map.get(nums[r]) || 0) + 1);


        // handle l pointer
        while (count > k) {
            map.set(nums[l], map.get(nums[l]) - 1);
            if (map.get(nums[l]) == 0) count--;
            l++;
        }


        // gen result

        res += r-l+1; 
    }

    return res;
};


// Tests
console.log(subarraysWithKDistinct([1,2,1,2,3], 2))  // 7
console.log(subarraysWithKDistinct([1,2,1,3,4], 3))  // 3