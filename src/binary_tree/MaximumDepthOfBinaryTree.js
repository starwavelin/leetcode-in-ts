/***************************************************************************
 * Problem No. : 104
 * Problem Name: Maximum Depth of Binary Tree
 * Date        : October 14, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree
 ***************************************************************************/

/**
 * The top-down apporach D&C, the height is passed from the top root all the way down
 * to each subtree's farthest leaf.
 * This is why the +1 (for calculating height) is associated with each sub-height.
 * 
 * So, as you can see, the top-down apporach D&C may also return a value for a divide case.
 *  Think about LC 226.
 * 
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

/**
 * The bottom-up apporach D&C.
 * Think about contribution of height from bottom nodes (null) all the way to the top.
 * Assume we already know leftHeight and rightHeight from the maxDepth function against (root.left) and (root.right),
 *  and each time when we move up one level, we need to add 1 [That's why +1 is associated with the result not the intermediate height calculations]
 */
var maxDepthVar2 = function(root) {
    if (!root) {
        return 0;
    }
    
    const leftHeight = maxDepthVar2(root.left);
    const rightHeight = maxDepthVar2(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
};