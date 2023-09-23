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
// console.log(kClosest([[1,3],[-2,2]], 1)); // expect [-2,2]
// console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // expect [[-2,4],[3,3]]



var kClosestHandImplHeap = function(points, k) {
    const heap = new Heap(); // max heap
    for (const point of points) {
        const dis = point[0] ** 2 + point[1] ** 2; // distance before sqrt
        const el = { dis, point };
        if (heap.size() < k) {
            heap.enqueue(el);
        } else if (dis < heap.peek().dis) {
            heap.enqueue(el);
            heap.dequeue();
        }
    }
    const res = [];
    while (heap.size() > 0) {
        res.push(heap.dequeue().point);
    }
    return res;
};

class Heap {

    constructor() {
        this.heap = [undefined];
    }

    heapify = (heap, index) => {
        const n = this.heap.length;
        let childIndex;

        for (; index * 2 < n; index = childIndex) {
            childIndex = index * 2;

            // choose the larger one
            if (childIndex + 1 < n && heap[childIndex].dis < heap[childIndex+1].dis) {
                childIndex += 1;
            }

            // swap
            if (heap[index].dis < heap[childIndex].dis) {
                [heap[index], heap[childIndex]] = [heap[childIndex], heap[index]];
            } else {
                break;
            }
        }
    }
    
    enqueue = (el) => {
        this.heap.push(el);
        const n = this.heap.length;
        for (let i = Math.floor(n/2); i >= 1; i--) {
            this.heapify(this.heap, i);
        }
    }
    
    dequeue = () => {
        if (this.size() === 0) {
            throw new Error('The heap is empty');
        }
        const res = this.heap[1];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[1] = last;
            this.heapify(this.heap, 1);
        }

        return res;
    }
    
    peek = () => {
        if (this.size() === 0) {
            throw new Error('The heap is empty');
        }
        return this.heap[1];
    }
    
    size = () => {
        return this.heap.length - 1;
    }
}

// Test kClosestHandImplHeap
console.log(kClosestHandImplHeap([[1,3],[-2,2]], 1)); // expect [-2,2]
console.log(kClosestHandImplHeap([[3,3],[5,9],[-2,4]], 2)); // expect [[-2,4],[3,3]]
