/***************************************************************************
 * Problem No. : 236
 * Problem Name: Lowest Common Ancestor of a Binary Tree
 * Date        : November 1, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree, tag-divide-and-conquer
 ***************************************************************************/

var lowestCommonAncestor = function(root, p, q) {
    if (!root) { // when reaching a null node (a leaf's child node)
        return null;
    }

    if (root == p || root == q) {
        return root;
    }

    // Divide
    const leftRoot = lowestCommonAncestor(root.left, p, q);
    const rightRoot = lowestCommonAncestor(root.right, p, q);

    // Conquer
    if (leftRoot == p && rightRoot == q || leftRoot == q && rightRoot == p) {
        return root;
    } else if (leftRoot) { // only found solution on a left subtree
        return leftRoot;
    } else { // only found solution on a right subtree
        return rightRoot;
    }
};


/**
 * More elegant writing of the code:
 */
var lowestCommonAncestorVar1 = function(root, p, q) {
    if (!root || root == p || root == q) { // Combine Base Case 1 and 2
        return root;
    }

    // Divide
    const leftRoot = lowestCommonAncestor(root.left, p, q);
    const rightRoot = lowestCommonAncestor(root.right, p, q);

    // Conquer
    if (leftRoot && rightRoot) { // p and q are divided into two sides of the tree
        return root;
    } else if (leftRoot) { // only found solution on a left subtree
        return leftRoot;
    } else { // only found solution on a right subtree
        return rightRoot;
    }
};


/**
 * Tests
 */
import { arrayToTree } from './arrayToTreeMyStyle.js';

const sampleTree = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
// console.log(`sample tree is like \n`);
// console.log(sampleTree);
// console.log(sampleTree.left.right.left.val); // 7
// console.log(sampleTree.left.right.right.val); // 4
// The tree node of 6 is:
const pNode = sampleTree.left.left;
const qNode = sampleTree.left.right.right;
console.log(lowestCommonAncestor(sampleTree, pNode, qNode).val); // 5