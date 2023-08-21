/***************************************************************************
 * Problem No. : 716
 * Problem Name: Max Stack
 * Date        : August 21, 2023
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-data-structure
 ***************************************************************************/

/**
 * Note: In this solution all methods have time complexity of O(1) but 
 *   popMax() has time complexity O(n)
 * And this JS solution will exceed time limit (Test case 165) on LeetCode OJ
 */

var MaxStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    !this.stack.length 
        ? this.stack.push({val: x, max: x}) 
        : this.stack.push({val: x, max: Math.max(x, this.peekMax())});
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    if (!this.stack.length) {
        throw new Error('No elements to be popped!');
    }
    return this.stack.pop().val;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length-1].val;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.stack[this.stack.length-1].max;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    const popped = this.peekMax();

    const temp = []; // help stack to store values
    while (this.top() != popped) {
        temp.push(this.pop());
    }

    this.pop(); // remove the toppest max val

    while(temp.length > 0) {
        this.push(temp.pop());
    }

    return popped;
};

/** 
 * Tests
 */
const ms = new MaxStack();
ms.push(-2); ms.push(-3), ms.push(9); ms.push(2); ms.push(4);
console.log(ms.top()); // 4
console.log(ms.peekMax()); // 9
console.log(ms.popMax()); // 9
console.log(ms.peekMax()); // 4
console.log(ms.top()); // 4
