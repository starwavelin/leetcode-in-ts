/***************************************************************************
 * Problem No. : 133
 * Problem Name: Clone Graph
 * Date        : July 10, 2022
 * Author      : @codingbro
 *
 * meta        : tag-graph, tag-bfs, tag-dfs
 ***************************************************************************/

export class CloneGraph {
    // 解法1：BFS，先克隆点，再克隆边
    // 会比解法2麻烦，复杂度高，不推荐
    cloneGraphSolBfsType1(node: Node | null): Node | null {
        if (!node) {
            return null;
        }
        return this.bfsType1(node);
    }

    bfsType1 = (node: Node): Node => {
        // 建立旧的点和新的点的映射
        const map = new Map<Node, Node>();
        map.set(node, new Node(node.val));

        // 把处理过的旧点放到 nodes里面
        const nodes: Node[] = [node];

        // Initialization
        const q: Node[] = [];
        q.push(node);

        while (q.length) {
            const cur = q.shift() as Node;
            for (let nei of cur.neighbors) {
                if (!map.has(nei)) {
                    map.set(nei, new Node(nei.val));
                    nodes.push(nei);  // 注意，这个方法就是BFS的时候只处理 点的克隆
                    q.push(nei);
                }
            }
        }

        // Clone edges
        for (const node of nodes) {
            for (const nei of node.neighbors) {
                map.get(node)?.neighbors.push(map.get(nei) as Node);
            }
        }

        return map.get(node) as Node;
    }


    cloneGraphSolBfs(node: Node | null): Node | null {
        if (!node) {
            return null;
        }
        return this.bfs(node);
    }

    bfs = (node: Node): Node => {
        // 建立旧的点和新的点的映射
        const map = new Map<Node, Node>();
        map.set(node, new Node(node.val));
        
        // Initialization
        const q: Node[] = [];
        q.push(node);

        while (q.length) {
            const cur = q.shift() as Node;
            for (let nei of cur.neighbors) {
                // 克隆下一个点
                if (!map.has(nei)) {
                    map.set(nei, new Node(nei.val));
                    q.push(nei);
                }

                // 在新图中克隆点和点之间的边
                map.get(cur)?.neighbors.push(map.get(nei) as Node);
            }
        }

        return map.get(node) as Node;
    }

    

    cloneGraphSolDfs(node: Node | null): Node | null {
        if (!node) {
            return null;
        }
        const map = new Map<Node, Node>();
        return this.dfs(node, map);
    }

    dfs = (node: Node, map: Map<Node, Node>): Node =>  {
        map.set(node, new Node(node.val));
        for (let nei of node.neighbors) {
            if (!map.has(nei)) {
                this.dfs(nei, map);
            }
            map.get(node)?.neighbors.push(map.get(nei) as Node);
        }

        return map.get(node) as Node;
    }
}

class Node {
    val: number;
    neighbors: Node[];

    constructor(val?: number, neighbors?: Node[]) {
        this.val = !val ? 0 : val;
        this.neighbors = !neighbors ? [] : neighbors;
    }
}