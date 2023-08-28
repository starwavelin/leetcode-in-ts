/***************************************************************************
 * Problem No. : 373
 * Problem Name: Find K Pairs with Smallest Sums
 * Date        : August 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const res = [];
    
    const maxHeap = new MaxPriorityQueue({priority: item => item.sum});
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        for (let j = 0; j < Math.min(nums2.length, k); j++) {
            const pair = [nums1[i], nums2[j]];
            const sum = nums1[i] + nums2[j];
            if (maxHeap.size() < k) {
                maxHeap.enqueue(pair, sum);
            } else if (sum < maxHeap.front().priority) {
                maxHeap.dequeue();
                maxHeap.enqueue(pair, sum);
            }
        }
    }

    while (!maxHeap.isEmpty()) {
        res.push(maxHeap.dequeue().element);
    }
    return res;
};