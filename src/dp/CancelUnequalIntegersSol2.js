/***************************************************************************
 * Problem No. : 20005
 * Problem Name: Cancel Unequal Integers
 * Date        : November 20, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap, tag-amazon
 ****************************************************************************/

import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Use a maxheap based on number's frequency and start the deletion process
 * @param {number[]} nums 
 * @returns 
 */
const countRemainingItems = (nums) => {
    const map = new Map(); // key - num, val - freq
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const heap = new PriorityQueue((a, b) => b[1] - a[1]); // maxheap based on frequency of the nums
    for (let [num, freq] of map.entries()) {
        heap.enqueue([num, freq]);
    }

    // start deletion
    while (heap.size() > 1) {
        let top1 = heap.dequeue();
        let top2 = heap.dequeue();

        // Minus both items freq by 1
        top1[1]--;
        top2[1]--;

        // If the freq is still > 0, enqueue it
        if (top1[1] > 0) {
            heap.enqueue(top1);
        }
        if (top2[1] > 0) {
            heap.enqueue(top2);
        }
    }

    if (heap.size() == 1) {
        return heap.front()[1]; // return the frequency of the last remaining number
    }
    return 0;
}

/**
 * Tests
 */
const nums1 = [3,3,1,1,2];
console.log(countRemainingItems(nums1)); // expect 1

const nums2 = [1,2,5,6];
console.log(countRemainingItems(nums2)); // expect 0

const nums3 = [3,7,8,3,4,4,4];
console.log(countRemainingItems(nums3)); // expect 1

const nums4 = [9,7,8,9,9,9,9];
console.log(countRemainingItems(nums4)); // expect 3

const nums5 = [1,1,2,2,3,3];
console.log(countRemainingItems(nums5)); // expect 0

const nums6 = [3, 3, 4, 4, 4, 4, 2, 2];
console.log(countRemainingItems(nums6)); // expect 0

const nums7 = [3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 5, 5, 6];
console.log(countRemainingItems(nums7)); // expect 0
