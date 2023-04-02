import { findContentChildren } from '../../../src/array/greedy/AssignCookies';

describe('Test AssignCookies', () => {
    test('children [1, 2, 4, 4], cookies [1, 2, 2, 2, 5] should return 3', () => {
        expect(findContentChildren([1, 2, 4, 4], [1, 2, 2, 2, 5])).toBe(3);
    });

    test('children [5], cookies [2, 1, 4] should return 0', () => {
        expect(findContentChildren([5], [2, 1, 4])).toBe(0);
    });
});
