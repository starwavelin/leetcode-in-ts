/***************************************************************************
 * Problem No. : 20001
 * Problem Name: Reverse String and Compare Lexicographical Order
 * Date        : November 17, 2023
 * Author      : @codingbro
 *
 * meta        : tag-string, tag-math, tag-two-pointers, tag-amazon
 ****************************************************************************/

/**
 * Find the number of times that the lexicographical order of the reversed substring of length k
 * is smaller than the original substring
 * 
 * @param {string} s 
 * @param {number} k 
 * @return {number}
 */
const numOfWays = (s, k) => {
    const str = s.toLowerCase();
    const n = str.length;
    let count = 0;
    for (let i = 0; i+k-1 < n; i++) {
        if (str[i].charCodeAt(0) > str[i+k-1].charCodeAt(0)) { // ie. zon > noz
            count++;
        }
    }
    return count;
}


/**
 * Tests
 */
const s1 = 'amazon';
const k1 = 3;
console.log(numOfWays(s1, k1)); // expect 1

const s2 = 'ababa';
const k2 = 2;
console.log(numOfWays(s2, k2)); // expect 2

const s3 = 'Lexico';
const k3 = 2;
console.log(numOfWays(s3, k3)); // expect 3

const s4 = 'mom';
const k4 = 3; // k is greater than or equal to the length of s
console.log(numOfWays(s4, k4)); // expect 0

const s5 = 'josh';
const k5 = 5; // k is greater than or equal to the length of s
console.log(numOfWays(s5, k5)); // expect 0