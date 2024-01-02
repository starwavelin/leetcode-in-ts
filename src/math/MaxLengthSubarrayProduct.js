/***************************************************************************
 * Problem No. : 20006
 * Problem Name: Max Length Subarray Product
 * Date        : November 20, 2023
 * Author      : @codingbro
 *
 * meta        : tag-math, tag-prefix-sum, tag-amazon
 ****************************************************************************/

/**
 * 
 * @param {number[]} arr 
 * @return {number} The max length of the subarray whose product equals 1
 */
const maxLengthSubarrayProductEqualsOne = (nums) => {
    let pre1 = 0;
    let pre2 = 0;
    let res = 0;
    for(let num of nums) {
        if (num > 0) {
            pre1++;
            if (pre2 > 0) {
                pre2++;
            }
        } else {
            let tmp = pre1;
            if (pre2 > 0) {
                pre1 = pre2 + 1;
            } else {
                pre1 = 0;
            }
            pre2 = tmp + 1;
        }
        res = Math.max(res, pre1);
    }
    return res;
}


/**
 * Tests
 */
console.log(maxLengthSubarrayProductEqualsOne([1, -1, 1, -1, 1])); // expect 5
console.log(maxLengthSubarrayProductEqualsOne([0, -1, 1, -1, 1])); // expect 4
console.log(maxLengthSubarrayProductEqualsOne([1, -1, 2, -1, 1])); // expect 1 The algorithm above gives me 5..
console.log(maxLengthSubarrayProductEqualsOne([0.25, 4, 1, -1, 1])); // expect 3