/***************************************************************************
* Problem No. : 56
* Problem Name: Merge Intervals
* Date        : June 12, 2022
* Author      :	@codingbro
*
* meta        : tag-array, tag-interval, two-pointers
***************************************************************************/

export function merge(intervals: number[][]): number[][] {
    if (intervals.length === 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    const res = [];

    let i = 0, j = i + 1, tmp = intervals[i];
    while (j < intervals.length) {
        if (tmp[1] < intervals[j][0]) {
            res.push(tmp);            
            tmp = intervals[i+1];
        } else { // overlapping case
            tmp = [Math.min(tmp[0], intervals[i][0]), Math.max(tmp[1], intervals[j][1])];
        }
        i++;
        j = i + 1;
    }
    res.push(tmp);
    return res;
};