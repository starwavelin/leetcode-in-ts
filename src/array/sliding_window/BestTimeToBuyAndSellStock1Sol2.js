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
 * An even better Sliding window solution based on my new template -- updated 12/19/2023
 * 
 * when the price is increasing, we calculate the profit;
    when the price is dropping, we move the l pointer to catch r
 */
const maxProfit = function(prices) {
    const n = prices.length;
    let res = 0;

    for (let l = 0, r = 1; r < n; r++) {
        // handle r, r just auto increment, thats it

        // handle l
        while (prices[l] > prices[r]) {
            l = r;
        }

        // max subarray res 
        res = Math.max(res, prices[r] - prices[l]);
    }

    return res;
};



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

