/***************************************************************************
 * Problem No. : 100
 * Problem Name: Same Tree
 * Date        : October 14, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree
 ***************************************************************************/

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 
 * Time Complexity: O(n) where n = min(NumOfNodesInP, NumOfNodesInQ)
 * Space Complexity: O(log n), the depth of the recursion stack
 */
var isSameTree = function(p, q) {
    if (!p && !q) { // if p is null and q is null
        return true;
    } else if (!p && q || p && !q || p?.val != q?.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


class TreeNode {
    constructor(val, left, right) {
        this.val = (!val ? 0 : val)
        this.left = (!left ? null : left)
        this.right = (!right ? null : right)
    }
}

// Test pTree (1), qTree (1)
const pRoot = new TreeNode(1);
const qRoot = new TreeNode(1);
console.log(isSameTree(pRoot, qRoot)); // true

// Test pTree (1), qTree (2)
const pRoot2 = new TreeNode(1);
const qRoot2 = new TreeNode(2);
console.log(isSameTree(pRoot2, qRoot2)); // false

// Test pTree [1, 2, 3], qTree [1, 2, 3]
const pRoot3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const qRoot3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(pRoot3, qRoot3)); // true

// Test pTree [1, 2], qTree [1, null, 2]
const pRoot4 = new TreeNode(1, new TreeNode(2));
const qRoot4 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(pRoot4, qRoot4)); // false