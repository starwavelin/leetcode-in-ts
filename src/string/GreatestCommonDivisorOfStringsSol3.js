/***************************************************************************
 * Problem No. : 1071
 * Problem Name: Greatest Common Divisor of Strings
 * Date        : September 11, 2023
 * Author      : @codingbro
 *
 * meta        : tag-math, tag-string
 ***************************************************************************/

/**
 * The Mathematical solution
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 === str2 + str1) {
        return str1.substring(0, gcd(str1.length, str2.length));
    }
    return '';
};

const gcd = (x, y) => {
    if (y == 0) return x;
    return gcd(y, x % y);
}


// Tests
console.log(gcdOfStrings('AAAAAA', 'AA')); // AA
console.log(gcdOfStrings('AAAAAA', 'AAA')); // AAA
console.log(gcdOfStrings('ABCABC', 'ABC')); // ABC
console.log(gcdOfStrings('ABABAB', 'ABAB')); // AB
console.log(gcdOfStrings('ABABAB', 'ABA')); // ''
console.log(gcdOfStrings('LEET', 'CODE')); // ''

console.log(gcdOfStrings('AA', 'AAAAAA')); // AA
console.log(gcdOfStrings('AAA', 'AAAAAA')); // AAA
