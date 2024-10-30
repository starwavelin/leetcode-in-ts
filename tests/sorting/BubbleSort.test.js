const { bubbleSort } = require('../../src/sorting/BubbleSort.js');

describe('Bubble Sort', () => {
  test('Ex 1', () => {
    const array = [2, 9, 5, 1, 3];
    expect(bubbleSort(array)).toBe(array.sort((a, b) => a - b));
  });

  test('Ex 2', () => {
    const array = [45, 92, 33, 17, 66, 53, 84, 29, 78, 9];
    expect(bubbleSort(array)).toBe(array.sort((a, b) => a - b));
  });
});
