/***************************************************************************
 * Problem No. : 80
 * Problem Name: Remove Duplicates from Sorted Array II
 * Date        : August 28, 2022
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-two-pointers
 ***************************************************************************/

/**
 * Updated on 7/13/2023
 * Using the template from LC 26
 */
var removeDuplicatesPolishedUsingTemplate = function (nums: number[]) {
    let i = 0; // use i as the slow pointer
    for (let el of nums) {
        if (i < 2 || el > nums[i - 2]) {
            nums[i++] = el;
        }
    }
    return i;
};

var removeDuplicatesSimilarToLC26Sol1 = function (nums: number[]) {
    let i = 1,
        j = 2;
    while (j < nums.length) {
        if (nums[j] == nums[i] && nums[j] == nums[i - 1]) {
            j++;
        } else {
            nums[++i] = nums[j++];
        }
    }
    return i + 1;
};

/**
 * This solution is Not recommended b/c it involves an extra var count
 */
function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    let i = 0,
        j = 1,
        count = 1;
    // i - slow pointer, j - fast pointer, count - record the number of repetition of the same element
    while (j < n) {
        if (nums[i] === nums[j] && count === 2) {
            // the case of only moving the fast pointer
            j++;
        } else {
            if (nums[i] === nums[j] && count === 1) {
                count = 2;
            } else {
                count = 1; // when nums[i] !== nums[j], restore the count to be 1
            }
            i++;
            nums[i] = nums[j];
            j++;
        }
    }

    return i + 1;
}
