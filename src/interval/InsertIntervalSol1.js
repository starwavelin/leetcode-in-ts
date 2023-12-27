/***************************************************************************
 * Problem No. : 57
 * Problem Name: Insert Interval
 * Date        : December 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-interval, tag-linear-search
 ***************************************************************************/

/**
 * Note: this problem has given a sorted (by left endpoint) array of intervals
 * 
 * For the insertion problem, a common tech is to find out the position of insertion.
 * Doing so can avoid using too many if conditions
 * 
 * For JS user, the splice function will be used for the insertion
 * res.splice(insertPos, 0, newInterval)
 * 
 * 
 * Time Complexity: O(n), not only because of traversing the original array, but the splice function also takes O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
    let insertPos = 0;
    const res = [], n = intervals.length;

    for (let i = 0; i < n; i++) {
        if (newInterval[1] < intervals[i][0]) { // directly record to res
            res.push(intervals[i]);
        } else if (newInterval[0] > intervals[i][1]) {
            insertPos++;
            res.push(intervals[i]);
        } else { // has overlap with newInterval, alter newInterval
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }
    }

    res.splice(insertPos, 0, newInterval);
    return res;
};


/**
 * Tests 
 */
console.log(insert([[1,3],[6,9]], [2,5])); // [[1,5],[6,9]]
console.log(insert([[1,5]], [0,3])); // [[0,5]]
console.log(insert([[3,5],[12,15]], [6,6])); // [[3,5],[6,6],[12,15]]
