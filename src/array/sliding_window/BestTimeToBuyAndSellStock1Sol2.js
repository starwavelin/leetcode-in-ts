/***************************************************************************
 * Problem No. : 121
 * Problem Name: Best Time To Buy And Sell Stock 1
 * Date        : August 3, 2023
 * Author      : @codingbro
 *
 * meta        : tag-sliding-window, tag-two-pointers
 ***************************************************************************/

const prices3 = require('./BestTimeToBuyAndSellStock1Sol1') 


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitSol2 = function(prices) {
    let l = 0, r = 1, profit = 0
    const n = prices.length;
    while (r < n) {
        if (prices[l] >= prices[r]) {
            l = r;
            r++;
        } else {
            profit = Math.max(profit, prices[r] - prices[l]);
            r++;
        }
    }
    return profit;
};


// Tests
console.log(maxProfitSol2([7,1,5,3,6,4])); // 5

console.log(maxProfitSol2([7,6,4,3,1])); // 0

console.log(maxProfitSol2(prices3)); // 999


/**
 * We can use the Sliding Window Template to write it again
 */
var maxProfitTemplate = function(prices) {
    let res = 0;

    for (let l = 0, r = 1; r < prices.length; r++) {

        // handle L pointer
        if (prices[r] <= prices[l]) {
            l = r;
        }

        // handle result
        res = Math.max(res, prices[r] - prices[l]);
    }

    return res;
};


// Tests 2
console.log('Test Part 2:');

console.log(maxProfitSol2([7,1,5,3,6,4])); // 5

console.log(maxProfitSol2([7,6,4,3,1])); // 0

console.log(maxProfitSol2(prices3)); // 999
