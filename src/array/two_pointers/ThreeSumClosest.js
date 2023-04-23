/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let sum = nums[0] + nums[1] + nums[n-1];
    let minDiff = Math.abs(sum - target);

    for (let i = 0; i < n-2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) { //dedup
            continue;
        }
        let l = i+1, r = n-1;
        while (l < r) {
            if (l > i+1 && nums[l] === nums[l-1]) { //dedup
                l++;
                continue;
            }
            let localSum = nums[i] + nums[l] + nums[r];
            let localDiff = Math.abs(localSum - target);
            if (localDiff < minDiff) {
                minDiff = localDiff;
                sum = localSum;
            }
            if (localSum < target) {
                l++;
            } else {
                r--;
            }
        }
    }

    return sum;
};


console.log(threeSumClosest([1,1,1,5,5,5,5,5,5], 14)); // expect 15
console.log(threeSumClosest([0,0,0], 1)); // expect 0
console.log(threeSumClosest([-1,2,1,-4], 1)); // expect 2