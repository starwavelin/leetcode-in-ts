import { canFinish } from '../../src/graph/CourseSchedule';

describe('Test CourseSchedule Sol 1', () => {
    test('Test - Ex 1', () => {
        const prerequisites = [
            [1, 0],
            [2, 1],
        ]
        expect(canFinish(3, prerequisites)).toBe(true);
    });

    test('Test - Ex 2', () => {
        const prerequisites = [
            [1, 0],
            [2, 1],
            [1, 2]
        ]
        expect(canFinish(3, prerequisites)).toBe(false);
    });
})