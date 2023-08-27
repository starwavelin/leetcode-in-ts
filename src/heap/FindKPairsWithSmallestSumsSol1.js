/***************************************************************************
 * Problem No. : 373
 * Problem Name: Find K Pairs with Smallest Sums
 * Date        : August 26, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * This solution below is not recommended because -- 
 * But on LeetCode.com, this solution has an error below, might be due to the time complexity is too high…
 * 
 * ```
 * terminate called after throwing an instance of 'std::bad_alloc'
    what():  std::bad_alloc
 * ```
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const res = [];
    
    const minHeap = new MinPriorityQueue({priority: item => item.sum});
    for (let i=0; i < nums1.length; i++) {
        for (let j=0; j < nums2.length; j++) {
            const pair = [nums1[i], nums2[j]];
            const sum = nums1[i] + nums2[j];
            minHeap.enqueue(pair, sum);
        }
    }

    for (let i=0; i < k; i++) {
        if (minHeap.size() == 0) break;
        res.push(minHeap.dequeue().element);
    }
    return res;
};