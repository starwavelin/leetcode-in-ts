import { MaxStack } from '../../src/stack/MaxStack';

describe('Test MinStack class', () => {

    test('Test a series of push, pop, top and peekMax, popMax methods - Ex 1', () => {
        const ms: MaxStack = new MaxStack();
        ms.push(5);
        ms.push(4);
        ms.push(2);
        expect(ms.peekMax()).toBe(5);
        expect(ms.top()).toBe(2);
        expect(ms.popMax()).toBe(5);
        expect(ms.top()).toBe(2);
        expect(ms.peekMax()).toBe(4);
    });

    test('Test a series of push, pop, top and peekMax, popMax methods - Ex 2', () => {
        const ms: MaxStack = new MaxStack();
        ms.push(5);
        ms.push(6);
        ms.push(3);
        expect(ms.peekMax()).toBe(6);
        expect(ms.top()).toBe(3);
        expect(ms.popMax()).toBe(6);
        expect(ms.top()).toBe(3);
        expect(ms.peekMax()).toBe(5);
    });

});