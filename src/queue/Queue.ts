/***************************************************************************
 * Problem No. :
 * Problem Name: Implement a Queeu class given an array as the base structure
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-queue, tag-data-structure
 ***************************************************************************/

/**
 * Implementation Reference:
 *  https://keestalkstech.com/2020/12/a-stack-data-structure-in-typescript/
 */

export class Queue<T> {
    private items: T[] = [];

    constructor(items: T[]) {
        this.items = items;
    }

    enqueue = (...items: T[]) => this.items.push(...items);

    dequeue = () => this.items.shift();

    peek = () => (!this.length ? undefined : this.items[0]);

    isEmpty = () => !this.length;

    get length() {
        return this.items.length;
    }
}
