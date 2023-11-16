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
        slow = slow.next;

        /* Compare the slow and fast pointers after they both have moved their steps.
            Doing so will help LC 142 which wants us to find the entrance node of the cycle.
            Because doing so illustrates that the two pointers may not meet at the entrance, 
            ie. [3, 2, 0, 4] where 4 points to 2. They will meet at Node 4.
        */
        if (fast === slow) {
            return true;
        }
    }
    return false;
};