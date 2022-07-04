/***************************************************************************
 * Problem No. : 26
 * Problem Name: Remove Duplicates from Sorted Array
 * Date        : June 24, 2022
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-two-pointers
 ***************************************************************************/

function removeDuplicates(nums: number[]): number {
    let slow = 0, fast = 1;
    while (fast < nums.length) {
        if (nums[slow] === nums[fast]) {
            fast++;
        } else {
            slow++;
            nums[slow] = nums[fast++];
        }
    }
    return slow + 1;
}

export function removeDuplicatesForLoop(nums: number[]): number {
    const n = nums.length;
    let slow = 0, fast = 1;
    for (; fast < n; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}