/***************************************************************************
 * Problem No. : 35
 * Problem Name: Search Insert Position
 * Date        : June 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

var searchInsert = function(nums, target) {
    const n = nums.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        const mid = l + Math.floor( (r-l) / 2 );
        if (nums[mid] === target) {
            r = mid;
        } else if (nums[mid] < target) {
            l = mid;
        } else {
            r = mid;
        }
    }
    if (nums[l] >= target) {
        return l;
    } else if (nums[r] >= target) {
        return r;
    }
    return n;
};


// Tests
// console.log( searchInsert([1,3,5,6], 5) ); // should return 2;
console.log( searchInsert([1,3,5,6], 2) ); // should return 1;