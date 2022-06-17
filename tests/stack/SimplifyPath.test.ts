import { simplifyPath } from '../../src/stack/SimplifyPath';

describe('Test simplifyPath function', () => {

    test('/home/ should become /home', () => {
        expect(simplifyPath('/home/')).toBe('/home');
    });

    test('/../ should become /', () => {
        expect(simplifyPath('/../')).toBe('/');
    });

    test('/home//foo should become /home/foo', () => {
        expect(simplifyPath('/home//foo')).toBe('/home/foo');
    });

    test('/a/./b/../../c/ should become /c', () => {
        expect(simplifyPath('/a/./b/../../c/')).toBe('/c');
    });

    test('/a/./b/../c/ should become /a/c', () => {
        expect(simplifyPath('/a/./b/../c/')).toBe('/a/c');
    });

    test('/x/./y/z should become /x/y/z', () => {
        expect(simplifyPath('/x/./y/z')).toBe('/x/y/z');
    });
});