/***************************************************************************
 * Problem No. : 15
 * Problem Name: 3Sum
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-dfs, tag-sort
 ***************************************************************************/

/**
 * This file provides the resursive way solutions 
 * based on the k-sum algorithm
 */


/**
 * A (ChatGPT + my own tweak) solution when the given target that can be flexible (may not always be 0)
 */
var threeSum = function (nums, target) {
    const res = [];
    nums.sort((a, b) => a - b);
    
    const start = 0;
    const k = 3; // k means how-many sum
    const path = []; // store/construct intermediate solution
    kSum(start, target, k, path, nums, res); // nums - input array; res - result
    
    return res;
};

const kSum = (start, target, k, path, nums, res) => {
    const n = nums.length;
    if (k === 2) { // base case (two-pointer technique)
        let l = start, r = n - 1;
        while (l < r) {
            if (l > start && nums[l] === nums[l - 1]) { // dedup
                l++;
                continue;
            }
            if (r < n-1 && nums[r] === nums[r + 1]) { // dedup
                r--;
                continue;
            }
            if (nums[l] + nums[r] === target) {
                res.push([...path, nums[l], nums[r]]);
                l++;
                r--;
            } else if (nums[l] + nums[r] < target) {
                l++;
            } else {
                r--;
            }
        }
    } else {
        for (let i = start; i < n-k+1; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            const nextTarget = target - nums[i];
            kSum(i+1, nextTarget, k-1, [...path, nums[i]], nums, res); // 指针往下移,规模往下减
        }
    }
}

// If my target is 3
console.log(threeSum([-1, 0, 1, 2, -1, -4], 3)); // should get [[0,1,2]]
console.log(threeSum([0, 0, 0], 3)); // should get []
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4], 3)); // should get 8 triplets
    // [[-4, 3, 4], [-3, 2, 4], [-2, 1, 4], [-2, 2, 3], [-1, 0, 4], [-1, 1, 3], [0, 0, 3], [0, 1, 2]]
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6], 0)); // should get 6 triplets
    // [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]