/***************************************************************************
 * Problem No. : 54
 * Problem Name: Spiral Matrix
 * Date        : Nov 29, 2023
 * Author      : @codingbro
 *
 * meta        : tag-matrix, tag-simulation
 ***************************************************************************/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
    const res = [];
    
    // get m and n first
    const m = matrix.length;
    const n = matrix[0].length;

    // handle if one row array (including one element array)
    if (m == 1) {
        return matrix[0];
    }

    // handle if one col array (including one element array case)
    if (n == 1) {
        for (let i = 0; i < m; i++) {
            res.push(matrix[i][0]);
        }
        return res;
    }

    // check if an element is visited using a help matrix, 0 - not yet, 1 - visited
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(0));
    const dir = [ // directioin matrix, consider from Origin [0,0], the order matters because spiral order is a specific right, down, left, up order
        [0, 1], // to right
        [1, 0], // downward
        [0, -1], // to left
        [-1, 0] // upward
    ];

    let round = 0; // count the number of lun2 (轮)
    let i = 0, j = 0; // i - row num, j - col num

    visited[i][j] = 1; // handle origin first
    res.push(matrix[i][j]);

    for (let k = 0; k < m * n; k++) {
        // get the next position using round counter in the dir map
        i += dir[round % 4][0];
        j += dir[round % 4][1];

        // increase the round counter for the first 3 corners (or turning points)
        if ((i == 0 && j == n-1) || (i == m-1 && j == n-1) || (i == m-1 && j == 0)) {
            round++;
        }

        // determine the time to return the result
        // if (i >= m || i < 0 || j >= n || j < 0) {
        //     return res;
        // }

        // mark visited matrix and store the visited grid into res
        if (visited[i][j] == 0) {
            visited[i][j] = 1;
            res.push(matrix[i][j]);
        }

        // handle round increase in the inner spirals
        switch (round % 4) {
            case 0: // downward
                if (j + 1 <= n - 1 && visited[i][j+1] == 1) {
                    round++;
                }
                break;
            case 1: // leftward
                if (i + 1 <= m - 1 && visited[i+1][j] == 1) {
                    round++;
                }
                break;
            case 2: // upward
                if (j - 1 >= 0 && visited[i][j-1] == 1) {
                    round++;
                }
                break;
            case 3:  // rightward
                /* when we have the round val to be 3, we are about to move rightward, 
                so case 3 should be the rightward case, then r -> d -> l -> u order (3 -> 0 -> 1 -> 2) */
                if (i - 1 >= 0 && visited[i-1][j] == 1) {
                    round++;
                }
                break;
        }
    }

    return res;
};