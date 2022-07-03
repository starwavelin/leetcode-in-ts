import { numIslands } from '../../src/graph/NumberOfIslands';

describe('Test NumberOfIslands Sol DFS', () => {
    test('Test - Ex 1', () => {
        const grid = [
            ['1', '1', '0'],
            ['1', '1', '0'],
            ['0', '0', '1']
        ]
        expect(numIslands(grid)).toBe(2);
    });

    test('Test - Ex 2', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ]
        expect(numIslands(grid)).toBe(3);
    });
})