/**
 * use minIndex for referring the smallest one
 * for the l pointer and r pointer, this time we let l pointer be the outer loop
 *
 *
 * @param {*} nums
 * @returns
 */

const sort = (nums) => {
  const n = nums.length;

  for (let l = 0; l < n - 1; l++) {
    let minIndex = l;
    for (let r = l + 1; r < n; r++) {
      if (nums[r] < nums[minIndex]) {
        minIndex = r;
      }
    }
    if (minIndex !== l) {
      [nums[minIndex], nums[l]] = [nums[l], nums[minIndex]];
    }
  }

  return nums;
};

module.exports = {
  sort
};
