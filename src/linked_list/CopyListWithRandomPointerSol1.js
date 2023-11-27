/***************************************************************************
 * Problem No. : 138
 * Problem Name: Copy List with Random Pointer
 * Date        : Nov 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-hash, tag-linked-list
 ***************************************************************************/

/**
 * This method uses HashMap and 
 * traverse the original list twice
 *  one time for copying node and next pointer
 * and the 2nd time for copying the random pointer
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */
const copyRandomList = (head) => {
    // Deal with the head node first
    if (!head) { // handle trivia case
        return null;
    }
    const map = new Map(); // key - node in original list, val - copied node in the copied list
    map.set(head, new Node(head.val));

    /**
     * Use two pointers to traverse the original list
     * for the 1st round of copying
     */
    let pre = head, cur = pre.next;
    while (cur) {
        map.set(cur, new Node(cur.val));
        map.get(pre).next = map.get(cur); // connect the next pointer in copied list
        pre = cur;
        cur = cur.next;
    }
    map.get(pre).next = null; // connect the next pointer for the last copied node

    /**
     * Copy the random pointer
     */
    pre = head; 
    while (pre) {
        const rNode = pre.random;
        map.get(pre).random = map.get(rNode); // connect the random pointer
        pre = pre.next;
    }

    return map.get(head); // return copied head
}