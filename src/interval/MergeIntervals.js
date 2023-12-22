/***************************************************************************
 * Problem No. : 56
 * Problem Name: Merge Intervals
 * Date        : December 22, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sort, tag-two-pointers
 ***************************************************************************/

/**
 * Sort the given intervals based on the left endpoint of each interval
 * 
 * Loop through the interval list
 *  1. If there is an overlap, merge it and store the updated interval to intervals[i+1]
 *      Note: be careful about which value should be the updated interval's right endpoint
 *  2. If no overlap, put the interval into the res list
 * 
 * Handle the last interval from the given list -- intervals[n-1]
 * 
 * return res;
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = []; // store the merged intervals

    // sort the given intervals based on the left endpoint in the ascending order
    intervals.sort((a, b) => a[0] - b[0]);

    const n = intervals.length;
    for (let i = 0; i + 1 < n; i++) {
        if (intervals[i][1] >= intervals[i+1][0]) { // merge
            const left = intervals[i][0];
            const right = intervals[i+1][1] > intervals[i][1] ? intervals[i+1][1] : intervals[i][1];
            intervals[i+1] = [left, right];
        } else { // record into res
            res.push(intervals[i]);
        }
    }

    // dont forget the last interval
    res.push(intervals[n-1]);

    return res;
};