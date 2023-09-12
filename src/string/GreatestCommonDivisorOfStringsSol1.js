/***************************************************************************
 * Problem No. : 1071
 * Problem Name: Greatest Common Divisor of Strings
 * Date        : September 11, 2023
 * Author      : @codingbro
 *
 * meta        : tag-math, tag-string
 ***************************************************************************/

/**
 * Same concept as the old solution, but uses
 *  min(m, n) [b/c the gcd cannot be longer than the min(m,n)]
 *  str.repeat(times) function to greatly simplify the code
 */
var gcdOfStrings = function (str1, str2) {
    let res = '';
    const m = str1.length, n = str2.length;

    for (let i = 0; i < Math.min(m, n); i++) {
        if (m % (i + 1) !== 0 || n % (i + 1) !== 0) continue;
        let prefix = str1.substring(0, i + 1); // base, possible x
        if (prefix.repeat(m / (i + 1)) !== str1) continue;
        if (prefix.repeat(n / (i + 1)) !== str2) continue;

        res = prefix;
    }

    return res;
};


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStringsOld = function (str1, str2) {
    let res = '';
    const m = str1.length, n = str2.length;

    for (let i = 0; i < m; i++) {
        if (m % (i + 1) !== 0 || n % (i + 1) !== 0) continue;
        let pre = str1.substring(0, i + 1), target1 = '', target2 = '';

        for (let j = 0; j < m / (i + 1); j++) {
            target1 += pre;
        }
        if (target1 !== str1) continue;

        for (let j = 0; j < n / (i + 1); j++) {
            target2 += pre;
        }
        if (target2 !== str2) continue;

        // found one eligible x
        res = pre;
    }

    return res;
};


// Tests
console.log(gcdOfStrings('AAAAAA', 'AA')); // AA
console.log(gcdOfStrings('AAAAAA', 'AAA')); // AAA
console.log(gcdOfStrings('ABCABC', 'ABC')); // ABC
console.log(gcdOfStrings('ABABAB', 'ABAB')); // AB
console.log(gcdOfStrings('ABABAB', 'ABA')); // ''
console.log(gcdOfStrings('LEET', 'CODE')); // ''

console.log(gcdOfStrings('AA', 'AAAAAA')); // AA
console.log(gcdOfStrings('AAA', 'AAAAAA')); // AAA
