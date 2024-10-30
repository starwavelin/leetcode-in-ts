const { bubbleSort } = require('../../src/sorting/BubbleSortSol1.js');

describe('Bubble Sort', () => {
  test('Ex 1', () => {
    const array = [2, 9, 5, 1, 3];
    expect(bubbleSort(array)).toStrictEqual([1, 2, 3, 5, 9]);
  });

  test('Ex 2', () => {
    const array = [45, 92, 33, 17, 66, 53, 84, 29, 78, 9];
    expect(bubbleSort(array)).toStrictEqual([9, 17, 29, 33, 45, 53, 66, 78, 84, 92]);
  });
});
