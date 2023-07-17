/***************************************************************************
 * Problem No. : 
 * Problem Name: Implement a min heap given an initial array
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * Heapify过程的本质就是父节点和子节点在有必要的情况下,进行交换
 * @param {*} array 
 * @param {*} index 
 */
function minHeapify(array, index) {
    const n = array.length;
    let childIndex;

    for (; index * 2 < n; index = childIndex) {
        childIndex = index * 2;

        // Choose the smaller one of the two (left, right) children
        if (childIndex !== n-1 && array[childIndex] > array[childIndex+1]) {
            childIndex++;
        }

        if (array[index] > array[childIndex]) {
            [array[index], array[childIndex]] = [array[childIndex], array[index]];
        } else {
            break;
        }
    }
}

/**
 * The time complexity of buildHeap is O(n), 
 *  reference: https://github.com/GingerBear/IS-Job-Hunting/issues/10
 * @param {*} array 
 * @returns A heap stored in an array
 */
function buildHeap(array) {
    const heap = [undefined, ...array];
    const n = heap.length;
    for (let i = Math.floor(n / 2); i >= 1; i--) {
        minHeapify(heap, i);
    }
    return heap;
}

/**
 * Can also call this function dequeue, 
 *  but unlike the dequeue or remove function defined in
 * the MinHeapNoGivenArray version, 
 *  this function takes the [created] heap (array) as the parameter
 */
function remove(heap) {
    if (heap.length === 1) { 
        /* when the heap array has only one element, 
            which is the beginning undefined one, we don't remove it */
        throw new Error('The heap is empty, cannot remove anything from it');
    }

    const min = heap[1];    

    // Maintain the heap
    const last = heap.pop();
    if (heap.length > 1) {
        heap[1] = last;
        minHeapify(heap, 1);
    }

    return min;
}

const peak = (heap) => {
    if (heap.length === 1) {
        throw new Error('The heap is empty!');
    }
    return heap[1];
}


/**
 * Testing
 */
const origArray1 = [11, 12, 13, 10, 9, 5, 1, 15];
let heap1 = buildHeap(origArray1);
console.log(heap1);  // expect [ undefined, 1, 9, 5, 10, 12, 11, 13, 15 ]
console.log(remove(heap1)); // expect 1
console.log(heap1);
console.log(remove(heap1)); // expect 5
console.log(heap1);