/***************************************************************************
 * Problem No. : 83
 * Problem Name: Remove Duplicates from Sorted List
 * Date        : November 6, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-two-pointers
 ***************************************************************************/

/** 
 * @param {ListNode} head
 * @return {ListNode} 
 */
const remvoeDuplicates = (head) => {
    if (!head || !head.next) {
        return head;
    }
    let pre = head, cur = head.next;
    while (cur) {
        if (pre.val === cur.val) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }
    return head;
}

/**
 * Can also use one help var to re-write the implementation above
 */
const remvoeDuplicatesSol2 = (head) => {
    if (!head || !head.next) {
        return head;
    }
    let pre = head;
    while (pre.next) {
        if (pre.val === pre.next.val) {
            pre.next = pre.next.next;
        } else {
            pre = pre.next;
        }
    }
    return head;
}