/***************************************************************************
 * Problem No. : 240
 * Problem Name: Search a 2D Matrix II
 * Date        : June 28, 2023
 * Author      : @codingbro
 *
 * meta        : tag-matrix, tag-binary-search
 ***************************************************************************/

var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let row = m-1, col = 0;
    while (row >= 0 && col < n) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            col++;
        } else {
            row--;
        }
    }

    return false;
};

// Test Solution
console.log( searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5) ); // should return true
console.log( searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], -3) ); // should return false;