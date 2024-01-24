/***************************************************************************
 * Problem No. : 208
 * Problem Name: Implement Trie (Prefix Tree)
 * Date        : January 24, 2024
 * Author      : @codingbro
 *
 * meta        : tag-trie, tag-map
 ***************************************************************************/

/**
 * Class structure of writing a Trie in JavaScript
 * 
 * Algorithm:
 *  Same as Solutioin 1
 * 
 * 
 */

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert = (word) => {
        let cur = this.root, children = cur.children;
        const n = word.length;
        for (let i = 0; i < n; i++) {
            const c = word[i];

            if (!children.has(c)) {
                children.set(c, new TrieNode(c));
            }

            // move forward, reusing existing chars
            cur = children.get(c);
            children = cur.children;

            // check if reaching leaf
            if (i == n-1) {
                cur.isLeaf = true;
            }
        }
    }

    search = (word) => {
        return this.searchNode(word)?.isLeaf ? true : false;
    }

    startsWith = (prefix) => {
        return this.searchNode(prefix) ? true : false;
    }

    searchNode = (str) => {
        let cur = this.root, children = cur.children;
        const n = str.length;
        for (let i = 0; i < n; i++) {
            const c = str[i];

            if (!children.has(c)) {
                return null;
            } else {
                // move forward
                cur = children.get(c);
                children = cur.children;
            }
        }
        return cur;
    }
}

class TrieNode {
    constructor(c) {
        this.c = c; // character c for the current node
        this.isLeaf = false;
        this.children = new Map(); // the children map of cur node, key - char c, val - the node itself
            // at most 26 elements in the children map
    }
}



/**
 * Tests
 */
const trie1 = new Trie();
trie1.insert('apple');
console.log(trie1.search('apple')); // true
console.log(trie1.search('app')); // false
console.log(trie1.startsWith('app')); // true
trie1.insert('app');
console.log(trie1.search('app')); // true
trie1.insert('ape');
console.log(trie1.search('ape')); // true
console.log(trie1.startsWith('ap')); // true
console.log(trie1.startsWith('c')); // false