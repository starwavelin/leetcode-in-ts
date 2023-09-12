/***************************************************************************
 * Problem No. : 1071
 * Problem Name: Greatest Common Divisor of Strings
 * Date        : September 11, 2023
 * Author      : @codingbro
 *
 * meta        : tag-greedy, tag-string
 ***************************************************************************/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    const m = str1.length, n = str2.length;

    const isDivisor = (l) => {
        if (m % l !== 0 || n % l !== 0) return false;
        const base = str1.substring(0, l);
        return base.repeat(m / l) === str1 && base.repeat(n / l) === str2;
    }

    for (let l = Math.min(m, n); l > 0; l--) {
        if (isDivisor(l)) {
            return str1.substring(0, l);
        }
    }
    return '';
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