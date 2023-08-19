/***************************************************************************
 * Problem No. : 155
 * Problem Name: Min Stack
 * Date        : August 19, 2023
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-data-structure
 ***************************************************************************/

/**
 * If we use the property of JS -- easy of formatting an object, 
 * then we can just use one stack to achieve our goals
 * 
    {
        val: val
        min: the min value in the current stack
    }
 */


var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.length == 0 
        ? this.stack.push({ val: val, min: val })
        : this.stack.push({ val: val, min: Math.min(val, this.getMin()) });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min;
};
