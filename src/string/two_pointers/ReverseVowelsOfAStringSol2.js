/***************************************************************************
 * Problem No. : 345
 * Problem Name: Reverse Vowels of a String
 * Date        : September 15, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-string
 ***************************************************************************/

/**
 * Typical 4 cases evaluation so that it doesn't involve in dedup of non-vowels in the while loop;
 * this is similar to a Binary Search template.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let l = 0, r = s.length-1, n = s.length;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const sArr = [...s];
    while (l < r) {
        // skip non-vowels on the left side
        while (l < n && !vowels.includes(sArr[l])) {
            l++;
        }

        // skip non-vowels on the right side
        while (r >= 0 && !vowels.includes(sArr[r])) {
            r--;
        }

        if (l < r && vowels.includes(sArr[l]) && vowels.includes(sArr[r])) {
            [sArr[l], sArr[r]] = [sArr[r], sArr[l]];
            l++; r--;
        }
    }
    return sArr.join('');
};