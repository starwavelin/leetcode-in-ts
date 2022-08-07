/***************************************************************************
 * Problem No. : 151
 * Problem Name: Reverse Words in a String
 * Date        : August 7, 2022
 * Author      : @codingbro
 *
 * meta        : tag-two-pointers, tag-string
 ***************************************************************************/

class ReverseWordsInAString1 {
    /**
     * Unlike LC 186, this question doesn't require you to in-place modify the input string s.
     * 
     * 方法：双指针一个跟随另一个
     * 使用两个指针从右向左遍历原数组，假定一个指针i,另一个j。
     * j一开始指在s.length位置,i一开始从s.length-1开始。
     * i逐渐减小，我们让j去跟随i,但只在所指元素是空格的时候才跟随 -- 这就保证j始终指向一个单词的最尾字符+1的位置。
     * 当i的index为0或者i-1所指的元素为空格时，我们通过substring(i,j)方法截取出想要的单词。
     * 
     * 时间复杂度：O(n)
     * 空间复杂度：O(1)
     * @param s 
     */
    reverseWords(s: string): string {
        let res = '';
        const n = s.length;
        let j = n;
        for (let i = n-1; i >= 0; i--) {
            if (s[i] === ' ') {
                j = i;
            } else if (i === 0 || s[i-1] === ' ') {  // substring to get what we need
                if (res.length === 0) { // 这个判断防止加上多于的尾空格
                    res += s.substring(i, j);
                } else {
                    res += ' ' + s.substring(i, j);
                }
            }
        }
        return res;
    };
}