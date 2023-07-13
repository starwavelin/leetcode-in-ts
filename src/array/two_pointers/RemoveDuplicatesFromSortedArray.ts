/***************************************************************************
 * Problem No. : 26
 * Problem Name: Remove Duplicates from Sorted Array
 * Date        : June 24, 2022
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-two-pointers
 ***************************************************************************/

/**
 * Updated on 7/13/2023
 *
 * This one can be used as a template, for both this question and LC 80
 */
var removeDuplicatesPolishedVersion2 = function (nums: number[]) {
    let i = 0; // use i as the slow pointer
    const n = nums.length;
    for (let el of nums) {
        if (i < 1 || el > nums[i - 1]) {
            nums[i++] = el;
        }
    }
    return i;
};

/**
 * Updated on 7/12/2023
 * 我觉得还是用 while loop
 *  且慢指针 i 初始于index为0处
 *  快指针 j 初始于index为1处 更好理解.
 *  不用变量名称slow fast之类是省点字数,外加可以注解i和j嘛
 */
// Draw a sample sorted array containing duplicated nums,
// Then I will see how the two pointer solution works
var removeDuplicatesPolishedVersion1 = function (nums: number[]) {
    let i = 0,
        j = 1; // use i+1 to represent the # of unique elements
    const n = nums.length;
    while (j < n) {
        if (nums[j] === nums[j - 1]) {
            // 这里判断条件用 j 和 j-1比对就行了,当然写 j 和 i比对也works
            j++;
        } else {
            i++;
            nums[i] = nums[j++];
        }
    }
    return i + 1;
};

function removeDuplicates(nums: number[]): number {
    let slow = 0,
        fast = 1;
    while (fast < nums.length) {
        if (nums[fast] === nums[slow]) {
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
    let slow = 0,
        fast = 1;
    for (; fast < n; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}
