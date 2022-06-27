class MyStackSol1 {
    Q: number[];

    constructor() {
        this.Q = [];
    }

    push(x: number): void {
        this.Q.push(x);
        const n = this.Q.length;
        for (let i = 0; i < n-1; i++) {
            this.Q.push(this.Q.shift() as number);
        }
    }

    pop(): number {
        return this.Q.shift() as number;
    }

    top(): number {
        return this.Q[0];
    }

    empty(): boolean {
        return !this.Q.length;
    }
}


class MyStackSol2 {
    dataQ: number[]
    helpQ: number[]
    topEl: number = Number.MIN_SAFE_INTEGER

    constructor() {
        this.dataQ = []
        this.helpQ = []
    }

    push(x: number): void {
        this.dataQ.push(x)
        this.topEl = x
    }

    pop(): number {
        while (this.dataQ.length > 1) {
            /* we need to update topElement in the pop() method!!!*/
            this.topEl = this.dataQ[0]
            this.helpQ.push(this.dataQ.shift() as number)
        }
        const tmp = this.dataQ
        this.dataQ = this.helpQ
        this.helpQ = tmp
        return this.helpQ.shift() as number
    }

    top(): number {
        return this.topEl
    }

    empty(): boolean {
        return !this.dataQ.length
    }
}
