/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let res = 0;

    for (let i = 0; i < n-2; i++) {
        let l = i+1, r = n-1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < target) {
                res += r - l;
                l++;
            } else {
                r--;
            }
        }
    }

    return res;
};