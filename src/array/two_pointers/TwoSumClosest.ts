/***************************************************************************
 * Problem No. :
 * Problem Name: Two Sum Closest
 * Date        : September 04, 2022
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-array, tag-sort
 ***************************************************************************/

export class TwoSumClosest {
    /**
     * Description:
     *  Given an array of integers, and a target value k, 
     *  find the sum of two numbers that is closest to k
     *  return the sum.
     * input: [14, 5, -1, 7, 9] k = 11
     * after sorting [-1, 5, 7, 9, 14]
        output: 12 (contributed by 5 and 7) because 12 and 11’s difference is 1
     */
    findSum(nums: number[], k: number): number {
        const n = nums.length;
        nums.sort((a, b) => a - b);
        let i = 0,
            j = n - 1;
        let sum = nums[i] + nums[j];
        let minDiff = Math.abs(sum - k);
        while (i < j) {
            const localSum = nums[i] + nums[j];
            const localDiff = Math.abs(localSum - k);
            if (localDiff < minDiff) {
                minDiff = localDiff;
                sum = localSum;
            }
            if (localSum > k) {
                j--;
            } else if (localSum <= k) {
                i++;
            }
        }
        return sum;
    }

    findIndices();
}

/**
 * Test
 */
const t1 = new TwoSumClosest();
// console.log(t1.findSum([14, 5, -1, 7, 9], 11)); // return 12
// [1, 3, 4, 5, 7, 8]
console.log(t1.findSum([7, 5, 3, 8, 4, 1], 13)); // return 13
