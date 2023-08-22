/***************************************************************************
 * Problem No. : 378
 * Problem Name: Kth Smallest Element in a Sorted Matrix
 * Date        : July 18, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap, tag-matrix
 ***************************************************************************/

/**
 * Solution 1: use a maxHeap from a 3rd party library
 */
var kthSmallest = function(matrix, k) {
    const maxHeap = new MaxPriorityQueue();
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {            
            if (maxHeap.size() < k) {
                maxHeap.enqueue(matrix[i][j]);
            } else if (matrix[i][j] < maxHeap.front().element) {
                maxHeap.enqueue(matrix[i][j]);
                maxHeap.dequeue();
            }
        }
    }
    return maxHeap.dequeue().element; 
};

/**
 * Solution 1 Variation: Hand-implemented Max Heap
 * 
 * And, a global variable may cause test cases to have different results,
 * so I decided to use a Heap class this time.
 */
var kthSmallestHandImplHeap = function(matrix, k) {
    const n = matrix.length;
    const maxHeap = new Heap();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {            
            if (maxHeap.size() < k) {
                maxHeap.enqueue(matrix[i][j]);
            } else if (matrix[i][j] < maxHeap.peek()) {
                maxHeap.enqueue(matrix[i][j]);
                maxHeap.dequeue();               
            }
        }
    }
    return maxHeap.dequeue();
};

class Heap {
    constructor() {
        this.heap = [undefined];
    }

    heapify = (heap, index) => {
        const n = heap.length;
        let childIndex;
        for (; index * 2 < n; index = childIndex) {
            childIndex = index * 2;
    
            // choose the larger one
            if (childIndex !== n-1 && heap[childIndex] < heap[childIndex+1]) {
                childIndex++;
            }
    
            if (heap[index] < heap[childIndex]) {
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
