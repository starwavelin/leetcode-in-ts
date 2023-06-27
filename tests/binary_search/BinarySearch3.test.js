const { binarySearch } = require('../../src/binary_search/BinarySearch3.js');

describe('Binary Search Version 3', () => {
    test('finds the target index in an array', () => {
        const array = [2, 5, 5, 5, 5, 5, 8, 9];
        const target = 5;
        expect(binarySearch(array, target)).toBe(5);
    });

    test('finds the target index in an array', () => {
        const array = [2, 3, 4, 5, 6, 6, 6, 9];
        const target = 6;
        expect(binarySearch(array, target)).toBe(6);
    });

    test('returns -1 when target is not in the array', () => {
        const array = [1, 2, 3, 4, 5];
        const target = 6;
        expect(binarySearch(array, target)).toBe(-1);
    });
});