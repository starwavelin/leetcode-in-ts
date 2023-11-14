/***************************************************************************
 * Problem No. : 143
 * Problem Name: Reorder List
 * Date        : November 13, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list
 ***************************************************************************/

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head.next) { return; }

    // find middle node
    const mid = findMiddle(head);
    const tail = reverse(mid.next);
    // cut the mid.next
    mid.next = null;

    merge(head, tail);
};

const findMiddle = (head) => {
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

const reverse = (head) => {
    let pre = null;
    while (head) {
        const cur = head.next;
        head.next = pre;
        pre = head;
        head = cur;
    }
    return pre;
}

// This merge function handles when list1 has even or odd number of nodes, both cases
// Due to our findMiddle apporach, only list1 may have even or odd number of nodes, list2 will always have even number of nodes
const merge = (list1, list2) => {
    let cur = list1;
    while (list1 && list2) {
        list1 = list1.next;
        cur.next = list2;
        cur = list2; // move cur
        list2 = list2.next;
        cur.next = list1;
        cur = list1; // move cur
    }
}


/**
 * We can also use a more dummy-node like function as LC 21 to write merge()
 * but we then need to specifically consider the case when list1 contains odd number of nodes
const merge = (list1, list2) => {
    let cur = new ListNode(-1);
    while (list1 && list2) {
        cur.next = list1;
        list1 = list1.next;
        cur = cur.next;
        cur.next = list2;
        list2 = list2.next;
        cur = cur.next;
    }
    if (list1) {
        cur.next = list1;
    }
}
 */