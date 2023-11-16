/***************************************************************************
 * Problem No. : 19
 * Problem Name: Remove Nth Node from End of List
 * Date        : November 16, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-math, tag-two-pointers
 ***************************************************************************/

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let fast = head, pre = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        pre = pre.next;
    }
    pre.next = pre.next.next;
    return dummy.next;
};