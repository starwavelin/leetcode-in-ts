/***************************************************************************
 * Problem No. : 150
 * Problem Name: Evaluate Reverse Polish Notation
 * Date        : August 21, 2023
 * Author      : @codingbro
 *
 * meta        : tag-stack
 ***************************************************************************/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let num1 = 0, num2 = 0, stack = [];
    for (const c of tokens) {
        if (isOperand(c)) {
            stack.push(parseInt(c));
        } else {
            num2 = stack.pop();
            num1 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    stack.push(Math.trunc(num1 / num2));
                    break;
                default:
                    throw new Error('The given input is not valid');
            }
        }
    }
    return stack.pop();
};

const isOperand = (c) => {
    return !['+', '-', '*', '/'].includes(c);
}