/***************************************************************************
 * Problem No. :
 * Problem Name: Insertion Sort
 * Date        : July 29, 2023
 * Author      : @codingbro
 * Notes       :
 * 	An example of Insertion Sort
 *  Input Array: 
 *      [9, 8, 10, 5]
 *      Core idea:
 *          Starting from index 1, use the fast pointer i to point it and store its val to var tmp
 *          for the slow pointer j=i-1, if j's num is greater than tmp, we override (j+1)'s num with j's num, 
 *              until either j's num is not greater than tmp or j's value is less than 0.
 *          then, we set (j+1)'s num with tmp
 * 
 *  So, the input array will be transitioning step by step as:
 *      [8, 9, 10, 5]
 *      [5, 8, 9, 10]
 * meta        : tag-sort, tag-two-pointers, tag-array
 ***************************************************************************/

const insertionSort = (nums) => {
    const n = nums.length;
    for (let i=0; i < n; i++) { // i - fast pointer
        const tmp = nums[i];
        let j = i-1;
        while (j >= 0 && nums[j] > tmp) {
            nums[j+1] = nums[j--];
        }
        nums[j+1] = tmp;
    }
    return nums;
}

// Tests
console.log(insertionSort([8, 9, 10, 5]));
console.log(insertionSort([8, 9, -10, 5, 73, -2, -9, 18]));