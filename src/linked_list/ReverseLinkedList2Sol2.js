/***************************************************************************
 * Problem No. : 92
 * Problem Name: Reverse Linked List II
 * Date        : November 7, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-two-pointers
 ***************************************************************************/

/** One pass solution
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // create dummy
    const dummy = new ListNode(-1, head);

    // set preNode
    let preNode = dummy;
    for (let i = 1; i < left; i++) {
        preNode = preNode.next;
    }

    // set help references and reverse
    let leftNode = preNode.next, rightNode = leftNode, postNode = rightNode.next;
    for (let i = 0; i < right - left; i++) {
        const cur = postNode.next;
        postNode.next = rightNode;
        rightNode = postNode;
        postNode = cur;
    }
    leftNode.next = postNode;
    preNode.next = rightNode;

    return dummy.next;
};