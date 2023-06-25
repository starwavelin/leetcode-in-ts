/***************************************************************************
 * Problem No. : 
 * Problem Name: Implement a min heap, assuming data come in as a stream
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * This MinHeap construction process is based on a given condition that
 * there is NO element array given at the beginning, the integer elements
 * are given from a data stream one by one, until the heap reaches size n.
 * 
 * That said, we need to use an `add(el)` function to insert a new element into 
 * the heap one by one, and maintain the min heap's properties carefully.
 */

const heap = [undefined]; // index 0 is reserved for undefined, for easy calculation purpose

function heapify(array, index) {
    const n = array.length;
    let childIndex;

    for (; index * 2 < n; index = childIndex) {
        childIndex = index * 2;

        // pick the smaller one
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

function add(el) {
    heap.push(el);
    const n = heap.length;
    for (let i = Math.floor(n/2); i >= 1; i--) {
        heapify(heap, i);
    }
}

function remove() {
    if (heap.length === 1) {
        throw new Error('No elements to remove');
    }

    const res = heap[1];
    const el = heap.pop();
    if (heap.length > 1) {
        heap[1] = el;
        heapify(heap, 1);
    }

    return res;
}


/**
 * Testing
 */


/**
 * The given data stream is 11, 12, 13, 10, 9, 5
 * 
 * 与 MinHeap.js 比较就发现,这个数据流输入就是要call add() function 好几次才能构建出完整的heap
 * 而 MinHeap.js 中的 buildHeap(array),由于是有一个给定的array,只要call一次就建好heap了
 */
add(11);
add(12);
add(13);
add(10);
add(9);
add(5);

console.log(heap);  // expect [ undefined, 5, 10, 9, 12, 11, 13 ]
console.log(remove(heap)); // expect 5
console.log(heap);
console.log(remove(heap)); // expect 9
console.log(heap);