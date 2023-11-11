/**
 * Problem No. : 10006
 * 
 * Given a linked list that is already sorted, insert a node into this sorted list so the new list remains sorted. Return the head of the new list.
 *
 * Ask interviewer:
   - What is the size of the linked list? [0 to 500 nodes] The given list could be empty.
   - What is the value range of each node? [-100, 100]
   - Is the linked list sorted? [Yes, guaranteed]
 */

const insertNode = (head, newNode) => {
    // Case 1: empty list
    if (!head) {
        head = newNode;
        return head;
    }

    // Case 2: newNode's val <= head's val
    if (newNode.val <= head.val) {
        newNode.next = head;
        head = newNode;
        return head;
    }

    // Case 3: newNode should be inserted in the middle of the list
    let pre = head;
    while (pre.next) {
        if (pre.val < newNode.val && newNode.val <= pre.next.val) {
            newNode.next = pre.next; // connect to the post node first
            pre.next = newNode;
            return head; // insertion completed
        }
        pre = pre.next;
    }

    // Case 4: new Node should be appended to the tail
    pre.next = newNode;
    newNode.next = null;
    return head;
}

const printList = (head) => {
    const res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

/**
 * Tests
 */

import { ListNode } from './ListNode.js';

const node1 = new ListNode(3);
console.log(printList(insertNode(null, node1))); // expect [3]

const ll2Head = new ListNode(2); 
ll2Head.next = new ListNode(5);
const node2 = new ListNode(1);
console.log(printList(insertNode(ll2Head, node2))); // expect [1, 2, 5]

const ll3Head = new ListNode(2); 
ll3Head.next = new ListNode(5);
const node3 = new ListNode(2);
console.log(printList(insertNode(ll3Head, node3))); // expect [2, 2, 5]

const ll4Head = new ListNode(2);
ll4Head.next = new ListNode(5);
const node4 = new ListNode(4);
console.log(printList(insertNode(ll4Head, node4))); // expect [2, 4, 5]

const ll5Head = new ListNode(2);
ll5Head.next = new ListNode(5);
const node5 = new ListNode(5);
console.log(printList(insertNode(ll5Head, node5))); // expect [2, 5, 5]

const ll6Head = new ListNode(2);
ll6Head.next = new ListNode(5);
const node6 = new ListNode(9);
console.log(printList(insertNode(ll6Head, node6))); // expect [2, 5, 9]

const ll7Head = new ListNode(2);
ll7Head.next = new ListNode(5);
ll7Head.next.next = new ListNode(18);
ll7Head.next.next.next = new ListNode(33);
const node7 = new ListNode(14);
console.log(printList(insertNode(ll7Head, node7))); // expect [2, 5, 14, 18, 33]