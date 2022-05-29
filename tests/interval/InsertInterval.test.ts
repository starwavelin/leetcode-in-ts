import { insert } from '../../src/interval/InsertInterval';

describe('Test Insert Interval', () => {
    test('intervals [], newInterval [2, 8] should return [[2, 8]]', () => {
        expect(insert([], [2, 8])).toEqual([[2, 8]]);
    });

    test('intervals [[1,3],[6,9]], newInterval [2, 5] should return [[1,5],[6,9]]', () => {
        expect(insert([[1,3],[6,9]], [2, 5])).toEqual([[1,5],[6,9]]);
    });

    test('intervals [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval [4, 8] should return [[1,2],[3,10],[12,16]]', () => {
        expect(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8])).toEqual([[1,2],[3,10],[12,16]]);
    });
});