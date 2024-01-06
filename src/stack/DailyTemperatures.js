/***************************************************************************
 * Problem No. : 739
 * Problem Name: Daily Temperatures
 * Date        : January 6, 2024
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-monotonic-stack
 ***************************************************************************/

/**
 * Algorithm:
 *  1. Init a res array with size n (n == the length of temps) and fill with 0s
    2. Create a stack to store the index of the temperature of temps array,
        1. and we can use a Stack class implementation here to simplify the function calling s below
    3. Traverse the temps array
        1.  when (while) stack is not Empty, and the current temperature is higher than the temperature of stack.peek()’s temperature
            1. res’ stack.peek() position should be updated as current temperature’s index - stack.peek()
            2. stack.pop();  // because the current stack.peek() position in res has been filled in with the right value, pop it to leave room for future use
        2. push the current temperature’s index into the index stack
    4. return res
 */



/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const res = new Array(n).fill(0);

    const stack = new Stack(); // stack stores the ids of temperatures

    // monotonic stack template
    for (let i = 0; i < n; i++) {
        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
            // update res
            res[stack.peek()] = i - stack.peek();
            stack.pop();
        }

        stack.push(i);
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

console.log(dailyTemperatures([73,74,75,71,69])); // [1, 1, 0 , 0 , 0]
console.log(dailyTemperatures([73,72,71,75])); // [3, 2, 1, 0]
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // [1, 1, 1, 0]