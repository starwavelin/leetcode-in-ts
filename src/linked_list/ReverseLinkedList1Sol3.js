/***************************************************************************
 * Problem No. : 206
 * Problem Name: Reverse Linked List
 * Date        : November 8, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-recursion
 ***************************************************************************/

/**
 * Non-tail recursion solution
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) {
        return null;
    }

    const newHead = reverseList(head.next);

    // reverse
    head.next.next = head;
    head.next = null;

    return newHead;
};