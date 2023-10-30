/***************************************************************************
 * Problem No. : 100
 * Problem Name: Same Tree
 * Date        : October 30, 2023
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
 * Space Complexity: O(n), the help arrays that later to be converted to strings
 */
var isSameTree = function(p, q) {
    const res1 = [], res2 = [];
    preOrder(p, res1);
    preOrder(q, res2);
    return res1.join('') === res2.join('');
};

const preOrder = (root, res) => {
    if (!root) {
        res.push('#');
        return;
    }

    res.push(root.val);
    preOrder(root.left, res);
    preOrder(root.right, res);
}




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