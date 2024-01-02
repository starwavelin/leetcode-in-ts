/***************************************************************************
 * Problem No. : 253
 * Problem Name: Meeting Rooms II
 * Date        : January 2, 2024
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * Algorithm:
 *  - Sort the given intervals based on their starting times
    - Create a minHeap, to store the end time of each interval
    - Traverse the sorted intervals
        - Generally we need to push end time of each interval into the heap, but before that
        - if heap is not empty and current interval’s starting time ≥ heap’s peek’s value, meaning the heap’s peek can be released (meeting room can be available)
            - dequeue from the heap
    - return heap’s size (the largest number of overlaps in a given pile)
 */

import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) =>  a[0] - b[0]);

    // create a min heap to store the end time of each interval
    const minHeap = new PriorityQueue((a, b) => a - b);

    for (let i of intervals) {
        // the new i's starting time is greater than (or ==) the non-empty minHeap's top element's ending time, can release that room
        if (!minHeap.isEmpty() && i[0] >= minHeap.front()) {
            minHeap.dequeue();
        }
        minHeap.enqueue(i[1]);
    }

    return minHeap.size();
};


/**
 * Tests
 */

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1
console.log(minMeetingRooms([[0,10],[5,10],[15,20],[15,20]])); // 2
console.log(minMeetingRooms([[5,10],[10,15]])); // 1