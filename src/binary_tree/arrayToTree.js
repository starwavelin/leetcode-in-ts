/**
 * This file provides 
 * 1. A util function arrayToTree(arr, index = 0) that will convert an array like [1, null, 2] into its corresponding 
 * binary tree
 * 2. The TreeNode class
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const arrayToTree = (arr, index = 0) => {
    if (index >= arr.length || !arr[index]) {
        return null;
    }

    const root = new TreeNode(arr[index]);

    // Divide
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    root.left = arrayToTree(arr, leftIndex);
    root.right = arrayToTree(arr, rightIndex);

    // Conquer
    return root;
}

module.exports = {
    TreeNode,
    arrayToTree
}

// Test
const arr1 = [1, null, 2];
console.log(arrayToTree(arr1));

const arr2 = [1, 2, 3, null, null, 4, 5];
console.log(arrayToTree(arr2));