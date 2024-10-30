const bubbleSort = (arr) => {
  const n = arr.length;

  for (let r = n - 1; r > 0; r--) {
    for (let l = 1; l <= r; l++) {
      if (arr[l] < arr[l - 1]) {
        [arr[l], arr[l - 1]] = [arr[l - 1], arr[l]];
      }
    }
  }

  return arr;
};

module.exports = {
  bubbleSort
};
