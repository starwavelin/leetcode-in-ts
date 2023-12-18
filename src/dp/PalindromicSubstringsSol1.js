/***************************************************************************
 * Problem No. : 647
 * Problem Name: Palindromic Substrings
 * Date        : December 14, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-substring, tag-string
 ***************************************************************************/


/**
 * Brute Force solution
 *  Time complexity: O(n^3)
 *  Space complexity: O(1)
 * 
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    const n = s.length;
    let res = 0;

    // trivia
    if (s.length == 1) {
        return 1;
    }

    for (let l = 0; l < n; l++) {
        res += 1; // add the letter itself
        for (let r = l + 1; r < n; r++) {
            if (isPalindrome(s, l, r)) {
                res += 1;
            }
        }
    }

    return res;
};

const isPalindrome = (s, l, r) => {
    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}


/**
 * Tests
 */
console.log(countSubstrings('abc')); // expect 3
console.log(countSubstrings('abdc')); // expect 4
console.log(countSubstrings('abda')); // expect 4
console.log(countSubstrings('aaa')); // expect 6
console.log(countSubstrings('baa')); // expect 4
console.log(countSubstrings('baab')); // expect 6
