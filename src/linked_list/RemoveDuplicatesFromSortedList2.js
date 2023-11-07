/***************************************************************************
 * Problem No. : 82
 * Problem Name: Remove Duplicates from Sorted List II
 * Date        : November 6, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-two-pointers
 ***************************************************************************/

/**
 * 
 * @param {ListNode} head
 * @return {ListNode} 
 */
const deleteDuplicates = (head) => {
    const dummy = new ListNode(-1, head);
    let pre = dummy;

    while (head) {
        // handle dups at the beginning or at the position head reference points to
        if (head.next && head.val == head.next.val) {
            // move head to the end of the sublist of dups
            while (head.next && head.val == head.next.val) {
                head = head.next;
            }
            // skip all dups
            pre.next = head.next;
        } else {
            pre = pre.next;
        }

        head = head.next;
    }

    return dummy.next;
}
