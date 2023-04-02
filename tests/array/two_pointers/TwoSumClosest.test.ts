import { TwoSumClosest } from '../../../src/array/two_pointers/TwoSumClosest';

describe('Test TwoSumClosest', () => {
    const ins = new TwoSumClosest();

    describe('Test - Scenario 1', () => {
        test('Ex 1', () => {
            const nums = [7, 5, 3, 8, 4, 1];
            expect(ins.findSum(nums, 13)).toBe(13);
        });

        test('Ex 2', () => {
            const nums = [14, 5, -1, 7, 9];
            expect(ins.findSum(nums, 11)).toBe(12);
        });
    });

    // describe('Test - Sol 2', () => {
    //     test('Ex 1', () => {
    //         const nums = [8, 6, 4, 5, 10];
    //         expect(instance.sortArrayByParitySol2(nums)).toEqual([8, 6, 4, 10, 5]);
    //     });

    //     test('Ex 2', () => {
    //         const nums = [8, 6, 4, 5, 7, 9, 10];
    //         expect(instance.sortArrayByParitySol2(nums)).toEqual([8, 6, 4, 10, 7, 9, 5]);
    //     });
    // });
});
