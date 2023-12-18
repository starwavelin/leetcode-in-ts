/***************************************************************************
 * Problem No. : 647
 * Problem Name: Palindromic Substrings
 * Date        : December 18, 2023
 * Author      : @codingbro
 *
 * meta        : tag-recursion, tag-two-pointers tag-substring, tag-string
 ***************************************************************************/

/*
* @param {string} s
* @return {number}
*/
const countSubstrings = (s) => {
    const n = s.length;
    const obj = { res: 0 };

    for (let i = 0; i < n; i++) {
        // when s[i] serves as the center for an odd-length string
        countPS(s, i, i, n, obj);

        // when s[i] serves as the center for an even-length string
        countPS(s, i, i+1, n, obj);
    }

    return obj.res;
}

const countPS = (s, i, j, n, obj) => {
    while (i >= 0 && j < n && s[i] == s[j]) {
        obj.res += 1;
        i--;
        j++;
    }
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
console.log(countSubstrings('aaaa')); // expect 10
console.log(countSubstrings('aaaaa')); // expect 15
console.log(countSubstrings('aabac')); // expect 7