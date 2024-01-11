/***************************************************************************
 * Problem No. : 15
 * Problem Name: 3Sum
 * Date        : June 25, 2023
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-two-pointers, tag-sort
 ***************************************************************************/

/**
 * A 3rd way:
 *  - 最外层的i指针用for loop写法
 *  - 有助于从这种写法推导出 recusrive solution的写法
 * Assuming the given target may not be 0, so add a new param target 
 * 
 */
var threeSumVer3 = function(nums, target) {
    const res = []
    nums.sort((a, b) => a-b);
    const len = nums.length;

    for (let i = 0; i < len-2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        const nextTarget = target - nums[i];
        let l = i+1, r = len-1;
        while (l < r) {
            if (l > i+1 && nums[l] === nums[l-1]) {
                l++;
                continue;
            }
            if (nums[l] + nums[r] === nextTarget) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;                
                r--;
            } else if (nums[l] + nums[r] < nextTarget) {
                l++;
            } else {
                r--;
            }
        }        
    }

    return res;
};

console.log(threeSumVer3([-1, 0, 1, 2, -1, -4], 3)); // should get [[0,1,2]]
console.log(threeSumVer3([0, 0, 0], 3)); // should get []
console.log(threeSumVer3([-1,0,1,2,-1,-4,-2,-3,3,0,4], 3)); // should get
    // [[-4, 3, 4], [-3, 2, 4], [-2, 1, 4], [-2, 2, 3], [-1, 0, 4], [-1, 1, 3], [0, 0, 3], [0, 1, 2]]
console.log(threeSumVer3([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6], 0)); // should get
    // [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]

console.log('DEBUG: END');


/**
 * Another way to dedup, being a little differnt from the solution below
 * b/c this way uses if () condition with i++ and continue to avoid duplicated items for the
 * first pointer and left poniter numbers.
 * 
 * The advantage of this apporach compared with the original threeSumVer1 is taht:
 *  - NO need to use a while loop within the outer while loop for dedup
 *  - The boundary of if condition has been set by the outer while loop
 */
var threeSumVer2 = function(nums) {
    const res = []
    nums.sort((a, b) => a-b);
    const len = nums.length;

    // The following portion can be extracted into a kSum() ftn and be called recusrively
    let i = 0;
    while (i < len-2) {
        if (i > 0 && nums[i] === nums[i-1]) {
            i++;
            continue;
        }
        const target = 0 - nums[i];
        let l = i+1, r = len-1;
        while (l < r) {
            if (l > i+1 && nums[l] === nums[l-1]) {
                l++;
                continue;
            }
            // Can add another optimization for r
            if (r < len-1 && nums[r] === nums[r+1]) {
                r--;
                continue;
            }

            if (nums[l] + nums[r] === target) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;  
                r--;
            } else if (nums[l] + nums[r] < target) {
                l++;
            } else {
                r--;
            }
        }
        i++;
    }

    return res;
};


/**
 * The target sum has been defined to be 0 for this question
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []; // store the result triplets
    nums.sort((a, b) => a-b);

    const n = nums.length;

    // The following portion can be extracted into a kSum() ftn and be called recusrively    
    for (let i = 0; i < n - 2; i++) {
        const target = -nums[i];

        // Apply 2-Sum
        let l = i+1, r = n-1;
        while (l < r) {
            if (nums[l] + nums[r] === target) {
                res.push([nums[i], nums[l], nums[r]]);
                l++; r--;

                // Dedup on l pointer in 2-Sum, handle example like [-2, 0, 0, 2, 2]
                while (nums[l] === nums[l-1]) {
                    l++;
                }
            } else if (nums[l] + nums[r] < target) {
                l++;
            } else {
                r--;
            }
        }
        
        // Dedup on i
        while (nums[i] === nums[i+1]) {
            i++;
        }
    }

    return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // should get [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 1, 1])); // should get []
// console.log(threeSum([0, 0, 0])); // should get [0,0,0]
// console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])); // should get 
    //[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]

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