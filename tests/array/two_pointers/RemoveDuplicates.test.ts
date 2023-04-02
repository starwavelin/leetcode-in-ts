import { removeDuplicatesForLoop } from '../../../src/array/two_pointers/RemoveDuplicatesFromSortedArray';

describe('Test RemoveDuplicatesFromSortedArray Sol For Loop', () => {
    test('Test - Ex 1', () => {
        const nums = [1, 2, 3, 3, 3, 5];
        expect(removeDuplicatesForLoop(nums)).toBe(4);
    });

    test('Test - Ex 2', () => {
        const nums = [1, 2, 3, 3, 3, 5, 5, 5, 7, 7, 9];
        expect(removeDuplicatesForLoop(nums)).toBe(6);
    });
});
