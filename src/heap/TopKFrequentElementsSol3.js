/***************************************************************************
 * Problem No. : 347
 * Problem Name: Top K Frequent Elements
 * Date        : July 17, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap
 ***************************************************************************/

/**
 * Solution 3: Use the supported MinPriorityQueue ds for js
 * 
 * 思路:
 *  使用一个小根堆,在构建小根堆的过程中,一旦小根堆的大小超过了k,就把小根堆的根提出来.
 *  即,我们保持小根堆的大小始终在k, 我们把(n-k)个的最小频率的数提出小根堆,剩下的自然就是k个最大频率的数了.
 * 
 */ 
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (let el of nums) {
        map.set(el, map.get(el) + 1 || 1);
    }
    const res = [];

    // create the min heap and maintain its size to be k
    const minHeap = new MinPriorityQueue(item => item.freq);
    for (let [key, freq] of map) {
        minHeap.enqueue(key, freq);
        if (minHeap.size() > k) {
            minHeap.dequeue(); // drop the smallest one
        }
    }

    // form the answer    
    while (minHeap.size() > 0) {
        res.push(minHeap.dequeue().element);
    }
    return res;
};

/**
 * The time efficiency below if better than the topKFrequent() above.
 * So when using minHeap for this problem we can aim this solution first.
 */
var topKFrequentMinHeapCode1 = function(nums, k) {
    const res = [];
    const map = new Map();
    for (const n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    const minHeap = new MinPriorityQueue(item => item.freq);
    for (let [key, freq] of map) {
        if (minHeap.size() < k) {
            minHeap.enqueue(key, freq);
        } else if (freq > minHeap.front().priority) {
            minHeap.dequeue();
            minHeap.enqueue(key, freq);
        }
    }

    while (minHeap.size() > 0) {
        res.push(minHeap.dequeue().element);
    }

    return res;
};



/**
 * Solution 3 variation: Use the hand-implemented min heap
 */
const heap = [[undefined, undefined]];

var topKFrequentHandImplMinHeap = function(nums, k) {
    const map = new Map();
    for (let el of nums) {
        map.set(el, map.get(el) + 1 || 1);
    }
    const kvArray = [...map.entries()];

    const res = [];

    // create the min heap and maintain its size to be k
    for (let element of kvArray) {
        enqueue(element);
        if (size() > k) {
            dequeue(); // drop the smallest one
        }
    }

    // form the answer    
    while (size() > 0) {
        res.push(dequeue());
    }
    return res;
};

const heapify = (heap, index) => {
    const n = heap.length;
    let childIndex;

    for (; index * 2 < n; index = childIndex) {
        childIndex = index * 2;

        // choose the smaller one (smaller frequency)
        if (childIndex !== n-1 && heap[childIndex][1] > heap[childIndex+1][1]) {
            childIndex++;
        }

        if (heap[index][1] > heap[childIndex][1]) {
            [heap[index], heap[childIndex]] = [heap[childIndex], heap[index]];
        } else {
            break;
        }
    }
}

const enqueue = (el) => { // enqueue an element
    heap.push(el);
    const n = heap.length;
    for (let i = Math.floor(n/2); i >= 1; i--) {
        heapify(heap, i);
    }
}

const dequeue = () => {
    if (size() === 0) {
        throw new Error('The heap is empty!');
    }

    const res = heap[1][0]; // we want to get the number only
    const last = heap.pop();
    if (size() > 0) {
        heap[1] = last;
        heapify(heap, 1);
    }

    return res;
}

const size = () => {
    return heap.length - 1; // b/c the first [undefined, undefined] element should not count
}