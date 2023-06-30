/***************************************************************************
 * Problem No. : 162
 * Problem Name: Find Peak Element
 * Date        : June 30, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

/**
 * Solution 2 is preferrable,
 * b/c its loc is less and neat.
 */

var findPeakElementSol1 = function(nums) {
    const n = nums.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        const mid = l + Math.floor( (r-l)/2 );
        if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
            return mid;
        } else if (nums[mid-1] < nums[mid] && nums[mid] < nums[mid+1]) { // 向右递增，移动l
            l = mid;
        } else if (nums[mid-1] > nums[mid] && nums[mid] > nums[mid+1]) { // 向右递减，移动r
            r = mid;
        } else { // 在谷底的情况，既可移动r 也移动l 去找peak 
            r = mid;
        }
    }
    if (nums[l] > nums[r]) {
        return l;
    }
    return r;  // 本题一定有解
};


var findPeakElementSol2 = function(nums) {
    const n = nums.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        const mid = l + Math.floor( (r-l)/2 );
        if (nums[mid] < nums[mid+1]) {
            l = mid;
        } else { 
            r = mid;
        }
    }
    if (nums[l] > nums[r]) {
        return l;
    }
    return r;
};