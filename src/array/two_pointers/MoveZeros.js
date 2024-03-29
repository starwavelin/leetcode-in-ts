/***************************************************************************
 * Problem No. : 283
 * Problem Name: Move Zeros
 * Date        : August 5, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-sliding-window
 ***************************************************************************/

var moveZeroes = function(nums) {
    const n = nums.length;
    let l = 0;

    // handle trivia case
    if (n <= 1) return;
    
    // move l to the first 0-val position, and be careful l shall not exceed nums.length
    while (l < n && nums[l] !== 0) {
        l++;
    }

    let r = l + 1;
    while (r < n) {
        if (nums[r] !== 0) {
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

const nums4 = [1, 3, 0, 5, 0, 0, 7];
console.log(moveZeroes(nums4));
console.log(`Now nums1 is: ${nums4}`);