/***************************************************************************
 * Problem No. : 34
 * Problem Name: Find First and Last Position of Element in Sorted Array
 * Date        : June 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

var searchRange = function(nums, target) {
    return [leftIndex(nums, target), rightIndex(nums, target)];
};

const leftIndex = (nums, target) => {
    const n = nums.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        let mid = l + Math.floor( (r-l) / 2 );
        if (nums[mid] === target) {
            r = mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    if (nums[l] === target) {
        return l;
    } else if (nums[r] === target) {
        return r;
    }
    return -1;
}

const rightIndex = (nums, target) => {
    const n = nums.length;
    let l = 0, r = n-1;
    while (l + 1 < r) {
        let mid = l + Math.floor( (r-l) / 2 );
        if (nums[mid] === target) {
            l = mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    if (nums[r] === target) {
        return r;
    } else if (nums[l] === target) {
        return l;
    }
    return -1;
}