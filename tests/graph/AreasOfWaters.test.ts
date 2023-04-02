import { calcAreasOfWaters } from '../../src/graph/AreasOfWaters';

describe('Test AreasOfWaters', () => {
    test('Test - Ex 1', () => {
        const grid = [
            [1, 2, 2, 1, 0],
            [0, 2, 1, 0, 1],
            [0, 0, 1, 2, 1],
            [1, 1, 0, 2, 2],
            [0, 2, 1, 2, 0]
        ];
        expect(calcAreasOfWaters(grid)).toEqual([1, 1, 2, 4]);
    });
});
