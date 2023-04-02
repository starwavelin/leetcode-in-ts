/***************************************************************************
 * Problem No. : 186
 * Problem Name: Reverse Words in a String II
 * Date        : August 7, 2022
 * Author      : @codingbro
 *
 * meta        : tag-string, tag-two-pointers
 ***************************************************************************/

/**
 * Confirmed that the input string does not have leading or trailing spaces
 * and each word is exactly seperated by one space
 Do not return anything, modify nums1 in-place instead.
 */
function reverseWords(s: string[]): void {
    const n = s.length;
    let i = 0,
        j = n - 1;
    reverse(i, j, s);
    i = 0;
    j = i + 1;
    while (i < n && j <= n) {
        if (j == n || s[j] == ' ') {
            reverse(i, j - 1, s);
            i = j + 1;
        }
        j++;
    }
}

const reverse = (i: number, j: number, s: string[]): void => {
    while (i < j) {
        swap(i, j, s);
        i++;
        j--;
    }
};

const swap = (i: number, j: number, s: string[]): void => {
    const c = s[i];
    s[i] = s[j];
    s[j] = c;
};

/**
 * TEST
 */
const s = ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'];
reverseWords(s);
console.log(s);
