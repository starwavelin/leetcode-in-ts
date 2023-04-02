/***************************************************************************
 * Problem No. : 207
 * Problem Name: Course Schedule
 * Date        : July 2, 2022
 * Author      : @codingbro
 *
 * meta        : tag-graph, tag-topological-sort, tag-bfs, tag-dfs
 ***************************************************************************/

/**
 * The given graph's notation is an edge vector notation
 * ie. a prerequisite [1, 0] meaning Course 0 is a prerequisite for Course 1
 *  [1, 0] is an edge vector
 * @param numCourses
 * @param prerequisites
 */
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const n = numCourses;

    // 1. Construct the graph (adjacency list) and also the indegrees map at the mean time
    const graph = new Map<number, Array<number>>(); // key - a given vertice, value - list of adjacent verticies
    const indegrees = new Map<number, number>(); // key - a given vertice, value - its indegree

    for (const pair of prerequisites) {
        // set prerequisite and its next directing vertice
        if (!graph.has(pair[1])) {
            graph.set(pair[1], []);
        }
        graph.get(pair[1])?.push(pair[0]);

        // set prerequisite's next directing course's indegree
        indegrees.set(pair[0], indegrees.has(pair[0]) ? indegrees.get(pair[0])! + 1 : 1);
    }

    // Use BFS to do Topological Sort
    // console.log('graph is');
    // console.log(graph);

    // console.log('indegrees is');
    // console.log(indegrees);

    const res: number[] = [];

    bfsProcess(graph, indegrees, n, res);

    // console.log(res);

    return res.length === n;
}

const bfsProcess = (
    graph: Map<number, Array<number>>,
    indegrees: Map<number, number>,
    n: number,
    res: number[]
): void => {
    const q = [];
    for (let i = 0; i < n; i++) {
        if (!indegrees.get(i)) {
            // Vertex i's either undefined or is 0
            q.push(i);
            res.push(i);
        }
    }

    while (q.length) {
        const cur = q.shift() as number;
        if (graph.has(cur)) {
            // need this checking cuz graph doesn't contain nodes whose out-degree is 0
            // ie. 0 -> 1, 1 -> 2, 2 is not recorded in the graph
            const neighbors = graph.get(cur) as number[];
            for (const nei of neighbors) {
                indegrees.set(nei, indegrees.get(nei)! - 1);

                // console.log(`nei is: ${nei}, indegrees.get(nei) is ${indegrees.get(nei)}` );

                // Set next vertex that needs to be processed
                if (!indegrees.get(nei)) {
                    q.push(nei);
                    res.push(nei);
                }
            }
        }
    }
};
