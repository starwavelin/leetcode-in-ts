/***************************************************************************
 * Problem No. : 295
 * Problem Name: Find Median from Data Stream
 * Date        : July 29, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var MedianFinder = function() {
    this.maxHeap = new MaxPriorityQueue({priority: x=>x}); // for the small num portion
    this.minHeap = new MinPriorityQueue({priority: x=>x}); // for the large num portion
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // if no values at both heaps, add to maxHeap by default
    if (this.maxHeap.size() === 0) {
        this.maxHeap.enqueue(num);
        return;
    }

    if (num > this.maxHeap.front().element)  // put num into the larger portion
        this.minHeap.enqueue(num);
    else 
        this.maxHeap.enqueue(num);

    // Balance the size of both heaps, the maximum difference of the sizes should not be greater than 1
    if (Math.abs(this.maxHeap.size() - this.minHeap.size()) > 1) {
        if (this.maxHeap.size() > this.minHeap.size()) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element);
        } else {
            this.maxHeap.enqueue(this.minHeap.dequeue().element);
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minHeap.size() === this.maxHeap.size()) {
        return 0.5 * (this.minHeap.front().element + this.maxHeap.front().element);
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.front().element;
    }
    return this.maxHeap.front().element;
};

/**
 * Tests
 * 
 * Input:
 *  ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum",
 *      "findMedian","addNum","findMedian","addNum","findMedian",
 *      "addNum","findMedian","addNum","findMedian","addNum",
 *      "findMedian","addNum","findMedian","addNum","findMedian",
 *      "addNum","findMedian"]
 *  [[],[6],[],[10],[],[2],[],[6],[],[5],[],[0],[],[6],[],[3],[],[1],[],[0],[],[0],[]]
 * 
 *  Expected Output:
 * [null,null,6.00000,null,8.00000,null,6.00000,null,6.00000,
 *  null,6.00000,null,5.50000,null,6.00000,null,5.50000,
 *  null,5.00000,null,4.00000,null,3.00000]
 */

const f = new MedianFinder();
f.addNum(6);
console.log(f.findMedian()) // 6.0
f.addNum(10);
console.log(f.findMedian()) // 8.0
f.addNum(2);
console.log(f.findMedian()) // 6.0
f.addNum(6);
console.log(f.findMedian()) // 6.0
f.addNum(5);
console.log(f.findMedian()) // 6.0
f.addNum(0);
console.log(f.findMedian()) // 5.5
f.addNum(6);
console.log(f.findMedian()) // 6.0
f.addNum(3);
console.log(f.findMedian()) // 5.5
f.addNum(1);
console.log(f.findMedian()) // 5.0
f.addNum(0);
console.log(f.findMedian()) // 4.0
f.addNum(0);
console.log(f.findMedian()) // 3.0