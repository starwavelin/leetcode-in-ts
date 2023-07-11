/***************************************************************************
 * Problem No. : 349
 * Problem Name: Intersection of Two Arrays
 * Date        : July 11, 2023
 * Author      : @codingbro
 *
 * meta        : tag-set, tag-array, tag-two-pointers, tag-binary-search
 ***************************************************************************/

/**
 * Solutoin 1:
 *  No Need to use Set
 *  Sort both the arrays and use two pointer method
 *  
 */
var intersectionSol1 = function(nums1, nums2) {
    nums1.sort((a, b) => a-b);
    nums2.sort((a, b) => a-b);

    const res = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            if (!res.length || res[res.length-1] !== nums1[i]) { // avoid duplications in the res array
                res.push(nums1[i]);
            }
            i++; j++;
        }
    }
    return res;
};


/**
 * Solution 2:
 *  Use Binary Search and Set
 */
const intersectionSol2 = (nums1, nums2) => {
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    nums1.sort((a, b) => a-b);
    const resSet = new Set();
    for (const el of nums2) {
        if (binarySearch(nums1, el)) {
            resSet.add(el);
        }
    }
    return [...resSet];
}

const binarySearch = (nums, el) => {
    const n = nums.length;
    let l = 0, r = n-1;
    while (l <= r) {
        const mid = (l+r) >> 1;
        if (nums[mid] === el) {
            return true;
        } else if (nums[mid] < el) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
}