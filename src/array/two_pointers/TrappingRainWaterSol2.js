/***************************************************************************
 * Problem No. : 42
 * Problem Name: Trapping Rain Water
 * Date        : August 3, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-array, tag-math, tag-sliding-window
 ***************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, r = height.length - 1, maxLeft = height[l], maxRight = height[r];
    let res = 0;
    while (l < r) {
        if (maxLeft < maxRight) {
            l++;
            maxLeft = Math.max(maxLeft, height[l]); // update the max height on the left side
            res += maxLeft - height[l]; // here maxLeft - height[l] is a non-negative value b/c we already set maxLeft as the max of the two in the prev statement
        } else {
            r--;
            maxRight = Math.max(maxRight, height[r]);
            res += maxRight - height[r];
        }
    }
    return res;
};