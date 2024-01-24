/***************************************************************************
 * Problem No. : 208
 * Problem Name: Implement Trie (Prefix Tree)
 * Date        : January 24, 2024
 * Author      : @codingbro
 *
 * meta        : tag-trie, tag-map, tag-two-pointers
 ***************************************************************************/

/**
 * This solution uses LeetCode's default way of writing 
 * Trie's functions.
 * Solution 2 will use Class structure to write a trie
 * 
 * Algorithm:
 * Use a TrieNode class
    it should contain 3 props: 
        character c (the value of the current node), 
        isLeaf (a boolean value determining if the cur node is a leaf), 
        and children Map<Character, TrieNode> 
            (key is the child node’s character and is the child node again; 
                this children map can be at most size 26, per this problem).
    
Use a help function searchNode(str)
    this function is for both search(word) and startsWith(word)
1. set cur as root (overall root) and get root’s children (map type) first
2. Loop through the str’s length
    1. get the current char first
    2. if the children map has the current char, move forward
    3. otherwise return null
3. if after looping through the str, we have a non-null cur node, this means we found this str, return cur node is fine


The insert(word) function:
1. set cur as root (overall root) and gets root’s children (map type) first
2. Loop through the word’s length
    1. get the current char first
    2. if the map doesn’t have the cur, set it up
    3. otherwise (do not use else here), move forward [because even if the current char is in the map, we still need to move forward — we’re reusing existing characters]
    4. check if the cur node becomes leal, if yes need to mark it

The search(word) function:
    check if searchNode(word) is non-null and the return node’s isLeaf prop is true

The startsWith(prefix) function:
    check if searchNode(word) is non-null

Time Complexity:
    All the 3 functions cost O(n)
Space Complexity: O(n)

 * 
 */

class TrieNode {
    constructor(c) {
        this.c = c; // the current character
        this.children = new Map(); // key - character c of the child, value - child TrieNode
        this.isLeaf = false; // is current node leaf
    }
}

var Trie = function() {
    this.root = new TrieNode(); // the overall root doesn't have a character
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root;
    let children = cur.children; // overall root's children is init empty map
    const n = word.length;
    for (let i = 0; i < n; i++) {
        const c = word[i];
        if (!children.has(c)) {
            children.set(c, new TrieNode(c)); // add child to children map for current node
        }

        // move to the next TrieNode - traversal process
        cur = children.get(c);
        children = cur.children;

        // set TrieNode to be leaf if reaching the end of word
        if (i == n-1) {
            cur.isLeaf = true;
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.searchNode(word)?.isLeaf ? true : false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchNode(prefix) ? true : false;
};

Trie.prototype.searchNode = function(str) {
    let cur = this.root, children = cur.children;
    const n = str.length;
    for (let i = 0; i < n; i++) {
        const c = str[i];
        if (children.has(c)) {
            // move forward
            cur = children.get(c);
            children = cur.children;
        } else {
            return null;
        }
    }
    return cur;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

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

