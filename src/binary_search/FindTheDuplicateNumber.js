/***************************************************************************
 * Problem No. : 287
 * Problem Name: Find the Duplicate Number
 * Date        : July 12, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search, tag-math, tag-linked-list, tag-bit
 ***************************************************************************/

/**
 * Solution 1: Use binary search
 */
var findDuplicateSol1 = function(nums) {
    let l = 1, r = nums.length-1;
    while (l < r) {
        const mid = (l+r) >> 1;
        let count = 0;
        for (const el of nums) {
            if (el <= mid) {
                count++;
            }
        }
        if (count > mid) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

// Test Solution 1
console.log(findDuplicateSol1([2, 2, 2, 2, 2])); // should output 2
console.log(findDuplicateSol1([1, 1, 2, 3, 4])); // should output 1

/**
 * Sol 2 is still using binary search, but
 * using my favorite while(l+1<r) way of writing it
 */
var findDuplicateSol2 = function(nums) {
    let l = 1, r = nums.length-1;
    while (l + 1 < r) {
        const mid = (l+r) >> 1;
        let count = 0;
        for (const el of nums) {
            if (el <= mid) {
                count++;
            }
        }
        if (count > mid) {
            r = mid;
        } else {
            l = mid; // no need to consider l = mid+1 or not, just move l
        }
    }

    // Can check l first
    let count = 0;
    for (const el of nums) {
        if (el <= l) {
            count++;
        }
    }
    if (count > l) {
        return l;
    } else {
        return r; // because there must be a duplicate num in nums, either the value of l or r
    }
};
