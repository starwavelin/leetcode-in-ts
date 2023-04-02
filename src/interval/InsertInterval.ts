/***************************************************************************
* Problem No. : 57
* Problem Name: Insert Interval
* Date        : May 29, 2022
* Author      :	@codingbro
*
* meta        : tag-array, tag-interval
***************************************************************************/

export function insert(intervals: number[][], newInterval: number[]): number[][] {
    const res: number[][] = [];

    if (intervals.length == 0) {
        res.push(newInterval);
        return res;
    }

    let insertPos = 0;
    for (const interval of intervals) {
        if (interval[0] > newInterval[1]) {
            res.push(interval);
        }
        else if (interval[1] < newInterval[0]) {
            res.push(interval);
            insertPos++;
        }
        else {
            newInterval[0] = Math.min(interval[0], newInterval[0]);
            newInterval[1] = Math.max(interval[1], newInterval[1]);
        }
    }

    res.splice(insertPos, 0, newInterval);
    console.log(`res is: ${res}`);
    return res;
}