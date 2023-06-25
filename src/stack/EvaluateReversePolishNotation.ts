/***************************************************************************
 * Problem No. : 150
 * Problem Name: Evaluate Reverse Polish Notation
 * Date        : July 1, 2022
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-recursion
 ***************************************************************************/

const errMsg = 'Input is not a vaid RPN';

export function evalRPN(input: string[]): number {
    let num2 = 0,
        num1 = 0;
    const stack: number[] = [];
    const n = input.length;
    for (let i = 0; i < n; i++) {
        if (isOperand(input[i])) {
            stack.push(parseInt(input[i]));
        } else {
            if (!stack.length) {
                throw new Error(errMsg);
            }
            num2 = stack.pop() as number;
            if (!stack.length) {
                throw new Error(errMsg);
            }
            num1 = stack.pop() as number;
            evaluate(num1, num2, input[i], stack);
        }
    }
    return stack.pop() as number;
}

const isOperand = (s: string): boolean => {
    return s !== '+' && s !== '-' && s !== '*' && s !== '/';
};

const evaluate = (num1: number, num2: number, op: string, stack: number[]): void => {
    switch (op) {
        case '+':
            stack.push(num1 + num2);
            break;
        case '-':
            stack.push(num1 - num2);
            break;
        case '*':
            stack.push(num1 * num2);
            break;
        case '/': {
            let val = Math.trunc(num1 / num2); // 不一定floor,因为被除数可能是负数，取整就行
            val = Object.is(val, -0) ? 0 : val; // avoid -0 from JS
            stack.push(val);
            break;
        }
        default:
            throw new Error(errMsg);
    }
};
