/**
 * Implementation Reference: 
 *  https://keestalkstech.com/2020/12/a-stack-data-structure-in-typescript/
 */

export class Queue<T> {
    private items: T[];

    constructor(items: T[]) {
        this.items = items;
    }

    enqueue = (...items: T[]) => this.items.push(...items);

    dequeue = () => this.items.shift();

    peek = () => !this.length ? undefined : this.items[0];

    get length() {
        return this.items.length;
    }
}