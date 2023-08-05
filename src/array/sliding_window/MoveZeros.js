/***************************************************************************
 * Problem No. : 283
 * Problem Name: Move Zeros
 * Date        : August 5, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-two-pointers
 ***************************************************************************/

var moveZeroes = function(nums) {
    const n = nums.length;
    if (n <= 1) return;
    let l = 0;
    while (l < n && nums[l] !== 0) {
        l++;
    }
    let r = l+1;
    while (r < n) {
        if (nums[l] === 0 && nums[r] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }
};

// Tests
const nums1 = [3, 0, 0, 1, 2];
console.log(moveZeroes(nums1));
console.log(`Now nums1 is: ${nums1}`);

const nums2 = [3, 1, 2];
console.log(moveZeroes(nums2));
console.log(`Now nums1 is: ${nums2}`);

const nums3 = [0];
console.log(moveZeroes(nums3));
console.log(`Now nums1 is: ${nums3}`);
