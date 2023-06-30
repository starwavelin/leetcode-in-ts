/***************************************************************************
 * Problem No. : 153
 * Problem Name: Find Minimum in Rotated Sorted Array
 * Date        : June 30, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

var findMin = function(nums) {
    const n = nums.length;
    if (n === 1 || nums[0] < nums[n-1]) {
        return nums[0];
    }
    let l = 0, r = n-1;
    while (l + 1 < r) {
        const mid = l + Math.floor( (r-l)/2 );
        if (nums[mid] > nums[l]) { // 当前从l到mid是递增的
            l = mid;
        } else {
            r = mid;
        }
    }
    return nums[r];
};