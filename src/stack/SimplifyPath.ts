/***************************************************************************
* Problem No. : 71
* Problem Name: Simplify Path
* Date        : June 16, 2022
* Author      :	@codingbro
*
* meta        : tag-stack
***************************************************************************/

export function simplifyPath(path: string): string {
    const arr: string[] = path.split('/');
    const stack = [];
    for (const el of arr) {
        if (el !== '.' && el !== '..' && el !== '') { // 进栈条件
            stack.push(el);
        } else if (!!stack.length && el === '..') { // 出栈条件
            stack.pop();
        }
    }
    return '/' + stack.join('/');
}