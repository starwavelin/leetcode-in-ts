/***************************************************************************
 * Problem No. : 1944
 * Problem Name: Number of Visible People in a Queue
 * Date        : January 6, 2024
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-monotonic-stack
 ***************************************************************************/

/**
 * Algorithm:
 *  1. Init res whose length is the size of the heights array.
    2. Init a stack
    3. Traverse from the right to the left of the heights array
        1. init count = 0
        2. when (while) stack is not empty and the current height is larger than stack’s peek()
            1. count++ and pop the peek out of the stack  [We see the condition matters — NO duplicate values in the heights array]
        3. Tricky part: Even when the current height is less than the element left in the stack (if stack is not empty at this time)
            the current height can still see it, so count++
        4. Now we’re safe to update the res[i] ← So you can see, unlike the traditional template, the update of res here is not in the while loop
        5. push the current height into stack, for further use
    4. return res

    TC: O(n)
    SC: O(n)
 */

/**
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = (heights) => {
    const n = heights.length;
    const res = new Array(n).fill(0);

    const stack = new Stack(); // stack store the heights of each person

    for (let i = n-1; i >= 0; i--) {
        let count = 0; // store the number of persons that person i can see

        while (!stack.isEmpty() && heights[i] > stack.peek()) {
            count++;
            stack.pop();
        }

        if (!stack.isEmpty()) { // The case A can see E in the drawing
            count++;
        }

        // update res
        res[i] = count;

        // push element into stack
        stack.push(heights[i]);
    }

    return res;
}


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

    peek() {
        return this.stack[this.size() - 1];
    }

    isEmpty() {
        return !this.stack.length;
    }

    size() {
        return this.stack.length;
    }
}


/**
 * Tests
 */

console.log(canSeePersonsCount([10,6,8,5,11,9])); // [3,1,2,1,1,0]
console.log(canSeePersonsCount([5,1,2,3,10])); // [4,1,1,1,0]
