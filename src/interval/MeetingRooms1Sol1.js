/***************************************************************************
 * Problem No. : 252
 * Problem Name: Meeting Rooms
 * Date        : January 2, 2024
 * Author      : @codingbro
 *
 * meta        : tag-interval
 ***************************************************************************/

/**
 * Algorithm:
    Sort
    and then see if there is any interval overlap
        if yes, retrun false
        ow, return true


    Time Complexity: O(nlogn) b/c of sorting
    Space Complexity: O(1)

    Note: the actual running time is not efficient, it only beats 5% of JS users
    but the space complexity is pretty good, beating 99% of JS users
 */


/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const n = intervals.length;

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < n; i++) {
        if (intervals[i][0] < intervals[i-1][1]) {
            return false;
        }
    }

    return true;
};