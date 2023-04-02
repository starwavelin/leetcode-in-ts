/***************************************************************************
* Problem No. : 716
* Problem Name: Max Stack
* Date        : June 18, 2022
* Author      :	@codingbro
*
* meta        : tag-stack, tag-data-structure
***************************************************************************/

export class MaxStack {
    stack: number[];
    maxStack: number[];
    
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(x: number): void {
        this.stack.push(x);
        const max = (!this.maxStack.length ||  x > this.peekMax()) ? x : this.peekMax(); 
        this.maxStack.push(max);
    }

    pop(): number {
        this.maxStack.pop();
        return this.stack.pop() || Number.MIN_SAFE_INTEGER;
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    peekMax(): number {
        return this.maxStack[this.maxStack.length - 1];
    }

    popMax(): number {
        const max = this.peekMax();
        const tmp = [];  // tmp stack
        while (this.top() !== max) {
            tmp.push(this.pop());
        }
        this.pop(); // guaranteee the max value in both stack and maxStack get popped

        // add remaining elements back to stack and maxStack
        while(tmp.length > 0) {
            this.push(tmp.pop() as number);
        }

        return max;
    }
}

interface Element {
    val: number;
    max: number
}
export class MaxStack2 {
    stack: Element[];
    constructor() {
        this.stack = [];
    }

    push(x: number): void {
        !this.stack.length ? this.stack.push({ val: x, max: x }) : this.stack.push({ val: x, max: Math.max(x, this.peekMax()) });
    }

    pop(): number {
        return this.stack.length > 0 ? (this.stack.pop() as Element).val : Number.MIN_SAFE_INTEGER;
    }

    top(): number {
        return this.stack[this.stack.length - 1].val;
    }

    peekMax(): number {
        return this.stack[this.stack.length - 1].max;
    }

    popMax(): number {
        const max = this.peekMax();
        const tmp = [];  // tmp stack
        while (this.top() !== max) {
            tmp.push(this.pop());
        }
        this.pop(); // guaranteee the max value in both stack and maxStack get popped

        // add remaining elements back to stack and maxStack
        while(tmp.length > 0) {
            this.push(tmp.pop() as number);
        }

        return max;
    }
}
