/***************************************************************************
 * Problem No. : 20010
 * Problem Name: Form Groups Based on Size and Max Diff
 * Date        : November 21, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sort, tag-two-pointers, tag-greedy, tag-amazon
 ****************************************************************************/

/**
 * Description:
 *  We have an unsorted `nums` array, a variable `size` and another variable `maxDiff`.
 *  We want to form a group based on the following criteria:
 *  1. Each group will have exactly `size` elements (We're ok to discard extra elements and/or ineligible groups)
 *  2. Each element shall only be used once
 *  3. The differences between the maximum val and minimum val within a group, shall not exceed maxDiff
 * 
 * Question: how many groups you can form from a given nums array?
 * 
 */

const countEligibleGroups = (nums, size, maxDiff) => {
    let count = 0;
    const n = nums.length;

    nums.sort((a, b) => a - b);
    for (let i = 0; i + size - 1 < n; ) {
        if (nums[i+size-1] - nums[i] > maxDiff) { // found ineligible group
            i++;
        } else {
            count++;
            i += size;
        }
    }

    return count;
}


/**
 * Tests
 */

console.log(countEligibleGroups([3, 3, 5, 6, 4, 1], 3, 2)); // 2
console.log(countEligibleGroups([5, 4, 2, 5, 1, 1], 3, 2)); // 2
console.log(countEligibleGroups([5, 7, 1, 3, 9], 2, 1)); // 0
console.log(countEligibleGroups([5, 7, 1, 3], 2, 1)); // 0
console.log(countEligibleGroups([7, 2, 1, 6], 2, 1)); // 2
console.log(countEligibleGroups([8, 7, 2, 1, 6], 2, 1)); // 2
console.log(countEligibleGroups([1, 3, 6, 7, 8, 9], 3, 2)); // 1