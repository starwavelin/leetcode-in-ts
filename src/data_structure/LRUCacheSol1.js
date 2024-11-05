/***************************************************************************
 * Problem No. : 146
 * Problem Name: LRU Cache
 * Date        : November 5, 2024
 * Author      : @codingbro
 *
 * meta        : tag-data-structure, tag-map, tag-linked-list
 ***************************************************************************/

/**
 * ListNode for doubly linked list
 */
class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // cache is a map, key - key, value - the node, which contains key, val, prev pointer and next pointer

    // setup dummy head and tail
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.cache.has(key)) {
      // Mark the node as recently used
      const node = this.cache.get(key);
      this.moveToEnd(node);

      // return the val of the node
      return node.val;
    }
    return -1; // not found this key
  }

  put(key, val) {
    if (this.cache.has(key)) {
      // The update case
      const node = this.cache.get(key);
      node.val = val;

      this.moveToEnd(node); // Mark this node as recently used
    } else {
      // The insertion case
      const newNode = new ListNode(key, val);
      this.cache.set(key, newNode);
      this.addNode(newNode);

      // If exceeds the capacity
      if (this.cache.size > this.capacity) {
        const lru = this.removeLeastUsed();
        this.cache.delete(lru.key);
      }
    }
  }

  addNode(node) {
    // add node to the end of the list
    // connect node to exist nodes first
    node.next = this.tail;
    node.prev = this.tail.prev;

    // break the original links
    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  removeNode(node) {
    // Label the toDeleteNode's prev and next first
    const prev = node.prev;
    const next = node.next;

    // delete the node
    prev.next = next;
    next.prev = prev;
  }

  moveToEnd(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  removeLeastUsed() {
    const lru = this.head.next; // the node right after the dummy head stores the least used member
    this.removeNode(lru);
    return lru;
  }
}

/**
 * Tests
 *
 */

const lruCache = new LRUCache(2); // null
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // 1
lruCache.put(3, 3);
console.log(lruCache.cache); // {1: 1, 3: 3}
console.log(lruCache.get(2)); // -1
lruCache.put(4, 4);
console.log(lruCache.get(1)); // -1
console.log(lruCache.get(3)); // 3
console.log(lruCache.get(4)); // 4
