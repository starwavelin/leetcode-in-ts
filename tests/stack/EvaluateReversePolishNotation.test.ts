import { evalRPN } from '../../src/stack/EvaluateReversePolishNotation';

describe('Test EvaluateReversePolishNotation', () => {
    test('Test - Ex 1', () => {
        const input = ['4', '13', '5', '/', '+'];
        expect(evalRPN(input)).toBe(6);
    });

    test('Test - Ex 2', () => {
        const input = ['9', '3', '+', '-11', '*'];
        expect(evalRPN(input)).toBe(-132);
    });

    test('Test - Ex 3', () => {
        const input = ['10', '6', '9', '3', '+', '-11', '*', '/', '*'];
        expect(evalRPN(input)).toBe(0);
    });

    test('Test - Ex 4', () => {
        const input = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
        expect(evalRPN(input)).toBe(22);
    });
});
