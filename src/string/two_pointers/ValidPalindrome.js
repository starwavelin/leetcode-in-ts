/***************************************************************************
 * Problem No. : 125
 * Problem Name: Valid Palindrome
 * Date        : August 1, 2023
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers
 ***************************************************************************/


var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    const n = s.length;
    let l = 0, r = n-1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++; r--;
    }
    return true;
};

// Test
const str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str));
console.log(`Now the str is ${str}`);


// Pass by reference -- 2 examples for Array
const arr = [1, 2, 3, 4, 5];
var manipulateArr = (arr) => { // handle arr is copied, like arr' = [1, 2, 3, 4, 5]
    arr = ['a', 'b', 'haha'];
}

console.log(manipulateArr(arr));
console.log(`Now arr is ${arr}`); // [1, 2, 3, 4, 5]

const brr = ['t', 'e', 'a'];
var manipulateArr2 = (arr) => { // handle brr is copied, like brr' = ['t', 'e', 'a']
    arr[1] = 13; // But, each element in the brr' array is reference to the corresponding element in the brr array
}
console.log(manipulateArr2(brr));
console.log(`Now arr is ${brr}`); // [t, 13, a]

// 结论: 句柄(handle)始终是复制的,但Array的内部元素是按照索引来走
