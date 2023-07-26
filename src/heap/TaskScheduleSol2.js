/***************************************************************************
 * Problem No. : 621
 * Problem Name: Task Schedule
 * Date        : July 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-heap, tag-array-map, tag-math
 ***************************************************************************/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var leastInterval = function(tasks, n) {
    const maxHeap = new MaxPriorityQueue({ priority: x=>x });
    const freq = new Array(26).fill(0);
    for (const el of tasks) {
        freq[el.charCodeAt(0) - 65]++; // 65 is ASCII for A 
    }
    for (const f of freq) {
        if (f > 0) {
            maxHeap.enqueue(f);
        }
    }

    let res = 0;
    const cycle = n + 1;
    while (!maxHeap.isEmpty()) {
        let count = 0;
        const tmp = []; // Use a help array to store the processed task
        
        for (let i = 0; i < cycle; i++) {
            if (!maxHeap.isEmpty()) {
                tmp.push(maxHeap.dequeue().element);
                count++;
            }
        }
        
        for (const d of tmp) {
            d--;
            if (d > 0) {
                maxHeap.enqueue(d);
            }
        }
        
        res += maxHeap.isEmpty() ? count : cycle;
    }
    
    return res;
}

// TEST
console.log(leastInterval(['A','A','A','B','B','B'],2)); // should return 8
console.log(leastInterval(['A','A','A','B','B','B','B'],2)); // should return 10
console.log(leastInterval(['A','A','A','B','B','C','C'],1)); // should return 7