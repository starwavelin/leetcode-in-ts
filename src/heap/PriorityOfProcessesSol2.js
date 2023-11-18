/***************************************************************************
 * Problem No. : 20002
 * Problem Name: Priority of Processes
 * Date        : November 18, 2023
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-heap, tag-amazon
 ****************************************************************************/

/**
 * This solution is based on Solution 1
 * Use maxheap + map (or an obj storing val and idx)
 * But assume the external priority-queue library is not available
 * @param {number[]} priority 
 * @return {number[]}
 */
const process = (priority) => {
    // Form the {val, idx} object array from priority array
    const objs = [];
    for (let i = 0; i < priority.length; i++) {
        objs.push({ val: priority[i], idx: i });
    }

    /**
     * Form a maxheap, the comparator is:
     * the larger value should be the top; 
     * if two values are the same, the smaller idx element should be the top
     * 
     * based on this, build the maxheap
     */
    const heap = buildHeap(objs); // a maxHeap

    let res = []; // stores non-identical obj first, then the final result

    // Taking elements out of heap for comparison
    while (!isEmpty(heap)) {
        let tmp = dequeue(heap);
        if (!isEmpty(heap) && tmp.val === front(heap).val) { // need to double check maxHeap is not empty because after taking out a tmp, the heap could be empty
            // discard tmp
            // dequeue the current peek and manipulate it and then enqueue it
            let el = dequeue(heap);
            el.val = Math.floor(el.val / 2);
            enqueue(heap, el);
            if (el.val === 0) { // when we meet an element whose val becomes 0, can form result now and break the loop
                while (!isEmpty(heap)) {
                    res.push(dequeue(heap));
                }
                break;
            }
        } else {
            res.push(tmp);
        }
    }

    return res.sort((a, b) => a.idx - b.idx).map(el => el.val);
}

/**
 * Hand build a maxHeap
 */
const heapify = (array, index) => {
    const n = array.length;
    let childIndex;

    for (; index * 2 < n; index = childIndex) {
        childIndex = 2 * index;

        // 1. choose the larger value one from the children
        // 2. and when two have the same value, choose the smaller index one from the children
        if (childIndex !== n-1) {
            if ( (array[childIndex].val < array[childIndex+1].val) || (array[childIndex].val == array[childIndex+1].val && array[childIndex].idx > array[childIndex+1].idx) )
                childIndex++;
        }

        if (array[index].val < array[childIndex].val || (array[index].val == array[childIndex].val && array[index].idx > array[childIndex].idx) ) {
            [array[index], array[childIndex]] = [array[childIndex], array[index]];
        } else {
            break;
        }
    }
}

const buildHeap = (array) => {
    const heap = [undefined, ...array]; // build the new heap array with the first element at Index 1
    const n = heap.length;
    for (let i = Math.floor(n/2); i >= 1; i--) {
        heapify(heap, i);
    }

    return heap;
}

const enqueue = (heap, el) => {
    heap.push(el);
    const n = heap.length;
    for (let i = Math.floor(n/2); i >= 1; i--) {
        heapify(heap, i);
    }
}

const dequeue = (heap) => {
    if (heap.length === 1) {
        throw new Error('The heap is empty!');
    }

    const max = heap[1];

    // maintain the heap
    const last = heap.pop();
    if (heap.length > 1) {
        heap[1] = last;
        heapify(heap, 1);
    }

    return max;
}

const front = (heap) => {
    if (heap.length === 1) {
        throw new Error('The heap is empty!');
    }
    return heap[1];
}

const isEmpty = (heap) => {
    return heap.length === 1;
}


/**
 * Tests
 */
const pri1 = [6, 6, 6, 1, 2, 2];
console.log(process(pri1)); // expect [3, 6, 0]

const pri2 = [4, 4, 2, 1];
console.log(process(pri2)); // expect [0]

const pri3 = [2, 1, 5, 10, 10, 1];
console.log(process(pri3)); // expect [0, 1]

const pri4 = [4, 4, 2, 1, 1, 1];
console.log(process(pri4)); // expect [0, 1, 1]

const pri5 = [1, 3, 5, 10, 10];
console.log(process(pri5)); // expect [1, 3, 2]

const pri6 = [1, 3, 5, 10, 10, 10, 10];
console.log(process(pri6)); // expect [1, 3, 2, 5]

const pri7 = [6, 3, 1, 1];
console.log(process(pri7)); // expect [6, 3, 0]

const pri8 = [1, 3, 5, 10, 10, 10, 10, 20];
console.log(process(pri8)); // expect [1, 3, 2, 5, 20]