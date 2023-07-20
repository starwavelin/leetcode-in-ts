/***************************************************************************
 * Problem No. : 378
 * Problem Name: Kth Smallest Element in a Sorted Matrix
 * Date        : July 18, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search, tag-matrix
 ***************************************************************************/

/**
 * Solution 2: use Binary Search
 */
var kthSmallest = function(matrix, k) {
    let n = matrix.length;
    let l = matrix[0][0];
    let r = matrix[n-1][n-1];
    
    while (l < r) {
        let mid = (l + r) >> 1; // 右移一位表示除以2
        let count = countLessOrEqual(matrix, mid);
        
        if (count < k) {
            l = mid + 1;
        } else {
            r = mid;
        } 
    }
    return l;
};

const countLessOrEqual = (matrix, target) => {
    let count = 0, n = matrix.length, i = n - 1, j = 0; // i 从最后一行, j 从第0列开始走起
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= target) {
            count += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return count;
}


// Test using an example
/**
 * [
 *  [1, 13],
 *  [29, 99]
 * ]
 * k=2, 
 * should return 13
 */
const matrix = [ [1, 13], [29, 99] ];
console.log(kthSmallest(matrix, 2)); // should return 13