/***************************************************************************
 * Problem No. : 496
 * Problem Name: Next Greater Element I
 * Date        : January 8, 2024
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-monotonic-stack
 ***************************************************************************/


/**
 * Algorithm:
 *  Using monotonic stack on nums2 and a map to store the num and its NGE (next greater element)
 * 
 *  1. Init a res array of size of nums1 for storing answers. Init a map to store num - NGE pairs.
    2. Traverse the nums2 array
        1.  when (while) stack is not Empty, and the current element is > the stack’s peek()
            1. map should be updated with key = stack’s peek and value = current element
            2. stack.pop();
        2. push the current element into the stack
    3. Loop through the nums1 array to form the results
 * 
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 */



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const res = new Array(m).fill(-1);

    const map = new Map(); // key - num, val - NGE
    const stack = new Stack();

    // Get NGE list from nums2
    for (let i = 0; i < n; i++) {
        while (!stack.isEmpty() && nums2[i] > stack.peek()) {
            map.set(stack.peek(), nums2[i]);
            stack.pop();
        }

        stack.push(nums2[i]);
    }

    // form the answer from nums1
    for (let i = 0; i < m; i++) {
        if (!map.has(nums1[i])) {
            res[i] = -1;
        } else {
            res[i] = map.get(nums1[i]);
        }
    }

    return res;
};

class Stack {
    stack;

    constructor() {
        this.stack = [];
    }

    push(el) {
        this.stack.push(el);
    }

    pop() {
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    peek() {
        return this.stack[this.size() - 1];
    }

    isEmpty() {
        return !this.size();
    }
}



/**
 * Tests
 */

console.log(nextGreaterElement([4,1,2],[1,3,4,2])); // [-1,3,-1]
console.log(nextGreaterElement([8,7,5],[3,8,6,5,7,10])); // [10,10,7]