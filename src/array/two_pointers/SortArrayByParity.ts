/***************************************************************************
 * Problem No. : 905
 * Problem Name: Sort Array By Parity
 * Date        : August 28, 2022
 * Author      : @codingbro
 *
 * meta        : tag-sort, tag-two-pointers, tag-array
 ***************************************************************************/

export class SortArrayByParity {

    sortArrayByParitySol1 = (nums: number[]): number[] => {
        const evenArr = [], oddArr = [];
        for (const num of nums) {
            if (num % 2 === 0) {
                evenArr.push(num);
            } else {
                oddArr.push(num);
            }
        }
        return [...evenArr, ...oddArr];
    }

    // In-place solution
    sortArrayByParitySol2 = (nums: number[]): number[] => {
        const n = nums.length;
        let i = 0, j = 0;
        while (j < n) {
            if (nums[j] % 2 === 0) {
                this.swap(i, j, nums);
                i++;
            }
            j++;
        }
        return nums;
    }

    swap = (i: number, j: number, nums: number[]): void => {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}
