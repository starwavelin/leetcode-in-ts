/***************************************************************************
 * Problem No. : 232
 * Problem Name: Implement Queue using Stacks
 * Date        : June 19, 2022
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-queue
 ***************************************************************************/

class MyQueue {
    in: number[];
    out: number[];

    constructor() {
        this.in = [];
        this.out = [];
    }

    push(x: number): void {
        this.in.push(x);
    }

    pop(): number {
        this.inToOut();
        return this.out.pop() as number;
    }

    peek(): number {
        this.inToOut();
        return this.out[this.out.length - 1];
    }

    empty(): boolean {
        return !this.in.length && !this.out.length;
    }

    inToOut(): void {
        if (!this.out.length) {
            while (this.in.length > 0) {
                this.out.push(this.in.pop() as number);
            }
        }
    }
}
