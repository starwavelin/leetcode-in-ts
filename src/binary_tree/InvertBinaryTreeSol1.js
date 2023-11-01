/***************************************************************************
 * Problem No. : 226
 * Problem Name: Invert Binary Tree
 * Date        : October 31, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree, tag-dfs
 ***************************************************************************/

const invertTree = (root) => {
    if (!root) return null;
    
    // swap
    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);

    return root;
}