/***************************************************************************
 * Problem No. : 435
 * Problem Name: Non-Overlapping Intervals
 * Date        : December 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sort, tag-greedy
 ***************************************************************************/

/**
 * Return the minimum number of intervals you need to remove 
 * to make the rest of the intervals non-overlapping.
 * 
 * Note: [[1, 2], [2, 3]] is considered non-overlapping
 * 
 * Algorithm:
 *  Sort the given interval based on the left endpoint of each interval
 *  Starting from the interval whose index is 1
 *      if having overlap
 *          count += 1
 *          (Critical - Greedy)set latter interval's right endpoint to be the smaller of [prev interval, latter interval]
 * 
 *  return count;
 *  
 * 
 * This solution has
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
    let res = 0;
    const n = intervals.length;
    
    // sort 
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < n; i++) {
        if (intervals[i-1][1] > intervals[i][0]) { // overlapping, shrink the longer one
            res++;
            intervals[i][1] = Math.min(intervals[i-1][1], intervals[i][1]);
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
