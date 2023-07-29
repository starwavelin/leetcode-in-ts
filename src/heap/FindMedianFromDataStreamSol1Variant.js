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
 * // Can also use JavaScript’s splice function to rewrite the addNum()
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const n = this.nums.length;
    for (let i=0; i<n; i++) {
        // find the element larger than num for the right position
        if (this.nums[i] > num) {
            this.nums.splice(i, 0, num);
            return;  // 一旦插入成功就结束这个函数
        }
    }
    this.nums.push(num); // 当前nums中的最大数都比num小的情况,插入尾部
}

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