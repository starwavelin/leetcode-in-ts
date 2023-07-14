/***************************************************************************
 * Problem No. : 347
 * Problem Name: Top K Frequent Elements
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sort
 ***************************************************************************/

/**
 * Solution 1: using sort function over a 2-D array O(nlogn)
 * 
 * - Traverse the original array, use a Map (key - number, value - frequency) to store the <number, freq> entries from the given array — O(n)
    - (JS, cannot directly apply sort on a map) Convert the map into a two-dimensional array and sort this array based on the frequency in the ascending order — O(nlogn)
    - In the sorted 2D array, we put the first k elements into the result array
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (const n of nums) {
        map.set(n, map.get(n) + 1 || 1);
    }
    const kvArray = [...map.entries()];

    // sort the two-D array, in the descending order
    kvArray.sort((a, b) => b[1] - a[1]); // The sorted result will directly apply to the original array

    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(kvArray[i][0]);
    }
    return res;
};


/**
 * Testing
 */
const arr1 = [1,1,1,2,2,3], k1 = 2;
console.log(topKFrequent(arr1, k1)); // expect [1, 2]

const arr2 = [1,1,1,2,2,3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5], k2 = 3;
console.log(topKFrequent(arr2, k2)); // expect [5, 1, 3]