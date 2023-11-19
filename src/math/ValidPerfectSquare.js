/***************************************************************************
 * Problem No. : 367
 * Problem Name: Valid Perfect Square
 * Date        : November 18, 2023
 * Author      : @codingbro
 *
 * meta        : tag-math, tag-binary-search
 ****************************************************************************/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num == 1) {
        return true;
    }

    let l = 2, r = Math.floor(num/2);
    while (l <= r) {
        const mid = (l + r) >> 1;
        const guess = mid * mid;
        if (guess == num) {
            return true;
        } else if (guess < num) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
};