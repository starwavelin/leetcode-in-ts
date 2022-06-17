/**
 * Implementation Reference: 
 *  https://keestalkstech.com/2020/12/a-stack-data-structure-in-typescript/
 */

export class Stack<T> {
    private items: T[] = [];

    constructor(items: T[] = []) {
        this.items = items;
    }

    push = (...items: T[]) => this.items.push(...items);

    pop = () => this.items.pop();

    peek = () => !this.length ? undefined : this.items[this.length - 1];

    isEmpty = () => !this.length;

    get length() {
        return this.items.length;
    }
}