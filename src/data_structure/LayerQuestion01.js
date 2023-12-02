/***************************************************************************
 * Problem No. :
 * Problem Name: Layer Question 1
 * Date        : December 1, 2023
 * Author      : @codingbro
 *
 * meta        : tag-data-structure, tag-stack, tag-hash
 ****************************************************************************/

/**
 * Problem Description:
 *  On a canvas there are a few layers. 
 *  Each layer has an ID (like 1, 2, 3...) and a few properties.
 *       Each property is a key-value pair.
 * For example:
 *  Layer [1, {color: 'green', shape: 'triangle'}]
 *  Layer [2, {color: 'blue', shape: 'rectangle'}]
 * 
 * Let's implement a class with init, getLayer, apply and undo functions
 * 
 * Clarifying Questions:
 *  1. For apply(), we can only change one property of a layer at a time
 *  2. We don't need to worry about the removal of an existing property or setting an existing propety to null
 *  3. For the scope of this problem, we don't need to worry about the deletion of a layer, meaning 
 *      if a layer is created with some properties, such layer will never be deleted. 
*/

/**
 * Algorithm:
 *  Use map for recording the latest state (props) of any given layer.
 *  Use a history stack to store the changes resulted from each apply function.
 */


class Layer {
    constructor(id, props) {
        this.id = id;
        this.props = props;
    }
}


class Canvas {

    /**
     * Default Layers will be provided from the constructor
     * @param {Layer[]} layers 
     */
    constructor(layers) {
        // use a map to store the latest state of layers
        this.layerMap = new Map();  // key - layerId, val - layer 

        // use a stack to store the applied history
        this.appliedHist = [];  // a record in the stack will be [id, prop, oldVal, newVal]

        for (let layer of layers) {
            this.layerMap.set(layer.id, layer);

            for (let key of Object.keys(layer.props)) {
                this.appliedHist.push([layer.id, key, null, layer.props[key]]);
            }
        }
    }

    /**
     * 
     * @param {*} id 
     * @return {Layer}
     */
    getLayer = (id) => {
        return this.layerMap.get(id);
    }

    /**
     * This function is used to add or change a property of a given layer
     * And we do not use this function to create a new layer
     */
    apply = (id, prop, val) => {
        // insert a record to applied hist
        this.appliedHist.push([id, prop, this.layerMap.get(id).props[prop], val]);

        // update layer map
        this.layerMap.get(id).props[prop] = val;
    }
    
    undo = () => {
        if (!this.appliedHist.length) {
            throw new Error('No record for undoing!');
        }

        const top = this.appliedHist[this.appliedHist.length - 1];
        const id = top[0], prop = top[1], oldVal = top[2];
        this.layerMap.get(id).props[prop] = oldVal;

        this.appliedHist.pop(); // drop the top record from the appliedHist b/c undo is completed
    }
    
    /**
     * This method prints out the data of a given layer
     * @param {number} id 
     */
    print = (id) => {
        console.log(JSON.stringify(this.getLayer(id), null, 2));
        console.log('\n');
    }
}

/**
 * Tests * 
 */

const layers = [
    { id: 1, props: { color: 'green', shape: 'triangle' } },
    { id: 2, props: { color: 'blue', shape: 'rectangle' } }
]

const c = new Canvas(layers);
c.print(1); // expect color: green, shape: triangle
c.print(2); // expect color: blue, shape: rectangle

c.apply(1, 'color', 'pink');
c.apply(1, 'shape', 'circle');

c.print(1); // expect color: pink, shape: circle

c.undo();
c.print(1); // expect color: pink, shape: triangle

c.undo();
c.print(1); // expect color: green, shape: triangle

c.undo();
c.print(1); // No change. Expect color: green, shape: triangle
c.print(2); // expect color: blue, shape: null