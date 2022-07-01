import { isPalindrome } from '../../../src/string/two_pointers/ValidPalindrome'

describe('Test ValidPalindrome', () => {

    test('Test a string - "A man, a plan, a canal: Panama"', () => {
        const s = "A man, a plan, a canal: Panama";
        expect(isPalindrome(s)).toBe(true);
    });

    test('Test a string - Ex 2', () => {
        const s = "race a car";
        expect(isPalindrome(s)).toBe(false);
    });

    test('Test a string - Ex 3', () => {
        const s = " ";
        expect(isPalindrome(s)).toBe(true);
    });
});