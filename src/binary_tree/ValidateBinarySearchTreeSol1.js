/***************************************************************************
 * Problem No. : 98
 * Problem Name: Validate Binary Search Tree
 * Date        : October 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree, tag-dfs, tag-bloomberg
 ***************************************************************************/

/**
 * A binary search tree is defined as follows:
 *  1. The left subtree contains nodes that are less than the root's value
 *  2. The right subtree contains nodes that are greater than the root's value
 *  3. All the subtrees themselves are also BST
 * 
 * @param {*} root 
 */

const isValidBST = (root) => {
    if (!root) {
        return true;
    }
    return isValid(root, -Infinity, Infinity);
}

const isValid = (root, leftVal, rightVal) => {
    if (!root) {
        return true;
    }
    if (root.val <= leftVal || root.val >= rightVal) {
        return false;
    }
    return isValid(root.left, leftVal, root.val) && isValid(root.right, root.val, rightVal);
}
