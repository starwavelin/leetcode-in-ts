/***************************************************************************
 * Problem No. : 74
 * Problem Name: Search a 2D Matrix
 * Date        : June 27, 2023
 * Author      : @codingbro
 *
 * meta        : tag-binary-search, tag-matrix
 ***************************************************************************/


/**
 * The Solution 2 below is more preferrable
 */

var searchMatrixSol1 = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    // find the possible line that target locates
    let l = 0, r = m-1, mid;
    while (l + 1 < r) {
        mid = l + Math.floor( (r-l) / 2 );
        if (matrix[mid][0] === target) {
            return true;
        } else if (matrix[mid][0] < target) {
            l = mid;
        } else {
            r = mid;
        }
    }

    let row = 0;
    if (matrix[r][0] === target) {
        return true;
    } else if (matrix[r][0] < target) {
        row = r;
    } else if (matrix[l][0] < target) {
        row = l;
    }

    // find the possible column that target locates
    l = 0, r = n-1;
    while (l + 1 < r) {
        mid = l + Math.floor( (r-l) / 2 );
        if (matrix[row][mid] === target) {
            return true;
        } else if (matrix[row][mid] < target) {
            l = mid;
        } else {
            r = mid;
        }
    }
    if (matrix[row][l] === target || matrix[row][r] === target) {
        return true;
    }

    return false;
};


// Test Solution 1
// console.log( searchMatrixSol1([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) ); // should return true
// console.log( searchMatrixSol1([[1],[3]], 3) ); // should return true;
// console.log( searchMatrixSol1([[1], [3], [5], [7], [9]], 5) ); // should return true;


var searchMatrixSol2 = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let l = 0, r = m*n-1;
    while (l + 1 < r) {
        const mid = l + Math.floor((r-l)/2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            l = mid;
        } else {
            r = mid;
        }
    }

    // Only left linear indexes l and r to check
    if (matrix[Math.floor(l/n)][l%n] === target || matrix[Math.floor(r/n)][r%n] === target) {
        return true;
    }

    return false;
};

// Test Solution 2
console.log( searchMatrixSol2([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) ); // should return true
console.log( searchMatrixSol2([[1],[3]], 3) ); // should return true;
console.log( searchMatrixSol2([[5],[7]], 5) ); // should return true;
console.log( searchMatrixSol2([[1], [3], [5], [7], [9]], 5) ); // should return true;
console.log( searchMatrixSol2([[1], [3], [5], [7], [9]], 18) ); // should return false;
console.log( searchMatrixSol2([[5],[7]], -3) ); // should return false;