/***************************************************************************
 * Problem No. : 1644
 * Problem Name: Lowest Common Ancestor of a Binary Tree II
 * Date        : November 3, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree, tag-dfs, tag-divide-and-conquer
 ***************************************************************************/

/**
 * For this problem, either p or q may not exist in the given binary tree.
 * 
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!searchNode(root, p) || !searchNode(root, q)) {
        return null;
    }

    return dfs(root, p, q);
}

const searchNode = (root, x) => {
    if (!root) {
        return false; // doesn't find
    }

    if (root === x) {
        return true;
    }

    return searchNode(root.left, x) || searchNode(root.right, x);
}

/**
 * The main logic of LCA
 */
const dfs = (root, p, q) => {
    if (!root || root === p || root === q) {
        return root;
    }

    const leftRoot = dfs(root.left, p, q);
    const rightRoot = dfs(root.right, p, q);

    if (leftRoot && rightRoot) {
        return root;
    } else if (leftRoot) {
        return leftRoot;
    } else {
        return rightRoot;
    }
}