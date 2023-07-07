/***************************************************************************
 * Problem No. : 4
 * Problem Name: Median of Two Sorted Arrays
 * Date        : July 5, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search, tag-sort
 ***************************************************************************/

/**
 * Solution 1 is a O(m+n) solution,
 * it is good for an intuitive talk with the interviewer
 * 
 * Solution 2 is the O(log(m+n)) solution, as required by the problem
 */

var findMedianOfTwoSortedArraysSol1 = function(nums1, nums2) {
    const arr = merge(nums1, nums2);
    const k = arr.length;
    if (k % 2 === 0) {
        return (arr[Math.floor((k-1)/2)] + arr[k/2]) / 2;
    }
    return arr[(k-1)/2];
};

const merge = (nums1, nums2) => {
    const arr = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) { // 从两个数组的顶端开始扫瞄
        const num = (nums1[i] < nums2[j]) ? nums1[i++] : nums2[j++];
        arr.push(num);
    }
    while (i < nums1.length) {
        arr.push(nums1[i++]);
    }
    while (j < nums2.length) {
        arr.push(nums2[j++]);
    }

    return arr;
}



/**
 * Solution 2
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedianOfTwoSortedArraysSol2 = function(nums1, nums2) {
    
};