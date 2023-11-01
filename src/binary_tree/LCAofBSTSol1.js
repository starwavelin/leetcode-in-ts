/***************************************************************************
 * Problem No. : 235
 * Problem Name: Lowest Common Ancestor of a Binary Search Tree
 * Date        : November 1, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search-tree, tag-dfs, tag-divide-and-conquer
 ***************************************************************************/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root.val < Math.min(p.val, q.val)) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (root.val > Math.max(p.val, q.val)) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};