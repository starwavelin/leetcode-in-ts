/***************************************************************************
 * Problem No. : 200
 * Problem Name: Number of Islands
 * Date        : July 2, 2022
 * Author      : @codingbro
 *
 * meta        : tag-graph, tag-matrix, tag-bfs, tag-dfs
 ***************************************************************************/

export class NumberOfIslands {
    numIslands(grid: string[][]): number {
        // m - num of rows, n - num of cols
        const m = grid.length;
        const n = grid[0].length;

        let res = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === '1') {
                    this.dfs(grid, i, j, m, n);
                    res++;
                }
            }
        }

        return res;
    }

    dfs = (grid: string[][], row: number, col: number, m: number, n: number) => {
        // 递归的退出条件
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0'; // dye the cell
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        for (let i = 0; i < 4; i++) {
            const rowNum = row + dx[i];
            const colNum = col + dy[i];
            this.dfs(grid, rowNum, colNum, m, n);
        }
    };

    numIslandsSolBfs(grid: string[][]): number {
        const m = grid.length;
        const n = grid[0].length;

        let res = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === '1') {
                    this.bfs(grid, i, j, m, n);
                    res++;
                }
            }
        }

        return res;
    }

    bfs = (grid: string[][], row: number, col: number, m: number, n: number): void => {
        // 1. 先染色
        grid[row][col] = '0';

        // 2. Initialization
        const q: number[] = [];
        const pos = row * n + col;
        q.push(pos);

        // 3. dx dy
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];

        // 4. 经典BFS
        while (q.length) {
            const cur = q.shift() as number; // the current position

            for (let i = 0; i < 4; i++) {
                const rowNum = Math.trunc(cur / n) + dx[i];
                const colNum = (cur % n) + dy[i];

                //继续BFS染色的合理条件
                if (rowNum >= 0 && rowNum < m && colNum >= 0 && colNum < n && grid[rowNum][colNum] === '1') {
                    grid[rowNum][colNum] = '0';
                    q.push(rowNum * n + colNum);
                }
            }
        }
    };

    numIslandsSolBfsType2(grid: string[][]): number {
        const m = grid.length;
        const n = grid[0].length;

        let res = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === '1') {
                    this.bfsType2(grid, i, j, m, n);
                    res++;
                }
            }
        }

        return res;
    }

    bfsType2 = (grid: string[][], row: number, col: number, m: number, n: number): void => {
        // 1. 先染色
        grid[row][col] = '0';

        // 2. Initialization
        const q: number[][] = [];
        q.push([row, col]);

        // 3. dx dy
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];

        // 4. 经典BFS
        while (q.length) {
            const cur = q.shift() as number[]; // the current position

            for (let i = 0; i < 4; i++) {
                const rowNum = cur[0] + dx[i];
                const colNum = cur[1] + dy[i];

                //继续BFS染色的合理条件
                if (rowNum >= 0 && rowNum < m && colNum >= 0 && colNum < n && grid[rowNum][colNum] === '1') {
                    grid[rowNum][colNum] = '0';
                    q.push([rowNum, colNum]);
                }
            }
        }
    };
}
