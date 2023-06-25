/***************************************************************************
 * Problem No. : 155
 * Problem Name: Min Stack
 * Date        : June 18, 2022
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-data-structure
 ***************************************************************************/

export class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (!this.minStack.length || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        if (!this.stack.length) {
            throw new Error('There is no elements to pop!');
        }
        const popped = this.stack.pop();
        if (!!this.minStack.length && popped === this.getMin()) {
            this.minStack.pop();
        }
    }

    top(): number {
        if (!this.stack.length) {
            throw new Error('There is no elements to show!');
        }
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        if (!this.minStack.length) {
            throw new Error('There is no minimum elements to show!');
        }
        return this.minStack[this.minStack.length - 1];
    }

    /**
     * This problem is easier than the MaxStack one is b/c
     * we only have a getMin(), we do not need to implement a popMin().
     *
     * That's why we don't need to keep the length of minStack always the same as the length of stack
     * like what we did for MaxStack solution 1.
     */
}
