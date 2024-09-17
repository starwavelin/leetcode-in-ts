const { findRotation } = require('../../src/matrix/DetermineWhetherSameMatrixByRotations');

describe('Determine whether they are the same matrix by Rotations', () => {
  test('Example 1', () => {
    const mat = [
      [0, 1],
      [1, 0]
    ];
    const target = [
      [1, 0],
      [0, 1]
    ];
    const expected = true;
    expect(findRotation(mat, target)).toBe(expected);
  });

  test('Example 2', () => {
    const mat = [
      [0, 1],
      [1, 1]
    ];
    const target = [
      [1, 0],
      [0, 1]
    ];
    const expected = false;
    expect(findRotation(mat, target)).toBe(expected);
  });

  test('Example 3', () => {
    const mat = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1]
    ];
    const target = [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ];
    const expected = true;
    expect(findRotation(mat, target)).toBe(expected);
  });
});
