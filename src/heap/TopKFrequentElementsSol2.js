/***************************************************************************
 * Problem No. : 347
 * Problem Name: Top K Frequent Elements
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * Solution 2: The build max heap apporach
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

    // build the max heap based on the kvArray, the root is the highest frequency entry of the kvArray
    const maxHeap = buildHeap(kvArray);

    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(remove(maxHeap));
    }
    return res;
};

const heapify = (array, index) => {
    const n = array.length;
    let childIndex;

    for (; index * 2 < n; index = childIndex) {
        childIndex = index * 2;

        // choose the larger one from two children, and this time array is 2-D
        if (childIndex !== n-1 && array[childIndex][1] < array[childIndex+1][1]) {
            childIndex++;
        }

        if (array[index][1] < array[childIndex][1]) {
            [array[index], array[childIndex]] = [array[childIndex], array[index]];
        } else {
            break;
        }
    }
}

const buildHeap = (array) => {
    const heap = [[undefined, undefined], ...array];
    const n = heap.length;
    for (let i = Math.floor(n/2); i >= 1; i--) {
        heapify(heap, i);
    }
    return heap;
}

const remove = (heap) => {
    if (heap.length === 1) {
        throw new Error('Heap is empty!');
    }
    
    const max = heap[1];
    const last = heap.pop();
    if (heap.length > 1) {
        heap[1] = last;
        heapify(heap, 1);
    }

    return max[0];
}

/**
 * Testing
 */
const arr1 = [1,1,1,2,2,3], k1 = 2;
console.log(topKFrequent(arr1, k1)); // expect [1, 2]

const arr2 = [1,1,1,2,2,3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5], k2 = 3;
console.log(topKFrequent(arr2, k2)); // expect [5, 1, 3] or similar  5: 9times, 3: 7times, 1: 7times

const arr3 = [4,1,-1,2,-1,2,3], k3 = 2;
console.log(topKFrequent(arr3, k3)); // expect [-1, 2]   -1: 2times, 2: 2times, others: 1time
