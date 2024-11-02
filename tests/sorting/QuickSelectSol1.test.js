const { select } = require('../../src/sorting/QuickSelectSol1.js');

describe('Quick Sort Method 1', () => {
  test('Ex 1', () => {
    const array = [4, 2, 9, 5, 1];
    const k = 3;
    expect(select(array, k)).toBe(4);
  });

  test('Ex 2', () => {
    const array = [9, 5, 4, 2, 1];
    const k = 2;
    expect(select(array, k)).toBe(2);
  });

  test('Ex 3', () => {
    const array = [45, -1, 33, -17, 66, -5, 84, 29, 78, 9];
    const k = 7;
    expect(select(array, k)).toBe(45);
  });

  test('Ex 4', () => {
    const array = [6, 7, 5, 5, 8, 9, 2, 1];
    const k = 4;
    expect(select(array, k)).toBe(5);
  });
});
