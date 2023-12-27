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