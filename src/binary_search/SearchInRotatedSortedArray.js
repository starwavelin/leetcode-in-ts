/***************************************************************************
 * Problem No. : 33
 * Problem Name: Search in Rotated Sorted Array
 * Date        : July 2, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

var search = function(nums, target) {
    const n = nums.length;
    let l = 0, r = n-1, mid;
    while (l + 1 < r) {
        mid = l + Math.floor( (r-l)/2 );
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