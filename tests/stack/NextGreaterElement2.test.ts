import { nextGreaterElementsSol2 } from '../../src/stack/NextGreaterElement2';

describe('Test Next Greater Element', () => {
    test('Test Solution 2 - Ex 1', () => {
        const nums = [1, 2, 3, 4, 3];
        expect(nextGreaterElementsSol2(nums)).toEqual([2, 3, 4, -1, 4]);
    });

    test('Test Solution 2 - Ex 2', () => {
        const nums = [1, 1, 5, 8];
        expect(nextGreaterElementsSol2(nums)).toEqual([5, 5, 8, -1]);
    });
});
