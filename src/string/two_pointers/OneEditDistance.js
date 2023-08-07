/***************************************************************************
 * Problem No. : 161
 * Problem Name: One Edit Distance
 * Date        : August 7, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers
 ***************************************************************************/

var isOneEditDistance = function(s, t) {
    if (s.length < t.length) {
        [s, t] = [t, s]; 
    }
    const diff = s.length - t.length;
    if (diff > 1 || s === t) 
        return false;
    else if (diff === 1) {
        for (let i = 0; i < t.length; i++) {
            if (s[i] !== t[i]) {
                return s.substring(i+1) === t.substring(i);
            }
        }
        return true; // 走到最后发现s恰好多的那个字符在最后
    } else { // diff is 0
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== t[i]) {
                count++;
            }
        }
        return count === 1 ? true : false;
    }
};

// Tests
console.log(isOneEditDistance('abc', 'ac')); // true
console.log(isOneEditDistance('abc', 'abc')); // false
console.log(isOneEditDistance('abc', 'abe')); // true
console.log(isOneEditDistance('acbbcda', 'abbdad')); // false