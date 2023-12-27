/***************************************************************************
 * Problem No. : 57
 * Problem Name: Insert Interval
 * Date        : December 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search
 ***************************************************************************/

/**
 * Another idea is -- 3 steps:
 * 
 * 1. Use binary search to find the position to insert the newInterval
 * 2. Insert the newInterval to form a new intervals list
 * 3. Apply mergeInterval solution to get the final intervals
 * 
 * 
 * Time Complexity: O(n), the merge will take O(n)
 * Space Complexity: O(1)
 * 
 * But the actual running time is higher than the Greedy Solution (Sol 1)
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
    // find the insertion position
    const nums = intervals.map(interval => interval[0]);
    const target = newInterval[0];
    const insPos = findIndex(nums, target);

    // insert the newInteval into intervals
    intervals.splice(insPos, 0, newInterval);

    // apply merge interval solution
    const res = [], n = intervals.length;
    for (let i = 0; i + 1 < n; i++) {
        if (intervals[i][1] >= intervals[i+1][0]) {
            const left = intervals[i][0];
            const right = Math.max(intervals[i][1], intervals[i+1][1]);
            intervals[i+1] = [left, right];
        } else {
            res.push(intervals[i]);
        }
    }

    res.push(intervals[n-1]);

    return res;
}

const findIndex = (nums, target) => {
    
    let l = 0, r = nums.length - 1;
    
    while (l + 1 < r) {
        const mid = (l + r) >> 1;
        if (nums[mid] == target) {
            return mid + 1;
        } else if (nums[mid] < target) {
            l = mid;
        } else {
            r = mid;
        }
    }
    if (nums[r] <= target) {
        return r + 1;
    } else if (nums[l] <= target) {
        return r;
    }

    return l; // handle the case when target is smaller than nums[0]
}


/**
 * Tests 
 */
console.log(insert([[1,5],[6,8]], [0,9])); // [[0,9]]
console.log(insert([[1,3],[6,9]], [2,5])); // [[1,5],[6,9]]
console.log(insert([[1,5]], [0,3])); // [[0,5]]
console.log(insert([[3,5],[12,15]], [6,6])); // [[3,5],[6,6],[12,15]]