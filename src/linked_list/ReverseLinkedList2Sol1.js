/***************************************************************************
 * Problem No. : 92
 * Problem Name: Reverse Linked List II
 * Date        : November 7, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-two-pointers
 ***************************************************************************/

/**
 * Doing it in 2 passes
 * @param {ListNode} head 
 * @param {ListNode} left 
 * @param {ListNode} right 
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
    // create dummy
    const dummy = new ListNode(-1, head);

    // pin start and left nodes
    let startNode = dummy;
    if (left > 1) {
        for (let i = 1; i < left; i++) {
            startNode = startNode.next;
        }
    }
    let leftNode = startNode.next;

    // pin right and end nodes
    let rightNode = head;
    if (right > 1) {
        for (let i = 1; i < right; i++) {
            rightNode = rightNode.next;
        }
    }
    let endNode = rightNode.next;

    // reverse
    head = leftNode.next;
    let pre = leftNode, cur = null;
    while (head != endNode) {
        cur = head.next;
        head.next = pre;
        pre = head;
        head = cur;
    }
    leftNode.next = endNode;
    startNode.next = rightNode;

    return dummy.next;
}