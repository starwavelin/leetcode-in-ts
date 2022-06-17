import { Stack } from '../../src/stack/Stack';

describe('Test Stack class\'s behavior', () => {

    const myStack = new Stack(['apple', 'pear']);

    test('length is 2', () => {
        expect(myStack.length).toBe(2);
    });

    test('peek is pear', () => {
        expect(myStack.peek()).toBe('pear');
    });

    test('pop once', () => {
        expect(myStack.pop()).toBe('pear');
        expect(myStack.peek()).toBe('apple');
    });

    test('push once', () => {
        myStack.push('peach');
        expect(myStack.peek()).toBe('peach');
        expect(myStack.length).toBe(2);
    });

    test('pop twice again', () => {
        myStack.pop();
        myStack.pop();
        expect(myStack.peek()).toBe(undefined);
        expect(myStack.length).toBe(0);
        expect(myStack.isEmpty()).toBe(true);
    });
});