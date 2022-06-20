import { sort } from '../../src/stack/StackSort';

describe('Test the stack sort function', () => {
    test('[4, 2, 9, 3] should become [2, 3, 4, 9]', () => {
        const s = [4, 2, 9, 3];
        sort(s);
        expect(s).toEqual([2, 3, 4, 9]);
    });

    test('[5, -12, 7, 3, 5, 1, 7] should become [-12, 1, 3, 5, 5, 7, 7]', () => {
        const s = [5, -12, 7, 3, 5, 1, 7];
        sort(s);
        expect(s).toEqual([-12, 1, 3, 5, 5, 7, 7]);
    });
});
