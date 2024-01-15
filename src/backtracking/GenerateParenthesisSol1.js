/***************************************************************************
 * Problem No. : 22
 * Problem Name: Generate Parenthesis
 * Date        : August 22, 2023
 * Author      : @codingbro
 *
 * meta        : tag-backtracking, tag-dfs, tag-divide-and-conquer
 ***************************************************************************/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    genDfs(n, n, '', res);
    return res;
};

const genDfs = (left, right, path, res) => {  // left: 还未使用的 ( 的个数; right: 还未使用的 ) 的个数; path represent one unique result
    if (left > right) { // invalid case
        return;
    }
    if (left == 0 && right == 0) { // base case: found a solution,即可以把完整的中间结果(结果)放入结果集当中
        res.push(path);
        return;
    } else {
        if (left > 0) {
            genDfs(left - 1, right, path + '(', res); // 规模向下减,中间结果增加
        }
        if (right > 0) {  // 均等机会去使用 ( 或 ), 所以不能用 else if
            genDfs(left, right - 1, path + ')', res);
        }        
    }
}

/**
 * Tests
 */
console.log(generateParenthesis(3));



/**
 * Divide and Conquer way of writing the code
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesisDandC = function(n) {
    const res = [];
    let numOfLeft = n, numOfRight = n, path = '';
    dfs(numOfLeft, numOfRight, path, res);
    return res;
};

const dfs = (numOfLeft, numOfRight, path, res) => {
    if (numOfLeft > numOfRight) { // base case: invalid case - more left parens being lefts
        return;
    }

    if (numOfLeft > 0 || numOfRight > 0) {
        if (numOfLeft > 0) {
            dfs(numOfLeft - 1, numOfRight, path + '(', res);
        }
        if (numOfRight > 0) {
            dfs(numOfLeft, numOfRight - 1, path + ')', res);
        }
    } else { // conquer - can form an answer
        res.push(path);
    }
}