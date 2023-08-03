/***************************************************************************
 * Problem No. : 42
 * Problem Name: Trapping Rain Water
 * Date        : August 3, 2023
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-math, tag-dp
 ***************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    const maxL = new Array(n).fill(0), maxR = new Array(n).fill(0);
    let res = 0;

    // fill maxL array
    let maxLeft = 0; // the particular left height value for bar i
    for (let i = 0; i < n; i++) {
        maxL[i] = maxLeft;
        maxLeft = Math.max(maxLeft, height[i]);
    }

    // fill maxR array
    let maxRight = 0; 
    for (let i = n-1; i >=0; i--) {
        maxR[i] = maxRight;
        maxRight = Math.max(maxRight, height[i]);
    }

    // Calculate
    for (let i = 0; i < n; i++) {
        const minLR = Math.min(maxL[i], maxR[i]);
        res += minLR - height[i] > 0 ? minLR - height[i] : 0;
    }
    return res;
};

// Tests
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9


/**
 * We can also optimize the solution above by just 
 *  traversing the array twice, instead of 3 times.
 * And BTW, these two solutions are dynamic programming type solution
 */

var trapSolDP = function(height) {
    const n = height.length;
    let res = 0;

    let maxLeft = 0, maxL = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        maxL[i] = maxLeft;
        maxLeft = Math.max(maxLeft, height[i]);
    }

    let maxRight = 0;
    for (let i = n-1; i >= 0; i--) {
        // maxL array 开始存 min(maxRight, maxL[i]), it is used like minLR[i]
        maxL[i] = Math.min(maxL[i], maxRight);
        res += maxL[i] - height[i] > 0 ? maxL[i] - height[i] : 0;
        maxRight = Math.max(maxRight, height[i]);
    }

    return res;
};