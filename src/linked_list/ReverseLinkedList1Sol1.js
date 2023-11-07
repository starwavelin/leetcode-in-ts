/***************************************************************************
 * Problem No. : 206
 * Problem Name: Reverse Linked List
 * Date        : November 6, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-two-pointers
 ***************************************************************************/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null, cur = null;
    while (head) {
        cur = head.next; // get a seat for head
        head.next = pre; // reverse
        pre = head; // catchup
        head = cur;
    }
    return pre;
};