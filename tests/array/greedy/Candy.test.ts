import { candy, candy2 } from '../../../src/array/greedy/Candy';

describe('Test Candy Solution 1', () => {
    test('ratings [1, 0, 2] should return 5', () => {
        expect(candy([1, 0, 2])).toBe(5);
    });

    test('ratings [1, 2, 2],  should return 4', () => {
        expect(candy([1, 2, 2])).toBe(4);
    });

    test('ratings [1,3,4,5,2],  should return 11', () => {
        expect(candy([1,3,4,5,2])).toBe(11);
    });
});


describe('Test Candy Solution 2', () => {
    test('ratings [1, 0, 2] should return 5', () => {
        expect(candy2([1, 0, 2])).toBe(5);
    });

    test('ratings [1, 2, 2],  should return 4', () => {
        expect(candy2([1, 2, 2])).toBe(4);
    });

    test('ratings [1,3,4,5,2],  should return 11', () => {
        expect(candy2([1,3,4,5,2])).toBe(11);
    });
});