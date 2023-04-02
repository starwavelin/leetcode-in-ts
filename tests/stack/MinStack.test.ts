import { MinStack } from '../../src/stack/MinStack';

describe('Test MinStack class', () => {
    test('Test a series of push, pop, top and getMin methods', () => {
        const ms: MinStack = new MinStack();
        ms.push(-1);
        ms.push(0);
        ms.push(-5);
        ms.push(18);
        expect(ms.top()).toBe(18);
        expect(ms.getMin()).toBe(-5);
        ms.pop();
        ms.pop();
        expect(ms.top()).toBe(0);
        expect(ms.getMin()).toBe(-1);
    });
});
