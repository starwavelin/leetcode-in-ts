import { Queue } from '../../src/queue/Queue';

describe('Test Queue class\'s behavior', () => {

    const myQueue = new Queue(['apple', 'pear']);

    test('length is 2', () => {
        expect(myQueue.length).toBe(2);
    });

    test('peek is apple', () => {
        expect(myQueue.peek()).toBe('apple');
    });

    test('dequeue once', () => {
        expect(myQueue.dequeue()).toBe('apple');
        expect(myQueue.peek()).toBe('pear');
    });

    test('enqueue once', () => {
        myQueue.enqueue('peach');
        expect(myQueue.peek()).toBe('pear');
        expect(myQueue.length).toBe(2);
    });

    test('dequeue twice again', () => {
        myQueue.dequeue();
        myQueue.dequeue();
        expect(myQueue.peek()).toBe(undefined);
        expect(myQueue.length).toBe(0);
        expect(myQueue.isEmpty()).toBe(true);
    });
});