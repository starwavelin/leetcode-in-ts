/***************************************************************************
 * Problem No. : 138
 * Problem Name: Copy List with Random Pointer
 * Date        : July 23, 2022
 * Author      : @codingbro
 *
 * meta        : tag-linked-list, tag-hash
 ***************************************************************************/

export class ListWithRandomPointer {

    copyRandomListSol1(head: Node | null): Node | null {
        if (!head) 
            return null;

        return this.copySol1(head);
    }

    copySol1 = (head: Node): Node => {
        // Dealing with the head node first
        const map = new Map<Node, Node>();        
        map.set(head, new Node(head.val));
    
        let prev: Node | undefined = head;
        let trav = prev.next;
        while (trav) {
            map.set(trav, new Node(trav.val));            
            map.get(prev)!.next = map.get(trav); // connect next pointer
            prev = trav;
            trav = trav.next;
        }
    
        prev = head;
        while (prev) {
            if (prev.random) {
                map.get(prev)!.random = map.get(prev.random);
            }
            prev = prev.next;
        }
    
        return map.get(head) as Node;
    }

    // Use just one pointer traveler, easier to understand so better than Solution 1
    copyRandomListSol2(head: Node | null): Node | null {
        if (!head) {
            return null;
        }

        const map = new Map<Node, Node>();
        let trav: Node | undefined = head;
        while (trav) {
            if (!map.has(trav)) {
                map.set(trav, new Node(trav.val));
            }
            if (trav.next && !map.has(trav.next)) {
                map.set(trav.next, new Node(trav.next.val));
                map.get(trav)!.next = map.get(trav.next);
            }

            trav = trav.next;
        }

        trav = head;
        while (trav) {
            if (trav.random) {
                map.get(trav)!.random = map.get(trav.random);
            }
            trav = trav.next;
        }

        return map.get(head) as Node;
    }


    copyRandomListSol3(head: Node | null): Node | null {
        if (!head) 
            return null;

        return this.copySol3(head);
    }

    copySol3 = (head: Node): Node => {
        // 我不区分next和random指针，当我需要建新的复制点的时候我就建立起复制的点
        const map = new Map<Node, Node>();

        let trav: Node | undefined = head;
        while (trav) {
            if (!map.has(trav)) {
                map.set(trav, new Node(trav.val));
            }

            // Create copied next pointer if it doesn't exist
            if (trav.next && !map.has(trav.next)) {
                map.set(trav.next, new Node(trav.next.val));                
            }

            // Create copied random pointer node if it doesn't exist
            if (trav.random && !map.has(trav.random)) {
                map.set(trav.random, new Node(trav.random.val));
            }

            // Connect copied traveler node and its copied next pointer node
            if (trav.next) {
                map.get(trav)!.next = map.get(trav.next);
            }

            // Connect copied traveler node and its copied random pointer node
            if (trav.random) {
                map.get(trav)!.random = map.get(trav.random);
            }

            trav = trav.next;
        }

        return map.get(head) as Node;
    }    
}

class Node {
    val: number;
    next: Node | undefined;
    random: Node | undefined;

    constructor(val?: number, next?: Node, random?: Node) {
        this.val = !val ? 0 : val;
        this.next = !next ? undefined : next;
        this.random = !random ? undefined : random;
    }
}