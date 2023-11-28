/***************************************************************************
 * Problem No. : 138
 * Problem Name: Copy List with Random Pointer
 * Date        : Nov 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-linked-list
 ***************************************************************************/

/**
 * This method doesn't use hash map, it traverses the original list
 * three times and use the original list's next reference to 
 * construct a new copied list.
 * Afterwards, it restore both the original list and copied list to their right formats
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */
const copyRandomList = (head) => {
    // Trivia case
    if (!head) return null;

    // Construct a-a'-b-b' format
    let cur = head;
    while (cur) {
        const newCur = new Node(cur.val);
        newCur.next = cur.next; // connect copied node's next first
        cur.next = newCur;
        cur = cur.next.next; // move on with 2 steps
    }

    // connect new list's random pointers
    cur = head;
    while (cur) {
        if (cur.random) {
            cur.next.random = cur.random.next;
        }
        cur = cur.next.next; // move on with 2 steps
    }

    // unweave to restore the lists
    cur = head.next;
    let newHead = head.next, oldCur = head;
    while (oldCur) {
        oldCur.next = oldCur.next.next; // restore old list's next ref
        if (cur.next?.next) {
            cur.next = cur.next.next; // restore copied list's next ref
        }
        oldCur = oldCur.next; // move on with the old list
        cur = cur.next; // move on with the copied list
    }
    return newHead;
}