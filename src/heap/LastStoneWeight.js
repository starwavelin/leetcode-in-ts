/***************************************************************************
 * Problem No. : 1046
 * Problem Name: Last Stone Weight
 * Date        : July 21, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var lastStoneWeight = function(stones) {
    const heap = new MaxPriorityQueue({priority: x => x}); // max heap
    for (const num of stones) {
        heap.enqueue(num);
    }
    while (heap.size() > 1) {
        const x = heap.dequeue().element;
        const y = heap.dequeue().element;
        if (x !== y) {
            heap.enqueue(Math.abs(x-y));
        }
    }
    if (heap.size() === 1) {
        return heap.front().element;
    }
    return 0;
};


// Test
console.log(lastStoneWeight([2,7,4,1,8,1])); // should return 1;
console.log(lastStoneWeight([3])); // should return 3;