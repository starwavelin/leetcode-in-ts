/***************************************************************************
 * Problem No. : 1644
 * Problem Name: Lowest Common Ancestor of a Binary Tree II
 * Date        : November 3, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree, tag-dfs, tag-divide-and-conquer, tag-math
 ***************************************************************************/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let nodesFound = false;

    const dfs = (root) => {
        if (!root) {
            return null;
        }

        const leftRoot = dfs(root.left);
        const rightRoot = dfs(root.right);

        checkNodes(root, leftRoot, rightRoot);

        if (leftRoot && rightRoot || root === p || root === q) {
            return root;
        }
        return leftRoot || rightRoot;
    }

    const checkNodes = (root, leftRoot, rightRoot) => {
        let count = 0;
        if (root === p || root === q) {
            count++;
        }
        if (leftRoot) {
            count++;
        }
        if (rightRoot) {
            count++;
        }
        
        if (count == 2) {
            nodesFound = true;
        }
    }

    const res = dfs(root);
    return nodesFound ? res : null;
};