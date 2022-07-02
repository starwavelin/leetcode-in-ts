import { removeOutermostParentheses } from '../../src/stack/RemoveOutermostParentheses';

describe('Test RemoveOutermostParentheses', () => {
    test('Test - Ex 1', () => {
        const s = "(()())(())"
        expect(removeOutermostParentheses(s)).toBe('()()()');
    });

    test('Test - Ex 2', () => {
        const s = "(()())(())(()(()))"
        expect(removeOutermostParentheses(s)).toBe('()()()()(())');
    });
})