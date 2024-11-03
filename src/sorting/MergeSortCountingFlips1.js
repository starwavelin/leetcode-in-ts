/**
 * The format of the following implementation is based on
 *  MergeSortSol2.js
 *
 * Use Merge Sort Method to count flips
 *
 * Example:
 *  arr = [4, 2, 1, 3]
 * There are 4 pairs of flips [4, 2], [4, 1], [4, 3], and [2, 1]
 * Return the merged array [1, 2, 3, 4] and the number of flips which is 4.
 */

const countFlips = (nums) => {
  // Base case, when there is only one element, alread sorted and no inversion
  if (nums.length === 1) {
    return [nums, 0];
  }

  const midIndex = Math.floor(nums.length / 2);

  // Divide
  const leftArr = nums.slice(0, midIndex);
  const rightArr = nums.slice(midIndex);
  const [sortedLeftArr, leftInversions] = countFlips(leftArr);
  const [sortedRightArr, rightInversions] = countFlips(rightArr);

  // Conquer
  const [merged, mergedInversions] = mergeAndCount(sortedLeftArr, sortedRightArr);
  return [merged, leftInversions + rightInversions + mergedInversions];
};

const mergeAndCount = (leftArr, rightArr) => {
  const res = []; // store merged array
  let inversions = 0; // store the number of flips

  let l = 0,
    r = 0;
  const m = leftArr.length,
    n = rightArr.length;

  while (l < m && r < n) {
    if (leftArr[l] <= rightArr[r]) {
      // Not an inversion
      res.push(leftArr[l]);
      l++;
    } else {
      // Is an inversion
      res.push(rightArr[r]);
      r++;
      inversions += m - l;
    }
  }

  // handle left over leftArr or rightArr elements
  if (l < m) {
    res.push(...leftArr.slice(l));
  }
  if (r < n) {
    res.push(...rightArr.slice(r));
  }

  return [res, inversions];
};

/**
 * Tests
 */
// console.log(countFlips([4, 2, 1, 3])); // [[1, 2, 3, 4], 4]
console.log(countFlips([5, 4, 2, 1, 3])); // [[1, 2, 3, 4, 5], 8]
