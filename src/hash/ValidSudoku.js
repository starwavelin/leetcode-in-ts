/***************************************************************************
 * Problem No. : 36
 * Problem Name: Valid Sudoku
 * Date        : July 31, 2023
 * Author      : @codingbro
 *
 * meta        : tag-matrix, tag-set, tag-map, tag-math
 ***************************************************************************/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowMap = new Map(); // key: 0, 1, ... 8, value: set of numbers 
    const colMap = new Map(); // key: 0, 1, ... 8, value: set of numbers 
    const boxMap = new Map(); // key: `0-0`, `0-1`, ... `2-2`, value: set of numbers

    for (let i=0; i < 9; i++) { // i is row
        for (let j=0; j < 9; j++) { // j is col
            if (board[i][j] === '.') {
                continue;
            }

            // Check the false case: duplication found
            if (rowMap.get(i)?.has(board[i][j])
                || colMap.get(j)?.has(board[i][j])
                || boxMap.get(`${Math.floor(i/3)}-${Math.floor(j/3)}`)?.has(board[i][j])) {
                    return false;
                }
            
            // update the maps with the new cell value
            rowMap.set(i, rowMap.get(i)?.add(board[i][j]) || new Set().add(board[i][j]));
            colMap.set(j, colMap.get(j)?.add(board[i][j]) || new Set().add(board[i][j]));
            boxMap.set(`${Math.floor(i/3)}-${Math.floor(j/3)}`, boxMap.get(`${Math.floor(i/3)}-${Math.floor(j/3)}`)?.add(board[i][j]) || new Set().add(board[i][j])); 
        }
    }

    return true;
};