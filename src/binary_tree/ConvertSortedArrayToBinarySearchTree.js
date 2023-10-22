/***************************************************************************
 * Problem No. : 108
 * Problem Name: Convert Sorted Array to Binary Search Tree
 * Date        : October 22, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree
 ***************************************************************************/

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return construct(nums, 0, nums.length-1);
};

const construct = (nums, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
        return null;
    }

    const mid = (leftIndex + rightIndex) >> 1;
    const root = new TreeNode(nums[mid]);

    root.left = construct(nums, leftIndex, mid - 1);
    root.right = construct(nums, mid + 1, rightIndex);

    return root;
}