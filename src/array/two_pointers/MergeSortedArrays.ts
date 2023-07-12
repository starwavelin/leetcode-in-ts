/***************************************************************************
 * Problem No. : 88
 * Problem Name: Merge Sorted Array
 * Date        : August 6, 2022
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-two-pointers
 ***************************************************************************/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m + n - 1; // the last reference in the ultimate nums1 array
    m = m - 1;
    n = n - 1;
    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[i] = nums1[m];
            m--;
        } else {
            nums1[i] = nums2[n];
            n--;
        }
        i--;
    }
    while (n >= 0) {
        nums1[i] = nums2[n];
        n--;
        i--;
    }
}

/**
 * Solution: Same as above but a more concised writing
 */
var mergePolished = function (nums1: number[], m: number, nums2: number[], n: number) {
    let k = nums1.length - 1; // the pointer starting from the end of the nusm1 aray
    m = m - 1;
    n = n - 1;
    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[k--] = nums1[m--];
        } else {
            nums1[k--] = nums2[n--];
        }
    }
    while (n >= 0) {
        nums1[k--] = nums2[n--];
    }
};
