/***************************************************************************
 * Problem No. : 232
 * Problem Name: Implement Queue using Stacks
 * Date        : October 23, 2023
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-queue
 ***************************************************************************/

/**
 * This solution, unlike Sol 1, doesn't seperate out the inToOut() function.
 * In other words, the inToOut process only applies when we want to pop from the queue.
 * When we just want to peek from the queue, we get the element to be peeked through two cases 
 *  -- when s2 is not empty and when s2 is empty.
 */

var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.length > 0) {
        return this.s2.pop();
    }
    while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2.length > 0) {
        return this.s2[this.s2.length -1];
    } else {
        return this.s1[0];
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.s1.length && !this.s2.length;
};