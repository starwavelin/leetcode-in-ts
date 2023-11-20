/***************************************************************************
 * Problem No. : 20005
 * Problem Name: Cancel Unequal Integers
 * Date        : November 20, 2023
 * Author      : @codingbro
 *
 * meta        : tag-dp, tag-amazon
 ****************************************************************************/

const countRemainingItems = (nums) => {
    nums.sort((a, b) => a - b);
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        if (nums[l] != nums[r]) {
            l++;
            r--;
        } else {
            return r - l + 1; // found remaining idential items
        }
    }
    return 0; // all are canceled
}

/**
 * Tests
 */
const nums1 = [3,3,1,1,2];
console.log(countRemainingItems(nums1)); // expect 1

const nums2 = [1,2,5,6];
console.log(countRemainingItems(nums2)); // expect 0

const nums3 = [3,7,8,3,4,4,4];
console.log(countRemainingItems(nums3)); // expect 1

const nums4 = [9,7,8,9,9,9,9];
console.log(countRemainingItems(nums4)); // expect 3

const nums5 = [1,1,2,2,3,3];
console.log(countRemainingItems(nums5)); // expect 0

const nums6 = [3, 3, 4, 4, 4, 4, 2, 2];
console.log(countRemainingItems(nums6)); // expect 0

const nums7 = [3, 3, 3, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 5, 5, 6];
console.log(countRemainingItems(nums7)); // expect 0
