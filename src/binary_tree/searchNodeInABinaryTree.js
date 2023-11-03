/**
 * Given a binary tree and a node p, check if Node p exists in the tree.
 * If yes, return true, otherwise return false
 */

import { TreeNode, arrayToTree } from './arrayToTreeMyStyle.js';

/**
 * Can use pre-order traversal to do the search
 * 
 * @param {TreeNode} root 
 * @param {TreeNode} p 
 */
const searchNode = (root, p) => {
    if (!root) {
        return false;
    }

    if (root === p) {
        return true;
    }

    return searchNode(root.left, p) || searchNode(root.right, p);
}

/**
 * Tests
 */
const tree1 = arrayToTree([2, 1, 3]);
const p1 = tree1.left;
console.log(searchNode(tree1, p1)); // true

const tree2 = arrayToTree([2, 1, 3, null, 5]);
const p2 = tree2.left.right;
console.log(searchNode(tree2, p2)); // true
const p2prime = tree2.right;
console.log(searchNode(tree2, p2prime)); // true

const p3 = new TreeNode(13);
console.log(searchNode(tree2, p3)); // false
