/***************************************************************************
 * Problem No. : 1
 * Problem Name: Two Sum
 * Date        : August 07, 2022
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-array
 ***************************************************************************/

/**
 * The new description of this problem says:
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/**
 * Solution 1: Brute Force, Time Complexity: O(n^2), Space Complexity: O(1)
 * @param nums 
 * @param target 
 */
function twoSumSol1(nums: number[], target: number): number[] {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

/*
* Solution 2:
    Form a new structure (can be an array/obj) to hold element + its index
    sort the new structure based on the order of the element  O(nlogn)
    Then, use two pointers to traverse toward each other to find the sum to equal to target

    Space complexity: O(1)
*/
function twoSumSol2(nums: number[], target: number): number[] {
    const n = nums.length;
    let collection = [];
    for (let i = 0; i < n; i++) {
        collection.push([nums[i], i]);
    }
    collection.sort((a, b) => a[0] - b[0]);

    let i = 0, j = n-1;
    while (i < j) {
        if (collection[i][0] + collection[j][0] === target) {
            return [collection[i][1], collection[j][1]];
        } else if (collection[i][0] + collection[j][0] < target) {
            i++;
        } else {
            j--;
        }
    }

    return [-1, -1];
};

/**
 * Pitfall:
 *  Shall avoid the scenario that cur equals (target - cur)
 *      like [3, 2, 4] target 6  we shall not return [0, 0] because 3 shall not be reused
 *  So, in order for this apporach to be working, there must be an assumption saying:
 *      all the given elements in the nums array are unique.
 * 
 * Solution 3:
 *  Use a map to form the key - element, value - index by traversing the original array once
 *  Then traverse the array for the 2nd time to see if the current element has a corresponding (target - cur)
 *      element in the array, 
 *          if Yes, return the current element's index and (target - cur)'s index
 *          if No, look into the next element until there is no elements to look to. 
 */
function twoSumSol3(nums: number[], target: number): number[] {
    const n = nums.length;
    const map = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        map.set(nums[i] ,i);
    }
    for (let cur of nums) {
        if (map.has(target - cur)) {
            return [map.get(cur) as number, map.get(target - cur) as number];
        }
    }

    return [-1, -1];
};


/**
 * Based on sol 3, using a map and traverse the original array only once, 
 * we firstly check if target-cur is already in the array, 
 *      if yes, we return the [(target-cur)'s index , cur's index]
 *      if No, continue to traverse until find the desired indicies or running out of elements.
 *  Time Complexity: O(n)
 *  Space Complexity: O(n)
 */
function twoSumSol4(nums: number[], target: number): number[] {
    const n = nums.length;
    const map = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]) as number, i];
        }
        map.set(nums[i] ,i);
    }

    return [-1, -1];
};


/**
 * If we have the assumption that all elements in the nums array are unique, then
 */
function twoSumSol5(nums: number[], target: number): number[] {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums.indexOf(target - nums[i]) >= 0 && nums[i] !== target - nums[i]) {
            return [i, nums.indexOf(target - nums[i])];
        }
    }

    return [-1, -1];
};


/**
 * TEST Solution 2
 */
console.log(twoSumSol2([2, 7, 11, 15], 9));

/**
 * TEST Solution 5
 */
 console.log(twoSumSol5([3, 2, 4], 6)); // [1, 2]
 console.log(twoSumSol5([-4, 12, 2, 8, 5], 7)); // [2, 4]
 console.log(twoSumSol5([2, 13, 4, 7], 11)); // [2, 3]