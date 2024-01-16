/***************************************************************************
 * Problem No. : 98
 * Problem Name: Validate Binary Search Tree
 * Date        : October 26, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree, tag-bloomberg
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
    const res = [];
    inorder(root, res);
    return isSorted(res);    
}

const inorder = (root, res) => {
    if (!root) {
        return;
    }

    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
}

const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] >= arr[i]) return false;
    }
    return true;
}

