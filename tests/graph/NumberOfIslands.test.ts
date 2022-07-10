import { NumberOfIslands } from '../../src/graph/NumberOfIslands';

describe('Test NumberOfIslands Sol DFS', () => {
    const instance = new NumberOfIslands();

    test('Test - Ex 1', () => {
        const grid = [
            ['1', '1', '0'],
            ['1', '1', '0'],
            ['0', '0', '1']
        ]
        expect(instance.numIslands(grid)).toBe(2);
    });

    test('Test - Ex 2', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ]
        expect(instance.numIslands(grid)).toBe(3);
    });


    test('Test BFS - Ex 1', () => {
        const grid = [
            ['1', '1', '0'],
            ['1', '1', '0'],
            ['0', '0', '1']
        ]
        expect(instance.numIslandsSolBfs(grid)).toBe(2);
    });

    test('Test BFS - Ex 2', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ]
        expect(instance.numIslandsSolBfs(grid)).toBe(3);
    });


    test('Test BFS Type 2 - Ex 1', () => {
        const grid = [
            ['1', '1', '0'],
            ['1', '1', '0'],
            ['0', '0', '1']
        ]
        expect(instance.numIslandsSolBfsType2(grid)).toBe(2);
    });

    test('Test BFS Type 2 - Ex 2', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ]
        expect(instance.numIslandsSolBfsType2(grid)).toBe(3);
    });

    test('Test BFS Type 2 - Ex 3', () => {
        const grid = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '1', '0', '1', '1'],
        ]
        expect(instance.numIslandsSolBfsType2(grid)).toBe(4);
    });
})