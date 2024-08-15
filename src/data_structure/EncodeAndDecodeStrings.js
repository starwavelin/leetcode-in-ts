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
var encode = function (strs) {
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
var decode = function (s) {
  const res = [];
  let i = 0;
  while (i < s.length) {
    const delimIndex = s.indexOf('/', i);
    const len = Number(s.substring(i, delimIndex));
    const str = s.substring(delimIndex + 1, delimIndex + 1 + len);
    res.push(str);
    i = delimIndex + 1 + len;
  }
  return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

/*
 * Testing
 */
const strs1 = [''];
const encodedStrs1 = encode(strs1);
const decodedStrs1 = decode(encodedStrs1);
console.log(`encoded strs1: ${encodedStrs1}, decoded strs1: ${decodedStrs1}`);

const strs2 = ['a'];
const encodedStrs2 = encode(strs2);
const decodedStrs2 = decode(encodedStrs2);
console.log(`encoded strs2: ${encodedStrs2}, decoded strs2: ${decodedStrs2}`);

const strs3 = ['5/55/', 'hey'];
const encodedStrs3 = encode(strs3);
const decodedStrs3 = decode(encodedStrs3);
console.log(`encoded strs2: ${encodedStrs3}, decoded strs2: ${decodedStrs3}`);
