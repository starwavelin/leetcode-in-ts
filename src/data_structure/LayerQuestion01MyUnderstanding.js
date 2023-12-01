/***************************************************************************
 * Problem No. :
 * Problem Name: Layer Question (My Understanding) 1
 * Date        : November 30, 2023
 * Author      : @codingbro
 *
 * meta        : tag-data-structure
 ****************************************************************************/

/**
 * Problem Description:
 *  On a canvas there are a few layers. Each layer has an ID (like 1, 2, 3...) and a few properties.
 * Each property is a key-value pair.
 * For example:
 *  Layer [1, {color: 'green'}]
 *  Layer [2, {color: 'blue', shape: 'rectangle'}]
 * 
 * Let's implement a class with init, apply and undo functions
 * 
 * Clarifying Questions:
 *  1. For the apply function, can it change two properties during one apply?
 *      ie. Layer 2 above is changed into Layer [2, {color: 'orange', shape: 'triangle'}] ?
 *      I, assume Yes for now.
 * 
    2. For the apply function, can it drop one prop while add a prop during one apply action?
        ie. Layer [1, {color: 'green'}] --> [1, {shape: 'circle'}]
        I assume Yes for now.
*/

/**
 * Intuitively I can use a map to store [layerId, props] and then convert the props to be a stack storing the
 * history of the prop changes under this layerId. I also use another stack to store the global history changes 
 * for the undo function.
 * But, this method is too space consuming, for the map storage it will take O(n^2) assuming n layers and each 
 * layer has n records of history.
 * 
 * An optimization would be:
 *  Use map for recording the latest state (props) of any given layer.
 *  Use a history stack to store the changes resulted from each apply function.
 */


class Canvas {

    constructor() {
        // Data structurs used
        this.map = new Map(); // key - layerId, val - properties
        this.histStack = []; // stack to store history of changes resulted from apply()
            // each record in the histStack is [id, oldProps, newProps]
    }

    /**
     * 
     * @param {*} change is an array [id, props] ie. [1, {color: 'green'}]
     */
    apply = (change) => {
        const id = change[0];
        const props = change[1];
        if (!this.map.has(id)) { // new record
            this.map.set(id, props);
            this.histStack.push([id, null, props]); // oldProps is null
        } else { // update existing record
            const oldProps = this.map.get(id);
            this.histStack.push([id, oldProps, props]);
            this.map.set(id, props);
        }
    }
    
    undo = () => {
        if (!this.histStack.length) {
            throw new Error('New history records, cannot undo!');
        }
        const top = this.histStack[this.histStack.length - 1];
        const id = top[0], oldProps = top[1];
        if (!oldProps) {
            this.map.delete(id);
        } else {
            this.map.set(id, oldProps);
        }
        this.histStack.pop();
    }
    
    print = () => {
        for (let [key, val] of this.map.entries()) {
            console.log(`${key}, ${JSON.stringify(val, null, 2)}`);
        }
    }
}

/**
 * Tests * 
 */

const c1 = new Canvas();
c1.apply([1, {color: 'green'}]);
c1.apply([2, {color: 'blue', shape: 'rectangle'}]);
// c1.print();
c1.apply([1, {color: 'pink'}]);
c1.apply([2, {color: 'orange', shape: 'triangle'}]);
// c1.print();
c1.undo();
// c1.print();
c1.undo();
// c1.print();
c1.undo();
c1.print();