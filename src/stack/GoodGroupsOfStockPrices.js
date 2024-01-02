/***************************************************************************
 * Problem No. : 20008
 * Problem Name: Good Groups of Stock Prices
 * Date        : November 21, 2023
 * Author      : @codingbro
 *
 * meta        : tag-stack, tag-two-pointers, tag-monotonic-stack, tag-amazon, tag-array
 ****************************************************************************/

/**
 * Description:
 *  We use an integer list to represent the price of a stock for each month
 * ie. prices = [3, 1, 3, 4, 5, 9, 2, 6]
 *  prices[i] means the price for the ith month.
 *  We also define a concept of "Good Group". Let's say, 
 * if a subaray whose first value or last value is the largest value in the subarray, such subarray is a Good Group.
 * ie. [3, 1] is a good group, [3, 4, 5] is a good group, a single element group like [3] is also a good group.
 *  [5, 9, 2] is Not a good group.
 * 
 * Question: Count how many good groups are there in a given prices array? 
 */

const countGoodGroups = (prices) => {
    let n = prices.length;
    const stack = []; // Use monotonic stack to store the indexes from the given integer array
    let res = 0;

    for (let r = 0; r <= n; r++) {
        let cur = (r == n) ? Infinity : prices[r];

        while (stack.length > 0 && prices[stack[stack.length-1]] < cur) {

            let j = stack.pop();
            let l = stack.length == 0 ? -1 : stack[stack.length - 1]
            res += r - j + j - l - 1; // 
        }
        stack.push(r);
    }

    return res;
}


/**
 * Tests
 */
console.log(countGoodGroups([3, 1, 3, 5])); // 10
console.log(countGoodGroups([1, 5, 2])); // 5
console.log(countGoodGroups([3, 1, 3, 1])); // 9
console.log(countGoodGroups([3, 1, 3, 4, 5, 9, 2, 6])); // 26
console.log(countGoodGroups([1, 3, 5])); // 6