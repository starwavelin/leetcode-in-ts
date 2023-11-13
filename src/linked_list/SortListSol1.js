/***************************************************************************
 * Problem No. : 148
 * Problem Name: Sort List
 * Date        : November 13, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-recursion, tag-divide-and-conquer
 ***************************************************************************/

const sortList = (head) => {
    // base case
    if (!head || !head.next) {
        return head;
    }

    const mid = findMiddle(head);
    const right = sortList(mid.next); // right sublist starts from mid.next; mid.next is the new head
    mid.next = null; // cut the end of the mid node
    const left = sortList(head);
    return merge(left, right); // merge two sorted list
}

const findMiddle = (head) => {
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

const merge = (list1, list2) => {
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