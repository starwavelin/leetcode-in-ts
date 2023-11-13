/***************************************************************************
 * Problem No. : 876
 * Problem Name: Middle of the Linked List
 * Date        : November 9, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-two-pointers
 ***************************************************************************/

/**
 * The middle node of the list is slightly right if the number of nodes
 * in the list is even
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

/**
 * This solution shows that when there are even number of nodes,
 * we want to return the middle node as the left one of the two middle nodes
 *
 * This can be helpful to LC 148. Sort List
 * And this could be used more in LeetCode problems
 * @param {ListNode} head
 */
const middleNodeSlightlyLeft = (head) => {
    let slow = head, fast = head.next; // In order to get left, fast needs to start with head.next
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.next;
}