/**
 * Bubble Sort 2: the left pointer trying to catch the right pointer
 *
 * Pointer r is automatically moving forward
 * Pointer l is comparing itself with l+1, and its moving range is between 0 and n-1-r exclusively
 *
 * @param {*} arr
 * @returns
 */

const sort = (arr) => {
  const n = arr.length;

  for (let r = 0; r < n; r++) {
    // can also use r < n-1
    for (let l = 0; l < n - 1 - r; l++) {
      if (arr[l] > arr[l + 1]) {
        // swap
        [arr[l], arr[l + 1]] = [arr[l + 1], arr[l]];
      }
    }
  }

  return arr;
};

module.exports = {
  sort
};
