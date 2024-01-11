/***************************************************************************
 * Problem No. : 33
 * Problem Name: Search in Rotated Sorted Array
 * Date        : July 2, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

/**
 * Pre-condition: all numbers in the nums array are unique
 * 
 * Algorithm:
 *  Intuitively, I am thinking I need to divide the problem into two major cases:
 *      The given array is a traditional non-rotated array
 *      and it is a rotated array.
 *  But, in reality, I can handle both by dividing into cases during the binary search process.
 * 
 *  And in the following binary search process
 *   Core parts:
        1. Compare the numbers between nums[mid] and nums[l], and nums[mid] and nums[r],
            target is either in between or in the rotated part
        2. When comparing target with nums[l], nums[mid] and nums[r], should use >= or <=
            this is because the == portion helps handle the non-rotated array scenario 
 *  
 * 
 */


var search = function(nums, target) {
    const n = nums.length;
    let l = 0, r = n-1;

    while (l + 1 < r) {
        const mid = (l + r) >> 1; // mid is the mid index
        if (target === nums[mid]) {
            return mid;
        }
        if (nums[mid] > nums[l]) {
            if (nums[l] <= target && target <= nums[mid]) {
                r = mid;
            } else {
                l = mid; // search in rotated portion
            }
        } else {
            if (nums[mid] <= target && target <= nums[r]) {
                l = mid;
            } else {
                r = mid; // search in rotated portion
            }
        }
    }
    if (nums[l] === target) {
        return l;
    } else if (nums[r] === target) {
        return r;
    }
    return -1;
};