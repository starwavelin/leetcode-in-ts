/***************************************************************************
 * Problem No. : 503
 * Problem Name: Next Greater Element II
 * Date        : January 8, 2024
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-monotonic-stack
 ***************************************************************************/

/**
 * Algorithm:
 *  1. Init a res array of the size of `nums` for storing NGEs for each element in the nums array. 
    2. Init a stack to potentially store all the elements in the given nums array. 
        1. [We only care the elements in the given array, for getting NGE purpose. For the duplication technique used for circular array, it is used for getting possible NGE for a number, if the NGE is in front of that number; we do Not put a duplicate number into the stack]
    3. Traverse the nums array (augmented array because of the circular array property)
        1.  when (while) stack is not Empty, and the current element is > nums [the stack’s peek()]
            1. update res
            2. stack.pop();
        2. push the current element's index into the stack
    4. return res


 * Time Complexity: O(n)
    Space Complexity: O(n)
 */


/**
 * 
 * @param {number[]} nums 
 * @return {number[]}
 */
const nextGreaterElements = nums => {
    const n = nums.length;
    const res = new Array(n).fill(-1);

    const stack = new Stack(); 

    for (let i = 0; i < 2 * n; i++) {
        const num = nums[i % n];
        while (!stack.isEmpty() && num > nums[stack.peek()]) {
            res[stack.peek()] = num;
            stack.pop();
        }
        if (i < n) {
            stack.push(i);
        }
    }

    return res;
}

class Stack {

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

    isEmpty() {
        return !this.size();
    }

    peek() {
        return this.stack[this.size() - 1];
    }
}


/**
 * Tests
 */

console.log(nextGreaterElements([1,2,1,3])); // [2,3,3,-1]
console.log(nextGreaterElements([1,2,3,4,3])); // [2,3,4,-1,4]