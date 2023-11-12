/***************************************************************************
 * Problem No. : 21
 * Problem Name: Merge Two Sorted Lists
 * Date        : November 12, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-two-pointers
 ***************************************************************************/

const mergeTwoSortedLists = (list1, list2) => {
    if (!list1 || !list2) {
        return list1 || list2;
    }
    const dummy = new ListNode(-1);
    let cur = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1; 
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    if (list1) {
        cur.next = list1;
    }
    if (list2) {
        cur.next = list2;
    }
    return dummy.next;
}