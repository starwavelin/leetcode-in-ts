/***************************************************************************
 * Problem No. : 1021
 * Problem Name: Remove Outermost Parentheses
 * Date        : July 1, 2022
 * Author      : @codingbro
 *
 * meta        : tag-stack
 ***************************************************************************/

export function removeOutermostParentheses(s: string): string {
    let res = '';
    const stack = [];
    for (const char of s) {
        if (char === '(') {
            if (stack.length > 0) {
                res += char;
            }
            stack.push(char);
        } else {
            if (stack.length > 1) {
                res += char;
            }
            stack.pop();
        }
    }
    return res;
}
