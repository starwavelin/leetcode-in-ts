/***************************************************************************
 * Problem No. :
 * Problem Name: Layer Question 2
 * Date        : December 2, 2023
 * Author      : @codingbro
 *
 * meta        : tag-data-structure, tag-stack, tag-map
 ****************************************************************************/

/**
 * Problem Description:
 *  Based on Problem 1, we want to tweak the apply() a bit,
 * and then implement a new function called commit(), and make the undo() function undo a commmit of changes 
 * 
 * 
 * Clarifying Questions:
 *  1. apply() function doesn't need to update the layer each time, but instead, the 
 *      commit() function will update the layers being impacted for the apply() functions it includes.
 *  2. undo() function in this time will undo a previous commit(), meaning all the apply actions being 
 *      included in the commit() will be reverted.
 * 
*/

/**
 * Algorithm:
 *  Use a map for recording the latest state (props) of any given layer. -- Same as Problem 1
 *  Use another map to record the integrated action for a set of apply(), key - layerId-prop, val - [oldVal, newVal]
 *  Use a stack to hold the list of commits; one commit is a list of actions like [ {key: 1-color: oldVal: green, newVal: orange }, ... ]
 */


class Layer {
    constructor(id, props) {
        this.id = id;
        this.props = props;
    }
}


class Canvas {

    /**
     * @param {Layer[]} layers 
     */
    constructor(layers) {
        this.layerMap = new Map();  // key - layerId, val - layer 

        this.actionMap = new Map(); // key - layerId-prop, val - [oldVal, newVal]
        
        this.commitHist = []; // stack

        for (let layer of layers) {
            this.layerMap.set(layer.id, layer);
        }
    }

    /**
     * @param {number} id 
     * @return {Layer}
     */
    getLayer = (id) => {
        return this.layerMap.get(id);
    }

    /**
     * This function now will not change the layerMap,
     * but will update the actionMap each time it gets called
     */
    apply = (id, prop, val) => {
        const oldVal = this.layerMap.get(id).props[prop];
        this.actionMap.set(`${id}-${prop}`, [oldVal, val]);
    }

    /**
     * 1. Update the layer map's prop with actionMap's prop's newVal
     * 2. Set a commit array
     *      Put actionMap's record into commit array and then delete it from the actionMap
     * 3. Insert the commit array into commitHist
     */
    commit = () => {
        const commit = [];
        for (let [key, val] of this.actionMap.entries()) {
            const idPropArr = key.split('-');
            const id = Number(idPropArr[0]), prop = idPropArr[1];
            this.layerMap.get(id).props[prop] = val[1]; // use newVal

            commit.push({ key: key, oldVal: val[0], newVal: val[1] });
            this.actionMap.delete(key);
        }
        this.commitHist.push(commit);
    }
    
    /**
     * 1. Get the top commit record from the commit history
     * 2. Loop the commit record, for each action, restore id-prop using the oldVal
     * 3. Drop the top commit record
     */
    undo = () => {
        const topCommit = this.commitHist.pop();

        for (const action of topCommit) {
            const idPropArr = action.key.split('-');
            const id = Number(idPropArr[0]), prop = idPropArr[1];
            const origVal = action.oldVal;

            this.layerMap.get(id).props[prop] = origVal;
        }
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

c.apply(1, 'color', 'pink');
c.apply(2, 'shape', 'triangle');
c.apply(1, 'color', 'orange');
c.commit();

c.print(1); // 1 color: orange, shape: triangle
c.print(2); // 2 color: blue, shape: triangle

c.apply(1, 'shape', 'circle');
c.apply(1, 'color', 'yellow');
c.apply(1, 'shape', 'square');
c.apply(2, 'color', 'black');
c.commit();

c.print(1); // 1 color: yellow, shape: square
c.print(2); // 2 color: black, shape: triangle

c.undo();
c.print(1); // 1 color: orange, shape: triangle
c.print(2); // 2 color: blue, shape: triangle

c.undo();
c.print(1); // 1 color: green, shape: triangle
c.print(2); // 2 color: blue, shape: rectangle

c.apply(1, 'color', 'white');
c.apply(2, 'color', 'white');
c.commit();

c.print(1); // 1 color: white, shape: triangle
c.print(2); // 2 color: white, shape: rectangle