/***************************************************************************
 * Problem No. : 253
 * Problem Name: Meeting Rooms II
 * Date        : January 2, 2024
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-sort, tag-greedy, tag-prefix-sum
 ***************************************************************************/

/**
 * Algorithms:
 *  - Get all the starts and sort them
    - Get all the ends and sort them
    - Use loop counter i to traverse the starts array, and use loop counter j points to the beginning of ends array
        - if starts[i] < ends[j] (found overlaps) res += 1
        - else, j++
    - return res
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(i => i[0]).sort((a, b) => a- b);
    const ends = intervals.map(i => i[1]).sort((a, b) => a- b);

    const n = intervals.length;
    let res = 0, j = 0; // j - the counter for ends array
    for (let i = 0; i < n; i++) {
        if (starts[i] < ends[j]) {
            res++;
        } else { // when there is no overlapping
            j++;
        }
    }

    return res;
};

/**
 * Tests
 */

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1
console.log(minMeetingRooms([[0,10],[5,10],[15,20],[15,20]])); // 2
console.log(minMeetingRooms([[5,10],[10,15]])); // 1