/***************************************************************************
 * Problem No. : 238
 * Problem Name: Product of Array Except Self
 * Date        : July 31, 2023
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-prefix-sum
 ***************************************************************************/

var productExceptSelf = function(nums) {
    const n = nums.length;
    let right = 1;
    const res = new Array(n).fill(1);

    // from left to right
    for (let i=0; i+1<n; i++) {
        res[i+1] = res[i] * nums[i];
    }

    // from right to left, need to keep updating the var right
    for (let i=n-1; i >= 0; i--) {
        res[i] = res[i] * right;
        right = right * nums[i];
    }
    return res;
};

// TEST
console.log(productExceptSelf([1,2,3,4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0, 0, 9, 0, 0]
