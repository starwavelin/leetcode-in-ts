/***************************************************************************
 * Problem No. : 235
 * Problem Name: Lowest Common Ancestor of a Binary Search Tree
 * Date        : November 1, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search-tree
 ***************************************************************************/

/**
 * The iterative solution of this problem
 */
var lowestCommonAncestor = function(root, p, q) {
    while (true) {
        if (root.val < Math.min(p.val, q.val)) {
            root = root.right;
        } else if (root.val > Math.max(p.val, q.val)) {
            root = root.left;
        } else { // found the right root
            break;
        }
    }
    return root;
};