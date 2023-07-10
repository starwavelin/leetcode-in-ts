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
 * Solution 2 -- NeetCode's approach
 * When the combined arry has an odd length, the median locates at the minimum of the two mins of the right partitions
 */
var findMedianOfTwoSortedArraysSol2 = function(nums1, nums2) {
    // If nums1 is larger than nums2, swap them to ensure n1 is smaller than n2.
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const n1 = nums1.length;
    const n2 = nums2.length;
    const total = n1 + n2;
    const half = Math.floor(total / 2);
    
    let l = 0;
    let r = n1 - 1;
    while (true) {
        let mid1 = Math.floor((l + r) / 2);   // the mid index of the first (smaller) array
        let mid2 = half - mid1 - 2;        // the mid index of the 2nd array shall be half minus the mid1, and also b/c the array is 0-indexed, minus the two zeros
        
        let maxLeft1 = (mid1 >= 0) ? nums1[mid1] : Number.MIN_SAFE_INTEGER;
            // The typical index of the maximum of the left partition of nums1 is the calculated mid1,
            // so the violating condition is that when mid1 is less than 0
        let minRight1 = (mid1 + 1 < n1) ? nums1[mid1+1] : Number.MAX_SAFE_INTEGER;
            // The typical index of the minimum of the right partition of nums1 is the calculated mid1+1,
            // so the violating condition is that when mid1+1 equals the length of nums1
        
        let maxLeft2 = (mid2 >= 0) ? nums2[mid2] : Number.MIN_SAFE_INTEGER;
        let minRight2 = (mid2 + 1 < n2) ? nums2[mid2+1] : Number.MAX_SAFE_INTEGER;
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((n1 + n2) % 2 == 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.min(minRight1, minRight2);
            }
        } else if (maxLeft1 > minRight2 ) {
            r = mid1 - 1; // the current mid1 should be included into the left partition
                // nums2 should have more numbers included into the left partition -- 在nums1中取数取多了,r要往下减
        } else { // condition: maxLeft2 > minRight1
            l = mid1 + 1; // the current mid1 should be included into the left partition -- 在nums1中取数取少了,l要往上加
        }
    }
};


/**
 * The solution below is a re-write from devanshu's solution on LeetCode
 * Basically in devenshu's solutoin, the median is the max of the two maximum values in the left partitions 
 */
var findMedianOfTwoSortedArraysSol3 = function(nums1, nums2) {
    // If nums1 is larger than nums2, swap them to ensure n1 is smaller than n2.
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const n1 = nums1.length;
    const n2 = nums2.length;
    
    let l = 0;
    let r = n1;
    while (true) {
        let mid1 = Math.floor((l + r) / 2);
        let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1);
        
        let maxLeft1 = (mid1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[mid1-1]; 
            // The typical index of the maximum of the left partition of nums1 is the calculated mid1 minus 1
            // That's why when mid1 equals 0 we want to set the max of the left partition of nums1 array to be MIN_NUM
        let minRight1 = (mid1 === n1) ? Number.MAX_SAFE_INTEGER : nums1[mid1];
            // The typical index of the minumum of the right partition of nums1 is the calculated mid1
            // That's why the illegal condition starts when mid1 equals nums1's length
        
        let maxLeft2 = (mid2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[mid2-1];
        let minRight2 = (mid2 === n2) ? Number.MAX_SAFE_INTEGER : nums2[mid2];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } 
        // Handling offsets
        else if (maxLeft1 > minRight2) {
            r = mid1 - 1;
        } 
        else {
            l = mid1 + 1;
        }
    }
}