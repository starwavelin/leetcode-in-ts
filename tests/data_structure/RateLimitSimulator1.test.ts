import { limitFixedWindow } from '../../src/data_structure/RateLimitSimulator1';

describe('Test RateLimit Simulator 1 - limitFixedWindow method', () => {
    test('Assume one hit at a timestamp', () => {
        // a hit comes in at 200th millisecond
        expect(limitFixedWindow(200)).toBe(true);

        // a hit comes in at 300th millisecond
        expect(limitFixedWindow(300)).toBe(true);

        // a hit comes in at 500th millisecond, will be false cuz 3 hits within 1 sec
        expect(limitFixedWindow(500)).toBe(false);

        // a hit comes in at 1100th millisecond, will be true cuz 1 sec has passed, reset count to 1
        expect(limitFixedWindow(1100)).toBe(true);

        // a hit comes in at 1200th millisecond
        expect(limitFixedWindow(1200)).toBe(true);

        // a hit comes in at 1300th millisecond
        expect(limitFixedWindow(1300)).toBe(false);

        // a hit comes in at 1400th millisecond
        expect(limitFixedWindow(1400)).toBe(false);
    });

    // test('Assume one hit at a timestamp', () => {
    //     expect(limitFixedWindow(1100)).toBe(true);

    //     expect(limitFixedWindow(1200)).toBe(true);

    //     expect(limitFixedWindow(1300)).toBe(false);

    //     expect(limitFixedWindow(2100)).toBe(true);

    //     expect(limitFixedWindow(2150)).toBe(true);

    //     expect(limitFixedWindow(2200)).toBe(false);
    // });
});
