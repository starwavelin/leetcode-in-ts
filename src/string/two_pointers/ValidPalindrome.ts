/***************************************************************************
 * Problem No. : 125
 * Problem Name: Valid Palindrome
 * Date        : July 1, 2022
 * Author      :	@codingbro
 *
 * meta        : tag-two-pointers, tag-string
 ***************************************************************************/

export function isPalindrome(s: string): boolean {
    const n = s.length;
    let start = 0,
        end = n - 1;
    while (start < end) {
        if (!isAlphaNum(s[start])) {
            start++;
        } else if (!isAlphaNum(s[end])) {
            end--;
        } else if (
            (s[start].charCodeAt(0) + 32 - 'a'.charCodeAt(0)) % 32 !==
            (s[end].charCodeAt(0) + 32 - 'a'.charCodeAt(0)) % 32
        ) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
}

const isAlphaNum = (c: string): boolean => {
    return /^[0-9a-zA-Z]$/.test(c);
};
