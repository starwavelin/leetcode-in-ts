/***************************************************************************
 * Problem No. : 20
 * Problem Name: Valid Parentheses
 * Date        : June 19, 2022
 * Author      : @codingbro
 *
 * meta        : tag-stack
 ***************************************************************************/

/**
 * Updated on 8/18/2023
 * A more concise way of writing it:
 *  For the comparison part, we check the top element first,
 *      if it matches, we pop it; otherwise we return false
 */
var isValidConciseWay = function (s: string) {
    const stack = [];

    for (let c of s) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            const top = stack[stack.length - 1];
            if ((c == ')' && top == '(') || (c == ']' && top == '[') || (c == '}' && top == '{')) {
                stack.pop();
            } else return false;
        }
    }

    return stack.length == 0;
};

/**
 * The solution before
 */
function isValid(s: string): boolean {
    const stack = [];
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (!stack.length) {
                return false;
            } else {
                const popped = stack.pop();
                if (
                    (popped === '(' && char === ')') ||
                    (popped === '[' && char === ']') ||
                    (popped === '{' && char === '}')
                ) {
                    continue;
                } else {
                    return false;
                }
            }
        }
    }
    return !stack.length;
}
