/***************************************************************************
 * Problem No. : 605
 * Problem Name: Can Place Flower
 * Date        : September 13, 2023
 * Author      : @codingbro
 *
 * meta        : tag-greedy, tag-array
 ***************************************************************************/

/**
 * @param {number[]} fb (flowerbed)
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(fb, n) {
    let avails = 0;
    if (fb[0] == 0) {
        fb.unshift(0);
    }
    if (fb[fb.length-1] == 0) {
        fb.push(0);
    }
    const len = fb.length;
    for (let i = 1; i < len-1; i++) {
        if (fb[i] == 0 && fb[i-1] == 0 && fb[i+1] == 0) {
            avails += 1;
            fb[i] = 1;
        }
    }
    return avails >= n ? true : false;
};