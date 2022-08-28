import { PartitionArray } from '../../src/sorting/PartitionArray';

describe('Test AreasOfWaters', () => {
    const obj = new PartitionArray();

    describe('Test Sol 1 -- Fast Slow Pointer approach', () => {
        test('Ex 1', () => {
            const nums = [9, 3, -1, 12, 5], k = 8;
            expect(obj.partitionSol1(nums, k)).toEqual([3, -1, 5, 12, 9]);
        });

        test('Ex 2', () => {
            const nums = [1, 3, 4, -8, 7], k = 4;
            expect(obj.partitionSol1(nums, k)).toEqual([1, 3, -8, 4, 7]);
        });

        test('Ex 3', () => {
            const nums = [1, 3, 4, -8, 7], k = 69;
            expect(obj.partitionSol1(nums, k)).toEqual([1, 3, 4, -8, 7]);
        });
    });
    
})