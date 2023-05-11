/**
 * Solution 3: Use the idea of Bucket Sort
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map(); // [num, freq]
    for (const n of nums) {
        map.set(n, map.get(n) + 1 || 1 );
    }

    const bucket = [];
    for (const [num, freq] of map) {
        if (!bucket[freq]) {
            bucket[freq] = [num];
        } else {
            // bucket[freq] = bucket[freq].push(num); <-- Wrong
            bucket[freq].push(num);
        }
        // bucket[freq] = (bucket[freq] || []).push(num); <-- Wrong, but can use bucket[freq] = (bucket[freq] || new Set()).add(num);
            // because set.add(el) returns the Set object with the added value
    }

    const res = [];
    const n = bucket.length;
    for (let i = n-1; i >= 0; i--) {
        if (bucket[i]) {
            res.push(...bucket[i]);
        }
        if (res.length >= k) {
            break;
        }
    }
    return res;
};


/**
 * Testing
 */
const arr1 = [1,1,1,2,2,3], k1 = 2;
console.log(topKFrequent(arr1, k1)); // expect [1, 2]

const arr2 = [1,1,1,2,2,3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5], k2 = 3;
console.log(topKFrequent(arr2, k2)); // expect [5, 1, 3] or similar  5: 9times, 3: 7times, 1: 7times

const arr3 = [4,1,-1,2,-1,2,3], k3 = 2;
console.log(topKFrequent(arr3, k3)); // expect [-1, 2]   -1: 2times, 2: 2times, others: 1time
