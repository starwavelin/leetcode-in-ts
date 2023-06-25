/***************************************************************************
 * Problem No. : 20
 * Problem Name: Valid Parentheses
 * Date        : June 19, 2022
 * Author      : @codingbro
 *
 * meta        : tag-stack
 ***************************************************************************/

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
