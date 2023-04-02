import { nextGreaterElementSol3 } from '../../src/stack/NextGreaterElement1';

describe('Test Next Greater Element', () => {
    test('Test Solution 3 - Ex 1', () => {
        const nums1 = [2, 4];
        const nums2 = [1, 2, 3, 4];
        expect(nextGreaterElementSol3(nums1, nums2)).toEqual([3, -1]);
    });

    test('Test Solution 3 - Ex 2', () => {
        const nums1 = [5, 2, 1];
        const nums2 = [1, 2, 5, 7];
        expect(nextGreaterElementSol3(nums1, nums2)).toEqual([7, 5, 2]);
    });
});
