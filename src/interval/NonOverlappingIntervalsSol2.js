/***************************************************************************
 * Problem No. : 435
 * Problem Name: Non-Overlapping Intervals
 * Date        : January 1, 2024
 * Author      : @codingbro
 *
 * meta        : tag-sort, tag-greedy, tag-two-pointers
 ***************************************************************************/

/**
 * This solution is a little tweak and optimize over Solution 1, 
 * by not actually modifying the longer interval
 * 
 * Algorithm:
 *  Use another var pre to denote the previous interval, starting from the interval at index 0
 *  Sort the intervals based on their left endpoints
 *  Starting from the interval at index 1, use loop counter i to loop all the intervals
 *      if pre's right endpoint is greater than i's left endpoint [overlapping case]
 *          count += 1
 *          pre's right endpoint is also greater than i's right endpoint,
 *              set pre = i to discard the pre interval [so, no physical deletion or resizing]
 *      else [meaning no overlapping]
 *          pre should catup with i
 * 
 * return count
 * 
 * 
 * Time Complexity: O(nlogn) sorting
 * Space Complexity: O(1)
 * 
 * Note:
 *  1. The overlapping comparison should be between pre and i, not i-1 and i as in Solution 1
 *  2. Not doing the actual deletion or resizing will make the running time much faster, though Sol 1 
 *      has the same time complexity as Sol 2
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
    let res = 0;
    const n = intervals.length;
    let pre = 0;
    
    // sort 
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < n; i++) {
        if (intervals[pre][1] > intervals[i][0]) { // overlapping, shrink the longer one
            res++;
            if (intervals[pre][1] > intervals[i][1]) { 
                // don't actually modify the longer interval's right endpoint
                // instead, discard the prev interval by moving pre one step forward
                pre = i;
            }
        } else {
            // if no overlapping, move pre to catch up i
            pre = i;
        }
    }

    return res;
}

/**
 * Tests
 */
const intervals3 = [[1, 2], [1, 3], [2, 3], [3, 4]];
console.log(eraseOverlapIntervals(intervals3)); // 1

const intervals1 = [[1, 9], [2, 3], [4, 5]];
console.log(eraseOverlapIntervals(intervals1)); // 1

const intervals2 = [[1, 3], [2, 4], [4, 5]];
console.log(eraseOverlapIntervals(intervals2)); // 1

const intervals4 = [[1, 2], [1, 3], [2, 3], [1, 3]];
console.log(eraseOverlapIntervals(intervals4)); // 2