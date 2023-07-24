/***************************************************************************
 * Problem No. : 973
 * Problem Name: K Closest Points to Origin
 * Date        : July 22, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heap = new MaxPriorityQueue({priority: x => x.dis}); // max heap
    for (const point of points) {
        const dis = point[0] ** 2 + point[1] ** 2; // distance before sqrt
        const el = { dis, point };
        if (heap.size() < k) {
            heap.enqueue(el);
        } else if (dis < heap.front().element.dis) {
            heap.enqueue(el);
            heap.dequeue();
        }
    }    
    const res = [];
    while (heap.size() > 0) {
        res.push(heap.dequeue().element.point);
    }
    return res;
};

// Test kClosest
console.log(kClosest([[1,3],[-2,2]], 1)); // expect [-2,2]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // expect [[-2,4],[3,3]]
