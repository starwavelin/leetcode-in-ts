/***************************************************************************
 * Problem No. : 373
 * Problem Name: Find K Pairs with Smallest Sums
 * Date        : August 28, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap, tag-dijkstra
 ***************************************************************************/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const res = [], m = nums1.length, n = nums2.length;
    const minHeap = new MinPriorityQueue({priority: item => item.sum}); // enqueue element is ( pairIndices, sum ) like ( [0, 0], someSum )
    const visited = new Set(); // string representation of indices like `0-0`

    minHeap.enqueue([0, 0], nums1[0] + nums2[0]);
    visited.add(`0-0`);

    while (k-- > 0 && !minHeap.isEmpty()) {
        const top = minHeap.dequeue().element;
        let i = top[0], j = top[1];
        res.push([nums1[i], nums2[j]]);

        if (i+1 < m && !visited.has(`${i+1}-${j}`)) {
            minHeap.enqueue([i+1, j], nums1[i+1] + nums2[j]);
            visited.add(`${i+1}-${j}`);
        }

        if (j+1 < n && !visited.has(`${i}-${j+1}`)) {
            minHeap.enqueue([i, j+1], nums1[i] + nums2[j+1]);
            visited.add(`${i}-${j+1}`);
        }
    }

    return res;
}