/***************************************************************************
 * Problem No. : 169
 * Problem Name: Majority Element
 * Date        : January 3, 2024
 * Author      : @codingbro
 *
 * meta        : tag-bit
 ***************************************************************************/

/**
 * Algorithm:
 *  将这个 Majority 按位来建立。
        假定面试官OK这个整数是32位的，那么从0到31位，
        每次统计下数组中该位上0和1的个数，
            如果1多，那么将结果 res 中该位变为1，
            如果0多，res中的该位不用变化.
            最后累加出来的 res 就是 Majority (过半的数) 了.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0;
    const n = nums.length, mask = 1;

    for (let i = 0; i < 32; i++) {
        let ones = 0, zeros = 0;
        
        for (let num of nums) {
            if (ones > n / 2 || zeros > n / 2) { // to improve running time
                break;
            }
            if ((num & (mask << i)) != 0) {
                ones++;
            } else {
                zeros++;
            }
        }

        if (ones > zeros) {
            res |= (mask << i);
        }
    }

    return res;
}


/**
 * Tests
 */
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([1,2,1,3,1,4,4,1,1,1,1])); // 1
