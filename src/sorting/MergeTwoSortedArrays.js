/**
 * Given two sorted arrays, merge them so they become one sorted array
 */

const merge = (leftArr, rightArr) => {
  const res = [];
  let leftIndex = 0,
    rightIndex = 0;
  const m = leftArr.length,
    n = rightArr.length;

  while (leftIndex < m && rightIndex < n) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      res.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      res.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // handle the case when there are remaining elements in the left or right array(s)
  return res.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
};

/**
 * Tests
 */

console.log(merge([1, 3, 9], [2, 5, 8]));
console.log(merge([1, 3, 9, 11, 17, 25], [2, 5, 8]));
console.log(merge([1, 3, 9], [2, 5, 8, 10, 11, 16]));
