/***************************************************************************
 * Problem No. : 20005
 * Problem Name: Cancel Unequal Integers
 * Date        : November 20, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap, tag-amazon
 ****************************************************************************/

/**
 * The same approach to Solution 2 of this problem, but use a hand-implemented
 * maxheap based on number's frequency and start the deletion process
 * 
 * @param {number[]} nums 
 * @returns 
 */
const countRemainingItems = (nums) => {
    const map = new Map(); // key - num, val - freq
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Build a maxheap based on number's frequency
    const heap = buildHeap(map);

    // start deletion
    while (size(heap) > 1) {
        let top1 = dequeue(heap);
        let top2 = dequeue(heap);

        // Minus both items freq by 1
        top1[1]--;
        top2[1]--;

        // If the freq is still > 0, enqueue it
        if (top1[1] > 0) {
            enqueue(heap, top1);
        }
        if (top2[1] > 0) {
            enqueue(heap, top2);
        }
    }

    return size(heap) == 1 ? front(heap)[1] : 0;
}

const heapify = (arr, index) => {
    const n = arr.length;
    let childIndex;

    for (; index * 2 < n; index = childIndex) {
        childIndex = index * 2;

        // maxheap, so choose the child with a larger freq
        if (childIndex != n-1 && arr[childIndex][1] < arr[childIndex+1][1]) {
            childIndex = childIndex+1;
        }

        // swap
        if (arr[index][1] < arr[childIndex][1]) {
            [arr[index], arr[childIndex]] = [arr[childIndex], arr[index]];
        } else {
            break;
        }
    }
}

/**
 * @param {*} arr 
 * @returns the formed heap 
 */
const buildHeap = (arr) => {
    const heap = [null, ...arr]; // heap element starts from index 1 of the array
    const n = heap.length;
    for (let i = Math.floor(n/2); i > 0; i--) {
        heapify(heap, i);
    }
    return heap;
}

const enqueue = (heap, item) => {
    heap.push(item);
    const n = heap.length;
    for (let i = Math.floor(n/2); i > 0; i--) {
        heapify(heap, i);
    }
}

const dequeue = (heap) => {
    const top = heap[1];

    // maintain the heap
    const last = heap.pop();
    
    if (heap.length > 1) {
        heap[1] = last;
        heapify(heap, 1);
    }
    return top;
}

const front = (heap) => {
    return heap[1];
}

const isEmpty = (heap) => {
    return heap.length == 1;
}

const size = (heap) => {
    return heap.length - 1;
}



/**
 * Tests
 */
const nums1 = [3,3,1,1,2];
console.log(countRemainingItems(nums1)); // expect 1

const nums2 = [1,2,5,6];
console.log(countRemainingItems(nums2)); // expect 0

const nums3 = [3,7,8,3,4,4,4];
console.log(countRemainingItems(nums3)); // expect 1

const nums4 = [9,7,8,9,9,9,9];
console.log(countRemainingItems(nums4)); // expect 3

const nums5 = [1,1,2,2,3,3];
console.log(countRemainingItems(nums5)); // expect 0

const nums6 = [3, 3, 4, 4, 4, 4, 2, 2];
console.log(countRemainingItems(nums6)); // expect 0

const nums7 = [3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 5, 5, 6];
console.log(countRemainingItems(nums7)); // expect 0
