/***************************************************************************
 * Problem No. : 253
 * Problem Name: Meeting Rooms II
 * Date        : January 2, 2024
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * The solution here only differs from Sol 3 by 
 *  not using @datastructures-js/priority-queue library
 * 
 * Algorithm:
 *  - Sort the given intervals based on their starting times
    - Create a minHeap, to store the end time of each interval
    - Traverse the sorted intervals
        - Generally we need to push end time of each interval into the heap, but before that
        - if heap is not empty and current interval’s starting time ≥ heap’s peek’s value, meaning the heap’s peek can be released (meeting room can be available)
            - dequeue from the heap
    - return heap’s size (the largest number of overlaps in a given pile)
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) =>  a[0] - b[0]);

    // create a min heap
    const minHeap = new Heap();
    
    // traverse the sorted intervals
    for (let i of intervals) {
        // the new i has a larger (or eq) starting time so dequeue from the heap
        if (!minHeap.isEmpty() && i[0] >= minHeap.front()) {
            minHeap.dequeue();
        }
        minHeap.enqueue(i[1]);
    }

    return minHeap.size();
};


// Using global var will have accumulated value, so use Class

class Heap {
    heap = [undefined];

    heapify = (heap, index) => {
        const n = heap.length;
        let childIndex;

        for (; index * 2 < n; index = childIndex) {
            childIndex = index * 2;

            // pick the smaller one b/c minHeap
            if (childIndex + 1 < n && heap[childIndex] > heap[childIndex+1]) {
                childIndex = childIndex + 1;
            }

            // check if swap is needed
            if (heap[index] > heap[childIndex]) {
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
        const top = this.heap[1];

        const last = this.heap.pop();
        if (this.heap.length > 1) {
            this.heap[1] = last;
            this.heapify(this.heap, 1);
        }

        return top;
    }

    front = () => {
        return this.heap[1];
    }

    isEmpty = () => {
        return this.heap.length == 1;
    }

    size = () => {
        return this.heap.length - 1;
    }
}


 
/**
 * Tests
 */

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1
console.log(minMeetingRooms([[0,10],[5,10],[15,20],[15,20]])); // 2
console.log(minMeetingRooms([[5,10],[10,15]])); // 1