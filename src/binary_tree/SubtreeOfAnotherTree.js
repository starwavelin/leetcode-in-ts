/***************************************************************************
 * Problem No. : 572
 * Problem Name: Subtree of Another Tree
 * Date        : October 31, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree, tag-dfs, tag-meta
 ***************************************************************************/

import { arrayToTree } from './arrayToTreeMyStyle.js';

var isSubtree = function(root, subRoot) {
    if (!root) {
        return false;
    }
    if (isSameTree(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = (s, t) => {
    if (!s && !t) {
        return true;
    } else if (!t || !s || s.val !== t.val) {
        return false;
    }
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}


/**
 * Tests
 */
const tree1 = arrayToTree([3,4,5,1,2]);
const tree1prime = arrayToTree([4,1,2]);
console.log(isSubtree(tree1, tree1prime)); // true

const tree2 = arrayToTree([3,4,5,1,2,null,null,null,null,0]);
const tree2prime = arrayToTree([4,1,2]);
console.log(isSubtree(tree2, tree2prime)); // false

const tree3 = arrayToTree([1,null,1,null,null,null,1,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2]);
// console.log(tree3);
const tree3prime = arrayToTree([1,2]);
console.log(isSubtree(tree3, tree3prime)); // true