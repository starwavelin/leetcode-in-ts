const { sort } = require('../../src/sorting/QuickSortSol1.js');

describe('Quick Sort Method 1', () => {
  test('Ex 1', () => {
    const array = [2, 9, 5, 1, 3];
    expect(sort(array)).toStrictEqual([1, 2, 3, 5, 9]);
  });

  test('Ex 2', () => {
    const array = [45, 92, 33, 17, 66, 53, 84, 29, 78, 9];
    expect(sort(array)).toStrictEqual([9, 17, 29, 33, 45, 53, 66, 78, 84, 92]);
  });

  test('Ex 3', () => {
    const array = [45, -1, 33, -17, 66, -5, 84, 29, 78, 9];
    expect(sort(array)).toStrictEqual([-17, -5, -1, 9, 29, 33, 45, 66, 78, 84]);
  });

  test('Ex 4', () => {
    const array = [9, 3, -1, 12, 5];
    expect(sort(array)).toStrictEqual([-1, 3, 5, 9, 12]);
  });

  test('Ex 5', () => {
    const array = [5, 4, 3, 2, 1];
    expect(sort(array)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('Ex 6', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sort(array)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
