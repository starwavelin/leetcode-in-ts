/***************************************************************************
 * Problem No. :
 * Problem Name: Area of Waters
 * Date        : July 3, 2022
 * Author      : @codingbro
 *
 * meta        : tag-graph, tag-matrix, tag-bfs, tag-dfs
 ***************************************************************************/

/**
 * 题目描述：
 * 给出一个由数字0,1,2组成的方阵，其中0代表水，1,2这类非0数都代表陆地。
 * 由一个数字0按照横竖斜3个方向连到其他0则组成了一片水域。
 * 水域的面积是该水域所占的0的个数。
 *
 * 求给定方阵中的水域面积，按照从小到大排列。
 *
 * 举例：
 * 1 2 1 1 0
 * 0 1 1 0 1
 * 0 0 1 1 1
 * 1 1 0 1 1
 * 0 1 1 1 0
 *
 * 这里面就有4个水域，其中两个面积为1，一个为2，一个为4，所以返回 [1, 1, 2, 4] 即为所得。
 */

export function calcAreasOfWaters(grid: number[][]): number[] {
    // m = num of rows, n = num of columns
    const m = grid.length;
    if (m === 0) {
        return [];
    }
    const n = grid[0].length;

    const res: number[] = [];
    const countObj = { count: 0 };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                // found a piece of water
                dfs(grid, i, j, m, n, countObj);
                res.push(countObj.count);
                countObj.count = 0; // reset count for the use of another new area of water
            }
        }
    }
    return res.sort((a, b) => a - b);
}

const dfs = (grid: number[][], row: number, col: number, m: number, n: number, countObj: any): void => {
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] !== 0) {
        return;
    }

    grid[row][col] = 1; // dye the cell
    countObj.count += 1;

    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    for (let i = 0; i < 8; i++) {
        const rowNum = row + dx[i];
        const colNum = col + dy[i];
        dfs(grid, rowNum, colNum, m, n, countObj);
    }
};

// Tests
// const grid1 = [
//     [1, 0],
//     [0, 1]
// ];
// console.log(calcAreasOfWaters(grid1)); // should return [2]

// const grid2 = [
//     [1, 0, 1],
//     [0, 1, 1],
//     [1, 1, 0]
// ];
// console.log(calcAreasOfWaters(grid2)); // should return [1, 2]

// const grid3 = [
//     [1, 2, 2, 1, 0],
//     [0, 2, 1, 0, 1],
//     [0, 0, 1, 2, 1],
//     [1, 1, 0, 2, 2],
//     [0, 2, 1, 2, 0]
// ];
// console.log(calcAreasOfWaters(grid3)); // should return [1, 1, 2, 4]
