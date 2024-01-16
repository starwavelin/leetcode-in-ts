/***************************************************************************
 * Problem No. : 226
 * Problem Name: Invert Binary Tree
 * Date        : October 31, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree
 ***************************************************************************/

/**
 * Traditional way, use a var to temporarily store the left subtree.
 * This solution is timely more efficient than Sol1
 * @param {*} root 
 * @returns 
 */
const invertTree = (root) => {
    if (!root) {
        return null;
    }

    const tmp = root.left;
    root.left = invertTree(root.right); // deal with the right subtree first
    root.right = invertTree(tmp);
    return root;
}

/**
 * Variant implementation of Sol 2, using destructures
 *  Timely is not as efficient as Sol 2 , but space efficiency is the same
 * @param {*} root 
 */
const invertTreeVar2 = (root) => {
    if (!root) {
        return null;
    }
    [root.left, root.right] = [invertTreeVar2(root.right), invertTreeVar2(root.left)];
    return root;
}