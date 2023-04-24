/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = [];
    nums.sort((a, b) => a-b);
    const k = 4;
    const start = 0;
    const path = []; // intermediate answer
    const n = nums.length;
    kSum(start, target, k, path, n, nums, res);

    return res;
};

function kSum(start, target, k, path, n, nums, res) {
    if (k === 2) {
        let l = start, r = n-1;
        while (l < r) {
            if (l > start && nums[l] === nums[l-1]) {
                l++; 
                continue;
            }
            if (r < n-1 && nums[r] === nums[r+1]) {
                r--; 
                continue;
            }
            if (nums[l] + nums[r] === target) {
                res.push([...path, nums[l], nums[r]]);
                l++; r--;
            } else if (nums[l] + nums[r] < target) {
                l++;
            } else {
                r--;
            }
        }
    } else {
        for (let i = start; i < n-k+1; i++) {
            if (i > start && nums[i] === nums[i-1]) {
                continue;
            }
            kSum(i+1, target-nums[i], k-1, [...path, nums[i]], n, nums, res);
        }
    }
}