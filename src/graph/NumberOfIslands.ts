/***************************************************************************
 * Problem No. : 200
 * Problem Name: Number of Islands
 * Date        : July 2, 2022
 * Author      : @codingbro
 *
 * meta        : tag-graph, tag-matrix, tag-bfs, tag-dfs
 ***************************************************************************/

export function numIslands(grid: string[][]): number {
    // m - num of rows, n - num of cols
    const m = grid.length;
    const n = grid[0].length;

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++;
                dfs(grid, i, j, m, n);
            }
        }
    }
    
    return res;
}

const dfs = (grid: string[][], row: number, col: number, m: number, n: number) => {
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === '0') {
        return;
    }

    grid[row][col] = '0'; // dye the cell
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
        const rowNum = row + dx[i];
        const colNum = col + dy[i];
        dfs(grid, rowNum, colNum, m, n);
    }
}


export function numIslandsSolBfs(grid: string[][]): number {
    return 0; // just keep the compiler happy
}