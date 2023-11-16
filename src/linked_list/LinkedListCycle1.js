/***************************************************************************
 * Problem No. : 141
 * Problem Name: Linked List Cycle
 * Date        : November 16, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-two-pointers
 ***************************************************************************/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head, slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
        slow = slow.next;
    }
    return false;
};