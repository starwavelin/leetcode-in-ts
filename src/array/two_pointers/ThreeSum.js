/**
 * The target sum has been defined to be 0 for this question
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    nums.sort((a, b) => a-b);
    // console.log(nums);
    const len = nums.length;
    let i = 0;
    while (i < len-2) {
        const target = 0 - nums[i];
        let l = i+1, r = len-1;
        while (l < r) {
            if (nums[l] + nums[r] === target) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l-1] && l < len-1) {
                    l++;
                }
                r--;
            } else if (nums[l] + nums[r] < target) {
                l++;
            } else {
                r--;
            }
        }
        i++;
        while (nums[i] === nums[i-1] && i < len-2) {
            i++;
        }
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // should get [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // should get []
console.log(threeSum([0, 0, 0])); // should get [0,0,0]
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])); // should get 
    // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]


/**
 * The version below is just conceptually right is b/c
 * the Set in JS/TS is not able to dedup against the object types,
 * like number[].
 * 
 * So, using the function below won't get you a unique set of triplets
 */
var threeSumConceptuallyRight = function(nums) {
    const set = new Set();
    nums.sort();
    const len = nums.length;
    for (let i = 0; i < len-2; i++) {
        const target = 0 - nums[i];
        let j = i+1, k = len-1;
        while (j < k) {
            if (nums[j] + nums[k] === target) {
                // console.log(nums[i], nums[j], nums[k]);
                if (!set.has([nums[i], nums[j], nums[k]])) {
                    set.add([nums[i], nums[j], nums[k]]);
                }
                j++; k--;
            } else if (nums[j] + nums[k] < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return [...set];
};