/***************************************************************************
 * Problem No. : 238
 * Problem Name: Product of Array Except Self
 * Date        : July 31, 2023
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-math
 ***************************************************************************/

var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n);
    const fwd = new Array(n).fill(1), bwd = new Array(n).fill(1);
    for (let i=0; i+1 < n; i++) {
        fwd[i+1] = fwd[i] * nums[i];
    }
    for (let i=n-1; i-1 >= 0; i--) {
        bwd[i-1] = bwd[i] * nums[i];
    }
    for (let i=0; i < n; i++) {
        res[i] = fwd[i] * bwd[i];
    }
    return res;
};

// TEST
console.log(productExceptSelf([1,2,3,4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0, 0, 9, 0, 0]
