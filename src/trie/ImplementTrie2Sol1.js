/***************************************************************************
 * Problem No. : 1804
 * Problem Name: Implement Trie II
 * Date        : January 24, 2024
 * Author      : @codingbro
 *
 * meta        : tag-trie, tag-map
 ***************************************************************************/

/**
 * Algorithm:
 *   See my notion note
 */

class TrieNode {
    constructor() {
        this.wordsStartingAt = 0;
        this.wordsEndingAt = 0;
        this.children = new Map(); // key - char of the child, val - Node of the child
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let cur = this.root, children = cur.children;
        for (let c of word) {
            if (!children.has(c)) {
                children.set(c, new TrieNode());
            }

            // move forward
            cur = children.get(c);
            children = cur.children;
            cur.wordsStartingAt++;            
        }
        cur.wordsEndingAt++;
    }

    countWordsEqualTo(word) {
        return this.search(word) ? this.search(word).wordsEndingAt : 0;
    }

    countWordsStartWith(prefix) {
        return this.search(prefix) ? this.search(prefix).wordsStartingAt : 0;
    }

    erase(word) {
        let cur = this.root, children = cur.children;
        for (let c of word) {
            // move forward
            cur = children.get(c);
            children = cur.children;          
            cur.wordsStartingAt--;
        }
        cur.wordsEndingAt--;
    }

    // help method for countWordsEqualTo and countWordsStartWith
    search(str) {
        let cur = this.root, children = cur.children;
        for (let c of str) {
            if (!children.has(c)) {
                return null;
            }

            // move forward
            cur = children.get(c);
            children = cur.children;          
        }
        return cur;
    }
}