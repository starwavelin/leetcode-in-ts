const { binarySearchSol1 } = require('../../src/binary_search/BinarySearch1.js');
const { binarySearchSol2 } = require('../../src/binary_search/BinarySearch1.js');

describe('Binary Search Solution 1', () => {
    test('finds the target index in an array', () => {
        const array = [2, 5, 5, 5, 5, 5, 8, 9];
        const target = 5;
        expect(binarySearchSol1(array, target)).toBe(3);
    });

    test('returns -1 when target is not in the array', () => {
        const array = [1, 2, 3, 4, 5];
        const target = 6;
        expect(binarySearchSol1(array, target)).toBe(-1);
    });
});


describe('Binary Search Solution 2', () => {
    test('finds the target index in an array', () => {
        const array = [2, 5, 5, 5, 5, 5, 8, 9];
        const target = 5;
        expect(binarySearchSol2(array, target)).toBe(3);
    });

    test('finds the target index in an array', () => {
        const array = [12];
        const target = 12;
        expect(binarySearchSol2(array, target)).toBe(0);
    });

    test('finds the target index in an array', () => {
        const array = [2, 3, 5, 7, 8, 13, 18, 19];
        const target = 13;
        expect(binarySearchSol2(array, target)).toBe(5);
    });

    test('returns -1 when target is not in the array', () => {
        const array = [1, 2, 3, 4, 5];
        const target = 6;
        expect(binarySearchSol2(array, target)).toBe(-1);
    });
});