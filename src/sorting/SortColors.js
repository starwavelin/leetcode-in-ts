/***************************************************************************
 * Problem No. : 75
 * Problem Name: Sort Colors
 * Date        : December 13, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers
 ***************************************************************************/

/**
 * Algorithm:
 *  三个指针[恰好也因为有三种不同的数字],左右指针分别定住左右,游走指针
 *  游走指针遇到0,跟左边交换;游走指针遇到2,跟右边交换且要回退一格
 *  且游走指针只在 l 和 r 之间游动,即上限是r. 
 *  
 * 
 * Use the idea of Array Partition, ref PartitionArraySol2.js
 * Two pointers moving toward each other. 
 * 
 * But, for this problem, firstly think about how many pointers do we need?
 *  The answer is 3. 
 *  l for left pointer, i for traveling pointer, r for the right pointer.
 * 
 * To improve efficiency, we can first
 *  move l to its first non-0 position and r (from right to left) to its first non-2 position.
 * Then, because we have 3 colors here
 *  let i = l
 *  while i <= r
 *      if nums[i] == 0, swap it with nums[l]
 *      if nums[i] == 2, swap it with nums[r] 
 *      if nums[i] == 1, do nothing
 *      i++
 * 
 * Time Complexity: O(n) with one pass
 * Space Complexity: O(1)
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length;

    // trivia
    if (n == 1) { return; }

    let l = 0, r = n - 1;

    // move both l and r to its ready-starting position
    while (l < n && nums[l] == 0) {
        l++;
    }
    while (r >= 0 && nums[r] == 2) {
        r--;
    }

    // Main logic
    for (let i = l; i <= r; i++) {
        if (nums[i] == 0) {
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l++;
        } else if (nums[i] == 2) {
            [nums[i], nums[r]] = [nums[r], nums[i]];
            i--; // offset i because we always have i++, 
                // and the num pointed by i after swapping might be a 0 that requires another swap based on if (nums[i] == 0) cond
            r--;
        }
    }
};


/**
 * Tests
 */

const nums1 = [2,0,2,1,1,0];
sortColors(nums1);
console.log(`Now nums1 is: ${JSON.stringify(nums1)}`);

const nums2 = [2,0,1];
sortColors(nums2);
console.log(`Now nums2 is: ${nums2}`);

const nums3 = [2];
sortColors(nums3);
console.log(`Now nums3 is: ${nums3}`);

const nums4 = [1, 1, 1];
sortColors(nums4);
console.log(`Now nums4 is: ${nums4}`);

const nums5 = [1,2,0]; // testing the offset of i
sortColors(nums5);
console.log(`Now nums5 is: ${nums5}`);



var sortColorsWhileLoop = function(nums) {
    let l = 0, r = nums.length - 1;
    let k = l;

    while (k <= r) {
        if (nums[k] == 2) {
            [nums[k], nums[r]] = [nums[r], nums[k]];
            r--; // offset k so don't increase k
        } else if (nums[k] == 0) {
            [nums[k], nums[l]] = [nums[l], nums[k]];
            l++;
            k++;
        } else {
            k++;
        }
    }
};