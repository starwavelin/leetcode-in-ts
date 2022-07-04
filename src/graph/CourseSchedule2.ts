/***************************************************************************
 * Problem No. : 210
 * Problem Name: Course Schedule II
 * Date        : July 4, 2022
 * Author      : @codingbro
 *
 * meta        : tag-graph, tag-topological-sort, tag-bfs, tag-dfs
 ***************************************************************************/


function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    // Construct the graph and indegrees map
    const n = numCourses;
    const graph = new Map<number, number[]>();
    const indegrees = new Map<number, number>();
    for (const pair of prerequisites) {
        if (!graph.has(pair[1])) {
            graph.set(pair[1], []);
        }
        graph.get(pair[1])?.push(pair[0]);

        indegrees.set(pair[0], indegrees.has(pair[0]) ? indegrees.get(pair[0]) as number + 1 : 1)
    }

    const res: number[] = [];

    bfs(graph, indegrees, n, res);

    return res.length < n ? [] : res;
};

const bfs = (graph: Map<number, number[]>, indegrees: Map<number, number>, n: number, res: number[]): void => {
    const q: number[] = [];

    // Initialization
    for (let i = 0; i < n; i++) {
        if (!indegrees.get(i)) {
            q.push(i); // 把indegree为0的节点加到 Q
            res.push(i); // 把indegree为0的节点加到 结果 res
        }
    }

    // BFS process
    while (q.length) {
        const cur = q.shift() as number;
        if (graph.has(cur)) {
            const neis = graph.get(cur) as number[];
            for (const nei of neis) {
                indegrees.set(nei, indegrees.get(nei) as number - 1);
                if (!indegrees.get(nei)) {
                    q.push(nei);
                    res.push(nei);
                }
            }
        }        
    }
}