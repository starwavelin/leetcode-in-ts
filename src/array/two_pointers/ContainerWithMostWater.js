/***************************************************************************
 * Problem No. : 11
 * Problem Name: Container with Most Water
 * Date        : August 2, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-array, tag-math
 ***************************************************************************/


/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function(heights) {
    let l = 0, r = heights.length-1, largest = 0;
    while (l < r) {
        largest = Math.max( largest, (r-l) * Math.min(heights[l], heights[r]) )

        if (heights[l] < heights[r]) {
            l++;
        } else r--;
    }
    return largest;
};