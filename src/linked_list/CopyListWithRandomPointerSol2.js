/***************************************************************************
 * Problem No. : 138
 * Problem Name: Copy List with Random Pointer
 * Date        : Nov 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-map, tag-linked-list
 ***************************************************************************/

/**
 * This method uses HashMap and 
 * traverse the original once
 *  Create all the necessary copied nodes first from a given original cur node
 *  Then do the connections
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */
const copyRandomList = (head) => {
    // handle trivia and create map
    if (!head) return null;
    const map = new Map(); // key - ori node, val - copied node

    // create a pointer to traverse
    let cur = head;
    while (cur) {
        // create copied node
        if (!map.has(cur)) {
            map.set(cur, new Node(cur.val));
        }

        // create copied next pointer node
        if (cur.next && !map.has(cur.next)) {
            map.set(cur.next, new Node(cur.next.val));
        }

        // create copied random pointer node
        if (cur.random && !map.has(cur.random)) {
            map.set(cur.random, new Node(cur.random.val));
        }

        // connect next pointer
        if (cur.next) {
            map.get(cur).next = map.get(cur.next);
        }

        // connect random pointer
        if (cur.random) {
            map.get(cur).random = map.get(cur.random);
        }

        cur = cur.next; // don't forget to move cur foward
    }

    return map.get(head);
}