/***************************************************************************
 * Problem No. : 455
 * Problem Name: Assign Cookies
 * Date        : May 21, 2022
 * Author      : @codingbro
 *
 * meta        : tag-array, tag-greedy
 ***************************************************************************/

export function findContentChildren(children: number[], cookies: number[]): number {
    children.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);

    // console.log(`children array: ${children}`);
    // console.log(`cookies array: ${cookies}`);

    let i = 0, j = 0; // i - loop counter for childre, j - loop counter for cookies
    while (i < children.length && j < cookies.length) {
        if (cookies[j] >= children[i]) {
            i++;
        }
        j++;
    }
    return i;
}

// console.log(findContentChildren([1, 2, 4], [1, 5, 1])); // return 2
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])); // return 2