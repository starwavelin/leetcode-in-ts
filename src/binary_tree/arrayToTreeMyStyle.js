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
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const root = new TreeNode(arr[index]);

    // Divide
    root.left = arrayToTree(arr, 2 * index + 1);
    root.right = arrayToTree(arr, 2 * index + 2);

    // Conquer
    return root;
}

export {
    TreeNode,
    arrayToTree
}

// Test
const arr1 = [1, null, 2];
// console.log(arrayToTree(arr1));

const arr2 = [1, null, 2, 3]; // Legitimate in LeetCode but
    // Not legitimate in my implementation --  the last 3 becomes not printable
const treeRoot = arrayToTree(arr2);
// console.log(treeRoot);

// If I want the same outcome as LeetCode
const arr2prime = [1, null, 2, null, null, 3];
// console.log(arrayToTree(arr2prime));

// const arr3 = [1, 2, 3, null, null, 4, 5];
// console.log(arrayToTree(arr3));