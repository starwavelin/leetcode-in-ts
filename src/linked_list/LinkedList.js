/**
 * Problem No. : 10005
 * 
 * Create a Linked List that satisfies the requirements defined at:
 *  https://neetcode.io/problems/singlyLinkedList
 * 
 * Basically it should have the following 6 functions:
 *  1. `LinkedList()` will initialize an empty linked list
 *  2. `get(i)` will return the value of the ith node (0-indexed), if the node is out of bounds, return -1
 *  3. `insertHead(val)` will insert a node with val at the head of the list
 *  4. `insertTail(val)` will insert a node with val at the tail of the list
 *  5. `remove(i)` will remove the ith node (again, 0-indexed). If the index is out of bounds, return false, ow return true.
 *  6. `getValues()` return an array of all the values in the linked list, ordered from head to tail.
 * 
 * Note:
 *  The index int i provided to get(int i) and remove(int i) is guranteed to be greater than or equal to 0.
 */

import { ListNode } from './ListNode.js';

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index >= this.size) {
            return -1;
        }
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val, this.head);
        this.head = node;
        this.size++;

        // Manage the tail when there is exactly one node
        if (this.size == 1) {
            this.tail = this.head;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new ListNode(val);
        if (this.size == 0) { // Manage the head when the very first node was created
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index >= this.size) {
            return false;
        }

        // Case 1: when the node to be removed is the head
        if (index == 0) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        // Case 2: when the node to be removed is a non-head node; use pre.next to refer to the Node-to-rm
        let pre = this.head;
        for (let i = 0; i < index - 1; i++) {
            pre = pre.next;
        }
        // Case 2-1: handle tail that when the tail is being removed
        if (pre.next === this.tail) {
            this.tail = pre;
        }
        // remove
        pre.next = pre.next.next;
        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let cur = this.head;
        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }
        return res;
    }
}

/**
 * Tests
 */
const ll1 = new LinkedList();
console.log('Case 1');
console.log(ll1.get(0)); // expect -1

console.log('\nCase 2');
ll1.insertHead(1);
console.log(ll1.get(0)); // expect 1
console.log(ll1.remove(0)); // expect true

console.log('\nCase 3');
ll1.insertTail(1);
ll1.insertTail(2);
console.log(ll1.get(1)); // expect 2
console.log(ll1.remove(1)); // expect true
ll1.insertTail(2);
console.log(ll1.get(1)); // expect 2
console.log(ll1.get(0)); // expect 1

console.log('\nCase 4');
const ll2 = new LinkedList();
console.log(ll2.remove(0)); // expect false

console.log('\nCase 5');
console.log(ll2.getValues()); // expect []

console.log('\nCase 6');
ll2.insertHead(1);
console.log(ll2.remove(2)); // expect false
console.log(ll2.remove(1)); // expect false

console.log('\nCase 7');
const ll3 = new LinkedList();
ll3.insertHead(1);
ll3.insertHead(2);
ll3.insertTail(3);
ll3.insertTail(4);
ll3.insertHead(5);
console.log(ll3.get(0)); // expect 5
console.log(ll3.get(2)); // expect 1
console.log(ll3.get(4)); // expect 4
ll3.remove(2);
ll3.remove(0);
ll3.insertHead(6);
ll3.insertTail(7);
console.log(ll3.getValues()); // expect [6,2,3,4,7]
console.log(ll3.get(5)); // expect -1

console.log('\nCase 8');
const ll4 = new LinkedList();
ll4.insertTail(1);
ll4.insertTail(2);
ll4.insertTail(3);
console.log(ll4.getValues()); // expect [1,2,3]

console.log('\nCase 9');
const ll5 = new LinkedList();
ll5.insertHead(1);
ll5.insertHead(2);
ll5.insertHead(3);
console.log(ll5.getValues()); // expect [3,2,1]

console.log('\nCase 10');
const ll6 = new LinkedList();
ll6.insertHead(1);
ll6.insertTail(2);
ll6.insertHead(3);
console.log(ll6.getValues()); // expect [3,1,2]

console.log('\nCase 11');
const ll7 = new LinkedList();
ll7.insertTail(1);
ll7.insertHead(2);
ll7.insertTail(3);
console.log(ll7.getValues()); // expect [2,1,3]

console.log('\nCase 12');
const ll8 = new LinkedList();
ll8.insertHead(1);
ll8.insertTail(2);
ll8.insertHead(0);
ll8.remove(1);
console.log(ll8.getValues()); // expect [0,2]

console.log('\nCase 13');
const ll9 = new LinkedList();
ll9.insertHead(1);
ll9.insertHead(2);
console.log(ll9.get(5)); // expect -1

console.log('\nCase 14');
const ll10 = new LinkedList();
ll10.insertHead(1);
ll10.insertHead(2);
ll10.remove(0);
ll10.remove(0);
console.log(ll10.getValues()); // expect []

console.log('\nCase 15');
const ll11 = new LinkedList();
ll11.insertTail(1);
ll11.insertHead(2);
ll11.insertHead(3);
ll11.insertTail(4);
console.log(ll11.getValues()); // expect [3,2,1,4]