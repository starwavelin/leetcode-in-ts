/***************************************************************************
 * Problem No. : 23
 * Problem Name: Merge K Sorted Lists
 * Date        : November 12, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-heap
 ***************************************************************************/

import { ListNode } from './ListNode.js';
import { PriorityQueue } from '@datastructures-js/priority-queue';
import { printList } from './printList.js'

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists) {
        return null;
    }
    const dummy = new ListNode(-1);
    let cur = dummy;

    // create minHeap
    const minHeap = new PriorityQueue((a, b) => a.val - b.val);
    // populate minHeap with the first k nodes
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            minHeap.enqueue(lists[i]);
        }
    }

    while (!minHeap.isEmpty()) {
        const node = minHeap.dequeue();
        cur.next = node;
        cur = cur.next;
        if (node.next) {
            minHeap.enqueue(node.next);
        }
    }
    return dummy.next;
};

/**
 * Tests
 */

/**
 * Ex 1. 
 *  l1 = [1, 4, 4]
 *  l2 = [2, 18, 31]
 *  l3 = [5, 7, 9]
 *  l4 = [-1, 15]
 */
const l1 = new ListNode(1); l1.next = new ListNode(4); l1.next.next = new ListNode(4);
const l2 = new ListNode(2); l2.next = new ListNode(18); l2.next.next = new ListNode(31);
const l3 = new ListNode(5); l3.next = new ListNode(7); l3.next.next = new ListNode(9);
const l4 = new ListNode(-1); l4.next = new ListNode(15);
const lists1 = [l1, l2, l3, l4];
printList(mergeKLists(lists1)); // expect [-1, 1, 2, 4, 4, 5, 7, 9, 15, 18, 31]


/**
 * Re-write using the v4 of @datastructures-js/priority-queue
 * Passed LC
 */
var mergeKListsV4DS = function(lists) {
    if (!lists) {
        return null;
    }
    const dummy = new ListNode(-1);
    let cur = dummy;

    // create minHeap
    const minHeap = new MinPriorityQueue({priority: x => x.val});
    // populate minHeap with the first k nodes
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            minHeap.enqueue(lists[i]);
        }
    }

    while (!minHeap.isEmpty()) {
        const node = minHeap.dequeue().element; 
            // for v4, the dequeued obj is { element: node, priority: val}, so you know. The enqueue() can just enqueue(node)
        cur.next = node;
        cur = cur.next;
        if (node.next) {
            minHeap.enqueue(node.next);
        }
    }
    return dummy.next;
};