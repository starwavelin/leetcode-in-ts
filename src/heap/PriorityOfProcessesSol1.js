/***************************************************************************
 * Problem No. : 20002
 * Problem Name: Priority of Processes
 * Date        : November 18, 2023
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-heap, tag-amazon
 ****************************************************************************/

import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Use maxheap + map (or an obj storing val and idx)
 * @param {number[]} priority 
 * @return {number[]}
 */
const process = (priority) => {
    // Form the {val, idx} object array from priority array
    const objs = [];
    for (let i = 0; i < priority.length; i++) {
        objs.push({ val: priority[i], idx: i });
    }

    /**
     * Form a maxheap, the comparator is:
     * the larger value should be the top; 
     * if two values are the same, the smaller idx element should be the top
     */
    const maxHeap = new PriorityQueue((a, b) => {
        if (b.val > a.val) {
            return 1;
        } else if (b.val < a.val) {
            return -1;
        } else {
            if (a.idx < b.idx) {
                return -1;
            } else if (a.idx > b.idx) {
                return 1;
            } else { return 0; }
        }
    });

    // put objects into heap
    for (let o of objs) {
        maxHeap.enqueue(o);
    }

    let res = []; // stores non-identical obj first, then the final result

    // Taking elements out of heap for comparison
    while (!maxHeap.isEmpty()) {
        let tmp = maxHeap.dequeue();
        if (!maxHeap.isEmpty() && tmp.val === maxHeap.front().val) { // need to double check maxHeap is not empty because after taking out a tmp, the heap could be empty
            // discard tmp
            // dequeue the current peek and manipulate it and then enqueue it
            let el = maxHeap.dequeue();
            el.val = Math.floor(el.val / 2);
            maxHeap.enqueue(el);
            if (el.val === 0) { // when we meet an element whose val becomes 0, can form result now and break the loop
                formResult(res, maxHeap);
                break;
            }
        } else {
            res.push(tmp);
        }
    }

    return res.sort((a, b) => a.idx - b.idx).map(el => el.val);
}

const formResult = (res, heap) => {
    while (!heap.isEmpty()) {
        res.push(heap.dequeue());
    }
}

/**
 * Tests
 */
const pri1 = [6, 6, 6, 1, 2, 2];
console.log(process(pri1)); // expect [3, 6, 0]

const pri2 = [4, 4, 2, 1];
console.log(process(pri2)); // expect [0]

const pri3 = [2, 1, 5, 10, 10, 1];
console.log(process(pri3)); // expect [0, 1]

const pri4 = [4, 4, 2, 1, 1, 1];
console.log(process(pri4)); // expect [0, 1, 1]

const pri5 = [1, 3, 5, 10, 10];
console.log(process(pri5)); // expect [1, 3, 2]

const pri6 = [1, 3, 5, 10, 10, 10, 10];
console.log(process(pri6)); // expect [1, 3, 2, 5]

const pri7 = [6, 3, 1, 1];
console.log(process(pri7)); // expect [6, 3, 0]

const pri8 = [1, 3, 5, 10, 10, 10, 10, 19];
console.log(process(pri8)); // expect [1, 3, 2, 5, 19]

const pri9 = [0, 1, 1];
console.log(process(pri9)); // expect [0, 1, 1]