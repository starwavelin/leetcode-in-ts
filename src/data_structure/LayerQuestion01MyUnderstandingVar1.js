/***************************************************************************
 * Problem No. :
 * Problem Name: Layer Question 1 (My Understanding) Var 1
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
 *  1. Let's say unlike the regular Q1, each apply can change just one property at a time, what shall I handle
 *  this problem in a more efficient way?
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
            // each record in the histStack is [id, prop, oldVal, newVal]
    }

    /**
     * 
     * @param {*} change is an array [id, props] ie. [1, {color: 'green'}]
     */
    apply = (change) => {
        const id = change[0];
        const props = change[1];

        if (!this.map.has(id)) { // new layer record
            this.map.set(id, props);
            const propKeys = Object.keys(props);
            for (let key of propKeys) {
                this.histStack.push([id, key, null, props[key]]); // oldVal is null
            }
        } else { // update existing record
            const propKeys = Object.keys(props);
            for (let key of propKeys) {
                if (this.map.get(id)[key] != props[key]) {
                    this.histStack.push([id, key, this.map.get(id)[key], props[key]]); // oldVal is this.map.get(id)[key]
                    this.map.get(id)[key] = props[key];
                }
            }
        }
    }
    
    undo = () => {
        if (!this.histStack.length) {
            throw new Error('New history records, cannot undo!');
        }
        const top = this.histStack[this.histStack.length - 1];
        const id = top[0], propName = top[1], oldVal = top[2];  // [id, prop, oldVal, newVal]
        if (!oldVal) {
            delete this.map.get(id)[propName];
            if (!this.map.get(id) || !Object.keys(this.map.get(id)).length) {
                this.map.delete(id);
            }
        } else {
            this.map.get(id)[propName] = oldVal;
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
c1.apply([2, {color: 'blue', shape: 'rectangle'}]); // If only one prop can be updated, then this statement becomes illegitimate
// c1.print();
c1.apply([1, {color: 'pink'}]);
    // If only one prop can be updated, then the legitimate format should be c1.apply([2, {shape: 'triangle'}]);
    // c1.apply([2, {color: 'blue', shape: 'triangle'}]);  
    c1.apply([2, {shape: 'triangle'}]);
// c1.apply([1, {shape: 'circle'}]); // if it doesn't mention the existing prop, it means adding a new prop
// c1.print();
c1.undo();
// c1.print();
c1.undo();
// c1.print();
c1.undo();
c1.print();
c1.undo();
c1.print();