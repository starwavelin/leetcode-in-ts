import { limitSlidingWindow } from '../../src/data_structure/RateLimitSimulator2';

describe('Test RateLimit Simulator 2 - limitSlidingWindow method', () => {
    // test('Assume one hit at a timestamp - original example', () => {
    //     expect(limitSlidingWindow(1100)).toBe(true);

    //     expect(limitSlidingWindow(1200)).toBe(true);

    //     expect(limitSlidingWindow(1300)).toBe(false);

    //     expect(limitSlidingWindow(2100)).toBe(true);

    //     expect(limitSlidingWindow(2150)).toBe(false);

    //     expect(limitSlidingWindow(2199)).toBe(false);

    //     expect(limitSlidingWindow(2200)).toBe(true);
    // });

    /**
     * * Example of a max of 2 requests / sec:
     *  Timestamp           Outcome
     *  01.100              PASS
     *  02.120              PASS         compare with last one, exceed 1 sec duration, set this to be new head
     *  02.150              PASS
     *  02.200              FAIL
     *  03.119              FAIL
     *  03.120              PASS
     */

    test('Assume one hit at a timestamp - original example', () => {
        expect(limitSlidingWindow(1100)).toBe(true);

        expect(limitSlidingWindow(2120)).toBe(true);

        expect(limitSlidingWindow(2150)).toBe(true);

        expect(limitSlidingWindow(2200)).toBe(false);

        expect(limitSlidingWindow(3119)).toBe(false);

        expect(limitSlidingWindow(3120)).toBe(true);
    });
});
