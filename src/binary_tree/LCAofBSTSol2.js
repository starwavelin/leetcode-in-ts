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

/**
 * Variation of writing this solution
 * 
 *  Because we're guaranteed to return a solution as root, no matter root is null or not, 
 *  We can directly return it within the else condition, without putting a return statement
 *  outside of the while loop
 */
var lowestCommonAncestorVar1 = function(root, p, q) {
    while (true) {
        if (root.val < Math.min(p.val, q.val)) {
            root = root.right;
        } else if (root.val > Math.max(p.val, q.val)) {
            root = root.left;
        } else { // found the right root
            return root;
        }
    }
};