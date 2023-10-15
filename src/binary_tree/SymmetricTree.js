/***************************************************************************
 * Problem No. : 101
 * Problem Name: Symmetric Tree
 * Date        : October 14, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree
 ***************************************************************************/

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 
 * Time Complexity: O(n) traverse all the nodes
 * Space Complexity: O(log n)  the depth of the recursion stack
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    // key point: compare the leftTree and rightTree
    return isSym(root.left, root.right);
};

const isSym = (leftRoot, rightRoot) => {
    /**
     * Note: Symmetric Tree 与 Same Tree都有一个特点,即他们的Base cases 都一样.
     *    为true的条件往往都是 两边都走到 null 节点的时候.
     */
    
    if (!leftRoot && !rightRoot) {
        return true;
    }
    if (!leftRoot && rightRoot || leftRoot && !rightRoot || leftRoot?.val != rightRoot?.val) {
        return false;
    }

    return isSym(leftRoot.left, rightRoot.right) && isSym(leftRoot.right, rightRoot.left);
}