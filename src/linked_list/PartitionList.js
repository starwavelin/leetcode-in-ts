/***************************************************************************
 * Problem No. : 86
 * Problem Name: Partition List
 * Date        : November 8, 2023
 * Author      : @codingbro
 *
 * meta        : tag-linked-list
 ***************************************************************************/

const partition = (head, x) => {
    const leftDummy = new ListNode(-1), rightDummy = new ListNode(-1);
    let left = leftDummy, right = rightDummy;
    while (head) {
        if (head.val < x) {
            left.next = head;
            left = head;
        } else {
            right.next = head;
            right = head;
        }
        head = head.next;
    }
    right.next = null; // cut the loop
    left.next = rightDummy.next; // connect left sublist and right sublist
    return leftDummy.next;
}