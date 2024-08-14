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
 *  维护一个size为k的小根堆,一旦小根堆的大小要超过k,比较新来的key-val元素的频率,如果频率更大,就把小根堆的根提出来,把新来的元素放进去.
 *  当Map中的所有元素都走完以后,把小根堆的元素的key全都倒出来,即为所求.
 *
 */
var topKFrequentMinHeapCode1 = function (nums, k) {
  const res = [];
  const map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  const minHeap = new PriorityQueue({ compare: (a, b) => a.freq - b.freq });
  for (let [key, freq] of map) {
    if (minHeap.size() < k) {
      minHeap.enqueue({ key, freq });
    } else if (freq > minHeap.front().freq) {
      minHeap.dequeue();
      minHeap.enqueue({ key, freq });
    }
  }

  while (!minHeap.isEmpty()) {
    res.push(minHeap.dequeue().key);
  }

  return res;
};

/**
 * Solution 3 variation: Use the hand-implemented min heap
 */
const heap = [[undefined, undefined]];

var topKFrequentHandImplMinHeap = function (nums, k) {
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
    if (childIndex !== n - 1 && heap[childIndex][1] > heap[childIndex + 1][1]) {
      childIndex++;
    }

    if (heap[index][1] > heap[childIndex][1]) {
      [heap[index], heap[childIndex]] = [heap[childIndex], heap[index]];
    } else {
      break;
    }
  }
};

const enqueue = (el) => {
  // enqueue an element
  heap.push(el);
  const n = heap.length;
  for (let i = Math.floor(n / 2); i >= 1; i--) {
    heapify(heap, i);
  }
};

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
};

const size = () => {
  return heap.length - 1; // b/c the first [undefined, undefined] element should not count
};
