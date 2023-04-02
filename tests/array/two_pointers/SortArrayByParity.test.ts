import { SortArrayByParity } from '../../../src/array/two_pointers/SortArrayByParity';

describe('Test SortArrayByParity', () => {
    const instance = new SortArrayByParity();

    test('Test - Sol 1', () => {
        const nums = [7, 5, 3, 8, 4, 1];
        expect(instance.sortArrayByParitySol1(nums)).toEqual([8, 4, 7, 5, 3, 1]);
    });

    describe('Test - Sol 2', () => {
        test('Ex 1', () => {
            const nums = [8, 6, 4, 5, 10];
            expect(instance.sortArrayByParitySol2(nums)).toEqual([8, 6, 4, 10, 5]);
        });

        test('Ex 2', () => {
            const nums = [8, 6, 4, 5, 7, 9, 10];
            expect(instance.sortArrayByParitySol2(nums)).toEqual([8, 6, 4, 10, 7, 9, 5]);
        });
    });
});
