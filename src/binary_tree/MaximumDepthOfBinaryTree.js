/***************************************************************************
 * Problem No. : 104
 * Problem Name: Maximum Depth of Binary Tree
 * Date        : October 14, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree
 ***************************************************************************/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left) + 1;
    const rightDepth = maxDepth(root.right) + 1;

    return Math.max(leftDepth, rightDepth);
};