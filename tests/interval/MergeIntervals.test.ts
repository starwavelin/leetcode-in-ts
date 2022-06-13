import { merge, merge2} from '../../src/interval/MergeIntervals';

describe('Test Merge Intervals', () => {
    // trivia
    test('intervals [[9, 36]] should return [[9, 36]]', () => {
        expect(merge([[9, 36]])).toEqual([[9, 36]]);
    });

    test('intervals [[1, 3], [2, 5], [4, 7], [8, 10], [9, 13]] should return [[1, 7], [8, 13]]', () => {
        expect(merge([[1, 3], [2, 5], [4, 7], [8, 10], [9, 13]])).toEqual([[1, 7], [8, 13]]);
    });

    test('intervals [[1, 3], [2, 5], [4, 7], [8, 10]] should return [[1, 7], [8, 10]]', () => {
        expect(merge([[1, 3], [2, 5], [4, 7], [8, 10]])).toEqual([[1, 7], [8, 10]]);
    });

    test('intervals [[1, 3], [2, 5], [8, 10], [9, 13], [15, 18]] should return [[1, 5], [8, 13], [15, 18]]', () => {
        expect(merge([[1, 3], [2, 5], [8, 10], [9, 13], [15, 18]])).toEqual([[1, 5], [8, 13], [15, 18]]);
    });

    test('intervals [[1, 3], [2, 5], [8, 10], [9, 13], [15, 18], [16, 20]] should return [[1, 5], [8, 13], [15, 20]]', () => {
        expect(merge([[1, 3], [2, 5], [8, 10], [9, 13], [15, 18], [16, 20]])).toEqual([[1, 5], [8, 13], [15, 20]]);
    });

    // 排序后的第一个元素的右边就涵盖了后面元素的大部分
    test('intervals [[1, 10], [2, 3], [4, 5]] should return [[1, 10]]', () => {
        expect(merge([[1, 10], [2, 3], [4, 5]])).toEqual([[1, 10]]);
    });
});


describe('Test Merge Intervals: Method 2', () => {
    // trivia
    test('intervals [[9, 36]] should return [[9, 36]]', () => {
        expect(merge2([[9, 36]])).toEqual([[9, 36]]);
    });

    test('intervals [[1, 3], [2, 5], [4, 7], [8, 10], [9, 13]] should return [[1, 7], [8, 13]]', () => {
        expect(merge2([[1, 3], [2, 5], [4, 7], [8, 10], [9, 13]])).toEqual([[1, 7], [8, 13]]);
    });

    test('intervals [[1, 3], [2, 5], [4, 7], [8, 10]] should return [[1, 7], [8, 10]]', () => {
        expect(merge2([[1, 3], [2, 5], [4, 7], [8, 10]])).toEqual([[1, 7], [8, 10]]);
    });

    test('intervals [[1, 3], [2, 5], [8, 10], [9, 13], [15, 18]] should return [[1, 5], [8, 13], [15, 18]]', () => {
        expect(merge2([[1, 3], [2, 5], [8, 10], [9, 13], [15, 18]])).toEqual([[1, 5], [8, 13], [15, 18]]);
    });

    test('intervals [[1, 3], [2, 5], [8, 10], [9, 13], [15, 18], [16, 20]] should return [[1, 5], [8, 13], [15, 20]]', () => {
        expect(merge2([[1, 3], [2, 5], [8, 10], [9, 13], [15, 18], [16, 20]])).toEqual([[1, 5], [8, 13], [15, 20]]);
    });

    // 排序后的第一个元素的右边就涵盖了后面元素的大部分
    test('intervals [[1, 10], [2, 3], [4, 5]] should return [[1, 10]]', () => {
        expect(merge2([[1, 10], [2, 3], [4, 5]])).toEqual([[1, 10]]);
    });
});