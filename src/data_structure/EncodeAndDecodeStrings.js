/***************************************************************************
 * Problem No. : 271
 * Problem Name: Encode and Decode Strings
 * Date        : July 31, 2023
 * Author      : @codingbro
 *
 * meta        : tag-data-structure, tag-string, tag-serialization
 ***************************************************************************/

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let s = '';
    for (let str of strs) {
        s += str.length + '/' + str;
    }
    return s;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    const res = [];
    let i = 0;
    while (i < s.length) {
        const delimIndex = s.indexOf('/', i);
        const len = Number(s.substring(i, delimIndex));
        const str = s.substring(delimIndex+1, delimIndex+1+len);
        res.push(str);
        i = delimIndex+1+len;
    }
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */