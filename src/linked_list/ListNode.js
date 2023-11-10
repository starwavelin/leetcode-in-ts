/**
 * The building block for a Linked List
 */

export class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = !next ? null : next;
    }
}