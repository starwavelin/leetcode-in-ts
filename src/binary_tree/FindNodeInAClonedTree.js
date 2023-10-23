/***************************************************************************
 * Problem No. : 1379
 * Problem Name: Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 * Date        : October 22, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-tree
 ***************************************************************************/

let res = null; // res should be a TreeNode type

const findNodeInTheClonedTree = (original, cloned, target) => {
    preOrder(original, cloned, target);
    const answer = res;
    res = null; // Reset the globla var to make LC compiler happy
    return answer;
}

const preOrder = (orig, cloned, target) => {
    if (res || !cloned) {
        return null;
    }

    if (orig === target) {
        res = cloned;
    }

    preOrder(orig.left, cloned.left, target);
    preOrder(orig.right, cloned.right, target);
}
