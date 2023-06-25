/***************************************************************************
 * Problem No. : 
 * Problem Name: Implement a max heap given an initial array
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * The JS implementation of a max heap should be similar to 
 * what I have done in the min heap implementation, in the MinHeap.js file
 */

const maxHeapify = (array, index) => {
    const n = array.length;
    let childIndex;

    for (; index * 2 < n; index = childIndex) {
        childIndex = 2 * index;

        // choose the larger one from the children
        if (childIndex !== n-1 && array[childIndex] < array[childIndex+1]) {
            childIndex++;
        }

        if (array[index] < array[childIndex]) {
            [array[index], array[childIndex]] = [array[childIndex], array[index]];
        } else {
            break;
        }
    }
}

const buildHeap = (array) => {
    const heap = [undefined, ...array]; // build the new heap array with the first element in Index 1
    const n = heap.length;
    for (let i = Math.floor(n/2); i >= 1; i--) {
        maxHeapify(heap, i);
    }

    return heap;
}

const remove = (heap) => {
    if (heap.length === 1) {
        throw new Error('The heap is empty!');
    }

    const max = heap[1];

    // maintain the heap
    const last = heap.pop();
    if (heap.length > 1) {
        heap[1] = last;
        maxHeapify(heap, 1);
    }

    return max;
}


/**
 * Testing
 */
const origArray1 = [8, 17, 5, 39, 24, 18, 11];
const heap1 = buildHeap(origArray1);
console.log(heap1);
console.log(remove(heap1)); // expect 39
console.log(heap1);
console.log(remove(heap1)); // expect 24
console.log(heap1);
