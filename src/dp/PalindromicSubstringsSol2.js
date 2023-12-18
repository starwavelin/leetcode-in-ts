/***************************************************************************
 * Problem No. : 647
 * Problem Name: Palindromic Substrings
 * Date        : December 14, 2023
 * Author      : @codingbro
 *
 * meta        : tag-dp, tag-substring, tag-string
 ***************************************************************************/


/**
 * Dynamic Programming Apprroach
 * 
 * This question can use a 2-D square matrix for DP, 
 *  the starting index can be the row and ending index can be the column.
 * 
 * 1. DP State Definition:
 *  Let dp[i][j] denote if the substring formed by s[i, j] (i is the starting index and j the ending index) is a palindromic substring.
 *  If yes, mark it true; ow mark it false.
 * 
 * 2. Initializatioin:
 *  Let i starts from the end position of the string and going backward to 0, 
 *  let j starts from i and going forward to n-1 position.
 *  Using this traversal style can help us get value from info that whether the inner substring is a PS
 * 
 *  if s[i] == s[j] and j - i <= 2, mark dp[i][j] true
 *  if s[i] != s[j] mark dp[i][j] false
 *    
 * 3. Transition Equation: 
 *  The recursive case is looking into the condition that
 *  if s[i] == s[j] and j - i > 2
 *      if dp[i+1][j-1] is true  (looking into the lower left diagonal grid, 
 *             to see if the inner substring enclosed by s(i, j) with both i and j excluded is also a palindrome substring)
 *          mark dp[i][j] true
 *      otherwise, (meaning the enclosed substring is not a palindromic substring)
 *          mark dp[i][j] false
 *  
 * 4. Final Result:
 *  Use a res variable to store the number of truthy value we encountered during the grid filling process.
 *  return res. 
 *  
 * 
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    let res = 0;
    const n = s.length;
    const dp = new Array(n).fill(undefined).map(() => new Array(n).fill(0));

    for (let i = n-1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] == s[j]) {
                if (j - i <= 2) { // Base case for truthy value
                    dp[i][j] = true;
                    res++;
                } else if (dp[i+1][j-1]) { // recursive case: enclosed substring is PS
                    dp[i][j] = true;
                    res++;
                } else {
                    dp[i][j] = false;    
                }
            } else { // Base case for falsey value
                dp[i][j] = false;
            }
        }
    }

    return res;
};


/**
 * Tests
 */
console.log(countSubstrings('abc')); // expect 3
console.log(countSubstrings('abdc')); // expect 4
console.log(countSubstrings('abda')); // expect 4
console.log(countSubstrings('aaa')); // expect 6
console.log(countSubstrings('baa')); // expect 4
console.log(countSubstrings('baab')); // expect 6
console.log(countSubstrings('aaaa')); // expect 10
console.log(countSubstrings('aaaaa')); // expect 15
console.log(countSubstrings('aabac')); // expect 7

