/***************************************************************************
 * Problem No. : 10008
 * Problem Name: Merge Sort
 * Date        : November 1, 2024
 * Author      : @codingbro
 * Notes       :
 * 	Scenario:
 * 		Implement Merge Sort on a given integer array.
 * 	Assumption:
 * 		- What is the size of the array? [1 to 500 numbers].
        - What is the value range of each number? [-100, 100]
 * meta        : tag-sort, tag-two-pointers, tag-array
 ***************************************************************************/

/**
 * This method without using the start or end index in the main merge sort function;
 * it also avoids using a temp array to store the nums array
 *
 * This solution requires me to smartly use the array.slice(startingIndex, endingIndex) function.
 */

const mergeSort = (nums) => {
  // Base case, when nums.length == 1 meaning it is already sorted
  if (nums.length === 1) {
    return nums;
  }

  // Recursive case
  const midIndex = Math.floor(nums.length / 2);
  const leftArr = nums.slice(0, midIndex);
  const rightArr = nums.slice(midIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const res = [];
  let l = 0,
    r = 0; // lIndex and rIndex

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] < rightArr[r]) {
      res.push(leftArr[l++]);
    } else {
      res.push(rightArr[r++]);
    }
  }

  return res.concat(leftArr.slice(l)).concat(rightArr.slice(r));
};

module.exports = {
  mergeSort
};
