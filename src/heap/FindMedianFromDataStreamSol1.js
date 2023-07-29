/***************************************************************************
 * Problem No. : 295
 * Problem Name: Find Median from Data Stream
 * Date        : July 29, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sort, tag-array
 ***************************************************************************/

var MedianFinder = function() {
    this.nums = []; // store the numbers coming from addNum()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // if (!this.nums.length) {
    //     this.nums.push(num);
    //     return;
    // }

    this.nums.push(num);
    const n = this.nums.length;
    for (let i = 1; i < n; i++) {
        const tmp = this.nums[i];
        let j = i-1;
        while (j>=0 && this.nums[j]>tmp) {
            this.nums[j+1] = this.nums[j--];
        }
        if (j+1 !== i) {
            this.nums[j+1] = tmp;
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const n = this.nums.length;
    if (n % 2 === 0) {
        return 0.5 * (this.nums[(n-2)/2] + this.nums[n/2]);
    } else {
        return this.nums[(n-1)/2];
    }
};

/**
 * Tests
 * 
 * Input:
 *  ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum",
 *      "findMedian","addNum","findMedian","addNum","findMedian",
 *      "addNum","findMedian","addNum","findMedian","addNum",
 *      "findMedian","addNum","findMedian","addNum","findMedian",
 *      "addNum","findMedian"]
 *  [[],[6],[],[10],[],[2],[],[6],[],[5],[],[0],[],[6],[],[3],[],[1],[],[0],[],[0],[]]
 * 
 *  Expected Output:
 * [null,null,6.00000,null,8.00000,null,6.00000,null,6.00000,
 *  null,6.00000,null,5.50000,null,6.00000,null,5.50000,
 *  null,5.00000,null,4.00000,null,3.00000]
 */

const f = new MedianFinder();
f.addNum(6);
console.log(f.findMedian()) // 6.0
f.addNum(10);
console.log(f.findMedian()) // 8.0
f.addNum(2);
console.log(f.findMedian()) // 6.0
f.addNum(6);
console.log(f.findMedian()) // 6.0
f.addNum(5);
console.log(f.findMedian()) // 6.0
f.addNum(0);
console.log(f.findMedian()) // 5.5
f.addNum(6);
console.log(f.findMedian()) // 6.0
f.addNum(3);
console.log(f.findMedian()) // 5.5
f.addNum(1);
console.log(f.findMedian()) // 5.0
f.addNum(0);
console.log(f.findMedian()) // 4.0
f.addNum(0);
console.log(f.findMedian()) // 3.0