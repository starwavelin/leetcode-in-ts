/***************************************************************************
 * Problem No. : 206
 * Problem Name: Reverse Linked List
 * Date        : November 7, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-recursion
 ***************************************************************************/

/**
 * Do the reverse in a recursive way (tail recursion)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    return reverse(null, head);
};

const reverse = (newHead, head) => {
    if (!head) return newHead;

    // reverse
    const cur = head.next;
    head.next = newHead;

    // prep (recursive)
    return reverse(head, cur);
}